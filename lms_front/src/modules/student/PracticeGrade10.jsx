import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './practice.css';

const PracticeGrade10 = () => {
  const location = useLocation();
  const subjectSectionRef = useRef(null);
  
  useEffect(() => {
    document.title = "Grade 10 Mock-Tests | NOVYA - Your Smart Learning Platform";
    
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
  
  const [selectedGrade, setSelectedGrade] = useState('10');
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

    animateValue(0, 2000, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
    animateValue(0, 72000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
    animateValue(0, 86, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
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
    { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 35, difficulty: 'Hard', duration: '90 min' },
    { id: 'science', name: 'Science', icon: '🔬', tests: 38, difficulty: 'Hard', duration: '95 min' },
    { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 32, difficulty: 'Medium', duration: '85 min' },
    { id: 'english', name: 'English', icon: '📚', tests: 28, difficulty: 'Medium', duration: '75 min' },
    { id: 'computer', name: 'Computer Science', icon: '💻', tests: 25, difficulty: 'Hard', duration: '80 min' }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'Real Numbers & Polynomials',
      subject: 'Mathematics',
      questions: 5,
      duration: 15,
      difficulty: 'Hard',
      attempts: 1250,
      rating: 4.7,
      topics: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the HCF of 96 and 404?",
          options: ["4", "8", "12", "16"],
          correctAnswer: 0,
          explanation: "Using Euclid's division algorithm: 404 = 96 × 4 + 20, 96 = 20 × 4 + 16, 20 = 16 × 1 + 4, 16 = 4 × 4 + 0. So HCF is 4."
        },
        {
          id: 2,
          question: "What is the degree of the polynomial x³ + 2x² - 5x + 7?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          explanation: "The highest power of the variable x is 3, so the degree is 3."
        },
        {
          id: 3,
          question: "If 2x + 3y = 12 and 3x + 2y = 13, what is the value of x + y?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 0,
          explanation: "Adding both equations: 5x + 5y = 25 → x + y = 5."
        },
        {
          id: 4,
          question: "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
          options: ["2, 3", "1, 6", "-2, -3", "-1, -6"],
          correctAnswer: 0,
          explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so roots are x = 2 and x = 3."
        },
        {
          id: 5,
          question: "What is the sum of the first 20 natural numbers?",
          options: ["210", "200", "190", "180"],
          correctAnswer: 0,
          explanation: "Sum of first n natural numbers = n(n+1)/2 = 20×21/2 = 210."
        }
      ]
    },
    {
      id: 2,
      title: 'Chemical Reactions & Acids',
      subject: 'Science',
      questions: 5,
      duration: 15,
      difficulty: 'Hard',
      attempts: 1150,
      rating: 4.8,
      topics: ['Chemical Reactions', 'Acids/Bases/Salts', 'Metals/Non-Metals', 'Carbon Compounds'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
          options: ["Combination", "Decomposition", "Displacement", "Double Displacement"],
          correctAnswer: 0,
          explanation: "This is a combination reaction where two elements combine to form a compound."
        },
        {
          id: 2,
          question: "What is the pH value of a neutral solution?",
          options: ["0", "7", "14", "1"],
          correctAnswer: 1,
          explanation: "A neutral solution has pH = 7. Acidic solutions have pH < 7, basic solutions have pH > 7."
        },
        {
          id: 3,
          question: "Which metal is liquid at room temperature?",
          options: ["Sodium", "Mercury", "Iron", "Copper"],
          correctAnswer: 1,
          explanation: "Mercury is the only metal that is liquid at room temperature."
        },
        {
          id: 4,
          question: "What is the functional group of alcohols?",
          options: ["-COOH", "-OH", "-CHO", "-NH₂"],
          correctAnswer: 1,
          explanation: "Alcohols have the hydroxyl functional group (-OH)."
        },
        {
          id: 5,
          question: "Which process is essential for energy production in living organisms?",
          options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
          correctAnswer: 1,
          explanation: "Respiration is the process that releases energy from food in living organisms."
        }
      ]
    },
    {
      id: 3,
      title: 'Resources & National Economy',
      subject: 'Social Studies',
      questions: 5,
      duration: 12,
      difficulty: 'Medium',
      attempts: 980,
      rating: 4.6,
      topics: ['Resources & GDP', 'Forests & Wildlife', 'National Economy', 'Agriculture'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What does GDP stand for?",
          options: [
            "Gross Domestic Product",
            "General Development Plan",
            "Governmental Development Program",
            "Gross Development Percentage"
          ],
          correctAnswer: 0,
          explanation: "GDP stands for Gross Domestic Product, which measures the total value of goods and services produced in a country."
        },
        {
          id: 2,
          question: "Which organization is responsible for wildlife conservation in India?",
          options: ["WHO", "UNESCO", "WWF", "CITES"],
          correctAnswer: 2,
          explanation: "WWF (World Wide Fund for Nature) plays a significant role in wildlife conservation in India."
        },
        {
          id: 3,
          question: "Which sector is the largest employer in India?",
          options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
          correctAnswer: 0,
          explanation: "The primary sector (agriculture and related activities) is the largest employer in India."
        },
        {
          id: 4,
          question: "Which state is the largest producer of rice in India?",
          options: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
          correctAnswer: 1,
          explanation: "West Bengal is the largest producer of rice in India."
        },
        {
          id: 5,
          question: "Which city is known as the 'IT Capital of India'?",
          options: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
          correctAnswer: 2,
          explanation: "Bangalore is known as the IT Capital of India due to its numerous IT companies and tech parks."
        }
      ]
    },
    {
      id: 4,
      title: 'English Literature & Comprehension',
      subject: 'English',
      questions: 5,
      duration: 10,
      difficulty: 'Medium',
      attempts: 1100,
      rating: 4.5,
      topics: ['Investigative Writing', 'Invisible Living', 'Health', 'Electricity & Magnetism'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "What is the main purpose of investigative writing?",
          options: [
            "To entertain readers",
            "To present facts and uncover truth",
            "To express personal opinions",
            "To create fictional stories"
          ],
          correctAnswer: 1,
          explanation: "Investigative writing aims to present facts and uncover truth through thorough research."
        },
        {
          id: 2,
          question: "What does 'Invisible Living' typically refer to in literature?",
          options: [
            "Microscopic organisms",
            "Spiritual or supernatural beings",
            "Digital life",
            "Underground communities"
          ],
          correctAnswer: 0,
          explanation: "'Invisible Living' often refers to microscopic organisms not visible to the naked eye."
        },
        {
          id: 3,
          question: "Which literary device is used to compare two unlike things using 'like' or 'as'?",
          options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
          correctAnswer: 1,
          explanation: "A simile is a comparison using 'like' or 'as', while a metaphor is a direct comparison."
        },
        {
          id: 4,
          question: "What is the theme of most health-related literature?",
          options: [
            "Wealth and prosperity",
            "Well-being and prevention",
            "Adventure and exploration",
            "Romance and relationships"
          ],
          correctAnswer: 1,
          explanation: "Health-related literature typically focuses on well-being, prevention, and healthy living."
        },
        {
          id: 5,
          question: "Who discovered electromagnetic induction?",
          options: ["Thomas Edison", "Michael Faraday", "Albert Einstein", "Nikola Tesla"],
          correctAnswer: 1,
          explanation: "Michael Faraday discovered electromagnetic induction in 1831."
        }
      ]
    },
    {
      id: 5,
      title: 'Computer Components & Web Technologies',
      subject: 'Computer Science',
      questions: 5,
      duration: 12,
      difficulty: 'Hard',
      attempts: 850,
      rating: 4.7,
      topics: ['Computer Components', 'GIMP', 'HTML Tables', 'CSS & DHTML'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "Which component is known as the 'brain' of the computer?",
          options: ["RAM", "CPU", "GPU", "Hard Drive"],
          correctAnswer: 1,
          explanation: "The CPU (Central Processing Unit) is often called the brain of the computer as it processes instructions."
        },
        {
          id: 2,
          question: "What is GIMP primarily used for?",
          options: [
            "Word processing",
            "Image editing",
            "Spreadsheet calculations",
            "Presentation creation"
          ],
          correctAnswer: 1,
          explanation: "GIMP (GNU Image Manipulation Program) is a free and open-source image editor."
        },
        {
          id: 3,
          question: "Which HTML tag is used to create a table?",
          options: ["<table>", "<tab>", "<grid>", "<tbl>"],
          correctAnswer: 0,
          explanation: "The <table> tag is used to create tables in HTML."
        },
        {
          id: 4,
          question: "What does CSS stand for?",
          options: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
          ],
          correctAnswer: 2,
          explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
        },
        {
          id: 5,
          question: "What is the purpose of DHTML?",
          options: [
            "To create static web pages",
            "To make web pages dynamic and interactive",
            "To design database structures",
            "To develop server-side applications"
          ],
          correctAnswer: 1,
          explanation: "DHTML (Dynamic HTML) combines HTML, CSS, and JavaScript to create interactive web pages."
        }
      ]
    }
  ];

  const recentResults = [
    { name: 'Amit', score: 94, subject: 'Mathematics', avatar: '👨‍🎓' },
    { name: 'Divya', score: 91, subject: 'Science', avatar: '👩‍🎓' },
    { name: 'Rohan', score: 89, subject: 'Social Studies', avatar: '👨‍🎓' },
    { name: 'Priya', score: 92, subject: 'English', avatar: '👩‍🎓' }
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
                  Master Your <span className="gradient-text">Grade 10</span> Skills
                </h1>
                <p className="hero-subtitle">
                  Comprehensive practice tests designed specifically for Grade 10 curriculum. 
                  Excel in your board exams with targeted practice!
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
                    <div className="test-title">Grade 10 Test</div>
                  </div>
                  <div className="test-content">
                    <div className="question-preview">
                      <div className="question-number">Q1.</div>
                      <div className="question-text">What is the HCF of 96 and 404?</div>
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

export default PracticeGrade10;