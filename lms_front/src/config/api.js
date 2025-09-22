// API Configuration for NOVYA LMS
const API_CONFIG = {
  // Base URL for the Django backend
  BASE_URL: 'http://localhost:8000',
  
  // API Endpoints
  ENDPOINTS: {
    // Authentication
    LOGIN: '/api/auth/login/',
    REGISTER: '/api/auth/register/',
    LOGOUT: '/api/auth/logout/',
    REFRESH_TOKEN: '/api/auth/token/refresh/',
    PROFILE: '/api/auth/profile/',
    UPDATE_PROFILE: '/api/auth/profile/update/',
    DASHBOARD: '/api/auth/dashboard/',
    CHANGE_PASSWORD: '/api/auth/change-password/',
    REQUEST_PASSWORD_RESET: '/api/auth/request-password-reset/',
    CONFIRM_PASSWORD_RESET: '/api/auth/confirm-password-reset/',
    
    // Users
    STUDENTS: '/api/auth/students/',
    PARENTS: '/api/auth/parents/',
    TEACHERS: '/api/auth/teachers/',
    
    // Courses
    COURSES: '/api/courses/',
    SUBJECTS: '/api/courses/subjects/',
    MY_COURSES: '/api/courses/my-courses/',
    MY_PROGRESS: '/api/courses/my-progress/',
    ENROLL_COURSE: (id) => `/api/courses/${id}/enroll/`,
    COURSE_PROGRESS: (id) => `/api/courses/${id}/progress/`,
    COURSE_CHAPTERS: (id) => `/api/courses/${id}/chapters/`,
    CHAPTER_LESSONS: (id) => `/api/courses/chapters/${id}/lessons/`,
    LESSON_PROGRESS: (id) => `/api/courses/lessons/${id}/progress/`,
    COURSE_MATERIALS: (id) => `/api/courses/${id}/materials/`,
    
    // Quizzes
    QUIZZES: '/api/quizzes/',
    QUIZ_QUESTIONS: (id) => `/api/quizzes/${id}/questions/`,
    START_QUIZ: (id) => `/api/quizzes/${id}/start/`,
    SUBMIT_QUIZ: (id) => `/api/quizzes/${id}/submit/`,
    QUIZ_ATTEMPTS: '/api/quizzes/attempts/',
    MY_ATTEMPTS: '/api/quizzes/my-attempts/',
    QUIZ_STATS: '/api/quizzes/stats/',
    AVAILABLE_QUIZZES: '/api/quizzes/available/',
    
    // Progress
    ASSIGNMENTS: '/api/progress/assignments/',
    MY_ASSIGNMENTS: '/api/progress/my-assignments/',
    SUBMIT_ASSIGNMENT: (id) => `/api/progress/assignments/${id}/submit/`,
    ATTENDANCE: '/api/progress/attendance/',
    ATTENDANCE_SUMMARY: '/api/progress/attendance/summary/',
    GRADES: '/api/progress/grades/',
    MY_GRADES: '/api/progress/my-grades/',
    STUDY_PLANS: '/api/progress/study-plans/',
    STUDY_PLAN_ITEMS: (id) => `/api/progress/study-plans/${id}/items/`,
    COMPLETE_STUDY_ITEM: (id) => `/api/progress/study-plan-items/${id}/complete/`,
    STUDENT_PROGRESS: '/api/progress/student-progress/',
    MY_PROGRESS: '/api/progress/my-progress/',
    ACHIEVEMENTS: '/api/progress/achievements/',
    MY_ACHIEVEMENTS: '/api/progress/my-achievements/',
    PROGRESS_DASHBOARD: '/api/progress/dashboard/',
    PARENT_DASHBOARD: '/api/progress/parent-dashboard/',
    
    // Notifications
    NOTIFICATIONS: '/api/notifications/',
    MARK_NOTIFICATION_READ: (id) => `/api/notifications/${id}/read/`,
    MARK_ALL_READ: '/api/notifications/mark-all-read/',
    UNREAD_COUNT: '/api/notifications/unread-count/',
    EVENTS: '/api/notifications/events/',
    MY_EVENTS: '/api/notifications/my-events/',
    REGISTER_EVENT: (id) => `/api/notifications/events/${id}/register/`,
    ANNOUNCEMENTS: '/api/notifications/announcements/',
    MESSAGES: '/api/notifications/messages/',
    CONVERSATIONS: '/api/notifications/conversations/',
    FEEDBACK: '/api/notifications/feedback/',
    MY_FEEDBACK: '/api/notifications/my-feedback/',
    NOTIFICATION_DASHBOARD: '/api/notifications/dashboard/',
  }
};

// Helper function to get full URL
export const getApiUrl = (endpoint) => {
  if (typeof endpoint === 'function') {
    return API_CONFIG.BASE_URL + endpoint;
  }
  return API_CONFIG.BASE_URL + endpoint;
};

// Helper function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

// Helper function to handle API responses
export const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API request helper
export const apiRequest = async (endpoint, options = {}) => {
  const url = getApiUrl(endpoint);
  const config = {
    headers: getAuthHeaders(),
    ...options,
  };
  
  const response = await fetch(url, config);
  return handleApiResponse(response);
};

export default API_CONFIG;
