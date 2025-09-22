

// import React, { useState, useEffect, useRef } from 'react';
// import { Check } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import './practice.css';

// const grades = [
//   { value: '7', label: 'Grade 7', color: '#FF6B6B' },
//   { value: '8', label: 'Grade 8', color: '#4ECDC4' },
//   { value: '9', label: 'Grade 9', color: '#45B7D1' },
//   { value: '10', label: 'Grade 10', color: '#96CEB4' },
//   { value: '11', label: 'Grade 11', color: '#FFEAA7' },
//   { value: '12', label: 'Grade 12', color: '#DDA0DD' }
// ];

// const subjects = [
//   { id: 'english', name: 'English', icon: '📚' },
//   { id: 'maths', name: 'Maths', icon: '📊' },
//   { id: 'science', name: 'Science', icon: '🧪' },
//   { id: 'social', name: 'Social', icon: '🏛️' },
//   { id: 'computer', name: 'Computer', icon: '💻' }
// ];

// const Practice = () => {
//   const navigate = useNavigate();
//   const subjectSectionRef = useRef(null);
//   const mockSectionRef = useRef(null);

//   // Hero and Grade Section state
//   const [selectedGrade, setSelectedGrade] = useState('7');
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   const [comingSoonGrade, setComingSoonGrade] = useState(null);

//   // Animated stats
//   const [animatedStats, setAnimatedStats] = useState({
//     totalTests: 0,
//     studentsEnrolled: 0,
//     avgScore: 0
//   });

//   useEffect(() => {
//     document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";

//     // Animate stats
//     const animateValue = (start, end, duration, callback) => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         const current = Math.floor(progress * (end - start) + start);
//         callback(current);
//         if (progress < 1) window.requestAnimationFrame(step);
//       };
//       window.requestAnimationFrame(step);
//     };
//     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
//     animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
//     animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
//   }, []);

//   const handleGradeSelect = (gradeValue) => {
//     setSelectedGrade(gradeValue);
    
//     if (['7', '8', '9', '10'].includes(gradeValue)) {
//       setTimeout(() => {
//         subjectSectionRef.current?.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start'
//         });
//       }, 200);
//     } else if (['11', '12'].includes(gradeValue)) {
//       setComingSoonGrade(gradeValue);
//       setShowComingSoon(true);
//       setTimeout(() => setShowComingSoon(false), 2000);
//     }
//   };

//   // Navigate to PracticeSubjectPage
//   const goToPracticeSubject = (subject) => {
//     navigate(`/practice-subject/${subject.id}`, { state: { subjectName: subject.name, grade: selectedGrade } });
//   };

//   // Navigate to MockTestPage
//   const goToMockTest = (subject) => {
//     navigate(`/mock-test/${subject.id}`, { state: { subjectName: subject.name, grade: selectedGrade } });
//   };

//   return (
//     <div className="practice-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="hero-title">
//               Master Your Skills with 
//               <span className="gradient-text"> Tests</span>
//             </h1>
//             <p className="hero-subtitle">
//               Practice daily quizzes or challenge yourself with full-length mock tests designed for grades 7-12.
//             </p>
//             <div className="stats-container">
//               <div className="stat-item">
//                 <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
//                 <div className="stat-label">Tests</div>
//               </div>
//               <div className="stat-item">
//                 <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
//                 <div className="stat-label">Students</div>
//               </div>
//               <div className="stat-item">
//                 <div className="stat-number">{animatedStats.avgScore}%</div>
//                 <div className="stat-label">Avg Score</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Grade Selection Section */}
//       <section className="grade-selection-section">
//         <h2 className="section-title">Choose Your Grade</h2>
//         <div className="grade-cards" style={{ position: "relative" }}>
//           {grades.map((grade) => (
//             <div
//               key={grade.value}
//               className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
//               onClick={() => handleGradeSelect(grade.value)}
//               style={{ '--grade-color': grade.color, position: "relative" }}
//             >
//               {showComingSoon && comingSoonGrade === grade.value && ['11','12'].includes(grade.value) && (
//                 <div style={{
//                   position: "absolute",
//                   top: "-48px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   background: "#2D5D7B",
//                   color: "#fff",
//                   padding: "0.7rem 1.5rem",
//                   borderRadius: "8px",
//                   zIndex: 10,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   textAlign: "center",
//                   animation: "fadeInOut 2s"
//                 }}>
//                   Coming Soon!
//                 </div>
//               )}
//               <div className="grade-number">{grade.value}</div>
//               <div className="grade-label">{grade.label}</div>
//               <div className="check-icon">
//                 <Check size={18} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Practice Section */}
//       <section ref={subjectSectionRef} className="subject-section">
//         <h2 className="section-title"> Quick Practice</h2>
//         <p className="section-subtitle"><b>Focus on one small topic at a time. Short quizzes with instant feedback.</b></p>
//         <div className="subjects-grid">
//           {subjects.map((subject) => (
//             <div 
//               key={subject.id} 
//               className="practice-subject-card" 
//               onClick={() => goToPracticeSubject(subject)}
//             >
//               <div className="subject-icon">{subject.icon}</div>
//               <h3 className="subject-name">{subject.name}</h3>
//               <p className="subject-subtitle">Quick Practice</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Mock Test Section */}
//       {/* <section ref={mockSectionRef} className="mock-test-section">
//         <h2 className="section-title">📝 Full-Length Mock Test</h2>
//         <p className="section-subtitle"><b>Exam-like tests that cover entire chapters. Strictly timed with no hints.</b></p>
//         <div className="subjects-grid">
//           {subjects.map((subject) => (
//             <div 
//               key={subject.id} 
//               className="mock-subject-card" 
//               onClick={() => goToMockTest(subject)}
//             >
//               <div className="mock-icon">📝</div>
//               <h3 className="subject-name">{subject.name}</h3>
//               <p className="subject-subtitle">Full Mock Test</p>
//             </div>
//           ))}
//         </div>
//       </section> */}
//       {/* Mock Test Section */}
// <section ref={mockSectionRef} className="mock-test-section">
//   <h2 className="section-title">📝 Full-Length Mock Test</h2>
//   <p className="section-subtitle">
//     <b>Exam-like tests that cover entire chapters. Strictly timed with no hints.</b>
//   </p>
//   <div className="subjects-grid">
//     {subjects.map((subject) => (
//       <div 
//         key={subject.id} 
//         className="mock-subject-card" 
//         onClick={() => goToMockTest(subject)}
//       >
//         <div className="mock-icon">📝</div>
//         <h3 className="subject-name">{subject.name}</h3>
//         <p className="subject-subtitle">Full Mock Test</p>
//       </div>
//     ))}
//   </div>
// </section>

