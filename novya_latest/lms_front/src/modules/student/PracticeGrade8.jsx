
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './practice.css';

const PracticeGrade8 = () => {
  const location = useLocation();
  const subjectSectionRef = useRef(null);
  
//   useEffect(() => {
//     document.title = "Grade 8 Mock-Tests | NOVYA - Your Smart Learning Platform";
    
//     // Handle scrolling to subjects when navigating from Practice page
//     if (location.state?.scrollToSubjects && subjectSectionRef.current) {
//       setTimeout(() => {
//         subjectSectionRef.current?.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }, 100);
//     }
//   }, [location.state]);

// In PracticeGrade8.jsx - update the useEffect hook
useEffect(() => {
  document.title = "Grade 8 Mock-Tests | NOVYA - Your Smart Learning Platform";
  
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
  
  const [selectedGrade, setSelectedGrade] = useState('8');
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

  // Rest of the PracticeGrade8 component remains exactly the same...
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

    animateValue(0, 1800, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
    animateValue(0, 65000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
    animateValue(0, 85, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
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
    { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 32, difficulty: 'Medium', duration: '80 min' },
    { id: 'physics', name: 'Physics', icon: '⚡', tests: 28, difficulty: 'Medium', duration: '75 min' },
    { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '70 min' },
    { id: 'computer', name: 'Computer Science', icon: '💻', tests: 35, difficulty: 'Hard', duration: '90 min' },
    { id: 'english', name: 'English', icon: '📚', tests: 30, difficulty: 'Easy', duration: '60 min' }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'Numbers, Squares and Cubes',
      subject: 'Mathematics',
      questions: 5,
      duration: 10,
      difficulty: 'Medium',
      attempts: 980,
      rating: 4.7,
      topics: ['Numbers', 'Squares', 'Cubes', 'Operations'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the square of 15?",
          options: ["225", "125", "250", "200"],
          correctAnswer: 0,
          explanation: "15 × 15 = 225, so the square of 15 is 225."
        },
        {
          id: 2,
          question: "What is the cube root of 64?",
          options: ["4", "8", "16", "32"],
          correctAnswer: 0,
          explanation: "4 × 4 × 4 = 64, so the cube root of 64 is 4."
        },
        {
          id: 3,
          question: "Which of these is a perfect square?",
          options: ["50", "64", "75", "90"],
          correctAnswer: 1,
          explanation: "64 is 8², making it a perfect square."
        },
        {
          id: 4,
          question: "What is the value of 7³?",
          options: ["343", "49", "2401", "21"],
          correctAnswer: 0,
          explanation: "7³ = 7 × 7 × 7 = 343."
        },
        {
          id: 5,
          question: "Which number is both a perfect square and perfect cube?",
          options: ["16", "27", "64", "81"],
          correctAnswer: 2,
          explanation: "64 is 8² and 4³, making it both a perfect square and perfect cube."
        }
      ]
    },
    {
      id: 2,
      title: 'Particulate Nature of Matter',
      subject: 'Physics',
      questions: 5,
      duration: 10,
      difficulty: 'Medium',
      attempts: 850,
      rating: 4.6,
      topics: ['States of Matter', 'Particles', 'Properties'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "Which state of matter has a definite volume but no definite shape?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctAnswer: 1,
          explanation: "Liquids have a definite volume but take the shape of their container."
        },
        {
          id: 2,
          question: "What happens to the particles when a substance is heated?",
          options: [
            "They move closer together",
            "They move faster and farther apart",
            "They change color",
            "They become heavier"
          ],
          correctAnswer: 1,
          explanation: "When heated, particles gain energy and move faster, increasing the space between them."
        },
        {
          id: 3,
          question: "Which of these is an example of diffusion?",
          options: [
            "Ice melting in water",
            "Smell of perfume spreading in a room",
            "Water boiling in a kettle",
            "Salt dissolving in water"
          ],
          correctAnswer: 1,
          explanation: "Diffusion is the movement of particles from an area of high concentration to low concentration."
        },
        {
          id: 4,
          question: "What is the process called when a solid turns directly into a gas?",
          options: ["Melting", "Sublimation", "Evaporation", "Condensation"],
          correctAnswer: 1,
          explanation: "Sublimation is the process where a solid turns directly into a gas without becoming a liquid first."
        },
        {
          id: 5,
          question: "Which state of matter has the strongest forces between particles?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctAnswer: 0,
          explanation: "Solids have the strongest intermolecular forces, keeping particles in fixed positions."
        }
      ]
    },
    {
      id: 3,
      title: 'Natural Resources',
      subject: 'Social Studies',
      questions: 5,
      duration: 10,
      difficulty: 'Easy',
      attempts: 920,
      rating: 4.5,
      topics: ['Resources', 'Conservation', 'Types'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "Which of these is a renewable resource?",
          options: ["Coal", "Solar energy", "Natural gas", "Petroleum"],
          correctAnswer: 1,
          explanation: "Solar energy is renewable as it is continuously available from the sun."
        },
        {
          id: 2,
          question: "What is the main cause of resource depletion?",
          options: [
            "Overconsumption",
            "Natural disasters",
            "Lack of technology",
            "Animal activities"
          ],
          correctAnswer: 0,
          explanation: "Overconsumption by humans is the primary cause of resource depletion."
        },
        {
          id: 3,
          question: "Which natural resource is known as 'black gold'?",
          options: ["Coal", "Gold", "Petroleum", "Diamond"],
          correctAnswer: 2,
          explanation: "Petroleum is often called 'black gold' due to its high economic value."
        },
        {
          id: 4,
          question: "What is the practice of conserving resources for future generations called?",
          options: [
            "Resource management",
            "Sustainable development",
            "Conservation",
            "Recycling"
          ],
          correctAnswer: 1,
          explanation: "Sustainable development meets present needs without compromising future generations."
        },
        {
          id: 5,
          question: "Which of these is a non-renewable resource?",
          options: ["Wind", "Water", "Forests", "Minerals"],
          correctAnswer: 3,
          explanation: "Minerals are non-renewable as they take millions of years to form."
        }
      ]
    },
    {
      id: 4,
      title: 'SQL and Database Concepts',
      subject: 'Computer Science',
      questions: 5,
      duration: 12,
      difficulty: 'Hard',
      attempts: 780,
      rating: 4.8,
      topics: ['SQL', 'Databases', 'Queries'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Question Language",
            "Standard Query Logic",
            "System Query List"
          ],
          correctAnswer: 0,
          explanation: "SQL stands for Structured Query Language, used for managing databases."
        },
        {
          id: 2,
          question: "Which SQL command is used to retrieve data from a database?",
          options: ["GET", "SELECT", "RETRIEVE", "FIND"],
          correctAnswer: 1,
          explanation: "The SELECT command is used to retrieve data from a database."
        },
        {
          id: 3,
          question: "What is a primary key in a database?",
          options: [
            "A key that opens the database",
            "A unique identifier for each record",
            "The first column in a table",
            "The most important data field"
          ],
          correctAnswer: 1,
          explanation: "A primary key uniquely identifies each record in a database table."
        },
        {
          id: 4,
          question: "Which SQL clause is used to filter records?",
          options: ["FILTER BY", "WHERE", "HAVING", "CONDITION"],
          correctAnswer: 1,
          explanation: "The WHERE clause is used to filter records based on specified conditions."
        },
        {
          id: 5,
          question: "What does the UPDATE command do in SQL?",
          options: [
            "Adds new records to a table",
            "Modifies existing records in a table",
            "Changes the table structure",
            "Updates the database software"
          ],
          correctAnswer: 1,
          explanation: "The UPDATE command modifies existing records in a database table."
        }
      ]
    },
    {
      id: 5,
      title: 'Science and Curiosity',
      subject: 'English',
      questions: 5,
      duration: 8,
      difficulty: 'Easy',
      attempts: 1050,
      rating: 4.4,
      topics: ['Vocabulary', 'Comprehension', 'Grammar'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the meaning of 'curiosity'?",
          options: [
            "A state of fear",
            "A desire to learn or know",
            "A type of scientific instrument",
            "A rare animal"
          ],
          correctAnswer: 1,
          explanation: "Curiosity means a strong desire to know or learn something."
        },
        {
          id: 2,
          question: "Which word best describes a scientist?",
          options: ["Inquisitive", "Indifferent", "Uninterested", "Boring"],
          correctAnswer: 0,
          explanation: "Scientists are typically inquisitive, meaning curious and eager to learn."
        },
        {
          id: 3,
          question: "What is the correct plural form of 'hypothesis'?",
          options: ["Hypothesises", "Hypothesi", "Hypotheses", "Hypothesis"],
          correctAnswer: 2,
          explanation: "The plural of hypothesis is hypotheses."
        },
        {
          id: 4,
          question: "Which sentence is grammatically correct?",
          options: [
            "The experiment were successful",
            "The experiment was successful",
            "The experiment are successful",
            "The experiment am successful"
          ],
          correctAnswer: 1,
          explanation: "The experiment was successful' is correct as 'experiment' is singular."
        },
        {
          id: 5,
          question: "What does 'empirical evidence' mean?",
          options: [
            "Evidence based on theory",
            "Evidence based on observation or experience",
            "Evidence from ancient texts",
            "Evidence that cannot be verified"
          ],
          correctAnswer: 1,
          explanation: "Empirical evidence is information acquired by observation or experimentation."
        }
      ]
    }
  ];

  const recentResults = [
    { name: 'Aarav', score: 96, subject: 'Mathematics', avatar: '👨‍🎓' },
    { name: 'Neha', score: 94, subject: 'Physics', avatar: '👩‍🎓' },
    { name: 'Vikram', score: 91, subject: 'Social Studies', avatar: '👨‍🎓' },
    { name: 'Priya', score: 89, subject: 'Computer Science', avatar: '👩‍🎓' }
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
                  Master Your <span className="gradient-text">Grade 8</span> Skills
                </h1>
                <p className="hero-subtitle">
                  Comprehensive practice tests designed specifically for Grade 8 curriculum. 
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
                    <div className="test-title">Grade 8 Test</div>
                  </div>
                  <div className="test-content">
                    <div className="question-preview">
                      <div className="question-number">Q1.</div>
                      <div className="question-text">What is the square of 15?</div>
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

export default PracticeGrade8;