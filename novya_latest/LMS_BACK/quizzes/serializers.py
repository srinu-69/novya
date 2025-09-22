from rest_framework import serializers
from .models import (
    Quiz, Question, QuestionOption, QuizAttempt, QuizAnswer,
    QuizResult, QuizAnalytics
)
from courses.serializers import SubjectSerializer
from authentication.serializers import UserSerializer


class QuestionOptionSerializer(serializers.ModelSerializer):
    """
    Serializer for QuestionOption model
    """
    class Meta:
        model = QuestionOption
        fields = ['id', 'option_text', 'is_correct', 'order']
        read_only_fields = ['id']


class QuestionSerializer(serializers.ModelSerializer):
    """
    Serializer for Question model
    """
    options = QuestionOptionSerializer(many=True, read_only=True)
    
    class Meta:
        model = Question
        fields = [
            'id', 'question_text', 'question_type', 'explanation',
            'points', 'order', 'is_active', 'options', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class QuizSerializer(serializers.ModelSerializer):
    """
    Serializer for Quiz model
    """
    subject = SubjectSerializer(read_only=True)
    subject_id = serializers.IntegerField(write_only=True)
    created_by = UserSerializer(read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)
    questions_count = serializers.SerializerMethodField()
    attempts_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Quiz
        fields = [
            'id', 'title', 'description', 'subject', 'subject_id', 'grade',
            'difficulty', 'duration_minutes', 'total_questions', 'passing_score',
            'is_published', 'is_premium', 'created_by', 'questions',
            'questions_count', 'attempts_count', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_questions_count(self, obj):
        return obj.questions.filter(is_active=True).count()
    
    def get_attempts_count(self, obj):
        return obj.attempts.count()


class QuizListSerializer(serializers.ModelSerializer):
    """
    Simplified serializer for quiz listing
    """
    subject = SubjectSerializer(read_only=True)
    questions_count = serializers.SerializerMethodField()
    attempts_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Quiz
        fields = [
            'id', 'title', 'description', 'subject', 'grade',
            'difficulty', 'duration_minutes', 'passing_score',
            'is_premium', 'questions_count', 'attempts_count', 'created_at'
        ]
    
    def get_questions_count(self, obj):
        return obj.questions.filter(is_active=True).count()
    
    def get_attempts_count(self, obj):
        return obj.attempts.count()


class QuizAnswerSerializer(serializers.ModelSerializer):
    """
    Serializer for QuizAnswer model
    """
    question = QuestionSerializer(read_only=True)
    selected_option = QuestionOptionSerializer(read_only=True)
    
    class Meta:
        model = QuizAnswer
        fields = [
            'id', 'question', 'selected_option', 'answer_text',
            'is_correct', 'points_earned', 'answered_at'
        ]
        read_only_fields = ['id', 'answered_at']


class QuizAttemptSerializer(serializers.ModelSerializer):
    """
    Serializer for QuizAttempt model
    """
    student = UserSerializer(read_only=True)
    quiz = QuizSerializer(read_only=True)
    answers = QuizAnswerSerializer(many=True, read_only=True)
    student_id = serializers.IntegerField(write_only=True)
    quiz_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = QuizAttempt
        fields = [
            'id', 'student', 'student_id', 'quiz', 'quiz_id',
            'started_at', 'completed_at', 'time_taken_minutes',
            'score', 'is_completed', 'is_passed', 'answers'
        ]
        read_only_fields = ['id', 'started_at', 'completed_at']


class QuizResultSerializer(serializers.ModelSerializer):
    """
    Serializer for QuizResult model
    """
    attempt = QuizAttemptSerializer(read_only=True)
    
    class Meta:
        model = QuizResult
        fields = [
            'id', 'attempt', 'total_questions', 'correct_answers',
            'wrong_answers', 'unanswered_questions', 'accuracy_percentage',
            'time_per_question_seconds', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']


class QuizAnalyticsSerializer(serializers.ModelSerializer):
    """
    Serializer for QuizAnalytics model
    """
    quiz = QuizSerializer(read_only=True)
    
    class Meta:
        model = QuizAnalytics
        fields = [
            'id', 'quiz', 'total_attempts', 'average_score',
            'pass_rate', 'average_time_minutes', 'last_updated'
        ]
        read_only_fields = ['id', 'last_updated']


class QuizSubmissionSerializer(serializers.Serializer):
    """
    Serializer for quiz submission
    """
    quiz_id = serializers.IntegerField()
    answers = serializers.ListField(
        child=serializers.DictField()
    )
    
    def validate_answers(self, value):
        for answer in value:
            if 'question_id' not in answer:
                raise serializers.ValidationError("Each answer must have a question_id")
            if 'selected_option_id' not in answer and 'answer_text' not in answer:
                raise serializers.ValidationError("Each answer must have either selected_option_id or answer_text")
        return value


class QuizAttemptSummarySerializer(serializers.Serializer):
    """
    Serializer for quiz attempt summary
    """
    attempt_id = serializers.IntegerField()
    quiz_title = serializers.CharField()
    subject_name = serializers.CharField()
    score = serializers.FloatField()
    is_passed = serializers.BooleanField()
    time_taken_minutes = serializers.IntegerField()
    completed_at = serializers.DateTimeField()
    total_questions = serializers.IntegerField()
    correct_answers = serializers.IntegerField()


class StudentQuizStatsSerializer(serializers.Serializer):
    """
    Serializer for student quiz statistics
    """
    total_quizzes_taken = serializers.IntegerField()
    average_score = serializers.FloatField()
    total_correct_answers = serializers.IntegerField()
    total_questions_attempted = serializers.IntegerField()
    accuracy_percentage = serializers.FloatField()
    best_score = serializers.FloatField()
    quizzes_passed = serializers.IntegerField()
    total_quizzes_available = serializers.IntegerField()
