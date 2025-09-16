import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './practice.css';

const PracticeGrade9 = () => {
  const location = useLocation();
  const subjectSectionRef = useRef(null);
  
  useEffect(() => {
    document.title = "Grade 9 Mock-Tests | NOVYA - Your Smart Learning Platform";
    
    // Handle scrolling to subjects when navigating from Practice page
    if (location.state?.scrollToSubjects) {
      const scrollToSubjects = () => {
        if (subjectSectionRef.current) {
          subjectSectionRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
          // Clear the state to prevent scrolling on subsequent renders
          window.history.replaceState({}, document.title);
        }
      };
      
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(scrollToSubjects, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);
  
  const [selectedGrade, setSelectedGrade] = useState('9');
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [activeFilter, setActiveFilter] = useState('all');
  const [testStarted, setTestStarted] = useState(false);
  const [currentTest, setCurrentTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    totalTests: 0,
    studentsEnrolled: 0,
    avgScore: 0
  });

  // Animate stats on component mount
  useEffect(() => {
    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        callback(current);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 1500, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
    animateValue(0, 58000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
    animateValue(0, 83, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
  }, []);

  const grades = [
    { value: '7', label: 'Grade 7', color: '#FF6B6B' },
    { value: '8', label: 'Grade 8', color: '#4ECDC4' },
    { value: '9', label: 'Grade 9', color: '#45B7D1' },
    { value: '10', label: 'Grade 10', color: '#96CEB4' },
    { value: '11', label: 'Grade 11', color: '#FFEAA7' },
    { value: '12', label: 'Grade 12', color: '#DDA0DD' }
  ];

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 28, difficulty: 'Medium', duration: '85 min' },
    { id: 'science', name: 'Science', icon: '🔬', tests: 32, difficulty: 'Medium', duration: '90 min' },
    { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 30, difficulty: 'Medium', duration: '80 min' },
    { id: 'english', name: 'English', icon: '📚', tests: 25, difficulty: 'Medium', duration: '70 min' },
    { id: 'computer', name: 'Computer Science', icon: '💻', tests: 22, difficulty: 'Hard', duration: '75 min' }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'Coordinate Geometry & Number Systems',
      subject: 'Mathematics',
      questions: 5,
      duration: 12,
      difficulty: 'Medium',
      attempts: 920,
      rating: 4.6,
      topics: ['Coordinate Geometry', 'Number Systems', 'Polynomials', 'Linear Equations'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the distance between points (2, 3) and (5, 7)?",
          options: ["5 units", "6 units", "7 units", "8 units"],
          correctAnswer: 0,
          explanation: "Using distance formula: √[(5-2)² + (7-3)²] = √[9 + 16] = √25 = 5 units"
        },
        {
          id: 2,
          question: "Which of these is an irrational number?",
          options: ["√4", "√9", "√2", "√16"],
          correctAnswer: 2,
          explanation: "√2 cannot be expressed as a fraction and has non-terminating, non-repeating decimal expansion."
        },
        {
          id: 3,
          question: "What is the degree of the polynomial 3x³ + 2x² - 5x + 7?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          explanation: "The highest power of the variable x is 3, so the degree is 3."
        },
        {
          id: 4,
          question: "If 2x + 5 = 15, what is the value of x?",
          options: ["5", "10", "7.5", "3"],
          correctAnswer: 0,
          explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
        },
        {
          id: 5,
          question: "In which quadrant does the point (-3, 4) lie?",
          options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          correctAnswer: 1,
          explanation: "Points with negative x and positive y coordinates lie in Quadrant II."
        }
      ]
    },
    {
      id: 2,
      title: 'Atoms, Molecules & Motion',
      subject: 'Science',
      questions: 5,
      duration: 15,
      difficulty: 'Medium',
      attempts: 880,
      rating: 4.7,
      topics: ['Atoms & Molecules', 'Gravitation', 'Motion', 'Matter'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the atomic mass of oxygen?",
          options: ["12 u", "14 u", "16 u", "18 u"],
          correctAnswer: 2,
          explanation: "Oxygen has an atomic mass of 16 atomic mass units (u)."
        },
        {
          id: 2,
          question: "What is the value of acceleration due to gravity on Earth?",
          options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
          correctAnswer: 0,
          explanation: "The standard acceleration due to gravity on Earth is approximately 9.8 m/s²."
        },
        {
          id: 3,
          question: "Which law states that 'Every action has an equal and opposite reaction'?",
          options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
          correctAnswer: 2,
          explanation: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction."
        },
        {
          id: 4,
          question: "What is the SI unit of force?",
          options: ["Joule", "Watt", "Newton", "Pascal"],
          correctAnswer: 2,
          explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton."
        },
        {
          id: 5,
          question: "Which state of matter has the highest kinetic energy?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctAnswer: 2,
          explanation: "Gas particles have the highest kinetic energy as they move freely at high speeds."
        }
      ]
    },
    {
      id: 3,
      title: 'Constitutional Design & Democracy',
      subject: 'Social Studies',
      questions: 5,
      duration: 10,
      difficulty: 'Medium',
      attempts: 950,
      rating: 4.5,
      topics: ['Constitutional Design', 'Democracy', 'Democratic Rights', 'Electoral Politics'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "Who was the chairman of the Drafting Committee of the Indian Constitution?",
          options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
          correctAnswer: 2,
          explanation: "Dr. B.R. Ambedkar was the chairman of the Drafting Committee of the Indian Constitution."
        },
        {
          id: 2,
          question: "What is the minimum voting age in India?",
          options: ["16 years", "18 years", "21 years", "25 years"],
          correctAnswer: 1,
          explanation: "The minimum voting age in India is 18 years as per the 61st Constitutional Amendment."
        },
        {
          id: 3,
          question: "Which fundamental right prohibits human trafficking?",
          options: ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Constitutional Remedies"],
          correctAnswer: 2,
          explanation: "Right against Exploitation (Article 23) prohibits human trafficking and forced labor."
        },
        {
          id: 4,
          question: "What is the full form of EVM?",
          options: ["Electronic Voting Machine", "Electric Voting Mechanism", "Election Verification Method", "Electronic Validation Machine"],
          correctAnswer: 0,
          explanation: "EVM stands for Electronic Voting Machine, used in Indian elections."
        },
        {
          id: 5,
          question: "Who is the head of the Election Commission of India?",
          options: ["Prime Minister", "President", "Chief Election Commissioner", "Home Minister"],
          correctAnswer: 2,
          explanation: "The Chief Election Commissioner heads the Election Commission of India."
        }
      ]
    },
    {
      id: 4,
      title: 'English Literature & Grammar',
      subject: 'English',
      questions: 5,
      duration: 8,
      difficulty: 'Medium',
      attempts: 1020,
      rating: 4.4,
      topics: ['The Sound of Music', 'The Little Girl', 'Truly Beautiful Mind', 'The Snake and the Mirror'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "Who is the author of 'The Sound of Music'?",
          options: ["Evelyn Glennie", "Deborah Cowley", "Bismillah Khan", "A.P.J. Abdul Kalam"],
          correctAnswer: 1,
          explanation: "Deborah Cowley is the author of 'The Sound of Music' chapter."
        },
        {
          id: 2,
          question: "What was the name of the little girl in the story 'The Little Girl'?",
          options: ["Evelyn", "Kezia", "Deborah", "Isabel"],
          correctAnswer: 1,
          explanation: "Kezia was the name of the little girl who was afraid of her father."
        },
        {
          id: 3,
          question: "Who is known as the 'Father of the Indian Nuclear Program'?",
          options: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam"],
          correctAnswer: 1,
          explanation: "Homi Jehangir Bhabha is known as the father of the Indian nuclear program."
        },
        {
          id: 4,
          question: "What profession did the narrator have in 'The Snake and the Mirror'?",
          options: ["Teacher", "Doctor", "Engineer", "Lawyer"],
          correctAnswer: 1,
          explanation: "The narrator was a homeopathic doctor who encountered a snake in his room."
        },
        {
          id: 5,
          question: "Which musical instrument did Bismillah Khan play?",
          options: ["Sitar", "Tabla", "Shehnai", "Flute"],
          correctAnswer: 2,
          explanation: "Bismillah Khan was a renowned shehnai player who popularized this instrument."
        }
      ]
    },
    {
      id: 5,
      title: 'ICT & Digital Communication',
      subject: 'Computer Science',
      questions: 5,
      duration: 10,
      difficulty: 'Hard',
      attempts: 820,
      rating: 4.8,
      topics: ['Introduction to ICT', 'Internet Connectivity', 'Textual Communication', 'Audio-Video Communication'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "What does ICT stand for?",
          options: [
            "Information and Communication Technology",
            "International Communication Technology",
            "Internet Connection Technology",
            "Integrated Computer Technology"
          ],
          correctAnswer: 0,
          explanation: "ICT stands for Information and Communication Technology."
        },
        {
          id: 2,
          question: "Which protocol is used for transferring web pages on the internet?",
          options: ["FTP", "HTTP", "SMTP", "TCP"],
          correctAnswer: 1,
          explanation: "HTTP (HyperText Transfer Protocol) is used for transferring web pages."
        },
        {
          id: 3,
          question: "Which of these is NOT a method of digital communication?",
          options: ["Email", "Video Conferencing", "Blogging", "Handwritten Letter"],
          correctAnswer: 3,
          explanation: "Handwritten letter is a traditional form of communication, not digital."
        },
        {
          id: 4,
          question: "What is the purpose of a modem?",
          options: [
            "To process data",
            "To store data",
            "To convert digital signals to analog and vice versa",
            "To display output"
          ],
          correctAnswer: 2,
          explanation: "A modem modulates and demodulates signals for communication over telephone lines."
        },
        {
          id: 5,
          question: "Which software is used for creating visual communication?",
          options: ["Word Processor", "Spreadsheet", "Presentation Software", "Database Software"],
          correctAnswer: 2,
          explanation: "Presentation software like PowerPoint is used for creating visual communication."
        }
      ]
    }
  ];

  const recentResults = [
    { name: 'Rahul', score: 95, subject: 'Mathematics', avatar: '👨‍🎓' },
    { name: 'Anjali', score: 92, subject: 'Science', avatar: '👩‍🎓' },
    { name: 'Karan', score: 88, subject: 'Social Studies', avatar: '👨‍🎓' },
    { name: 'Sneha', score: 90, subject: 'English', avatar: '👩‍🎓' }
  ];

  const filteredTests = mockTests.filter(test => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'free') return !test.premium;
    if (activeFilter === 'premium') return test.premium;
    return true;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      default: return '#666';
    }
  };

  const startTest = (test) => {
    setCurrentTest(test);
    setTimeLeft(test.duration * 60);
    setTestStarted(true);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTestSubmitted(false);
    setScore(0);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < currentTest.questionsData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const submitTest = useCallback(() => {
    let correctAnswers = 0;
    currentTest.questionsData.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const calculatedScore = Math.round(
      (correctAnswers / currentTest.questionsData.length) * 100
    );
    setScore(calculatedScore);
    setTestSubmitted(true);
  }, [currentTest, selectedAnswers]);

  useEffect(() => {
    if (!testStarted || testSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, testSubmitted, submitTest]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const exitTest = () => {
    setTestStarted(false);
    setCurrentTest(null);
  };

  const currentQuestion = currentTest?.questionsData?.[currentQuestionIndex];

  return (
    <div className="practice-container">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {!testStarted ? (
        <>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Master Your <span className="gradient-text">Grade 9</span> Skills
                </h1>
                <p className="hero-subtitle">
                  Comprehensive practice tests designed specifically for Grade 9 curriculum. 
                  Excel in your exams with targeted practice!
                </p>
                
                {/* Animated Stats */}
                <div className="stats-container">
                  <div className="stat-item">
                    <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
                    <div className="stat-label">Mock Tests</div>
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
              
              <div className="hero-visual">
                <div className="test-preview">
                  <div className="test-header">
                    <div className="test-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="test-title">Grade 9 Test</div>
                  </div>
                  <div className="test-content">
                    <div className="question-preview">
                      <div className="question-number">Q1.</div>
                      <div className="question-text">What is the distance between points (2, 3) and (5, 7)?</div>
                    </div>
                    <div className="options-preview">
                      <div className="option-line active"></div>
                      <div className="option-line"></div>
                      <div className="option-line"></div>
                      <div className="option-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grade Selection */}
          <section className="grade-selection-section">
            <h2 className="section-title">Choose Your Grade</h2>
            <div className="grade-cards">
              {grades.map((grade) => (
                <Link 
                  key={grade.value} 
                  to={grade.value === '7' ? '/practice' : `/practice-grade${grade.value}`}
                  className="grade-card-link"
                >
                  <div
                    className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
                    onClick={() => setSelectedGrade(grade.value)}
                    style={{ '--grade-color': grade.color }}
                  >
                    <div className="grade-number">{grade.value}</div>
                    <div className="grade-label">{grade.label}</div>
                    <div className="grade-glow"></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Subject Selection */}
          <section className="subject-selection-section" ref={subjectSectionRef}>
            <h2 className="section-title">Select Subject</h2>
            <div className="subjects-grid">
              {subjects.map((subject) => (
                <div 
                  key={subject.id}
                  className={`subject-card ${selectedSubject === subject.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSubject(subject.id);
                    const firstTest = mockTests.find(
                      (test) => test.subject.toLowerCase() === subject.name.toLowerCase()
                    );
                    if (firstTest) startTest(firstTest);
                  }}
                >
                  <div className="subject-icon">{subject.icon}</div>
                  <h3 className="subject-name">{subject.name}</h3>
                  <div className="subject-stats">
                    <div className="stat">
                      <BookOpen size={16} />
                      <span>{subject.tests} Tests</span>
                    </div>
                    <div className="stat">
                      <Target size={16} />
                      <span>{subject.difficulty}</span>
                    </div>
                    <div className="stat">
                      <Clock size={16} />
                      <span>{subject.duration}</span>
                    </div>
                  </div>
                  <div className="card-hover-effect"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Mock Tests Grid */}
          <section className="mock-tests-section">
            <div className="section-header">
              <h2 className="section-title">Available Mock Tests</h2>
              <div className="filter-tabs">
                <button 
                  className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Tests
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'free' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('free')}
                >
                  Medium
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'premium' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('premium')}
                >
                  Advanced
                </button>
              </div>
            </div>
            
            <div className="mock-tests-grid">
              {filteredTests.map((test) => (
                <div key={test.id} className="mock-test-card">
                  {test.premium && <div className="premium-badge">Advanced</div>}
                  
                  <div className="test-header">
                    <h3 className="test-title">{test.title}</h3>
                    <div className="test-rating">
                      <Star size={14} fill="currentColor" />
                      <span>{test.rating}</span>
                    </div>
                  </div>
                  
                  <div className="test-subject">{test.subject}</div>
                  
                  <div className="test-meta">
                    <div className="meta-item">
                      <BookOpen size={16} />
                      <span>{test.questions} Questions</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{test.duration} min</span>
                    </div>
                    <div className="meta-item">
                      <Target size={16} />
                      <span 
                        className="difficulty-badge"
                        style={{ color: getDifficultyColor(test.difficulty) }}
                      >
                        {test.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="test-topics">
                    {test.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                  
                  <div className="test-stats">
                    <div className="stat-item">
                      <Users size={16} />
                      <span>{test.attempts} attempts</span>
                    </div>
                  </div>
                  
                  <button 
                    className="start-test-btn"
                    onClick={() => startTest(test)}
                  >
                    <Play size={18} />
                    Start Test
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Results */}
          <section className="recent-results-section">
            <h2 className="section-title">Top Performers</h2>
            <div className="results-grid">
              {recentResults.map((result, index) => (
                <div key={index} className="result-card">
                  <div className="result-avatar">{result.avatar}</div>
                  <div className="result-info">
                    <div className="result-name">{result.name}</div>
                    <div className="result-subject">{result.subject}</div>
                  </div>
                  <div className="result-score">{result.score}%</div>
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="test-taking-container">
          {!testSubmitted ? (
            <>
              <div className="test-header-bar">
                <div className="test-info">
                  <h2>{currentTest.title}</h2>
                  <div className="test-meta">
                    <span className="test-subject">{currentTest.subject}</span>
                    <span className="test-difficulty" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
                      {currentTest.difficulty}
                    </span>
                  </div>
                </div>
                <div className="test-timer">
                  <Clock size={20} />
                  <span>{formatTime(timeLeft)}</span>
                </div>
                <button className="exit-test-btn" onClick={exitTest}>
                  <X size={20} />
                </button>
              </div>

              <div className="test-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${((currentQuestionIndex + 1) / currentTest.questionsData.length) * 100}%` 
                  }}
                ></div>
              </div>

              <div className="question-container">
                <div className="question-header">
                  <span className="question-number">Question {currentQuestionIndex + 1} of {currentTest.questionsData.length}</span>
                </div>
                
                <div className="question-text">{currentQuestion.question}</div>
                
                <div className="answer-options">
                  {currentQuestion.options.map((option, index) => (
                    <div 
                      key={index}
                      className={`option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                    >
                      <div className="option-selector">
                        {selectedAnswers[currentQuestion.id] === index ? (
                          <div className="option-selected-indicator"></div>
                        ) : null}
                      </div>
                      <div className="option-text">{option}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="test-navigation">
                <button 
                  className="nav-btn prev-btn"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>
                
                <div className="question-indicators">
                  {currentTest.questionsData.map((_, index) => (
                    <div 
                      key={index}
                      className={`indicator ${currentQuestionIndex === index ? 'active' : ''} ${selectedAnswers[currentTest.questionsData[index].id] !== undefined ? 'answered' : ''}`}
                      onClick={() => setCurrentQuestionIndex(index)}
                    ></div>
                  ))}
                </div>
                
                {currentQuestionIndex < currentTest.questionsData.length - 1 ? (
                  <button 
                    className="nav-btn next-btn"
                    onClick={goToNextQuestion}
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button 
                    className="submit-test-btn"
                    onClick={submitTest}
                  >
                    Submit Test
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="test-results-container">
              <div className="results-header">
                <h2>Test Results</h2>
                <div className="test-title">{currentTest.title}</div>
              </div>
              
              <div className="results-summary">
                <div className="score-display">
                  <div className="score-value">{score}%</div>
                  <div className="score-label">Your Score</div>
                </div>
                
                <div className="results-details">
                  <div className="detail-item">
                    <div className="detail-label">Correct Answers</div>
                    <div className="detail-value">
                      {Object.values(selectedAnswers).filter((answer, index) => 
                        answer === currentTest.questionsData[index].correctAnswer
                      ).length} / {currentTest.questionsData.length}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Time Taken</div>
                    <div className="detail-value">
                      {formatTime((currentTest.duration * 60) - timeLeft)}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Difficulty</div>
                    <div className="detail-value" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
                      {currentTest.difficulty}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="answers-review">
                <h3>Answers Review</h3>
                {currentTest.questionsData.map((question, index) => (
                  <div 
                    key={question.id} 
                    className={`question-review ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}
                  >
                    <div className="question-header">
                      <span className="question-number">Question {index + 1}</span>
                      {selectedAnswers[question.id] === question.correctAnswer ? (
                        <span className="correct-indicator">
                          <Check size={16} />
                          Correct
                        </span>
                      ) : (
                        <span className="incorrect-indicator">
                          <X size={16} />
                          Incorrect
                        </span>
                      )}
                    </div>
                    <div className="question-text">{question.question}</div>
                    <div className="correct-answer">
                      Correct Answer: {question.options[question.correctAnswer]}
                    </div>
                    {selectedAnswers[question.id] !== question.correctAnswer && (
                      <div className="your-answer">
                        Your Answer: {question.options[selectedAnswers[question.id]]}
                      </div>
                    )}
                    <div className="explanation">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="results-actions">
                <button 
                  className="retake-test-btn"
                  onClick={() => startTest(currentTest)}
                >
                  <Play size={18} />
                  Retake Test
                </button>
                <button 
                  className="back-to-tests-btn"
                  onClick={exitTest}
                >
                  Back to All Tests
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeGrade9;