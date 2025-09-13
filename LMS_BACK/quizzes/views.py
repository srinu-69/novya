from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.db.models import Q, Avg, Count, Sum
from django.utils import timezone
from datetime import datetime, timedelta

from .models import (
    Quiz, Question, QuestionOption, QuizAttempt, QuizAnswer,
    QuizResult, QuizAnalytics
)
from .serializers import (
    QuizSerializer, QuizListSerializer, QuestionSerializer, QuestionOptionSerializer,
    QuizAttemptSerializer, QuizAnswerSerializer, QuizResultSerializer,
    QuizSubmissionSerializer, QuizAttemptSummarySerializer, StudentQuizStatsSerializer
)


class QuizListCreateView(generics.ListCreateAPIView):
    """
    List and create quizzes
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizListSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        grade = self.request.query_params.get('grade')
        subject_id = self.request.query_params.get('subject')
        difficulty = self.request.query_params.get('difficulty')
        
        if grade:
            queryset = queryset.filter(grade=grade)
        if subject_id:
            queryset = queryset.filter(subject_id=subject_id)
        if difficulty:
            queryset = queryset.filter(difficulty=difficulty)
        
        return queryset


class QuizDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a quiz
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [permissions.IsAuthenticated]


class QuestionListCreateView(generics.ListCreateAPIView):
    """
    List and create questions for a quiz
    """
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        quiz_id = self.kwargs['quiz_id']
        return Question.objects.filter(quiz_id=quiz_id, is_active=True)
    
    def perform_create(self, serializer):
        quiz_id = self.kwargs['quiz_id']
        serializer.save(quiz_id=quiz_id)


class QuestionDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a question
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]


class StartQuizView(generics.CreateAPIView):
    """
    Start a quiz attempt
    """
    serializer_class = QuizAttemptSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        quiz_id = self.kwargs['pk']
        quiz = Quiz.objects.get(pk=quiz_id)
        
        # Check if user already has an active attempt
        existing_attempt = QuizAttempt.objects.filter(
            student=self.request.user,
            quiz=quiz,
            is_completed=False
        ).first()
        
        if existing_attempt:
            raise serializers.ValidationError("You already have an active attempt for this quiz")
        
        serializer.save(
            student=self.request.user,
            quiz=quiz,
            started_at=timezone.now()
        )


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def submit_quiz(request, pk):
    """
    Submit quiz answers
    """
    serializer = QuizSubmissionSerializer(data=request.data)
    
    if serializer.is_valid():
        quiz_id = pk
        answers_data = serializer.validated_data['answers']
        
        try:
            # Get the active attempt
            attempt = QuizAttempt.objects.get(
                student=request.user,
                quiz_id=quiz_id,
                is_completed=False
            )
            
            # Process answers
            total_score = 0
            correct_answers = 0
            
            for answer_data in answers_data:
                question_id = answer_data['question_id']
                question = Question.objects.get(id=question_id)
                
                # Create or update answer
                answer, created = QuizAnswer.objects.get_or_create(
                    attempt=attempt,
                    question=question
                )
                
                # Check if it's a multiple choice question
                if question.question_type == 'multiple_choice':
                    selected_option_id = answer_data.get('selected_option_id')
                    if selected_option_id:
                        selected_option = QuestionOption.objects.get(id=selected_option_id)
                        answer.selected_option = selected_option
                        answer.is_correct = selected_option.is_correct
                        answer.points_earned = question.points if selected_option.is_correct else 0
                else:
                    # Handle other question types
                    answer_text = answer_data.get('answer_text', '')
                    answer.answer_text = answer_text
                    # For now, assume text answers are correct (you can implement proper checking)
                    answer.is_correct = True
                    answer.points_earned = question.points
                
                answer.save()
                
                if answer.is_correct:
                    correct_answers += 1
                    total_score += answer.points_earned
            
            # Calculate final score
            total_questions = attempt.quiz.questions.filter(is_active=True).count()
            score_percentage = (correct_answers / total_questions * 100) if total_questions > 0 else 0
            
            # Update attempt
            attempt.score = score_percentage
            attempt.is_completed = True
            attempt.completed_at = timezone.now()
            attempt.is_passed = score_percentage >= attempt.quiz.passing_score
            attempt.time_taken_minutes = (timezone.now() - attempt.started_at).total_seconds() / 60
            attempt.save()
            
            # Create quiz result
            QuizResult.objects.create(
                attempt=attempt,
                total_questions=total_questions,
                correct_answers=correct_answers,
                wrong_answers=total_questions - correct_answers,
                unanswered_questions=0,  # All questions were answered
                accuracy_percentage=score_percentage,
                time_per_question_seconds=attempt.time_taken_minutes * 60 / total_questions if total_questions > 0 else 0
            )
            
            # Update analytics
            analytics, created = QuizAnalytics.objects.get_or_create(quiz=attempt.quiz)
            analytics.total_attempts += 1
            analytics.average_score = (analytics.average_score * (analytics.total_attempts - 1) + score_percentage) / analytics.total_attempts
            analytics.pass_rate = QuizAttempt.objects.filter(quiz=attempt.quiz, is_passed=True).count() / analytics.total_attempts * 100
            analytics.average_time_minutes = QuizAttempt.objects.filter(quiz=attempt.quiz).aggregate(avg_time=Avg('time_taken_minutes'))['avg_time'] or 0
            analytics.save()
            
            return Response({
                'message': 'Quiz submitted successfully',
                'score': score_percentage,
                'is_passed': attempt.is_passed,
                'correct_answers': correct_answers,
                'total_questions': total_questions,
                'time_taken': attempt.time_taken_minutes
            })
        
        except QuizAttempt.DoesNotExist:
            return Response(
                {'error': 'No active attempt found for this quiz'},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuizAttemptListView(generics.ListAPIView):
    """
    List quiz attempts
    """
    serializer_class = QuizAttemptSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return QuizAttempt.objects.filter(student=self.request.user).order_by('-started_at')


class QuizAttemptDetailView(generics.RetrieveAPIView):
    """
    Retrieve quiz attempt details
    """
    serializer_class = QuizAttemptSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return QuizAttempt.objects.filter(student=self.request.user)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_quiz_result(request, pk):
    """
    Get detailed quiz result
    """
    try:
        attempt = QuizAttempt.objects.get(pk=pk, student=request.user)
        result = QuizResult.objects.get(attempt=attempt)
        
        return Response({
            'attempt': QuizAttemptSerializer(attempt).data,
            'result': QuizResultSerializer(result).data,
            'answers': QuizAnswerSerializer(attempt.answers.all(), many=True).data
        })
    
    except QuizAttempt.DoesNotExist:
        return Response(
            {'error': 'Quiz attempt not found'},
            status=status.HTTP_404_NOT_FOUND
        )


class StudentQuizAttemptsView(generics.ListAPIView):
    """
    Get student's quiz attempts
    """
    serializer_class = QuizAttemptSummarySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        attempts = QuizAttempt.objects.filter(
            student=self.request.user,
            is_completed=True
        ).order_by('-completed_at')
        
        attempt_data = []
        for attempt in attempts:
            attempt_data.append({
                'attempt_id': attempt.id,
                'quiz_title': attempt.quiz.title,
                'subject_name': attempt.quiz.subject.name,
                'score': attempt.score,
                'is_passed': attempt.is_passed,
                'time_taken_minutes': attempt.time_taken_minutes,
                'completed_at': attempt.completed_at,
                'total_questions': attempt.quiz.questions.filter(is_active=True).count(),
                'correct_answers': attempt.answers.filter(is_correct=True).count()
            })
        
        return attempt_data


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_student_quiz_stats(request):
    """
    Get student quiz statistics
    """
    user = request.user
    
    attempts = QuizAttempt.objects.filter(student=user, is_completed=True)
    
    total_quizzes_taken = attempts.count()
    total_questions_attempted = sum([a.quiz.questions.filter(is_active=True).count() for a in attempts])
    total_correct_answers = sum([a.answers.filter(is_correct=True).count() for a in attempts])
    
    average_score = attempts.aggregate(avg_score=Avg('score'))['avg_score'] or 0
    best_score = attempts.aggregate(best_score=Avg('score'))['best_score'] or 0
    quizzes_passed = attempts.filter(is_passed=True).count()
    
    # Get total available quizzes
    total_quizzes_available = Quiz.objects.all().count()
    
    accuracy_percentage = (total_correct_answers / total_questions_attempted * 100) if total_questions_attempted > 0 else 0
    
    stats = {
        'total_quizzes_taken': total_quizzes_taken,
        'average_score': average_score,
        'total_correct_answers': total_correct_answers,
        'total_questions_attempted': total_questions_attempted,
        'accuracy_percentage': accuracy_percentage,
        'best_score': best_score,
        'quizzes_passed': quizzes_passed,
        'total_quizzes_available': total_quizzes_available
    }
    
    return Response(stats)


class AvailableQuizzesView(generics.ListAPIView):
    """
    Get available quizzes for student
    """
    serializer_class = QuizListSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        # Get quizzes that student hasn't completed or has completed but can retake
        completed_quiz_ids = QuizAttempt.objects.filter(
            student=self.request.user,
            is_completed=True
        ).values_list('quiz_id', flat=True)
        
        # For now, allow retaking all quizzes
        return Quiz.objects.all()
