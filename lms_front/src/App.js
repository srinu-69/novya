
// import React from 'react';
// import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// // Home Modules
// import Navbar from './modules/home/Navbar';
// import HeroSection from './modules/home/HeroSection';
// import Features from './modules/home/Features';
// import Courses from './modules/home/Courses';
// import CourseDetail from './modules/home/CourseDetails';
// import HowItWorks from './modules/home/HowItWorks';
// import Pricing from './modules/home/Pricing';
// import Testimonials from './modules/home/Testimonials';
// import AppDownload from './modules/home/AppDownload';
// import Footer from './modules/home/Footer';
// import FAQs from './modules/home/FAQs';
// import Contact from './modules/home/Contact';
// import FreeDemo from './modules/home/FreeDemo';
// import ProfilePage from './modules/home/ProfilePage';
// import FloatingChatBot from './modules/home/FloatingChatBot';
// import AIDemo from './modules/home/AIDemo';

// // Auth Modules
// import Login from './modules/login/Login';
// import Signup from './modules/login/Signup';
// import ForgotPassword from './modules/login/ForgotPassword';

// // Student Modules
// import Navbarrr from './modules/student/Navbarrr';
// import Home1 from './modules/student/Home1';
// import Learn from './modules/student/Learn';
// import LessonPage from './modules/student/LessonPage';
// import Practice from './modules/student/Practice';
// import Career from './modules/student/Career';
// import Mentorship from './modules/student/Mentorship';
// import Chatbox from './modules/student/Chatbox';
// import PracticeGrade8 from './modules/student/PracticeGrade8';
// import PracticeGrade9 from './modules/student/PracticeGrade9';
// import PracticeGrade10 from './modules/student/PracticeGrade10';
// import Quizzes from './modules/student/Quizzes';
// import Recordings from './modules/student/Recordings';
// import EventRegistrationPage from './modules/student/EventRegistrationPage';

// // Parent Modules
// import ParentDashboard from './modules/parent/ParentDashboard';
// import Attendance from './modules/parent/Attendance';
// import ChildProfile from './modules/parent/ChildProfile';
// import Fees from './modules/parent/Fees';
// import HomeWork from './modules/parent/HomeWork';
// import MockTestReports from './modules/parent/MockTestReports';
// import Progress from './modules/parent/Progress';
// import StudyPlanner from './modules/parent/StudyPlanner';

// import './modules/parent/styles.css';

// function LandingPage() {
//   return (
//     <>
//       <HeroSection />
//       <Features />
//       <Courses />
//       <HowItWorks />
//       <Pricing />
//       <FloatingChatBot />
//       <Testimonials />
//       <AppDownload />
//     </>
//   );
// }

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('userToken');
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// const RoleRoute = ({ children, requiredRole }) => {
//   const userRole = localStorage.getItem('userRole');
//   if (!userRole) return <Navigate to="/login" replace />;
//   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// };

// function App() {
//   const location = useLocation();

//   const hideNavbarFooter = ['/login', '/signup', '/forgot-password', '/unauthorized'].includes(location.pathname);
//   const isStudentPage = [
//     '/learn',
//     '/practice',
//     '/career',
//     '/mentorship',
//     '/student/dashboard',
//     '/lesson',
//     '/events',
//     '/practice-grade8',
//     '/practice-grade9',
//     '/practice-grade10'
//   ].some(path => location.pathname.startsWith(path));
//   const isParentPage = location.pathname.startsWith('/parent');

//   return (
//     <div className="app-container">
//       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
//       {isStudentPage && <Navbarrr />}

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/course/:id" element={<CourseDetail />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/app-download" element={<AppDownload />} />
//         <Route path="/faqs" element={<FAQs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/free-demo" element={<FreeDemo />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/ai-demo" element={<AIDemo />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route
//           path="/unauthorized"
//           element={
//             <div className="unauthorized-page text-center mt-5">
//               <h1>401 - Unauthorized Access</h1>
//               <p>You don't have permission to access this page.</p>
//               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
//             </div>
//           }
//         />

//         {/* Student Routes */}
//         <Route path="/student/dashboard" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Home1 /></RoleRoute></ProtectedRoute>
//         } />

//         {/* Learn routes for all classes (7-10) and the general /learn route */}
//         <Route path="/learn" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/learn/class7" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/learn/class8" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/learn/class9" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/learn/class10" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
//         } />

//         {/* Lesson routes for all classes */}
//         <Route path="/lesson/:class/:subject/:chapterNumber" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><LessonPage /></RoleRoute></ProtectedRoute>
//         } />

//         <Route path="/practice" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Practice /></RoleRoute></ProtectedRoute>
//         } />
//         {/* New Practice Routes */}
//         <Route path="/practice-grade8" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeGrade8 /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/practice-grade9" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeGrade9 /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/practice-grade10" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeGrade10 /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/career" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Career /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/mentorship" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Mentorship /></RoleRoute></ProtectedRoute>
//         } />
//         {/* Route for Event Registration Page */}
//         <Route path="/events/:eventId/register" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute></ProtectedRoute>
//         } />

//         {/* New Learn subpages */}
//         <Route path="/learn/quizzes" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Quizzes /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/learn/recordings" element={
//           <ProtectedRoute><RoleRoute requiredRole="student"><Recordings /></RoleRoute></ProtectedRoute>
//         } />

