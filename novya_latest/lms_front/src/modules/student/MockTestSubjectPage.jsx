// // src/modules/student/MockTestSubjectPage.jsx
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import mockTestSyllabus from './MockTestSyllabus';

// const MockTestSubjectPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { subjectName, grade } = location.state || {};

//   const subjectsArray = Object.entries(mockTestSyllabus).map(([id, data]) => ({ id, ...data }));
//   const subject = subjectsArray.find((s) => s.name === subjectName);

//   if (!subject) return <div style={{ padding: '2rem' }}>Subject not found</div>;

//   const chaptersForGrade = subject.classes[grade] || [];

//   const cardStyle = {
//     padding: '1.5rem',
//     background: '#ffffff',
//     color: '#2D3A4A',
//     borderRadius: '14px',
//     cursor: 'pointer',
//     border: '1px solid #ddd',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//     transition: 'all 0.3s ease',
//     minWidth: '220px',
//     textAlign: 'center',
//     flex: '0 0 auto',
//     fontFamily: "'Roboto', sans-serif",
//   };

//   const cardHoverStyle = {
//     transform: 'translateY(-6px) scale(1.05)',
//     boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
//   };

//   const startTest = (chapter) => {
//     navigate('/mock-test-questions', {
//       state: { subjectName, chapterId: chapter.id, chapterName: chapter.name, grade },
//     });
//   };

//   return (
//     <div style={{ padding: '6rem 2rem 2rem 2rem', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
//       <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700, textAlign: 'center' }}>
//         {subject.name} - Class {grade} - Select Chapter
//       </h2>

//       <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {chaptersForGrade.map((chapter) => (
//           <div
//             key={chapter.id}
//             style={cardStyle}
//             onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
//             onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{chapter.name}</h3>
//             <button
//               onClick={() => startTest(chapter)}
//               style={{
//                 marginTop: '1rem',
//                 padding: '0.6rem 1.5rem',
//                 background: '#4caf50',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '10px',
//                 cursor: 'pointer',
//                 fontWeight: 600,
//               }}
//             >
//               Start Test
//             </button>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: 'center', marginTop: '2rem' }}>
//         <button
//           onClick={() => navigate(-1)}
//           style={{
//             padding: '0.75rem 2rem',
//             background: '#2D3A4A',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '10px',
//             cursor: 'pointer',
//             fontSize: '1rem',
//             fontWeight: 600,
//           }}
//         >
//           ← Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MockTestSubjectPage;





import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import mockTestSyllabus from './MockTestSyllabus';

const MockTestSubjectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectName, grade } = location.state || {};

  const subjectsArray = Object.entries(mockTestSyllabus).map(([id, data]) => ({ id, ...data }));
  const subject = subjectsArray.find((s) => s.name === subjectName);

  if (!subject) return <div style={{ padding: '2rem' }}>Subject not found</div>;

  const chaptersForGrade = subject.classes[grade] || [];

  // Base card style
  const cardStyle = {
    padding: '2rem 1.5rem',
    background: 'linear-gradient(145deg, #ffe0f0, #fff0f5)', // soft pastel pink-purple
    color: '#333',
    borderRadius: '20px',
    cursor: 'pointer',
    border: '1px solid #f2e6f0',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    minWidth: '220px',
    maxWidth: '260px',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardHoverStyle = {
    transform: 'translateY(-12px) scale(1.05)',
    boxShadow: '0 16px 30px rgba(0,0,0,0.15)',
    borderColor: '#e0c0e0',
  };

  // Start Test button style
  const startTestButtonStyle = {
    marginTop: '1rem',
    padding: '0.65rem 1.5rem',
    background: 'linear-gradient(145deg, #ffd1dc, #ffb3c1)',
    color: '#333',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.12)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const startTest = (chapter) => {
    navigate('/mock-test-questions', {
      state: { subjectName, chapterId: chapter.id, chapterName: chapter.name, grade },
    });
  };

  return (
    <div
      style={{
        padding: '6rem 2rem 2rem 2rem',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #fff8fb, #fdf7fe)',
      }}
    >
      <h2
        style={{
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          color: '#5e2b5e',
        }}
      >
        {subject.name} - Class {grade} - Select Chapter
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.8rem',
          justifyItems: 'center',
          paddingBottom: '2rem',
        }}
      >
        {chaptersForGrade.map((chapter) => (
          <div
            key={chapter.id}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                fontWeight: 700,
                color: '#5e2b5e',
              }}
            >
              {chapter.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#5e2b5e', marginBottom: '1rem' }}>
              {chapter.description || 'Complete this chapter test to improve your skills!'}
            </p>
            <button
              onClick={() => startTest(chapter)}
              style={startTestButtonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Start Test
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '0.75rem 2rem',
            background: '#ffeef7',
            color: '#5e2b5e',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 600,
            transition: '0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#ffd6eb')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#ffeef7')}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default MockTestSubjectPage;
