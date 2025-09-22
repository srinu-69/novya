// // src/modules/student/MockTestQuestionsPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const MockTestQuestionsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { subjectName, chapterId, chapterName, grade } = location.state || {};

//   const [questions, setQuestions] = useState([]);
//   const [currentQIndex, setCurrentQIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timer, setTimer] = useState(300); // 5 min timer

//   useEffect(() => {
//     // Mock questions, ideally fetch from backend or JSON
//     const sampleQuestions = [
//       {
//         id: 1,
//         question: `Sample Q1 for ${chapterName}`,
//         options: ['A', 'B', 'C', 'D'],
//       },
//       {
//         id: 2,
//         question: `Sample Q2 for ${chapterName}`,
//         options: ['A', 'B', 'C', 'D'],
//       },
//     ];
//     setQuestions(sampleQuestions);
//   }, [chapterName]);

//   useEffect(() => {
//     if (timer <= 0) return;
//     const interval = setInterval(() => setTimer((t) => t - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleAnswer = (qid, option) => {
//     setAnswers({ ...answers, [qid]: option });
//   };

//   const handleSubmit = () => {
//     console.log('Submitted Answers:', answers);
//     alert('Test submitted!');
//     navigate('/practice'); // redirect back to practice landing
//   };

//   if (!subjectName) return <div style={{ padding: '2rem' }}>Invalid Test</div>;

//   const formatTime = (sec) => {
//     const m = Math.floor(sec / 60);
//     const s = sec % 60;
//     return `${m}:${s < 10 ? '0' : ''}${s}`;
//   };

//   return (
//     <div style={{ padding: '6rem 2rem 2rem 2rem', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
//         {subjectName} - {chapterName} (Class {grade})
//       </h2>
//       <p style={{ textAlign: 'center', color: '#555' }}>Time Remaining: {formatTime(timer)}</p>

//       {questions.length > 0 && (
//         <div style={{ maxWidth: '600px', margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: '14px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
//           <h3>
//             Q{currentQIndex + 1}. {questions[currentQIndex].question}
//           </h3>
//           <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//             {questions[currentQIndex].options.map((opt) => (
//               <button
//                 key={opt}
//                 onClick={() => handleAnswer(questions[currentQIndex].id, opt)}
//                 style={{
//                   padding: '0.5rem 1rem',
//                   borderRadius: '8px',
//                   border: answers[questions[currentQIndex].id] === opt ? '2px solid #4caf50' : '1px solid #ddd',
//                   cursor: 'pointer',
//                   background: '#f9f9f9',
//                   fontWeight: 600,
//                 }}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>

