from django.urls import path
from . import views

urlpatterns = [
    # Quizzes
    path('', views.QuizListCreateView.as_view(), name='quiz_list_create'),
    path('<int:pk>/', views.QuizDetailView.as_view(), name='quiz_detail'),
    path('<int:pk>/start/', views.StartQuizView.as_view(), name='start_quiz'),
    path('<int:pk>/submit/', views.submit_quiz, name='submit_quiz'),
    
    # Questions
    path('<int:quiz_id>/questions/', views.QuestionListCreateView.as_view(), name='question_list_create'),
    path('questions/<int:pk>/', views.QuestionDetailView.as_view(), name='question_detail'),
    
    # Quiz Attempts
    path('attempts/', views.QuizAttemptListView.as_view(), name='quiz_attempt_list'),
    path('attempts/<int:pk>/', views.QuizAttemptDetailView.as_view(), name='quiz_attempt_detail'),
    path('attempts/<int:pk>/result/', views.get_quiz_result, name='quiz_result'),
    
    # Student specific endpoints
    path('my-attempts/', views.StudentQuizAttemptsView.as_view(), name='student_quiz_attempts'),
    path('stats/', views.get_student_quiz_stats, name='student_quiz_stats'),
    path('available/', views.AvailableQuizzesView.as_view(), name='available_quizzes'),
]
