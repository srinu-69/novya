

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import syllabus from "./Syllabus";
import { getApiUrl, getAuthHeaders } from "../../config/api";

const PracticeQuestionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectName, grade, chapter, subtopic } = location.state || {};

  const [showInstructions, setShowInstructions] = useState(true);
  const [acceptedInstructions, setAcceptedInstructions] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Map subject names to backend subject keys
  const subjectMapping = {
    'English': 'english',
    'Maths': 'maths',
    'Science': 'science',
    'Social': 'social',
    'Computer': 'computer'
  };

  // Map subtopic names to topic keys (matching the specific topic keys from backend)
  const topicMapping = {
    // Programming Language subtopics
    'What is a programming language?': 'programming_language_basics',
    'Types: Low-level vs High-level languages': 'programming_language_types',
    'Examples and real-world uses': 'programming_language_examples',
    'Simple pseudocode or introduction to programming logic': 'programming_language_logic',

    // Microsoft Word subtopics
    'Creating, saving, and opening documents': 'microsoft_word_documents',
    'Text formatting: fonts, sizes, colors, bold, italics': 'microsoft_word_formatting',
    'Paragraph alignment, bullets, numbering': 'microsoft_word_paragraphs',
    'Inserting images, tables, and hyperlinks': 'microsoft_word_inserting',

    // Microsoft PowerPoint subtopics
    'Creating slides and using slide layouts': 'microsoft_powerpoint_slides',
    'Adding and editing text and images': 'microsoft_powerpoint_text_images',
    'Applying themes and transitions': 'microsoft_powerpoint_themes',
    'Running a slideshow': 'microsoft_powerpoint_slideshow',

    // Microsoft Excel subtopics
    'Entering and formatting data in cells': 'microsoft_excel_data',
    'Basic formulas (SUM, AVERAGE)': 'microsoft_excel_formulas',
    'Creating charts from data': 'microsoft_excel_charts',
    'Simple data organization (sorting and filtering)': 'microsoft_excel_organization',

    // Microsoft Access subtopics
    'Understanding databases and tables': 'microsoft_access_tables',
    'Creating a simple database': 'microsoft_access_database',
    'Adding, editing, and searching records': 'microsoft_access_records',
    'Basic queries': 'microsoft_access_queries'
  };

  // Fetch questions from backend API
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!subjectName || !subtopic) return;

      setLoading(true);
      setError(null);

      try {
        const subjectKey = subjectMapping[subjectName];
        if (!subjectKey) {
          throw new Error(`Subject ${subjectName} not supported`);
        }

        const topicKey = topicMapping[subtopic] || subtopic.toLowerCase().replace(/\s+/g, '_');

        console.log('Fetching questions for:', { subjectName, subjectKey, subtopic, topicKey });
        console.log('Topic mapping found:', topicMapping[subtopic] ? 'YES' : 'NO');
        console.log('Available topic mappings:', Object.keys(topicMapping));
        console.log('Exact subtopic match:', topicMapping[subtopic]);
        console.log('Fallback topic key:', subtopic.toLowerCase().replace(/\s+/g, '_'));

        // Use different endpoints based on subject type
        let apiUrl;
        if (subjectKey === 'maths' && subtopic === 'Properties of Addition and Subtraction of integers') {
          // Use randomized endpoint for Maths Chapter 1 Integers
          apiUrl = getApiUrl(`/api/quizzes/maths/class7/maths/chapter1_integers/randomized/`);
        } else {
          // Use regular endpoint for other subjects
          apiUrl = getApiUrl(`/api/quizzes/pdf/class7/${subjectKey}/${topicKey}/questions/`);
        }
        console.log('API URL:', apiUrl);
        console.log('Token:', localStorage.getItem('userToken') ? 'Present' : 'Missing');
        console.log('Auth headers:', getAuthHeaders());

        // Don't send auth headers for randomized Maths quizzes
        const headers = (subjectKey === 'maths' && subtopic === 'Properties of Addition and Subtraction of integers')
          ? { 'Content-Type': 'application/json' }
          : getAuthHeaders();

        const response = await fetch(apiUrl, {
          headers: headers
        });

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`Failed to fetch questions: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Received data:', data);
        setQuestions(data.questions || []);

      } catch (err) {
        console.error('Error fetching questions:', err);
        console.error('Error details:', {
          message: err.message,
          subjectName,
          subtopic,
          subjectKey: subjectMapping[subjectName],
          topicKey: topicMapping[subtopic] || subtopic.toLowerCase().replace(/\s+/g, '_')
        });
        setError(err.message);
        // Fallback to dummy questions if API fails
        console.log('Falling back to dummy questions for:', subtopic);
        setQuestions(generateFallbackMCQs(subtopic));
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [subjectName, subtopic]);

  // Fallback MCQs if API fails
  const generateFallbackMCQs = (sub) => [
    {
      question: `What is a key concept in "${sub}"?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option B",
    },
    {
      question: `Which of the following is true about "${sub}"?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option C",
    },
    {
      question: `Choose the correct statement regarding "${sub}"`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: "Option A",
    },
  ];

  const currentQ = questions[currentQuestion];

  // Timer logic
  useEffect(() => {
    if (showInstructions || showResults) return;
    if (timeLeft === 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showInstructions, showResults]);

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    try {
      // Submit results to backend if we have real questions
      if (questions.length > 0 && !error) {
        const subjectKey = subjectMapping[subjectName];
        const topicKey = topicMapping[subtopic] || subtopic.toLowerCase().replace(/\s+/g, '_');

        const submissionData = {
          answers: answers,
          time_taken: 300 - timeLeft, // Time taken in seconds
          total_questions: questions.length,
          correct_answers: correctAnswers,
          score_percentage: scorePercent
        };

        // Use different submit endpoints based on subject type
        let submitUrl;
        if (subjectKey === 'maths' && subtopic === 'Properties of Addition and Subtraction of integers') {
          // Use randomized submit endpoint for Maths Chapter 1 Integers
          submitUrl = getApiUrl(`/api/quizzes/maths/class7/maths/chapter1_integers/randomized/submit/`);
        } else {
          // Use regular submit endpoint for other subjects
          submitUrl = getApiUrl(`/api/quizzes/pdf/class7/${subjectKey}/${topicKey}/submit/`);
        }

        // Don't send auth headers for randomized Maths quizzes
        const submitHeaders = (subjectKey === 'maths' && subtopic === 'Properties of Addition and Subtraction of integers')
          ? { 'Content-Type': 'application/json' }
          : getAuthHeaders();

        const response = await fetch(submitUrl, {
          method: 'POST',
          headers: submitHeaders,
          body: JSON.stringify(submissionData)
        });

        if (response.ok) {
          console.log('Quiz results submitted successfully');
        } else {
          console.error('Failed to submit quiz results');
        }
      }
    } catch (err) {
      console.error('Error submitting quiz results:', err);
    } finally {
      setShowResults(true);
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  // Results calculation
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter((q, idx) => {
    const userAnswer = answers[idx];
    const correctOption = q.options?.find(opt => opt.is_correct)?.option_text || q.correct;
    return userAnswer === correctOption;
  }).length;
  const wrongAnswers = questions.filter((q, idx) => {
    const userAnswer = answers[idx];
    const correctOption = q.options?.find(opt => opt.is_correct)?.option_text || q.correct;
    return userAnswer && userAnswer !== correctOption;
  }).length;
  const skippedQuestions = questions.filter((q, idx) => !answers[idx]).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  // Early returns
  const subject = Object.values(syllabus).find((s) => s.name === subjectName);
  if (!subject) return <div style={{ padding: "2rem" }}>Subject not found</div>;
  const chaptersForGrade = subject.classes[grade] || [];
  const selectedChapter = chaptersForGrade.find((ch) => ch.name === chapter);
  if (!selectedChapter) return <div style={{ padding: "2rem" }}>Chapter not found</div>;
  if (!selectedChapter.subtopics.includes(subtopic))
    return <div style={{ padding: "2rem" }}>Subtopic not found</div>;

  // Loading state
  if (loading) {
    return (
      <div style={{ padding: "6rem 2rem", textAlign: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <h2 style={{ marginBottom: "2rem", fontSize: "2rem", color: "#6a1b9a" }}>Loading Questions...</h2>
        <div style={{ fontSize: "1.2rem", color: "#666" }}>Please wait while we load the quiz questions for {subtopic}</div>
      </div>
    );
  }

  // Error state
  if (error && questions.length === 0) {
    return (
      <div style={{ padding: "6rem 2rem", textAlign: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <h2 style={{ marginBottom: "2rem", fontSize: "2rem", color: "#d32f2f" }}>Error Loading Questions</h2>
        <div style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>{error}</div>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "0.75rem 1.5rem",
            background: "#6a1b9a",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Instructions UI
  if (showInstructions) {
    const instructionsList = [
      'Focus on one subtopic at a time.',
      'You will have 3 minutes to complete the test.',
      'Answer all questions to the best of your ability.',
      'Once started, you cannot pause the timer.',
      'Avoid switching tabs during the test.',
      'Review your answers carefully before submission.',
    ];

    // Add special instruction for randomized Maths quiz
    if (subjectName === 'Maths' && subtopic === 'Properties of Addition and Subtraction of integers') {
      instructionsList.push('Note: This is a randomized quiz - each attempt will show different questions from the question bank!');
    }
    return (
      <div style={{ padding: "6rem 2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign: "center", backgroundColor: "#fff9f7", minHeight: "100vh" }}>
        <h2 style={{ marginBottom: "2rem", fontSize: "2rem", color: "#6a1b9a" }}>Instructions - {subtopic}</h2>

        {/* Randomized Quiz Notice for Maths */}
        {subjectName === 'Maths' && subtopic === 'Properties of Addition and Subtraction of integers' && (
          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196f3',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px auto',
            textAlign: 'center'
          }}>
            <strong style={{ color: '#1976d2', fontSize: '18px' }}>🎲 Randomized Quiz</strong>
            <p style={{ margin: '8px 0 0 0', color: '#1976d2', fontSize: '16px' }}>
              This quiz shows 10 random questions from a larger question bank. Each attempt will have different questions!
            </p>
          </div>
        )}
        <div style={{ maxWidth: "600px", margin: "0 auto 2rem", padding: "2rem", background: "#fbe9e7", borderRadius: "15px", textAlign: "left", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <ul style={{ lineHeight: "2", color: "#4e342e" }}>
            {instructionsList.map((inst, idx) => (
              <li key={idx} style={{ marginBottom: "0.75rem" }}>{inst}</li>
            ))}
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <input type="checkbox" id="acceptInstructions" checked={acceptedInstructions} onChange={() => setAcceptedInstructions(!acceptedInstructions)} />
            <label htmlFor="acceptInstructions" style={{ marginLeft: "0.5rem", color: "#4e342e" }}>I have read and accept the instructions</label>
          </div>
        </div>
        <button
          disabled={!acceptedInstructions}
          onClick={() => setShowInstructions(false)}
          style={{
            padding: "0.75rem 1.5rem",
            background: acceptedInstructions ? "#ffb74d" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: acceptedInstructions ? "pointer" : "not-allowed",
            fontWeight: 600,
            transition: "0.3s",
          }}
        >
          Start Test
        </button>
      </div>
    );
  }

  // Results UI
  if (showResults) {
    return (
      <div style={{ padding: "6rem 2rem 4rem 2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", backgroundColor: "#fffaf0" }}>

        {/* Fun Header */}
        <h2 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "2.8rem", color: "#6a1b9a" }}>
          Mission Complete!
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "3rem", color: "#4e342e" }}>
          Here’s how you did in your quiz adventure!
        </p>

        {/* Stats Cards */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { label: "Total Questions", value: totalQuestions, bg: "#ffd54f80" },
            { label: "Correct", value: correctAnswers, bg: "#aed58180" },
            { label: "Wrong", value: wrongAnswers, bg: "#e5737380" },
            { label: "Skipped", value: skippedQuestions, bg: "#b0bec580" },
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: stat.bg,
              padding: "2rem 1.5rem",
              borderRadius: "20px",
              minWidth: "140px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "default"
            }}>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{stat.label}</h4>
              <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Circular Score */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
          <div style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: `conic-gradient(#aed58180 ${scorePercent * 3.6}deg, #ffe08250 0deg)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#4e342e"
          }}>
            {scorePercent}%
          </div>
        </div>

        {/* Review Questions */}
        <h3 style={{ textAlign: "center", marginBottom: "1rem", color: "#6a1b9a" }}>Review Your Adventure</h3>
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem" }}>
          {questions.map((q, idx) => {
            let bgColor = "#b0bec580"; // Skipped
            const correctOption = q.options?.find(opt => opt.is_correct)?.option_text || q.correct;
            if (answers[idx] === correctOption) bgColor = "#aed58180";
            else if (answers[idx] && answers[idx] !== correctOption) bgColor = "#e5737380";

            return (
              <div key={idx} style={{
                minWidth: "250px",
                flexShrink: 0,
                background: bgColor,
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer"
              }}>
                <h4 style={{ marginBottom: "0.5rem" }}>Q{idx + 1}</h4>
                <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>{q.question}</p>
                <p style={{ margin: 0 }}>✅ Your Answer: {answers[idx] || "Skipped"}</p>
                <p style={{ margin: 0 }}>🎯 Correct: {q.correct}</p>
              </div>
            );
          })}
        </div>

        {/* Recommendations */}
        <h3 style={{ textAlign: "center", marginTop: "2rem", marginBottom: "1rem", color: "#6a1b9a" }}>Next Steps</h3>
        <ul style={{ maxWidth: "600px", margin: "0 auto", color: "#4e342e", lineHeight: 1.8 }}>
          {questions.map((q, idx) => {
            const correctOption = q.options?.find(opt => opt.is_correct)?.option_text || q.correct;
            return answers[idx] !== correctOption && <li key={idx}>Review: {q.question_text || q.question}</li>;
          })}
        </ul>

        {/* Back Button */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#90a4ae",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: 600,
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  // Test-taking UI
  return (
    <div style={{ padding: "4rem 2rem 2rem 2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", backgroundColor: "#fff9f7" }}>

      {/* Timer & Progress */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.25rem", fontWeight: 600 }}>
        Time Left: <span style={{ color: "#f06292" }}>{formatTime(timeLeft)}</span>
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto 2rem", height: "10px", background: "#f0f0f0", borderRadius: "10px" }}>
        <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: "100%", background: "#ffb74d", borderRadius: "10px", transition: "0.3s" }}></div>
      </div>

      {/* Question Card */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", borderRadius: "15px", background: "#fce4ec", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
        <p style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Q{currentQuestion + 1}. {currentQ?.question_text || currentQ?.question}
        </p>
        {(currentQ?.options || currentQ?.options || []).map((opt, index) => {
          const optionText = opt.option_text || opt;
          const optionValue = opt.option_text || opt;
          return (
            <label
              key={index}
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                marginBottom: "0.75rem",
                background: answers[currentQuestion] === optionValue ? "#aed58180" : "#fff3e0",
                color: answers[currentQuestion] === optionValue ? "#4e342e" : "#4e342e",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <input
                type="radio"
                name={`q-${currentQuestion}`}
                value={optionValue}
                checked={answers[currentQuestion] === optionValue}
                onChange={() => handleOptionChange(optionValue)}
                style={{ marginRight: "0.5rem" }}
              />
              {optionText}
            </label>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button onClick={handlePrev} disabled={currentQuestion === 0} style={{ padding: "0.75rem 1.5rem", marginRight: "1rem", background: "#90a4ae", color: "#fff", border: "none", borderRadius: "12px", cursor: currentQuestion === 0 ? "not-allowed" : "pointer", fontWeight: 600 }}>
          ← Previous
        </button>
        {currentQuestion < questions.length - 1 ? (
          <button onClick={handleNext} style={{ padding: "0.75rem 1.5rem", background: "#ffb74d", color: "#fff", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 }}>
            Next →
          </button>
        ) : (
          <button onClick={handleSubmit} style={{ padding: "0.75rem 1.5rem", background: "#aed58180", color: "#4e342e", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: 600 }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PracticeQuestionsPage;