//           <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
//             <button
//               disabled={currentQIndex === 0}
//               onClick={() => setCurrentQIndex(currentQIndex - 1)}
//               style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: '#2D3A4A', color: '#fff', cursor: 'pointer' }}
//             >
//               Previous
//             </button>
//             {currentQIndex < questions.length - 1 ? (
//               <button
//                 onClick={() => setCurrentQIndex(currentQIndex + 1)}
//                 style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: '#4caf50', color: '#fff', cursor: 'pointer' }}
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmit}
//                 style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: '#4caf50', color: '#fff', cursor: 'pointer' }}
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MockTestQuestionsPage;



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MockTestQuestionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectName, grade, chapter, subtopic } = location.state || {};

  const [showInstructions, setShowInstructions] = useState(true);
  const [acceptedInstructions, setAcceptedInstructions] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for mock test
  const [showResults, setShowResults] = useState(false);

  // Dummy MCQs
  const generateMCQs = (sub) => [
    { question: `What is a key point in "${sub}"?`, options: ["A", "B", "C", "D"], correct: "B" },
    { question: `Which statement is true about "${sub}"?`, options: ["A", "B", "C", "D"], correct: "C" },
    { question: `Choose the correct statement regarding "${sub}"`, options: ["A", "B", "C", "D"], correct: "A" },
    { question: `Identify the correct option for "${sub}"`, options: ["A", "B", "C", "D"], correct: "D" },
  ];

  const mcqs = generateMCQs(subtopic);
  const currentQ = mcqs[currentQuestion];

  // Timer
  useEffect(() => {
    if (showInstructions || showResults) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showInstructions, showResults]);

  const handleOptionChange = (option) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: option }));
  };

  const handleNext = () => { if (currentQuestion < mcqs.length - 1) setCurrentQuestion(prev => prev + 1); };
  const handlePrev = () => { if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1); };
  const handleSubmit = () => setShowResults(true);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
  };

  const totalQuestions = mcqs.length;
  const correctAnswers = mcqs.filter((q, idx) => answers[idx] === q.correct).length;
  const wrongAnswers = mcqs.filter((q, idx) => answers[idx] && answers[idx] !== q.correct).length;
  const skippedQuestions = mcqs.filter((q, idx) => !answers[idx]).length;
  const scorePercent = totalQuestions ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  // Instructions UI
  if (showInstructions) {
    const instructions = [
      "Focus on the mock test carefully.",
      "You have 5 minutes to complete all questions.",
      "Do not switch tabs while the timer is running.",
      "Answer all questions to the best of your knowledge.",
      "Review answers before submitting.",
    ];
    return (
      <div style={{ padding: "6rem 2rem", background: "#f5f0ff", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#7b1fa2" }}>Mock Test Instructions - {subtopic}</h2>
        <div style={{ maxWidth: "600px", margin: "0 auto 2rem", padding: "2rem", background: "#e6e6fa", borderRadius: "15px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", textAlign: "left" }}>
          <ul style={{ lineHeight: 2, color: "#4e342e" }}>
            {instructions.map((inst, idx) => <li key={idx} style={{ marginBottom: "0.75rem" }}>{inst}</li>)}
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <input type="checkbox" id="acceptInstructions" checked={acceptedInstructions} onChange={() => setAcceptedInstructions(!acceptedInstructions)} />
            <label htmlFor="acceptInstructions" style={{ marginLeft: "0.5rem", color: "#4e342e" }}>I accept the instructions</label>
          </div>
        </div>
        <button disabled={!acceptedInstructions} onClick={() => setShowInstructions(false)}
          style={{
            padding: "0.75rem 1.5rem",
            background: acceptedInstructions ? "#b39ddb" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: acceptedInstructions ? "pointer" : "not-allowed",
            fontWeight: 600,
            transition: "0.3s"
          }}>Start Test</button>
      </div>
    );
  }

  // Results UI
  if (showResults) {
    return (
      <div style={{ padding: "6rem 2rem 4rem 2rem", background: "#f5f0ff", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.8rem", color: "#7b1fa2", marginBottom: "1rem" }}>Mission Complete!</h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "3rem", color: "#4e342e" }}>Your Mock Test Summary</p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
          {[{ label: "Total Questions", value: totalQuestions, bg: "#fff9c4" },
            { label: "Correct", value: correctAnswers, bg: "#c5e1a5" },
            { label: "Wrong", value: wrongAnswers, bg: "#f8bbd0" },
            { label: "Skipped", value: skippedQuestions, bg: "#b3e5fc" }].map((stat, idx) => (
            <div key={idx} style={{ background: stat.bg, padding: "2rem 1.5rem", borderRadius: "20px", minWidth: "140px", textAlign: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{stat.label}</h4>
              <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Circular Score */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
          <div style={{
            width: "150px", height: "150px", borderRadius: "50%",
            background: `conic-gradient(#c5e1a5 ${scorePercent*3.6}deg, #ffe08250 0deg)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2rem", fontWeight: "bold", color: "#4e342e",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
          }}>{scorePercent}%</div>
        </div>

        {/* Review */}
        <h3 style={{ textAlign: "center", color: "#7b1fa2", marginBottom: "1rem" }}>Review Your Answers</h3>
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem" }}>
          {mcqs.map((q, idx) => {
            let bg = "#b3e5fc"; // skipped
            if (answers[idx] === q.correct) bg = "#c5e1a5";
            else if (answers[idx] && answers[idx] !== q.correct) bg = "#f8bbd0";
            return (
              <div key={idx} style={{ minWidth: "250px", flexShrink: 0, background: bg, padding: "1.5rem", borderRadius: "15px", boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }}>
                <h4>Q{idx+1}</h4>
                <p>{q.question}</p>
                <p>✅ Your Answer: {answers[idx] || "Skipped"}</p>
                <p>🎯 Correct: {q.correct}</p>
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button onClick={() => navigate(-1)} style={{ padding: "0.75rem 1.5rem", background: "#90a4ae", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 600 }}>Back</button>
        </div>
      </div>
    );
  }

  // Test-taking UI
  return (
    <div style={{ padding: "4rem 2rem 2rem 2rem", background: "#f5f0ff", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem", fontWeight: 600, fontSize: "1.25rem" }}>Time Left: <span style={{ color: "#7b1fa2" }}>{formatTime(timeLeft)}</span></div>
      <div style={{ maxWidth: "600px", margin: "0 auto 2rem", height: "10px", background: "#f0f0f0", borderRadius: "10px" }}>
        <div style={{ width: `${((currentQuestion+1)/mcqs.length)*100}%`, height: "100%", background: "#b39ddb", borderRadius: "10px", transition: "0.3s" }}></div>
      </div>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", background: "#e6e6fa", borderRadius: "15px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
        <p style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1.5rem" }}>Q{currentQuestion+1}. {currentQ.question}</p>
        {currentQ.options.map(opt => (
          <label key={opt} style={{ display: "block", padding: "0.75rem 1rem", marginBottom: "0.75rem", borderRadius: "10px", cursor: "pointer", background: answers[currentQuestion]===opt ? "#c5e1a5" : "#fff3e0", transition: "0.2s" }}>
            <input type="radio" name={`q-${currentQuestion}`} value={opt} checked={answers[currentQuestion]===opt} onChange={() => handleOptionChange(opt)} style={{ marginRight: "0.5rem" }} />
            {opt}
          </label>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button onClick={handlePrev} disabled={currentQuestion===0} style={{ padding: "0.75rem 1.5rem", marginRight: "1rem", background: "#90a4ae", color: "#fff", border: "none", borderRadius: "12px", cursor: currentQuestion===0 ? "not-allowed" : "pointer", fontWeight: 600 }}>← Previous</button>
        {currentQuestion < mcqs.length-1 ? 
          <button onClick={handleNext} style={{ padding: "0.75rem 1.5rem", background: "#b39ddb", color: "#fff", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 }}>Next →</button> :
          <button onClick={handleSubmit} style={{ padding: "0.75rem 1.5rem", background: "#c5e1a5", color: "#4e342e", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 }}>Submit</button>
        }
      </div>
    </div>
  )
}

export default MockTestQuestionsPage;
