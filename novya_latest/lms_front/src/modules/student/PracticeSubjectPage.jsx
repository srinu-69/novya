



// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { BookOpen, FileText, PlayCircle, ArrowLeft, CheckCircle } from 'lucide-react';
// import syllabus from './Syllabus';

// const PracticeSubjectPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { subjectName, grade } = location.state || {};

//   const [selectedChapter, setSelectedChapter] = useState(null);
//   const [selectedSubtopic, setSelectedSubtopic] = useState(null);
//   const [acceptedInstructions, setAcceptedInstructions] = useState(false);

//   // Find subject
//   const subjectsArray = Object.entries(syllabus).map(([id, data]) => ({ id, ...data }));
//   const subject = subjectsArray.find((s) => s.name === subjectName);
//   if (!subject) return <div style={{ padding: '2rem' }}>Subject not found</div>;

//   const chaptersForGrade = subject.classes[grade] || [];

//   // Pastel card styles
//   const pastelGradients = [
//     'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
//     'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
//     'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
//     'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
//   ];

//   const cardStyle = (index) => ({
//     padding: '1.8rem',
//     background: pastelGradients[index % pastelGradients.length],
//     color: '#2D3A4A',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     boxShadow: '0 8px 18px rgba(0,0,0,0.12)',
//     transition: 'all 0.3s ease',
//     minWidth: '220px',
//     textAlign: 'center',
//     flex: '0 0 auto',
//     fontFamily: "'Poppins', sans-serif",
//   });

//   const cardHoverStyle = {
//     transform: 'translateY(-8px) scale(1.05)',
//     boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
//   };

//   // Render chapters
//   const renderChapters = (chapters) =>
//     chapters.map((ch, index) => (
//       <div
//         key={ch.id}
//         style={cardStyle(index)}
//         onClick={() => setSelectedChapter(ch)}
//         onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardStyle(index), cardHoverStyle)}
//         onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle(index))}
//       >
//         <BookOpen size={32} style={{ marginBottom: '0.8rem', color: '#2D3A4A' }} />
//         <h3 style={{ marginBottom: '0.6rem', fontSize: '1.3rem', fontWeight: 700 }}>{ch.name}</h3>
//         {ch.subtopics && ch.subtopics.length > 0 && (
//           <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{ch.subtopics.length} Topics</p>
//         )}
//       </div>
//     ));

//   // Button styles
//   const buttonBase = {
//     padding: '0.9rem 2rem',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '1rem',
//     fontWeight: 600,
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   };

//   const primaryButton = {
//     ...buttonBase,
//     background: acceptedInstructions ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#ccc',
//     color: '#fff',
//     cursor: acceptedInstructions ? 'pointer' : 'not-allowed',
//   };

//   const secondaryButton = {
//     ...buttonBase,
//     background: '#2D3A4A',
//     color: '#fff',
//   };

//   // Extended instructions
//   const instructionsList = [
//     'Focus on one subtopic at a time.',
//     'You will have 5 minutes to complete the test.',
//     'Answer all questions to the best of your ability.',
//     'Once started, you cannot pause the timer.',
//     'Avoid switching tabs during the test.',
//     'Make sure you have a stable internet connection.',
//     'Review your answers carefully before submission.',
//   ];

//   return (
//     <div
//       style={{
//         padding: '6rem 2rem 2rem',
//         minHeight: '100vh',
//         fontFamily: "'Poppins', sans-serif",
//         background: '#fdfdfd',
//         color: '#2D3A4A',
//       }}
//     >
//       {!selectedChapter ? (
//         <>
//           <h2
//             style={{
//               marginBottom: '2rem',
//               fontSize: '2.4rem',
//               fontWeight: 800,
//               textAlign: 'center',
//               color: '#2D3A4A',
//             }}
//           >
//             {subject.name} - Class {grade}
//           </h2>

//           <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
//             {renderChapters(chaptersForGrade)}
//           </div>

//           <div style={{ textAlign: 'center', marginTop: '3rem' }}>
//             <button
//               onClick={() => navigate('/practice')}
//               style={secondaryButton}
//               onMouseEnter={(e) => (e.currentTarget.style.background = '#1a2433')}
//               onMouseLeave={(e) => (e.currentTarget.style.background = '#2D3A4A')}
//             >
//               <ArrowLeft size={18} /> Back
//             </button>
//           </div>
//         </>
//       ) : !selectedSubtopic ? (
//         <>
//           <h2
//             style={{
//               marginBottom: '1.8rem',
//               fontSize: '2rem',
//               textAlign: 'center',
//               fontWeight: 700,
//             }}
//           >
//             Select Subtopic - {selectedChapter.name}
//           </h2>
//           <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
//             {selectedChapter.subtopics.map((st, index) => (
//               <div
//                 key={st}
//                 style={cardStyle(index)}
//                 onClick={() => setSelectedSubtopic(st)}
//                 onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardStyle(index), cardHoverStyle)}
//                 onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle(index))}
//               >
//                 <FileText size={28} style={{ marginBottom: '0.6rem', color: '#2D3A4A' }} />
//                 <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{st}</h4>
//               </div>
//             ))}
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
//             <button onClick={() => setSelectedChapter(null)} style={secondaryButton}>
//               <ArrowLeft size={18} /> Back
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: 700 }}>
//             Instructions - {selectedSubtopic}
//           </h2>

