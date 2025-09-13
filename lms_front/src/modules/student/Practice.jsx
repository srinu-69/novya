import React, { useState, useEffect,useCallback,useRef } from 'react';
import { Clock,  BookOpen, Target, ChevronRight, Play, Users,  Star, X, Check, ArrowLeft } from 'lucide-react';
import './practice.css';
const Practice = () => {
  useEffect(() => {
      document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";
    }, []);
    const subjectSectionRef = useRef(null);
  const [selectedGrade, setSelectedGrade] = useState('7');
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [activeFilter, setActiveFilter] = useState('all');
  const [testStarted, setTestStarted] = useState(false);
  const [currentTest, setCurrentTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonGrade, setComingSoonGrade] = useState(null);
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

    animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
    animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
    animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
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
    { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 45, difficulty: 'Medium', duration: '90 min' },
    { id: 'physics', name: 'Physics', icon: '⚡', tests: 38, difficulty: 'Hard', duration: '120 min' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪', tests: 42, difficulty: 'Medium', duration: '90 min' },
    { id: 'biology', name: 'Biology', icon: '🧬', tests: 35, difficulty: 'Easy', duration: '75 min' },
    { id: 'english', name: 'English', icon: '📚', tests: 40, difficulty: 'Easy', duration: '60 min' },
    { id: 'history', name: 'History', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '75 min' }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'Advanced Algebra & Trigonometry',
      subject: 'Mathematics',
      questions: 5,
      duration: 10,
      difficulty: 'Hard',
      attempts: 1250,
      rating: 4.8,
      topics: ['Quadratic Equations', 'Trigonometric Functions', 'Logarithms'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the derivative of x²?",
          options: ["2x", "x", "2", "x²"],
          correctAnswer: 0,
          explanation: "The derivative of x² is 2x according to the power rule of differentiation."
        },
        {
          id: 2,
          question: "What is the solution to the equation 2x + 5 = 15?",
          options: ["x = 5", "x = 10", "x = 7.5", "x = 3"],
          correctAnswer: 0,
          explanation: "Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5."
        },
        {
          id: 3,
          question: "What is the value of sin(π/2)?",
          options: ["0", "1", "0.5", "√2/2"],
          correctAnswer: 1,
          explanation: "The sine of π/2 radians (90 degrees) is 1."
        },
        {
          id: 4,
          question: "What is the logarithm of 100 with base 10?",
          options: ["1", "2", "10", "100"],
          correctAnswer: 1,
          explanation: "10² = 100, so log₁₀100 = 2."
        },
        {
          id: 5,
          question: "What is the quadratic formula?",
          options: [
            "x = (-b ± √(b² - 4ac)) / 2a",
            "x = (b ± √(b² - 4ac)) / 2a",
            "x = (-b ± √(b² + 4ac)) / 2a",
            "x = (b ± √(b² + 4ac)) / 2a"
          ],
          correctAnswer: 0,
          explanation: "The quadratic formula for solving ax² + bx + c = 0 is x = (-b ± √(b² - 4ac)) / 2a."
        }
      ]
    },
    {
      id: 2,
      title: 'Mechanics & Motion',
      subject: 'Physics',
      questions: 4,
      duration: 8,
      difficulty: 'Hard',
      attempts: 980,
      rating: 4.9,
      topics: ['Newton\'s Laws', 'Projectile Motion', 'Work & Energy'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "What is Newton's First Law of Motion?",
          options: [
            "F = ma",
            "An object in motion stays in motion unless acted upon by an external force",
            "For every action there is an equal and opposite reaction",
            "Energy cannot be created or destroyed"
          ],
          correctAnswer: 1,
          explanation: "Newton's First Law, also called the Law of Inertia, states that an object will remain at rest or in uniform motion unless acted upon by an external force."
        },
        {
          id: 2,
          question: "What is the acceleration due to gravity on Earth?",
          options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
          correctAnswer: 0,
          explanation: "The standard acceleration due to gravity on Earth's surface is approximately 9.8 m/s²."
        },
        {
          id: 3,
          question: "What is the formula for kinetic energy?",
          options: ["½mv²", "mgh", "Fd", "ma"],
          correctAnswer: 0,
          explanation: "The kinetic energy of an object is given by ½mv² where m is mass and v is velocity."
        },
        {
          id: 4,
          question: "What is the unit of force in the SI system?",
          options: ["Joule", "Watt", "Newton", "Pascal"],
          correctAnswer: 2,
          explanation: "The SI unit of force is the Newton, named after Sir Isaac Newton."
        }
      ]
    },
    {
      id: 3,
      title: 'Organic Chemistry Fundamentals',
      subject: 'Chemistry',
      questions: 4,
      duration: 8,
      difficulty: 'Medium',
      attempts: 1100,
      rating: 4.7,
      topics: ['Hydrocarbons', 'Functional Groups', 'Reactions'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the simplest hydrocarbon?",
          options: ["Methane", "Ethane", "Propane", "Butane"],
          correctAnswer: 0,
          explanation: "Methane (CH₄) is the simplest hydrocarbon with just one carbon atom."
        },
        {
          id: 2,
          question: "Which functional group defines an alcohol?",
          options: ["-COOH", "-OH", "-CHO", "-NH₂"],
          correctAnswer: 1,
          explanation: "The hydroxyl group (-OH) is characteristic of alcohols."
        },
        {
          id: 3,
          question: "What type of reaction is combustion?",
          options: ["Addition", "Substitution", "Oxidation", "Polymerization"],
          correctAnswer: 2,
          explanation: "Combustion is an oxidation reaction where a substance reacts with oxygen."
        },
        {
          id: 4,
          question: "What is the general formula for alkanes?",
          options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
          correctAnswer: 1,
          explanation: "Alkanes have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms."
        }
      ]
    },
    {
      id: 4,
      title: 'Cell Biology & Genetics',
      subject: 'Biology',
      questions: 4,
      duration: 8,
      difficulty: 'Easy',
      attempts: 1350,
      rating: 4.6,
      topics: ['Cell Structure', 'DNA & RNA', 'Heredity'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
          correctAnswer: 1,
          explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's ATP."
        },
        {
          id: 2,
          question: "What does DNA stand for?",
          options: [
            "Deoxyribonucleic Acid",
            "Dinucleic Acid",
            "Double Nuclear Acid",
            "Deoxynucleic Acid"
          ],
          correctAnswer: 0,
          explanation: "DNA stands for Deoxyribonucleic Acid."
        },
        {
          id: 3,
          question: "Which organelle is responsible for protein synthesis?",
          options: ["Mitochondria", "Nucleus", "Ribosome", "Lysosome"],
          correctAnswer: 2,
          explanation: "Ribosomes are the cellular structures responsible for protein synthesis."
        },
        {
          id: 4,
          question: "What is the basic unit of heredity?",
          options: ["Chromosome", "Gene", "Protein", "Nucleotide"],
          correctAnswer: 1,
          explanation: "Genes are the basic physical and functional units of heredity."
        }
      ]
    },
    {
      id: 5,
      title: 'Grammar & Composition',
      subject: 'English',
      questions: 4,
      duration: 8,
      difficulty: 'Easy',
      attempts: 1200,
      rating: 4.5,
      topics: ['Parts of Speech', 'Sentence Structure', 'Punctuation'],
      premium: true,
      questionsData: [
        {
          id: 1,
          question: "Which of these is a noun?",
          options: ["Run", "Beautiful", "Quickly", "Happiness"],
          correctAnswer: 3,
          explanation: "Happiness is a noun representing a state of being."
        },
        {
          id: 2,
          question: "What is the subject in the sentence: 'The cat sat on the mat'?",
          options: ["The cat", "sat", "on the mat", "the mat"],
          correctAnswer: 0,
          explanation: "The subject is 'The cat' as it's the doer of the action."
        },
        {
          id: 3,
          question: "Which punctuation mark is used at the end of a declarative sentence?",
          options: ["Question mark", "Exclamation point", "Period", "Comma"],
          correctAnswer: 2,
          explanation: "A period (.) is used at the end of a declarative sentence."
        },
        {
          id: 4,
          question: "What type of word describes a noun?",
          options: ["Verb", "Adjective", "Adverb", "Preposition"],
          correctAnswer: 1,
          explanation: "Adjectives describe or modify nouns."
        }
      ]
    },
    {
      id: 6,
      title: 'World History: Ancient Civilizations',
      subject: 'History',
      questions: 4,
      duration: 8,
      difficulty: 'Medium',
      attempts: 950,
      rating: 4.4,
      topics: ['Mesopotamia', 'Egypt', 'Indus Valley', 'China'],
      premium: false,
      questionsData: [
        {
          id: 1,
          question: "Which ancient civilization developed between the Tigris and Euphrates rivers?",
          options: ["Egypt", "Mesopotamia", "Indus Valley", "China"],
          correctAnswer: 1,
          explanation: "Mesopotamia, meaning 'land between rivers', developed between the Tigris and Euphrates."
        },
        {
          id: 2,
          question: "What was the writing system of ancient Egypt called?",
          options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Alphabet"],
          correctAnswer: 1,
          explanation: "Ancient Egyptians used hieroglyphics as their writing system."
        },
        {
          id: 3,
          question: "Which ancient civilization built the Great Wall?",
          options: ["India", "Greece", "China", "Rome"],
          correctAnswer: 2,
          explanation: "The Great Wall was built by various Chinese dynasties."
        },
        {
          id: 4,
          question: "What was the main river of ancient Egypt?",
          options: ["Tigris", "Euphrates", "Nile", "Indus"],
          correctAnswer: 2,
          explanation: "The Nile River was central to ancient Egyptian civilization."
        }
      ]
    }
  ];

  const recentResults = [
    { name: 'Lokesh', score: 98, subject: 'Mathematics', avatar: '👨‍🎓' },
    { name: 'Priya Patel', score: 95, subject: 'Physics', avatar: '👩‍🎓' },
    { name: 'Rohit Kumar', score: 92, subject: 'Chemistry', avatar: '👨‍🎓' },
    { name: 'Sneha Singh', score: 88, subject: 'Biology', avatar: '👩‍🎓' }
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
    setTimeLeft(test.duration * 60); // Convert minutes to seconds
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


  // Timer effect
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
}, [testStarted, testSubmitted, submitTest]);  // ✅ now safe


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
                  Master Your Skills with 
                  <span className="gradient-text"> Mock Tests</span>
                </h1>
                <p className="hero-subtitle">
                  Practice makes perfect! Take comprehensive mock tests designed for grades 7-12 
                  and boost your confidence before the real exam.
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
                    <div className="test-title">Practice Test</div>
                  </div>
                  <div className="test-content">
                    <div className="question-preview">
                      <div className="question-number">Q1.</div>
                      <div className="question-text">What is the derivative of x²?</div>
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
  <div className="grade-cards" style={{ position: "relative" }}>
    {grades.map((grade) => (
      <div
        key={grade.value}
        className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
        onClick={() => {
          setSelectedGrade(grade.value);
          if (grade.value !== '7') {
            setComingSoonGrade(grade.value);
            setShowComingSoon(true);
            setTimeout(() => setShowComingSoon(false), 2000);
          } else {
            setTimeout(() => {
              subjectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }
        }}
        style={{ '--grade-color': grade.color, position: "relative" }}
      >
        {/* Toast message above the selected card */}
        {showComingSoon && comingSoonGrade === grade.value && grade.value !== '7' && (
          <div
            style={{
              position: "absolute",
              top: "-48px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#2D5D7B",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(45,93,123,0.12)",
              zIndex: 10,
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
              whiteSpace: "nowrap",
              animation: "fadeInOut 2s"
            }}
          >
            Coming Soon!
          </div>
        )}
        <div className="grade-number">{grade.value}</div>
        <div className="grade-label">{grade.label}</div>
        <div className="grade-glow"></div>
      </div>
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
          // Automatically start the first test for this subject
          const firstTest = mockTests.find(
            (test) => test.subject.toLowerCase() === subject.id.toLowerCase()
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
                  {/* <div className="result-rank">#{index + 1}</div> */}
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

          {/* CTA Section */}
          {/* <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Test Your Knowledge?</h2>
              <p>Join thousands of students who have improved their scores with our mock tests</p>
              <div className="cta-buttons">
                <button 
                  className="cta-btn primary"
                  onClick={() => {
                    const firstTest = mockTests[0];
                    if (firstTest) startTest(firstTest);
                  }}
                >
                  <Award size={20} />
                  Start Free Test
                </button>
                <button className="cta-btn secondary">
                  <TrendingUp size={20} />
                  View Analytics
                </button>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
            </div>
          </section> */}
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
      )}{showComingSoon && (
  <div
    className="toast-coming-soon"
    style={{
      position: "fixed",
      bottom: "32px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#2D5D7B",
      color: "#fff",
      padding: "0.9rem 2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 16px rgba(45,93,123,0.15)",
      zIndex: 9999,
      fontSize: "1.1rem",
      fontWeight: 600,
      textAlign: "center",
      whiteSpace: "nowrap",
      animation: "fadeInOut 2s"
    }}
  >
    Coming Soon!
  </div>
)}
    </div>
  );
};

export default Practice;