from django.db import models
from authentication.models import User, Student, StudentRegistration
from courses.models import Topic


class Quiz(models.Model):
    """
    Quiz model matching new schema
    """
    quiz_id = models.AutoField(primary_key=True)
    topic_id = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    questions_json = models.TextField()  # Changed from JSONField to TextField to match schema
    
    def __str__(self):
        return f"{self.title} - {self.topic_id.topic_name}"
    
    class Meta:
        db_table = 'quiz'
        verbose_name = 'Quiz'
        verbose_name_plural = 'Quizzes'


class QuizAttempt(models.Model):
    """
    Quiz Attempt model matching new schema
    """
    attempt_id = models.AutoField(primary_key=True)
    quiz_id = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    student_id = models.ForeignKey(User, on_delete=models.CASCADE)  # Updated to use User model
    attempted_at = models.DateTimeField(auto_now_add=True)
    score = models.FloatField(null=True, blank=True)
    answers_json = models.TextField(null=True, blank=True)  # Changed from JSONField to TextField to match schema
    
    def __str__(self):
        return f"{self.student_id.firstname} - {self.quiz_id.title}"
    
    class Meta:
        db_table = 'quiz_attempt'  # Updated table name to match schema
        verbose_name = 'Quiz Attempt'
        verbose_name_plural = 'Quiz Attempts'


class MockTest(models.Model):
    """
    Mock Test model matching new schema
    """
    test_id = models.AutoField(primary_key=True)
    topic_id = models.ForeignKey(Topic, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    duration = models.IntegerField()  # Duration in minutes
    
    def __str__(self):
        return f"{self.title} - {self.topic_id.topic_name}"
    
    class Meta:
        db_table = 'mock_test'  # Updated table name to match schema
        verbose_name = 'Mock Test'
        verbose_name_plural = 'Mock Tests'


# Legacy models for backward compatibility (if needed)
class Question(models.Model):
    """
    Question model for backward compatibility
    """
    QUESTION_TYPES = [
        ('multiple_choice', 'Multiple Choice'),
        ('true_false', 'True/False'),
        ('text', 'Text Answer'),
        ('numeric', 'Numeric Answer'),
    ]
    
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    question_type = models.CharField(max_length=20, choices=QUESTION_TYPES, default='multiple_choice')
    points = models.PositiveIntegerField(default=1)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.quiz.title} - Question {self.order}"
    
    class Meta:
        db_table = 'questions'
        ordering = ['order']
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'


class QuestionOption(models.Model):
    """
    Question Option model for backward compatibility
    """
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
    option_text = models.TextField()
    is_correct = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return f"{self.question.question_text[:50]}... - {self.option_text[:30]}..."
    
    class Meta:
        db_table = 'question_options'
        ordering = ['order']
        verbose_name = 'Question Option'
        verbose_name_plural = 'Question Options'


class QuizAnswer(models.Model):
    """
    Quiz Answer model for backward compatibility
    """
    attempt = models.ForeignKey(QuizAttempt, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    selected_option = models.ForeignKey(QuestionOption, on_delete=models.CASCADE, null=True, blank=True)
    answer_text = models.TextField(blank=True, null=True)
    is_correct = models.BooleanField(default=False)
    points_earned = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.attempt.student_id.firstname} - {self.question.question_text[:30]}..."
    
    class Meta:
        db_table = 'quiz_answers'
        unique_together = ['attempt', 'question']
        verbose_name = 'Quiz Answer'
        verbose_name_plural = 'Quiz Answers'


class QuizResult(models.Model):
    """
    Quiz Result model for detailed analytics
    """
    attempt = models.OneToOneField(QuizAttempt, on_delete=models.CASCADE, related_name='result')
    total_questions = models.PositiveIntegerField()
    correct_answers = models.PositiveIntegerField()
    wrong_answers = models.PositiveIntegerField()
    unanswered_questions = models.PositiveIntegerField(default=0)
    accuracy_percentage = models.FloatField()
    time_per_question_seconds = models.FloatField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.attempt.student_id.firstname} - {self.accuracy_percentage}%"
    
    class Meta:
        db_table = 'quiz_results'
        verbose_name = 'Quiz Result'
        verbose_name_plural = 'Quiz Results'


class QuizAnalytics(models.Model):
    """
    Quiz Analytics model for aggregate statistics
    """
    quiz = models.OneToOneField(Quiz, on_delete=models.CASCADE, related_name='analytics')
    total_attempts = models.PositiveIntegerField(default=0)
    average_score = models.FloatField(default=0)
    pass_rate = models.FloatField(default=0)
    average_time_minutes = models.FloatField(default=0)
    last_updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.quiz.title} - Analytics"
    
    class Meta:
        db_table = 'quiz_analytics'
        verbose_name = 'Quiz Analytics'
        verbose_name_plural = 'Quiz Analytics'