//           <div
//             style={{
//               maxWidth: '600px',
//               margin: '0 auto 2rem auto',
//               padding: '1.5rem 2rem',
//               borderRadius: '16px',
//               background: '#f0f4f8',
//               boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
//             }}
//           >
//             <ul style={{ lineHeight: '1.8', fontSize: '1rem', paddingLeft: '1.2rem' }}>
//               {instructionsList.map((inst, idx) => (
//                 <li key={idx} style={{ marginBottom: '0.6rem' }}>
//                   <CheckCircle size={16} style={{ marginRight: '0.5rem', color: '#4caf50' }} />
//                   {inst}
//                 </li>
//               ))}
//             </ul>

//             <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <input
//                 type="checkbox"
//                 id="acceptInstructions"
//                 checked={acceptedInstructions}
//                 onChange={() => setAcceptedInstructions(!acceptedInstructions)}
//               />
//               <label htmlFor="acceptInstructions" style={{ fontSize: '0.95rem' }}>
//                 I have read and accept the instructions
//               </label>
//             </div>
//           </div>

//           <div style={{ textAlign: 'center' }}>
//             <button
//               onClick={() =>
//                 navigate('/practice-questions', {
//                   state: { subjectName, grade, chapter: selectedChapter.name, subtopic: selectedSubtopic },
//                 })
//               }
//               style={primaryButton}
//               disabled={!acceptedInstructions}
//             >
//               <PlayCircle size={20} /> Start Test
//             </button>

//             <button
//               onClick={() => setSelectedSubtopic(null)}
//               style={{ ...secondaryButton, marginLeft: '1rem' }}
//             >
//               <ArrowLeft size={18} /> Back
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default PracticeSubjectPage;






import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, FileText, ArrowLeft } from 'lucide-react';
import syllabus from './Syllabus';

const PracticeSubjectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectName, grade } = location.state || {};

  const [selectedChapter, setSelectedChapter] = useState(null);

  // Find subject
  const subjectsArray = Object.entries(syllabus).map(([id, data]) => ({ id, ...data }));
  const subject = subjectsArray.find((s) => s.name === subjectName);
  if (!subject) return <div style={{ padding: '2rem' }}>Subject not found</div>;

  const chaptersForGrade = subject.classes[grade] || [];

  // Pastel card styles
  const pastelGradients = [
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
  ];

  const cardStyle = (index) => ({
    padding: '1.8rem',
    background: pastelGradients[index % pastelGradients.length],
    color: '#2D3A4A',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease',
    minWidth: '220px',
    textAlign: 'center',
    flex: '0 0 auto',
    fontFamily: "'Poppins', sans-serif",
  });

  const cardHoverStyle = {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 14px 30px rgba(0,0,0,0.18)',
  };

  const renderChapters = (chapters) =>
    chapters.map((ch, index) => (
      <div
        key={ch.id}
        style={cardStyle(index)}
        onClick={() => setSelectedChapter(ch)}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardStyle(index), cardHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle(index))}
      >
        <BookOpen size={32} style={{ marginBottom: '0.8rem', color: '#2D3A4A' }} />
        <h3 style={{ marginBottom: '0.6rem', fontSize: '1.3rem', fontWeight: 700 }}>{ch.name}</h3>
        {ch.subtopics && ch.subtopics.length > 0 && (
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{ch.subtopics.length} Topics</p>
        )}
      </div>
    ));

  const renderSubtopics = (subtopics) =>
    subtopics.map((st, index) => (
      <div
        key={st}
        style={cardStyle(index)}
        onClick={() =>
          navigate('/practice-questions', {
            state: { subjectName, grade, chapter: selectedChapter.name, subtopic: st },
          })
        }
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardStyle(index), cardHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle(index))}
      >
        <FileText size={28} style={{ marginBottom: '0.6rem', color: '#2D3A4A' }} />
        <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{st}</h4>
      </div>
    ));

  return (
    <div
      style={{
        padding: '6rem 2rem 2rem',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        background: '#fdfdfd',
        color: '#2D3A4A',
      }}
    >
      {!selectedChapter ? (
        <>
          <h2 style={{ marginBottom: '2rem', fontSize: '2.4rem', fontWeight: 800, textAlign: 'center' }}>
            {subject.name} - Class {grade}
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {renderChapters(chaptersForGrade)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => navigate('/practice')}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                background: '#2D3A4A',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={18} /> Back
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ marginBottom: '1.8rem', fontSize: '2rem', textAlign: 'center', fontWeight: 700 }}>
            Select Subtopic - {selectedChapter.name}
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {renderSubtopics(selectedChapter.subtopics)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setSelectedChapter(null)}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                background: '#2D3A4A',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={18} /> Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PracticeSubjectPage;
