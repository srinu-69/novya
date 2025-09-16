// Integration Test Utilities for NOVYA LMS Frontend-Backend

import { apiRequest, getApiUrl } from '../config/api';
import { USER_ROLES, API_STATUS } from '../config/schema';

// Test configuration
const TEST_CONFIG = {
  BASE_URL: 'http://localhost:8000',
  TEST_USER: {
    username: 'teststudent',
    password: 'testpass123',
    email: 'test@example.com'
  }
};

// Test results storage
let testResults = {
  passed: 0,
  failed: 0,
  total: 0,
  details: []
};

// Helper function to log test results
const logTestResult = (testName, passed, message = '') => {
  testResults.total++;
  if (passed) {
    testResults.passed++;
    console.log(`✅ ${testName}: PASSED ${message}`);
  } else {
    testResults.failed++;
    console.log(`❌ ${testName}: FAILED ${message}`);
  }
  testResults.details.push({ testName, passed, message });
};

// Test API connectivity
export const testApiConnectivity = async () => {
  try {
    const response = await fetch(getApiUrl('/api/auth/login/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'test' })
    });
    
    // We expect a 400 or 401 error, which means the API is reachable
    const isReachable = response.status === 400 || response.status === 401 || response.status === 405;
    logTestResult('API Connectivity', isReachable, `Status: ${response.status}`);
    return isReachable;
  } catch (error) {
    logTestResult('API Connectivity', false, `Error: ${error.message}`);
    return false;
  }
};

// Test authentication endpoints
export const testAuthentication = async () => {
  console.log('\n🔐 Testing Authentication Endpoints...');
  
  // Test login endpoint
  try {
    const response = await fetch(getApiUrl('/api/auth/login/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'invalid_user',
        password: 'invalid_pass'
      })
    });
    
    const data = await response.json();
    const hasErrorResponse = response.status === 400 || response.status === 401;
    logTestResult('Login Endpoint', hasErrorResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Login Endpoint', false, `Error: ${error.message}`);
  }

  // Test register endpoint
  try {
    const response = await fetch(getApiUrl('/api/auth/register/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'testuser',
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        phone: '9876543210',
        role: 'student',
        password: 'testpass123'
      })
    });
    
    const hasResponse = response.status === 201 || response.status === 400;
    logTestResult('Register Endpoint', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Register Endpoint', false, `Error: ${error.message}`);
  }
};

// Test course endpoints
export const testCourseEndpoints = async () => {
  console.log('\n📚 Testing Course Endpoints...');
  
  try {
    const response = await fetch(getApiUrl('/api/courses/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Courses List', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Courses List', false, `Error: ${error.message}`);
  }

  try {
    const response = await fetch(getApiUrl('/api/courses/subjects/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Subjects List', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Subjects List', false, `Error: ${error.message}`);
  }
};

// Test quiz endpoints
export const testQuizEndpoints = async () => {
  console.log('\n🧠 Testing Quiz Endpoints...');
  
  try {
    const response = await fetch(getApiUrl('/api/quizzes/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Quizzes List', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Quizzes List', false, `Error: ${error.message}`);
  }

  try {
    const response = await fetch(getApiUrl('/api/quizzes/available/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Available Quizzes', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Available Quizzes', false, `Error: ${error.message}`);
  }
};

// Test progress endpoints
export const testProgressEndpoints = async () => {
  console.log('\n📊 Testing Progress Endpoints...');
  
  try {
    const response = await fetch(getApiUrl('/api/progress/dashboard/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Student Dashboard', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Student Dashboard', false, `Error: ${error.message}`);
  }

  try {
    const response = await fetch(getApiUrl('/api/progress/parent-dashboard/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Parent Dashboard', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Parent Dashboard', false, `Error: ${error.message}`);
  }
};

// Test notification endpoints
export const testNotificationEndpoints = async () => {
  console.log('\n🔔 Testing Notification Endpoints...');
  
  try {
    const response = await fetch(getApiUrl('/api/notifications/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Notifications List', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Notifications List', false, `Error: ${error.message}`);
  }

  try {
    const response = await fetch(getApiUrl('/api/notifications/events/'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const hasResponse = response.status === 200 || response.status === 401;
    logTestResult('Events List', hasResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Events List', false, `Error: ${error.message}`);
  }
};

// Test CORS configuration
export const testCORS = async () => {
  console.log('\n🌐 Testing CORS Configuration...');
  
  try {
    const response = await fetch(getApiUrl('/api/auth/login/'), {
      method: 'OPTIONS',
      headers: {
        'Origin': 'http://localhost:3000',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    });
    
    const hasCORSHeaders = response.headers.get('Access-Control-Allow-Origin') !== null;
    logTestResult('CORS Configuration', hasCORSHeaders, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('CORS Configuration', false, `Error: ${error.message}`);
  }
};

// Test JWT token handling
export const testJWTTokenHandling = async () => {
  console.log('\n🔑 Testing JWT Token Handling...');
  
  // Test with invalid token
  try {
    const response = await fetch(getApiUrl('/api/auth/profile/'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer invalid_token'
      }
    });
    
    const hasUnauthorizedResponse = response.status === 401;
    logTestResult('Invalid Token Handling', hasUnauthorizedResponse, `Status: ${response.status}`);
  } catch (error) {
    logTestResult('Invalid Token Handling', false, `Error: ${error.message}`);
  }
};

// Run all integration tests
export const runAllTests = async () => {
  console.log('🚀 Starting NOVYA LMS Frontend-Backend Integration Tests...\n');
  
  // Reset test results
  testResults = { passed: 0, failed: 0, total: 0, details: [] };
  
  // Run all tests
  await testApiConnectivity();
  await testAuthentication();
  await testCourseEndpoints();
  await testQuizEndpoints();
  await testProgressEndpoints();
  await testNotificationEndpoints();
  await testCORS();
  await testJWTTokenHandling();
  
  // Print summary
  console.log('\n📋 Test Summary:');
  console.log(`Total Tests: ${testResults.total}`);
  console.log(`Passed: ${testResults.passed}`);
  console.log(`Failed: ${testResults.failed}`);
  console.log(`Success Rate: ${((testResults.passed / testResults.total) * 100).toFixed(1)}%`);
  
  if (testResults.failed > 0) {
    console.log('\n❌ Failed Tests:');
    testResults.details
      .filter(test => !test.passed)
      .forEach(test => console.log(`  - ${test.testName}: ${test.message}`));
  }
  
  return testResults;
};

// Test specific endpoint with authentication
export const testAuthenticatedEndpoint = async (endpoint, method = 'GET', data = null) => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No access token found');
    }
    
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    const response = await fetch(getApiUrl(endpoint), options);
    const responseData = await response.json();
    
    return {
      success: response.ok,
      status: response.status,
      data: responseData
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Export test utilities
export default {
  runAllTests,
  testApiConnectivity,
  testAuthentication,
  testCourseEndpoints,
  testQuizEndpoints,
  testProgressEndpoints,
  testNotificationEndpoints,
  testCORS,
  testJWTTokenHandling,
  testAuthenticatedEndpoint,
  TEST_CONFIG
};
