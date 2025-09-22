// Schema configurations for NOVYA LMS Frontend

// User Role Schema
export const USER_ROLES = {
  STUDENT: 'student',
  PARENT: 'parent',
  TEACHER: 'teacher',
  ADMIN: 'admin'
};

// User Role Display Names
export const USER_ROLE_DISPLAY = {
  [USER_ROLES.STUDENT]: 'Student',
  [USER_ROLES.PARENT]: 'Parent',
  [USER_ROLES.TEACHER]: 'Teacher',
  [USER_ROLES.ADMIN]: 'Administrator'
};

// Course Subject Schema
export const SUBJECTS = {
  MATHEMATICS: 'mathematics',
  SCIENCE: 'science',
  ENGLISH: 'english',
  SOCIAL_STUDIES: 'social_studies',
  COMPUTER_SCIENCE: 'computer_science',
  PHYSICS: 'physics',
  CHEMISTRY: 'chemistry',
  BIOLOGY: 'biology',
  HISTORY: 'history',
  GEOGRAPHY: 'geography',
  ECONOMICS: 'economics',
  POLITICAL_SCIENCE: 'political_science'
};

// Subject Display Names
export const SUBJECT_DISPLAY = {
  [SUBJECTS.MATHEMATICS]: 'Mathematics',
  [SUBJECTS.SCIENCE]: 'Science',
  [SUBJECTS.ENGLISH]: 'English',
  [SUBJECTS.SOCIAL_STUDIES]: 'Social Studies',
  [SUBJECTS.COMPUTER_SCIENCE]: 'Computer Science',
  [SUBJECTS.PHYSICS]: 'Physics',
  [SUBJECTS.CHEMISTRY]: 'Chemistry',
  [SUBJECTS.BIOLOGY]: 'Biology',
  [SUBJECTS.HISTORY]: 'History',
  [SUBJECTS.GEOGRAPHY]: 'Geography',
  [SUBJECTS.ECONOMICS]: 'Economics',
  [SUBJECTS.POLITICAL_SCIENCE]: 'Political Science'
};

// Class/Grade Schema
export const CLASSES = {
  CLASS_7: '7',
  CLASS_8: '8',
  CLASS_9: '9',
  CLASS_10: '10'
};

// Class Display Names
export const CLASS_DISPLAY = {
  [CLASSES.CLASS_7]: 'Class 7',
  [CLASSES.CLASS_8]: 'Class 8',
  [CLASSES.CLASS_9]: 'Class 9',
  [CLASSES.CLASS_10]: 'Class 10'
};

// Quiz Question Types
export const QUESTION_TYPES = {
  MULTIPLE_CHOICE: 'multiple_choice',
  TRUE_FALSE: 'true_false',
  FILL_IN_BLANK: 'fill_in_blank',
  SHORT_ANSWER: 'short_answer',
  ESSAY: 'essay'
};

// Question Type Display Names
export const QUESTION_TYPE_DISPLAY = {
  [QUESTION_TYPES.MULTIPLE_CHOICE]: 'Multiple Choice',
  [QUESTION_TYPES.TRUE_FALSE]: 'True/False',
  [QUESTION_TYPES.FILL_IN_BLANK]: 'Fill in the Blank',
  [QUESTION_TYPES.SHORT_ANSWER]: 'Short Answer',
  [QUESTION_TYPES.ESSAY]: 'Essay'
};

// Assignment Types
export const ASSIGNMENT_TYPES = {
  HOMEWORK: 'homework',
  PROJECT: 'project',
  QUIZ: 'quiz',
  EXAM: 'exam',
  ESSAY: 'essay',
  PRESENTATION: 'presentation'
};

// Assignment Type Display Names
export const ASSIGNMENT_TYPE_DISPLAY = {
  [ASSIGNMENT_TYPES.HOMEWORK]: 'Homework',
  [ASSIGNMENT_TYPES.PROJECT]: 'Project',
  [ASSIGNMENT_TYPES.QUIZ]: 'Quiz',
  [ASSIGNMENT_TYPES.EXAM]: 'Exam',
  [ASSIGNMENT_TYPES.ESSAY]: 'Essay',
  [ASSIGNMENT_TYPES.PRESENTATION]: 'Presentation'
};

// Grade Schema
export const GRADES = {
  A_PLUS: 'A+',
  A: 'A',
  B_PLUS: 'B+',
  B: 'B',
  C_PLUS: 'C+',
  C: 'C',
  D: 'D',
  F: 'F'
};

// Grade Point Values
export const GRADE_POINTS = {
  [GRADES.A_PLUS]: 4.0,
  [GRADES.A]: 3.7,
  [GRADES.B_PLUS]: 3.3,
  [GRADES.B]: 3.0,
  [GRADES.C_PLUS]: 2.7,
  [GRADES.C]: 2.3,
  [GRADES.D]: 2.0,
  [GRADES.F]: 0.0
};

// Notification Types
export const NOTIFICATION_TYPES = {
  ASSIGNMENT_DUE: 'assignment_due',
  QUIZ_AVAILABLE: 'quiz_available',
  GRADE_POSTED: 'grade_posted',
  EVENT_REMINDER: 'event_reminder',
  ANNOUNCEMENT: 'announcement',
  MESSAGE: 'message',
  SYSTEM: 'system'
};