//     </div>
//   );
// };

// export default Practice;


import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './practice.css';
import mockTestSyllabus from './MockTestSyllabus'; // Adjust path if needed

const grades = [
  { value: '7', label: 'Grade 7', color: '#FF6B6B' },
  { value: '8', label: 'Grade 8', color: '#4ECDC4' },
  { value: '9', label: 'Grade 9', color: '#45B7D1' },
  { value: '10', label: 'Grade 10', color: '#96CEB4' },
  { value: '11', label: 'Grade 11', color: '#FFEAA7' },
  { value: '12', label: 'Grade 12', color: '#DDA0DD' }
];

const subjects = [
  { id: 'english', name: 'English', icon: '📚' },
  { id: 'maths', name: 'Maths', icon: '📊' },
  { id: 'science', name: 'Science', icon: '🧪' },
  { id: 'social_science', name: 'Social', icon: '🏛️' },
  { id: 'computer', name: 'Computer', icon: '💻' }
];

const Practice = () => {
  const navigate = useNavigate();
  const subjectSectionRef = useRef(null);
  const mockSectionRef = useRef(null);

  // Hero and Grade Section state
  const [selectedGrade, setSelectedGrade] = useState('7');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonGrade, setComingSoonGrade] = useState(null);

  // Animated stats
  const [animatedStats, setAnimatedStats] = useState({
    totalTests: 0,
    studentsEnrolled: 0,
    avgScore: 0
  });

  useEffect(() => {
    document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";

    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        callback(current);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
    animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));
    animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({ ...prev, avgScore: val })));
  }, []);

  const handleGradeSelect = (gradeValue) => {
    setSelectedGrade(gradeValue);

    if (['7', '8', '9', '10'].includes(gradeValue)) {
      setTimeout(() => {
        subjectSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200);
    } else if (['11', '12'].includes(gradeValue)) {
      setComingSoonGrade(gradeValue);
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
    }
  };

  // Navigate to PracticeSubjectPage
  const goToPracticeSubject = (subject) => {
    navigate(`/practice-subject/${subject.id}`, {
      state: { subjectName: subject.name, grade: selectedGrade }
    });
  };

  // Navigate to MockTestPage with chapters only
  const goToMockTest = (subject) => {
    const chapters = mockTestSyllabus[subject.id]?.classes[selectedGrade] || [];
    navigate(`/mock-test/${subject.id}`, {
      state: { subjectName: subject.name, grade: selectedGrade, chapters }
    });
  };

  return (
    <div className="practice-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Your Skills with
              <span className="gradient-text"> Tests</span>
            </h1>
            <p className="hero-subtitle">
              Practice daily quizzes or challenge yourself with full-length mock tests designed for grades 7-12.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
                <div className="stat-label">Tests</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
                <div className="stat-label">Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{animatedStats.avgScore}%</div>
                <div className="stat-label">Avg Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selection Section */}
      <section className="grade-selection-section">
        <h2 className="section-title">Choose Your Grade</h2>
        <div className="grade-cards" style={{ position: "relative" }}>
          {grades.map((grade) => (
            <div
              key={grade.value}
              className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
              onClick={() => handleGradeSelect(grade.value)}
              style={{ '--grade-color': grade.color, position: "relative" }}
            >
              {showComingSoon && comingSoonGrade === grade.value && ['11','12'].includes(grade.value) && (
                <div style={{
                  position: "absolute",
                  top: "-48px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#2D5D7B",
                  color: "#fff",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "8px",
                  zIndex: 10,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "center",
                  animation: "fadeInOut 2s"
                }}>
                  Coming Soon!
                </div>
              )}
              <div className="grade-number">{grade.value}</div>
              <div className="grade-label">{grade.label}</div>
              <div className="check-icon">
                <Check size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section ref={subjectSectionRef} className="subject-section">
        <h2 className="section-title">Quick Practice</h2>
        <p className="section-subtitle"><b>Focus on one small topic at a time. Short quizzes with instant feedback.</b></p>
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="practice-subject-card"
              onClick={() => goToPracticeSubject(subject)}
            >
              <div className="subject-icon">{subject.icon}</div>
              <h3 className="subject-name">{subject.name}</h3>
              <p className="subject-subtitle">Quick Practice</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mock Test Section */}
      <section ref={mockSectionRef} className="mock-test-section">
        <h2 className="section-title">📝 Full-Length Mock Test</h2>
        <p className="section-subtitle">
          <b>Exam-like tests that cover entire chapters. Strictly timed with no hints.</b>
        </p>
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="mock-subject-card"
              onClick={() => goToMockTest(subject)}
            >
              <div className="mock-icon">📝</div>
              <h3 className="subject-name">{subject.name}</h3>
              <p className="subject-subtitle">Full Mock Test</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Practice;
