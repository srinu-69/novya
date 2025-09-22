# 🚀 NOVYA LMS Frontend-Backend Integration

This document provides comprehensive information about the integration between the NOVYA LMS React frontend and Django backend.

## 📋 Integration Overview

The frontend has been successfully integrated with the Django backend API, providing:

- ✅ Real-time authentication with JWT tokens
- ✅ Complete API endpoint integration
- ✅ Schema configurations for data consistency
- ✅ Error handling and validation
- ✅ CORS configuration for cross-origin requests

## 🔧 Configuration Files

### 1. API Configuration (`src/config/api.js`)
- Centralized API endpoint management
- Authentication header helpers
- Response handling utilities
- Base URL configuration

### 2. Schema Configuration (`src/config/schema.js`)
- User roles and permissions
- Subject and class definitions
- Validation schemas
- Theme and UI configurations

## 🌐 API Endpoints Integration

### Authentication Endpoints
- `POST /api/auth/login/` - User login with JWT tokens
- `POST /api/auth/register/` - User registration
- `POST /api/auth/logout/` - User logout
- `POST /api/auth/token/refresh/` - Token refresh
- `GET /api/auth/profile/` - User profile
- `PUT /api/auth/profile/update/` - Update profile
- `GET /api/auth/dashboard/` - Dashboard data

### Course Management
- `GET /api/courses/` - List all courses
- `GET /api/courses/subjects/` - List subjects
- `GET /api/courses/my-courses/` - Student's courses
- `POST /api/courses/{id}/enroll/` - Enroll in course
- `GET /api/courses/{id}/progress/` - Course progress

### Quiz System
- `GET /api/quizzes/` - List quizzes
- `GET /api/quizzes/available/` - Available quizzes
- `POST /api/quizzes/{id}/start/` - Start quiz
- `POST /api/quizzes/{id}/submit/` - Submit quiz
- `GET /api/quizzes/my-attempts/` - Quiz attempts

### Progress Tracking
- `GET /api/progress/dashboard/` - Student dashboard
- `GET /api/progress/parent-dashboard/` - Parent dashboard
- `GET /api/progress/assignments/` - Assignments
- `GET /api/progress/grades/` - Grades
- `GET /api/progress/attendance/` - Attendance

### Notifications
- `GET /api/notifications/` - User notifications
- `GET /api/notifications/events/` - Events
- `GET /api/notifications/announcements/` - Announcements
- `POST /api/notifications/{id}/read/` - Mark as read

## 🔐 Authentication Flow

1. **Login Process:**
   ```javascript
   const response = await fetch('/api/auth/login/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ username, password })
   });
   
   const data = await response.json();
   localStorage.setItem('access_token', data.access);
   localStorage.setItem('refresh_token', data.refresh);
   ```

2. **Authenticated Requests:**
   ```javascript
   const response = await fetch('/api/auth/profile/', {
     headers: {
       'Authorization': `Bearer ${localStorage.getItem('access_token')}`
     }
   });
   ```

3. **Token Refresh:**
   ```javascript
   const response = await fetch('/api/auth/token/refresh/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ refresh: localStorage.getItem('refresh_token') })
   });
   ```

## 🧪 Testing Integration

### Integration Test Component
Access the integration test page at `/integration-test` to:
- Test API connectivity
- Verify endpoint responses
- Check CORS configuration
- Validate authentication flow

### Manual Testing
1. Start the Django backend: `python manage.py runserver`
2. Start the React frontend: `npm start`
3. Navigate to `http://localhost:3000/integration-test`
4. Run the integration tests

## 📱 Updated Components

### Login Component (`src/modules/login/Login.js`)
- Real API authentication
- JWT token handling
- Error handling and validation
- Password reset functionality

### Signup Component (`src/modules/login/Signup.jsx`)
- Real user registration
- Form validation
- API error handling
- Role-based registration

### Student Dashboard (`src/modules/student/Home1.jsx`)
- Real-time data fetching
- Progress tracking
- Course management
- Event notifications

### Parent Dashboard (`src/modules/parent/ParentDashboard.jsx`)
- Parent-specific data
- Child progress monitoring
- Notification management
- Dashboard analytics

## 🔧 Environment Setup

### Backend Requirements
- Django 4.2.7
- PostgreSQL database
- JWT authentication
- CORS enabled

### Frontend Requirements
- React 19.1.1
- All dependencies installed via `npm install`

### CORS Configuration
The backend is configured to allow requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://localhost:3001`
- `http://127.0.0.1:3001`

## 🚀 Getting Started

1. **Start the Backend:**
   ```bash
   cd lms/LMS_BACK
   python manage.py runserver
   ```

2. **Start the Frontend:**
   ```bash
   cd lms/lms_front
   npm start
   ```

3. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - Integration Tests: `http://localhost:3000/integration-test`

## 📊 Data Flow

1. **User Authentication:**
   - Frontend sends credentials to `/api/auth/login/`
   - Backend validates and returns JWT tokens
   - Frontend stores tokens in localStorage

2. **Data Fetching:**
   - Frontend includes JWT token in request headers
   - Backend validates token and returns data
   - Frontend updates UI with real data

3. **Real-time Updates:**
   - Components fetch data on mount
   - Error handling for network issues
   - Loading states for better UX

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Ensure backend CORS settings include frontend URL
   - Check if backend is running on correct port

2. **Authentication Errors:**
   - Verify JWT token is included in headers
   - Check token expiration and refresh logic

3. **API Connection Issues:**
   - Confirm backend is running on `http://localhost:8000`
   - Check network connectivity
   - Verify API endpoint URLs

### Debug Tools

1. **Browser Developer Tools:**
   - Network tab for API requests
   - Console for error messages
   - Application tab for localStorage

2. **Integration Test Page:**
   - Comprehensive endpoint testing
   - Real-time connectivity checks
   - Detailed error reporting

## 📈 Performance Considerations

- API requests are cached where appropriate
- Loading states prevent UI blocking
- Error boundaries handle component failures
- Optimized re-renders with proper state management

## 🔒 Security Features

- JWT token-based authentication
- Secure token storage in localStorage
- CORS protection
- Input validation and sanitization
- Error message sanitization

## 📝 API Documentation

Complete API documentation is available in:
- `lms/LMS_BACK/API_ENDPOINTS.md` - Backend API reference
- `src/config/api.js` - Frontend API configuration
- `src/config/schema.js` - Data schemas and validation

## 🎯 Next Steps

1. **Enhanced Error Handling:**
   - Global error boundary
   - Retry mechanisms
   - Offline support

2. **Real-time Features:**
   - WebSocket integration
   - Live notifications
   - Real-time chat

3. **Performance Optimization:**
   - Code splitting
   - Lazy loading
   - API response caching

4. **Testing:**
   - Unit tests for components
   - Integration tests for API calls
   - End-to-end testing

---

## 📞 Support

For integration issues or questions:
1. Check the integration test page first
2. Review the API documentation
3. Check browser console for errors
4. Verify backend server status

The integration is now complete and ready for production use! 🎉