//         {/* Parent Routes */}
//         <Route path="/parent/dashboard" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/attendance" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><Attendance /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/child-profile" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/fees" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><Fees /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/homework" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><HomeWork /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/reports" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/progress" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><Progress /></RoleRoute></ProtectedRoute>
//         } />
//         <Route path="/parent/study-planner" element={
//           <ProtectedRoute><RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute></ProtectedRoute>
//         } />

//         {/* Catch All */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

//       {isStudentPage && (
//         <div className="student-chatbox-container">
//           <Chatbox />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;







import React from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// Home Modules
import Navbar from './modules/home/Navbar';
import HeroSection from './modules/home/HeroSection';
import Features from './modules/home/Features';
import Courses from './modules/home/Courses';
import CourseDetail from './modules/home/CourseDetails';
import HowItWorks from './modules/home/HowItWorks';
import Pricing from './modules/home/Pricing';
import Testimonials from './modules/home/Testimonials';
import AppDownload from './modules/home/AppDownload';
import Footer from './modules/home/Footer';
import FAQs from './modules/home/FAQs';
import Contact from './modules/home/Contact';
import FreeDemo from './modules/home/FreeDemo';
import ProfilePage from './modules/home/ProfilePage';
import FloatingChatBot from './modules/home/FloatingChatBot';
import AIDemo from './modules/home/AIDemo';

// Auth Modules
import Login from './modules/login/Login';
import Signup from './modules/login/Signup';
import ForgotPassword from './modules/login/ForgotPassword';

// Student Modules
import Navbarrr from './modules/student/Navbarrr';
import Home1 from './modules/student/Home1';
import Learn from './modules/student/Learn';
import LessonPage from './modules/student/LessonPage';
import Practice from './modules/student/Practice';
import Career from './modules/student/Career';
import Mentorship from './modules/student/Mentorship';
import Chatbox from './modules/student/Chatbox';
import Quizzes from './modules/student/Quizzes';
import Recordings from './modules/student/Recordings';
import EventRegistrationPage from './modules/student/EventRegistrationPage';

// Parent Modules
import ParentDashboard from './modules/parent/ParentDashboard';
import Attendance from './modules/parent/Attendance';
import ChildProfile from './modules/parent/ChildProfile';
import Homework from './modules/parent/HomeWork';
import MockTestReports from './modules/parent/MockTestReports';
import Progress from './modules/parent/Progress';
import StudyPlanner from './modules/parent/StudyPlanner';
import ContactUs from './modules/parent/ContactUs';
import './modules/parent/styles.css';
import DashboardHome from './modules/parent/DashboardHome';
import IntegrationTest from './components/IntegrationTest';
import UserDetailsPage from './modules/student/UserDetailsPage';
function LandingPage() {
  return (
    <>
      <HeroSection />
      <Features />
      <Courses />
      <HowItWorks />
      <Pricing />
      <FloatingChatBot />
      <Testimonials />
      <AppDownload />
    </>
  );
}

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('access_token');
  const userToken = localStorage.getItem('userToken');
  const isAuthenticated = !!accessToken || !!userToken;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const RoleRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) return <Navigate to="/login" replace />;
  return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
};

function App() {
  const location = useLocation();

  const hideNavbarFooter = [
    '/login',
    '/signup',
    '/forgot-password',
    '/unauthorized'
  ].includes(location.pathname);

  const isStudentPage = [
    '/learn',
    '/practice',
    '/career',
    '/mentorship',
    '/student/dashboard',
    '/student/profile',
    '/lesson',
    '/events'
  ].some(path => location.pathname.startsWith(path));

  const isParentPage = location.pathname.startsWith('/parent');

  return (
    <div className="app-container">
      {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
      {isStudentPage && <Navbarrr />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/app-download" element={<AppDownload />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-demo" element={<FreeDemo />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ai-demo" element={<AIDemo />} />
        <Route path="/integration-test" element={<IntegrationTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/unauthorized"
          element={
            <div className="unauthorized-page text-center mt-5">
              <h1>401 - Unauthorized Access</h1>
              <p>You don't have permission to access this page.</p>
              <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
            </div>
          }
        />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Home1 />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/student/profile" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <UserDetailsPage />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Learn />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/class7" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Learn />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/class8" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Learn />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/class9" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Learn />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/class10" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Learn />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/lesson/:class/:subject/:chapterNumber" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <LessonPage />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/practice" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Practice />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/career" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Career />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/mentorship" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Mentorship />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/events/:eventId/register" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <EventRegistrationPage />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/quizzes" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Quizzes />
            </RoleRoute>
          </ProtectedRoute>
        } />
        <Route path="/learn/recordings" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="student">
              <Recordings />
            </RoleRoute>
          </ProtectedRoute>
        } />

        {/* Parent Dashboard Nested Routes */}
        <Route path="/parent/dashboard" element={
          <ProtectedRoute>
            <RoleRoute requiredRole="parent">
              <ParentDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome parentName="Parent" />} />
          <Route path="profile" element={<ChildProfile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="grades" element={<Progress />} />
          <Route path="homework" element={<Homework />} />
          <Route path="mockreports" element={<MockTestReports />} />
          <Route path="studyplanner" element={<StudyPlanner />} />
          <Route path="studyplanner/:subject" element={<StudyPlanner />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}
      {isStudentPage && (
        <div className="student-chatbox-container">
          <Chatbox />
        </div>
      )}
    </div>
  );
}

export default App;