// Notification Type Display Names
export const NOTIFICATION_TYPE_DISPLAY = {
  [NOTIFICATION_TYPES.ASSIGNMENT_DUE]: 'Assignment Due',
  [NOTIFICATION_TYPES.QUIZ_AVAILABLE]: 'Quiz Available',
  [NOTIFICATION_TYPES.GRADE_POSTED]: 'Grade Posted',
  [NOTIFICATION_TYPES.EVENT_REMINDER]: 'Event Reminder',
  [NOTIFICATION_TYPES.ANNOUNCEMENT]: 'Announcement',
  [NOTIFICATION_TYPES.MESSAGE]: 'Message',
  [NOTIFICATION_TYPES.SYSTEM]: 'System Notification'
};

// Event Types
export const EVENT_TYPES = {
  WORKSHOP: 'workshop',
  SEMINAR: 'seminar',
  COMPETITION: 'competition',
  EXAM: 'exam',
  HOLIDAY: 'holiday',
  MEETING: 'meeting',
  CELEBRATION: 'celebration'
};

// Event Type Display Names
export const EVENT_TYPE_DISPLAY = {
  [EVENT_TYPES.WORKSHOP]: 'Workshop',
  [EVENT_TYPES.SEMINAR]: 'Seminar',
  [EVENT_TYPES.COMPETITION]: 'Competition',
  [EVENT_TYPES.EXAM]: 'Exam',
  [EVENT_TYPES.HOLIDAY]: 'Holiday',
  [EVENT_TYPES.MEETING]: 'Meeting',
  [EVENT_TYPES.CELEBRATION]: 'Celebration'
};

// Study Plan Status
export const STUDY_PLAN_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  OVERDUE: 'overdue'
};

// Study Plan Status Display Names
export const STUDY_PLAN_STATUS_DISPLAY = {
  [STUDY_PLAN_STATUS.PENDING]: 'Pending',
  [STUDY_PLAN_STATUS.IN_PROGRESS]: 'In Progress',
  [STUDY_PLAN_STATUS.COMPLETED]: 'Completed',
  [STUDY_PLAN_STATUS.OVERDUE]: 'Overdue'
};

// Achievement Types
export const ACHIEVEMENT_TYPES = {
  ACADEMIC: 'academic',
  PARTICIPATION: 'participation',
  LEADERSHIP: 'leadership',
  CREATIVITY: 'creativity',
  SPORTS: 'sports',
  COMMUNITY: 'community'
};

// Achievement Type Display Names
export const ACHIEVEMENT_TYPE_DISPLAY = {
  [ACHIEVEMENT_TYPES.ACADEMIC]: 'Academic Excellence',
  [ACHIEVEMENT_TYPES.PARTICIPATION]: 'Active Participation',
  [ACHIEVEMENT_TYPES.LEADERSHIP]: 'Leadership',
  [ACHIEVEMENT_TYPES.CREATIVITY]: 'Creativity',
  [ACHIEVEMENT_TYPES.SPORTS]: 'Sports',
  [ACHIEVEMENT_TYPES.COMMUNITY]: 'Community Service'
};

// Form Validation Schemas
export const VALIDATION_SCHEMAS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[6-9][0-9]{9}$/,
  USERNAME: /^[a-zA-Z0-9_]{4,20}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  NAME: /^[a-zA-Z\s]+$/
};

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_TOKEN: 'userToken',
  USER_ROLE: 'userRole',
  USER_DATA: 'userData',
  THEME: 'theme',
  LANGUAGE: 'language'
};

// API Response Status Codes
export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// Pagination Defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1
};

// Date/Time Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  API: 'YYYY-MM-DD',
  DATETIME: 'MMM DD, YYYY HH:mm',
  TIME: 'HH:mm'
};

// File Upload Limits
export const FILE_LIMITS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  MAX_FILES: 5
};

// Chart Colors
export const CHART_COLORS = {
  PRIMARY: '#2D5D7B',
  SECONDARY: '#A62D69',
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40'
};

// Theme Configuration
export const THEME_CONFIG = {
  LIGHT: {
    primary: '#2D5D7B',
    secondary: '#A62D69',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529'
  },
  DARK: {
    primary: '#4a7c9a',
    secondary: '#c73d7a',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff'
  }
};

export default {
  USER_ROLES,
  USER_ROLE_DISPLAY,
  SUBJECTS,
  SUBJECT_DISPLAY,
  CLASSES,
  CLASS_DISPLAY,
  QUESTION_TYPES,
  QUESTION_TYPE_DISPLAY,
  ASSIGNMENT_TYPES,
  ASSIGNMENT_TYPE_DISPLAY,
  GRADES,
  GRADE_POINTS,
  NOTIFICATION_TYPES,
  NOTIFICATION_TYPE_DISPLAY,
  EVENT_TYPES,
  EVENT_TYPE_DISPLAY,
  STUDY_PLAN_STATUS,
  STUDY_PLAN_STATUS_DISPLAY,
  ACHIEVEMENT_TYPES,
  ACHIEVEMENT_TYPE_DISPLAY,
  VALIDATION_SCHEMAS,
  STORAGE_KEYS,
  API_STATUS,
  PAGINATION,
  DATE_FORMATS,
  FILE_LIMITS,
  CHART_COLORS,
  THEME_CONFIG
};
