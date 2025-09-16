// // import React, { useState, useEffect,useCallback,useRef } from 'react';
// // import { Clock,  BookOpen, Target, ChevronRight, Play, Users,  Star, X, Check, ArrowLeft } from 'lucide-react';
// // import './practice.css';
// // const Practice = () => {
// //   useEffect(() => {
// //       document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";
// //     }, []);
// //     const subjectSectionRef = useRef(null);
// //   const [selectedGrade, setSelectedGrade] = useState('7');
// //   const [selectedSubject, setSelectedSubject] = useState('mathematics');
// //   const [activeFilter, setActiveFilter] = useState('all');
// //   const [testStarted, setTestStarted] = useState(false);
// //   const [currentTest, setCurrentTest] = useState(null);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [timeLeft, setTimeLeft] = useState(0);
// //   const [testSubmitted, setTestSubmitted] = useState(false);
// //   const [score, setScore] = useState(0);
// //   const [showComingSoon, setShowComingSoon] = useState(false);
// //   const [comingSoonGrade, setComingSoonGrade] = useState(null);
// //   const [animatedStats, setAnimatedStats] = useState({
// //     totalTests: 0,
// //     studentsEnrolled: 0,
// //     avgScore: 0
// //   });

// //   // Animate stats on component mount
// //   useEffect(() => {
// //     const animateValue = (start, end, duration, callback) => {
// //       let startTimestamp = null;
// //       const step = (timestamp) => {
// //         if (!startTimestamp) startTimestamp = timestamp;
// //         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
// //         const current = Math.floor(progress * (end - start) + start);
// //         callback(current);
// //         if (progress < 1) {
// //           window.requestAnimationFrame(step);
// //         }
// //       };
// //       window.requestAnimationFrame(step);
// //     };

// //     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
// //     animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
// //     animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
// //   }, []);

// //   const grades = [
// //     { value: '7', label: 'Grade 7', color: '#FF6B6B' },
// //     { value: '8', label: 'Grade 8', color: '#4ECDC4' },
// //     { value: '9', label: 'Grade 9', color: '#45B7D1' },
// //     { value: '10', label: 'Grade 10', color: '#96CEB4' },
// //     { value: '11', label: 'Grade 11', color: '#FFEAA7' },
// //     { value: '12', label: 'Grade 12', color: '#DDA0DD' }
// //   ];

// //   const subjects = [
// //     { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 45, difficulty: 'Medium', duration: '90 min' },
// //     { id: 'physics', name: 'Physics', icon: '⚡', tests: 38, difficulty: 'Hard', duration: '120 min' },
// //     { id: 'chemistry', name: 'Chemistry', icon: '🧪', tests: 42, difficulty: 'Medium', duration: '90 min' },
// //     { id: 'biology', name: 'Biology', icon: '🧬', tests: 35, difficulty: 'Easy', duration: '75 min' },
// //     { id: 'english', name: 'English', icon: '📚', tests: 40, difficulty: 'Easy', duration: '60 min' },
// //     { id: 'history', name: 'History', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '75 min' }
// //   ];

// //   const mockTests = [
// //     {
// //       id: 1,
// //       title: 'Advanced Algebra & Trigonometry',
// //       subject: 'Mathematics',
// //       questions: 5,
// //       duration: 10,
// //       difficulty: 'Hard',
// //       attempts: 1250,
// //       rating: 4.8,
// //       topics: ['Quadratic Equations', 'Trigonometric Functions', 'Logarithms'],
// //       premium: false,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "What is the derivative of x²?",
// //           options: ["2x", "x", "2", "x²"],
// //           correctAnswer: 0,
// //           explanation: "The derivative of x² is 2x according to the power rule of differentiation."
// //         },
// //         {
// //           id: 2,
// //           question: "What is the solution to the equation 2x + 5 = 15?",
// //           options: ["x = 5", "x = 10", "x = 7.5", "x = 3"],
// //           correctAnswer: 0,
// //           explanation: "Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5."
// //         },
// //         {
// //           id: 3,
// //           question: "What is the value of sin(π/2)?",
// //           options: ["0", "1", "0.5", "√2/2"],
// //           correctAnswer: 1,
// //           explanation: "The sine of π/2 radians (90 degrees) is 1."
// //         },
// //         {
// //           id: 4,
// //           question: "What is the logarithm of 100 with base 10?",
// //           options: ["1", "2", "10", "100"],
// //           correctAnswer: 1,
// //           explanation: "10² = 100, so log₁₀100 = 2."
// //         },
// //         {
// //           id: 5,
// //           question: "What is the quadratic formula?",
// //           options: [
// //             "x = (-b ± √(b² - 4ac)) / 2a",
// //             "x = (b ± √(b² - 4ac)) / 2a",
// //             "x = (-b ± √(b² + 4ac)) / 2a",
// //             "x = (b ± √(b² + 4ac)) / 2a"
// //           ],
// //           correctAnswer: 0,
// //           explanation: "The quadratic formula for solving ax² + bx + c = 0 is x = (-b ± √(b² - 4ac)) / 2a."
// //         }
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: 'Mechanics & Motion',
// //       subject: 'Physics',
// //       questions: 4,
// //       duration: 8,
// //       difficulty: 'Hard',
// //       attempts: 980,
// //       rating: 4.9,
// //       topics: ['Newton\'s Laws', 'Projectile Motion', 'Work & Energy'],
// //       premium: true,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "What is Newton's First Law of Motion?",
// //           options: [
// //             "F = ma",
// //             "An object in motion stays in motion unless acted upon by an external force",
// //             "For every action there is an equal and opposite reaction",
// //             "Energy cannot be created or destroyed"
// //           ],
// //           correctAnswer: 1,
// //           explanation: "Newton's First Law, also called the Law of Inertia, states that an object will remain at rest or in uniform motion unless acted upon by an external force."
// //         },
// //         {
// //           id: 2,
// //           question: "What is the acceleration due to gravity on Earth?",
// //           options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
// //           correctAnswer: 0,
// //           explanation: "The standard acceleration due to gravity on Earth's surface is approximately 9.8 m/s²."
// //         },
// //         {
// //           id: 3,
// //           question: "What is the formula for kinetic energy?",
// //           options: ["½mv²", "mgh", "Fd", "ma"],
// //           correctAnswer: 0,
// //           explanation: "The kinetic energy of an object is given by ½mv² where m is mass and v is velocity."
// //         },
// //         {
// //           id: 4,
// //           question: "What is the unit of force in the SI system?",
// //           options: ["Joule", "Watt", "Newton", "Pascal"],
// //           correctAnswer: 2,
// //           explanation: "The SI unit of force is the Newton, named after Sir Isaac Newton."
// //         }
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: 'Organic Chemistry Fundamentals',
// //       subject: 'Chemistry',
// //       questions: 4,
// //       duration: 8,
// //       difficulty: 'Medium',
// //       attempts: 1100,
// //       rating: 4.7,
// //       topics: ['Hydrocarbons', 'Functional Groups', 'Reactions'],
// //       premium: false,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "What is the simplest hydrocarbon?",
// //           options: ["Methane", "Ethane", "Propane", "Butane"],
// //           correctAnswer: 0,
// //           explanation: "Methane (CH₄) is the simplest hydrocarbon with just one carbon atom."
// //         },
// //         {
// //           id: 2,
// //           question: "Which functional group defines an alcohol?",
// //           options: ["-COOH", "-OH", "-CHO", "-NH₂"],
// //           correctAnswer: 1,
// //           explanation: "The hydroxyl group (-OH) is characteristic of alcohols."
// //         },
// //         {
// //           id: 3,
// //           question: "What type of reaction is combustion?",
// //           options: ["Addition", "Substitution", "Oxidation", "Polymerization"],
// //           correctAnswer: 2,
// //           explanation: "Combustion is an oxidation reaction where a substance reacts with oxygen."
// //         },
// //         {
// //           id: 4,
// //           question: "What is the general formula for alkanes?",
// //           options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
// //           correctAnswer: 1,
// //           explanation: "Alkanes have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms."
// //         }
// //       ]
// //     },
// //     {
// //       id: 4,
// //       title: 'Cell Biology & Genetics',
// //       subject: 'Biology',
// //       questions: 4,
// //       duration: 8,
// //       difficulty: 'Easy',
// //       attempts: 1350,
// //       rating: 4.6,
// //       topics: ['Cell Structure', 'DNA & RNA', 'Heredity'],
// //       premium: false,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "What is the powerhouse of the cell?",
// //           options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
// //           correctAnswer: 1,
// //           explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's ATP."
// //         },
// //         {
// //           id: 2,
// //           question: "What does DNA stand for?",
// //           options: [
// //             "Deoxyribonucleic Acid",
// //             "Dinucleic Acid",
// //             "Double Nuclear Acid",
// //             "Deoxynucleic Acid"
// //           ],
// //           correctAnswer: 0,
// //           explanation: "DNA stands for Deoxyribonucleic Acid."
// //         },
// //         {
// //           id: 3,
// //           question: "Which organelle is responsible for protein synthesis?",
// //           options: ["Mitochondria", "Nucleus", "Ribosome", "Lysosome"],
// //           correctAnswer: 2,
// //           explanation: "Ribosomes are the cellular structures responsible for protein synthesis."
// //         },
// //         {
// //           id: 4,
// //           question: "What is the basic unit of heredity?",
// //           options: ["Chromosome", "Gene", "Protein", "Nucleotide"],
// //           correctAnswer: 1,
// //           explanation: "Genes are the basic physical and functional units of heredity."
// //         }
// //       ]
// //     },
// //     {
// //       id: 5,
// //       title: 'Grammar & Composition',
// //       subject: 'English',
// //       questions: 4,
// //       duration: 8,
// //       difficulty: 'Easy',
// //       attempts: 1200,
// //       rating: 4.5,
// //       topics: ['Parts of Speech', 'Sentence Structure', 'Punctuation'],
// //       premium: true,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "Which of these is a noun?",
// //           options: ["Run", "Beautiful", "Quickly", "Happiness"],
// //           correctAnswer: 3,
// //           explanation: "Happiness is a noun representing a state of being."
// //         },
// //         {
// //           id: 2,
// //           question: "What is the subject in the sentence: 'The cat sat on the mat'?",
// //           options: ["The cat", "sat", "on the mat", "the mat"],
// //           correctAnswer: 0,
// //           explanation: "The subject is 'The cat' as it's the doer of the action."
// //         },
// //         {
// //           id: 3,
// //           question: "Which punctuation mark is used at the end of a declarative sentence?",
// //           options: ["Question mark", "Exclamation point", "Period", "Comma"],
// //           correctAnswer: 2,
// //           explanation: "A period (.) is used at the end of a declarative sentence."
// //         },
// //         {
// //           id: 4,
// //           question: "What type of word describes a noun?",
// //           options: ["Verb", "Adjective", "Adverb", "Preposition"],
// //           correctAnswer: 1,
// //           explanation: "Adjectives describe or modify nouns."
// //         }
// //       ]
// //     },
// //     {
// //       id: 6,
// //       title: 'World History: Ancient Civilizations',
// //       subject: 'History',
// //       questions: 4,
// //       duration: 8,
// //       difficulty: 'Medium',
// //       attempts: 950,
// //       rating: 4.4,
// //       topics: ['Mesopotamia', 'Egypt', 'Indus Valley', 'China'],
// //       premium: false,
// //       questionsData: [
// //         {
// //           id: 1,
// //           question: "Which ancient civilization developed between the Tigris and Euphrates rivers?",
// //           options: ["Egypt", "Mesopotamia", "Indus Valley", "China"],
// //           correctAnswer: 1,
// //           explanation: "Mesopotamia, meaning 'land between rivers', developed between the Tigris and Euphrates."
// //         },
// //         {
// //           id: 2,
// //           question: "What was the writing system of ancient Egypt called?",
// //           options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Alphabet"],
// //           correctAnswer: 1,
// //           explanation: "Ancient Egyptians used hieroglyphics as their writing system."
// //         },
// //         {
// //           id: 3,
// //           question: "Which ancient civilization built the Great Wall?",
// //           options: ["India", "Greece", "China", "Rome"],
// //           correctAnswer: 2,
// //           explanation: "The Great Wall was built by various Chinese dynasties."
// //         },
// //         {
// //           id: 4,
// //           question: "What was the main river of ancient Egypt?",
// //           options: ["Tigris", "Euphrates", "Nile", "Indus"],
// //           correctAnswer: 2,
// //           explanation: "The Nile River was central to ancient Egyptian civilization."
// //         }
// //       ]
// //     }
// //   ];

// //   const recentResults = [
// //     { name: 'Lokesh', score: 98, subject: 'Mathematics', avatar: '👨‍🎓' },
// //     { name: 'Priya Patel', score: 95, subject: 'Physics', avatar: '👩‍🎓' },
// //     { name: 'Rohit Kumar', score: 92, subject: 'Chemistry', avatar: '👨‍🎓' },
// //     { name: 'Sneha Singh', score: 88, subject: 'Biology', avatar: '👩‍🎓' }
// //   ];

// //   const filteredTests = mockTests.filter(test => {
// //     if (activeFilter === 'all') return true;
// //     if (activeFilter === 'free') return !test.premium;
// //     if (activeFilter === 'premium') return test.premium;
// //     return true;
// //   });

// //   const getDifficultyColor = (difficulty) => {
// //     switch (difficulty) {
// //       case 'Easy': return '#4CAF50';
// //       case 'Medium': return '#FF9800';
// //       case 'Hard': return '#F44336';
// //       default: return '#666';
// //     }
// //   };

// //   const startTest = (test) => {
// //     setCurrentTest(test);
// //     setTimeLeft(test.duration * 60); // Convert minutes to seconds
// //     setTestStarted(true);
// //     setSelectedAnswers({});
// //     setCurrentQuestionIndex(0);
// //     setTestSubmitted(false);
// //     setScore(0);
// //   };

// //   const handleAnswerSelect = (questionId, answerIndex) => {
// //     setSelectedAnswers(prev => ({
// //       ...prev,
// //       [questionId]: answerIndex
// //     }));
// //   };

// //   const goToNextQuestion = () => {
// //     if (currentQuestionIndex < currentTest.questionsData.length - 1) {
// //       setCurrentQuestionIndex(prev => prev + 1);
// //     }
// //   };

// //   const goToPreviousQuestion = () => {
// //     if (currentQuestionIndex > 0) {
// //       setCurrentQuestionIndex(prev => prev - 1);
// //     }
// //   };

// //  const submitTest = useCallback(() => {
// //   let correctAnswers = 0;
// //   currentTest.questionsData.forEach(question => {
// //     if (selectedAnswers[question.id] === question.correctAnswer) {
// //       correctAnswers++;
// //     }
// //   });
// //   const calculatedScore = Math.round(
// //     (correctAnswers / currentTest.questionsData.length) * 100
// //   );
// //   setScore(calculatedScore);
// //   setTestSubmitted(true);
// // }, [currentTest, selectedAnswers]);


// //   // Timer effect
// //  useEffect(() => {
// //   if (!testStarted || testSubmitted) return;

// //   const timer = setInterval(() => {
// //     setTimeLeft(prev => {
// //       if (prev <= 1) {
// //         clearInterval(timer);
// //         submitTest();
// //         return 0;
// //       }
// //       return prev - 1;
// //     });
// //   }, 1000);

// //   return () => clearInterval(timer);
// // }, [testStarted, testSubmitted, submitTest]);  // ✅ now safe


// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// //   };

// //   const exitTest = () => {
// //     setTestStarted(false);
// //     setCurrentTest(null);
// //   };

// //   const currentQuestion = currentTest?.questionsData?.[currentQuestionIndex];

// //   return (
// //     <div className="practice-container">
// //       {/* Animated Background Elements */}
// //       <div className="bg-elements">
// //         <div className="floating-shape shape-1"></div>
// //         <div className="floating-shape shape-2"></div>
// //         <div className="floating-shape shape-3"></div>
// //         <div className="floating-shape shape-4"></div>
// //       </div>

// //       {!testStarted ? (
// //         <>
// //           {/* Hero Section */}
// //           <section className="hero-section">
// //             <div className="hero-content">
// //               <div className="hero-text">
// //                 <h1 className="hero-title">
// //                   Master Your Skills with 
// //                   <span className="gradient-text"> Mock Tests</span>
// //                 </h1>
// //                 <p className="hero-subtitle">
// //                   Practice makes perfect! Take comprehensive mock tests designed for grades 7-12 
// //                   and boost your confidence before the real exam.
// //                 </p>
                
// //                 {/* Animated Stats */}
// //                 <div className="stats-container">
// //                   <div className="stat-item">
// //                     <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
// //                     <div className="stat-label">Mock Tests</div>
// //                   </div>
// //                   <div className="stat-item">
// //                     <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
// //                     <div className="stat-label">Students</div>
// //                   </div>
// //                   <div className="stat-item">
// //                     <div className="stat-number">{animatedStats.avgScore}%</div>
// //                     <div className="stat-label">Avg Score</div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="hero-visual">
// //                 <div className="test-preview">
// //                   <div className="test-header">
// //                     <div className="test-dots">
// //                       <span></span><span></span><span></span>
// //                     </div>
// //                     <div className="test-title">Practice Test</div>
// //                   </div>
// //                   <div className="test-content">
// //                     <div className="question-preview">
// //                       <div className="question-number">Q1.</div>
// //                       <div className="question-text">What is the derivative of x²?</div>
// //                     </div>
// //                     <div className="options-preview">
// //                       <div className="option-line active"></div>
// //                       <div className="option-line"></div>
// //                       <div className="option-line"></div>
// //                       <div className="option-line"></div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Grade Selection */}
// //          <section className="grade-selection-section">
// //   <h2 className="section-title">Choose Your Grade</h2>
// //   <div className="grade-cards" style={{ position: "relative" }}>
// //     {grades.map((grade) => (
// //       <div
// //         key={grade.value}
// //         className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
// //         onClick={() => {
// //           setSelectedGrade(grade.value);
// //           if (grade.value !== '7') {
// //             setComingSoonGrade(grade.value);
// //             setShowComingSoon(true);
// //             setTimeout(() => setShowComingSoon(false), 2000);
// //           } else {
// //             setTimeout(() => {
// //               subjectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
// //             }, 200);
// //           }
// //         }}
// //         style={{ '--grade-color': grade.color, position: "relative" }}
// //       >
// //         {/* Toast message above the selected card */}
// //         {showComingSoon && comingSoonGrade === grade.value && grade.value !== '7' && (
// //           <div
// //             style={{
// //               position: "absolute",
// //               top: "-48px",
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //               background: "#2D5D7B",
// //               color: "#fff",
// //               padding: "0.7rem 1.5rem",
// //               borderRadius: "8px",
// //               boxShadow: "0 4px 16px rgba(45,93,123,0.12)",
// //               zIndex: 10,
// //               fontSize: "1rem",
// //               fontWeight: 600,
// //               textAlign: "center",
// //               whiteSpace: "nowrap",
// //               animation: "fadeInOut 2s"
// //             }}
// //           >
// //             Coming Soon!
// //           </div>
// //         )}
// //         <div className="grade-number">{grade.value}</div>
// //         <div className="grade-label">{grade.label}</div>
// //         <div className="grade-glow"></div>
// //       </div>
// //     ))}
// //   </div>
// // </section>


// //       {/* Subject Selection */}
// //       <section className="subject-selection-section" ref={subjectSectionRef}>
// //   <h2 className="section-title">Select Subject</h2>
// //   <div className="subjects-grid">
// //     {subjects.map((subject) => (
// //       <div 
// //         key={subject.id}
// //         className={`subject-card ${selectedSubject === subject.id ? 'active' : ''}`}
// //         onClick={() => {
// //           setSelectedSubject(subject.id);
// //           // Automatically start the first test for this subject
// //           const firstTest = mockTests.find(
// //             (test) => test.subject.toLowerCase() === subject.id.toLowerCase()
// //           );
// //           if (firstTest) startTest(firstTest);
// //         }}
// //       >
// //         <div className="subject-icon">{subject.icon}</div>
// //         <h3 className="subject-name">{subject.name}</h3>
// //         <div className="subject-stats">
// //           <div className="stat">
// //             <BookOpen size={16} />
// //             <span>{subject.tests} Tests</span>
// //           </div>
// //           <div className="stat">
// //             <Target size={16} />
// //             <span>{subject.difficulty}</span>
// //           </div>
// //           <div className="stat">
// //             <Clock size={16} />
// //             <span>{subject.duration}</span>
// //           </div>
// //         </div>
// //         <div className="card-hover-effect"></div>
// //       </div>
// //     ))}
// //   </div>
// // </section>


// //           {/* Mock Tests Grid */}
// //           <section className="mock-tests-section">
// //             <div className="section-header">
// //               <h2 className="section-title">Available Mock Tests</h2>
// //               <div className="filter-tabs">
// //                 <button 
// //                   className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
// //                   onClick={() => setActiveFilter('all')}
// //                 >
// //                   All Tests
// //                 </button>
// //                 <button 
// //                   className={`filter-tab ${activeFilter === 'free' ? 'active' : ''}`}
// //                   onClick={() => setActiveFilter('free')}
// //                 >
// //                   Medium
// //                 </button>
// //                 <button 
// //                   className={`filter-tab ${activeFilter === 'premium' ? 'active' : ''}`}
// //                   onClick={() => setActiveFilter('premium')}
// //                 >
// //                  Advanced
// //                 </button>
// //               </div>
// //             </div>
            
// //             <div className="mock-tests-grid">
// //               {filteredTests.map((test) => (
// //                 <div key={test.id} className="mock-test-card">
// //                   {test.premium && <div className="premium-badge">Advanced</div>}
                  
// //                   <div className="test-header">
// //                     <h3 className="test-title">{test.title}</h3>
// //                     <div className="test-rating">
// //                       <Star size={14} fill="currentColor" />
// //                       <span>{test.rating}</span>
// //                     </div>
// //                   </div>
                  
// //                   <div className="test-subject">{test.subject}</div>
                  
// //                   <div className="test-meta">
// //                     <div className="meta-item">
// //                       <BookOpen size={16} />
// //                       <span>{test.questions} Questions</span>
// //                     </div>
// //                     <div className="meta-item">
// //                       <Clock size={16} />
// //                       <span>{test.duration} min</span>
// //                     </div>
// //                     <div className="meta-item">
// //                       <Target size={16} />
// //                       <span 
// //                         className="difficulty-badge"
// //                         style={{ color: getDifficultyColor(test.difficulty) }}
// //                       >
// //                         {test.difficulty}
// //                       </span>
// //                     </div>
// //                   </div>
                  
// //                   <div className="test-topics">
// //                     {test.topics.map((topic, index) => (
// //                       <span key={index} className="topic-tag">{topic}</span>
// //                     ))}
// //                   </div>
                  
// //                   <div className="test-stats">
// //                     <div className="stat-item">
// //                       <Users size={16} />
// //                       <span>{test.attempts} attempts</span>
// //                     </div>
// //                   </div>
                  
// //                   <button 
// //                     className="start-test-btn"
// //                     onClick={() => startTest(test)}
// //                   >
// //                     <Play size={18} />
// //                     Start Test
// //                     <ChevronRight size={16} />
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Recent Results */}
// //           <section className="recent-results-section">
// //             <h2 className="section-title">Top Performers</h2>
// //             <div className="results-grid">
// //               {recentResults.map((result, index) => (
// //                 <div key={index} className="result-card">
// //                   {/* <div className="result-rank">#{index + 1}</div> */}
// //                   <div className="result-avatar">{result.avatar}</div>
// //                   <div className="result-info">
// //                     <div className="result-name">{result.name}</div>
// //                     <div className="result-subject">{result.subject}</div>
// //                   </div>
// //                   <div className="result-score">{result.score}%</div>
// //                   <div className="score-bar">
// //                     <div 
// //                       className="score-fill" 
// //                       style={{ width: `${result.score}%` }}
// //                     ></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>

// //           {/* CTA Section */}
// //           {/* <section className="cta-section">
// //             <div className="cta-content">
// //               <h2>Ready to Test Your Knowledge?</h2>
// //               <p>Join thousands of students who have improved their scores with our mock tests</p>
// //               <div className="cta-buttons">
// //                 <button 
// //                   className="cta-btn primary"
// //                   onClick={() => {
// //                     const firstTest = mockTests[0];
// //                     if (firstTest) startTest(firstTest);
// //                   }}
// //                 >
// //                   <Award size={20} />
// //                   Start Free Test
// //                 </button>
// //                 <button className="cta-btn secondary">
// //                   <TrendingUp size={20} />
// //                   View Analytics
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="cta-decoration">
// //               <div className="decoration-circle"></div>
// //               <div className="decoration-circle"></div>
// //               <div className="decoration-circle"></div>
// //             </div>
// //           </section> */}
// //         </>
// //       ) : (
// //         <div className="test-taking-container">
// //           {!testSubmitted ? (
// //             <>
// //               <div className="test-header-bar">
// //                 <div className="test-info">
// //                   <h2>{currentTest.title}</h2>
// //                   <div className="test-meta">
// //                     <span className="test-subject">{currentTest.subject}</span>
// //                     <span className="test-difficulty" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
// //                       {currentTest.difficulty}
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <div className="test-timer">
// //                   <Clock size={20} />
// //                   <span>{formatTime(timeLeft)}</span>
// //                 </div>
// //                 <button className="exit-test-btn" onClick={exitTest}>
// //                   <X size={20} />
// //                 </button>
// //               </div>

// //               <div className="test-progress-bar">
// //                 <div 
// //                   className="progress-fill" 
// //                   style={{ 
// //                     width: `${((currentQuestionIndex + 1) / currentTest.questionsData.length) * 100}%` 
// //                   }}
// //                 ></div>
// //               </div>

// //               <div className="question-container">
// //                 <div className="question-header">
// //                   <span className="question-number">Question {currentQuestionIndex + 1} of {currentTest.questionsData.length}</span>
                 
// //                 </div>
                
// //                 <div className="question-text">{currentQuestion.question}</div>
                
// //                 <div className="answer-options">
// //                   {currentQuestion.options.map((option, index) => (
// //                     <div 
// //                       key={index}
// //                       className={`option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
// //                       onClick={() => handleAnswerSelect(currentQuestion.id, index)}
// //                     >
// //                       <div className="option-selector">
// //                         {selectedAnswers[currentQuestion.id] === index ? (
// //                           <div className="option-selected-indicator"></div>
// //                         ) : null}
// //                       </div>
// //                       <div className="option-text">{option}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="test-navigation">
// //                 <button 
// //                   className="nav-btn prev-btn"
// //                   onClick={goToPreviousQuestion}
// //                   disabled={currentQuestionIndex === 0}
// //                 >
// //                   <ArrowLeft size={18} />
// //                   Previous
// //                 </button>
                
// //                 <div className="question-indicators">
// //                   {currentTest.questionsData.map((_, index) => (
// //                     <div 
// //                       key={index}
// //                       className={`indicator ${currentQuestionIndex === index ? 'active' : ''} ${selectedAnswers[currentTest.questionsData[index].id] !== undefined ? 'answered' : ''}`}
// //                       onClick={() => setCurrentQuestionIndex(index)}
// //                     ></div>
// //                   ))}
// //                 </div>
                
// //                 {currentQuestionIndex < currentTest.questionsData.length - 1 ? (
// //                   <button 
// //                     className="nav-btn next-btn"
// //                     onClick={goToNextQuestion}
// //                   >
// //                     Next
// //                     <ChevronRight size={18} />
// //                   </button>
// //                 ) : (
// //                   <button 
// //                     className="submit-test-btn"
// //                     onClick={submitTest}
// //                   >
// //                     Submit Test
// //                   </button>
// //                 )}
// //               </div>
// //             </>
// //           ) : (
// //             <div className="test-results-container">
// //               <div className="results-header">
// //                 <h2>Test Results</h2>
// //                 <div className="test-title">{currentTest.title}</div>
// //               </div>
              
// //               <div className="results-summary">
// //                 <div className="score-display">
// //                   <div className="score-value">{score}%</div>
// //                   <div className="score-label">Your Score</div>
// //                 </div>
                
// //                 <div className="results-details">
// //                   <div className="detail-item">
// //                     <div className="detail-label">Correct Answers</div>
// //                     <div className="detail-value">
// //                       {Object.values(selectedAnswers).filter((answer, index) => 
// //                         answer === currentTest.questionsData[index].correctAnswer
// //                       ).length} / {currentTest.questionsData.length}
// //                     </div>
// //                   </div>
// //                   <div className="detail-item">
// //                     <div className="detail-label">Time Taken</div>
// //                     <div className="detail-value">
// //                       {formatTime((currentTest.duration * 60) - timeLeft)}
// //                     </div>
// //                   </div>
// //                   <div className="detail-item">
// //                     <div className="detail-label">Difficulty</div>
// //                     <div className="detail-value" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
// //                       {currentTest.difficulty}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="answers-review">
// //                 <h3>Answers Review</h3>
// //                 {currentTest.questionsData.map((question, index) => (
// //                   <div 
// //                     key={question.id} 
// //                     className={`question-review ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}
// //                   >
// //                     <div className="question-header">
// //                       <span className="question-number">Question {index + 1}</span>
// //                       {selectedAnswers[question.id] === question.correctAnswer ? (
// //                         <span className="correct-indicator">
// //                           <Check size={16} />
// //                           Correct
// //                         </span>
// //                       ) : (
// //                         <span className="incorrect-indicator">
// //                           <X size={16} />
// //                           Incorrect
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="question-text">{question.question}</div>
// //                     <div className="correct-answer">
// //                       Correct Answer: {question.options[question.correctAnswer]}
// //                     </div>
// //                     {selectedAnswers[question.id] !== question.correctAnswer && (
// //                       <div className="your-answer">
// //                         Your Answer: {question.options[selectedAnswers[question.id]]}
// //                       </div>
// //                     )}
// //                     <div className="explanation">
// //                       <strong>Explanation:</strong> {question.explanation}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
              
// //               <div className="results-actions">
// //                 <button 
// //                   className="retake-test-btn"
// //                   onClick={() => startTest(currentTest)}
// //                 >
// //                   <Play size={18} />
// //                   Retake Test
// //                 </button>
// //                 <button 
// //                   className="back-to-tests-btn"
// //                   onClick={exitTest}
// //                 >
// //                   Back to All Tests
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}{showComingSoon && (
// //   <div
// //     className="toast-coming-soon"
// //     style={{
// //       position: "fixed",
// //       bottom: "32px",
// //       left: "50%",
// //       transform: "translateX(-50%)",
// //       background: "#2D5D7B",
// //       color: "#fff",
// //       padding: "0.9rem 2rem",
// //       borderRadius: "8px",
// //       boxShadow: "0 4px 16px rgba(45,93,123,0.15)",
// //       zIndex: 9999,
// //       fontSize: "1.1rem",
// //       fontWeight: 600,
// //       textAlign: "center",
// //       whiteSpace: "nowrap",
// //       animation: "fadeInOut 2s"
// //     }}
// //   >
// //     Coming Soon!
// //   </div>
// // )}
// //     </div>
// //   );
// // };

// // export default Practice;








































// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import './practice.css';

// const Practice = () => {
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";
//   }, []);
  
//   const subjectSectionRef = useRef(null);
//   const [selectedGrade, setSelectedGrade] = useState('7');
//   const [selectedSubject, setSelectedSubject] = useState('mathematics');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [testStarted, setTestStarted] = useState(false);
//   const [currentTest, setCurrentTest] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);
//   const [score, setScore] = useState(0);
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   const [comingSoonGrade, setComingSoonGrade] = useState(null);
//   const [animatedStats, setAnimatedStats] = useState({
//     totalTests: 0,
//     studentsEnrolled: 0,
//     avgScore: 0
//   });

//   // Animate stats on component mount
//   useEffect(() => {
//     const animateValue = (start, end, duration, callback) => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         const current = Math.floor(progress * (end - start) + start);
//         callback(current);
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     };

//     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({...prev, totalTests: val})));
//     animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({...prev, studentsEnrolled: val})));
//     animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({...prev, avgScore: val})));
//   }, []);

//   const grades = [
//     { value: '7', label: 'Grade 7', color: '#FF6B6B' },
//     { value: '8', label: 'Grade 8', color: '#4ECDC4' },
//     { value: '9', label: 'Grade 9', color: '#45B7D1' },
//     { value: '10', label: 'Grade 10', color: '#96CEB4' },
//     { value: '11', label: 'Grade 11', color: '#FFEAA7' },
//     { value: '12', label: 'Grade 12', color: '#DDA0DD' }
//   ];

//   const subjects = [
//     { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 45, difficulty: 'Medium', duration: '90 min' },
//     { id: 'physics', name: 'Physics', icon: '⚡', tests: 38, difficulty: 'Hard', duration: '120 min' },
//     { id: 'chemistry', name: 'Chemistry', icon: '🧪', tests: 42, difficulty: 'Medium', duration: '90 min' },
//     { id: 'biology', name: 'Biology', icon: '🧬', tests: 35, difficulty: 'Easy', duration: '75 min' },
//     { id: 'english', name: 'English', icon: '📚', tests: 40, difficulty: 'Easy', duration: '60 min' },
//     { id: 'history', name: 'History', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '75 min' }
//   ];

//   const mockTests = [
//     {
//       id: 1,
//       title: 'Advanced Algebra & Trigonometry',
//       subject: 'Mathematics',
//       questions: 5,
//       duration: 10,
//       difficulty: 'Hard',
//       attempts: 1250,
//       rating: 4.8,
//       topics: ['Quadratic Equations', 'Trigonometric Functions', 'Logarithms'],
//       premium: false,
//       questionsData: [
//         {
//           id: 1,
//           question: "What is the derivative of x²?",
//           options: ["2x", "x", "2", "x²"],
//           correctAnswer: 0,
//           explanation: "The derivative of x² is 2x according to the power rule of differentiation."
//         },
//         {
//           id: 2,
//           question: "What is the solution to the equation 2x + 5 = 15?",
//           options: ["x = 5", "x = 10", "x = 7.5", "x = 3"],
//           correctAnswer: 0,
//           explanation: "Subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5."
//         },
//         {
//           id: 3,
//           question: "What is the value of sin(π/2)?",
//           options: ["0", "1", "0.5", "√2/2"],
//           correctAnswer: 1,
//           explanation: "The sine of π/2 radians (90 degrees) is 1."
//         },
//         {
//           id: 4,
//           question: "What is the logarithm of 100 with base 10?",
//           options: ["1", "2", "10", "100"],
//           correctAnswer: 1,
//           explanation: "10² = 100, so log₁₀100 = 2."
//         },
//         {
//           id: 5,
//           question: "What is the quadratic formula?",
//           options: [
//             "x = (-b ± √(b² - 4ac)) / 2a",
//             "x = (b ± √(b² - 4ac)) / 2a",
//             "x = (-b ± √(b² + 4ac)) / 2a",
//             "x = (b ± √(b² + 4ac)) / 2a"
//           ],
//           correctAnswer: 0,
//           explanation: "The quadratic formula for solving ax² + bx + c = 0 is x = (-b ± √(b² - 4ac)) / 2a."
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Mechanics & Motion',
//       subject: 'Physics',
//       questions: 4,
//       duration: 8,
//       difficulty: 'Hard',
//       attempts: 980,
//       rating: 4.9,
//       topics: ['Newton\'s Laws', 'Projectile Motion', 'Work & Energy'],
//       premium: true,
//       questionsData: [
//         {
//           id: 1,
//           question: "What is Newton's First Law of Motion?",
//           options: [
//             "F = ma",
//             "An object in motion stays in motion unless acted upon by an external force",
//             "For every action there is an equal and opposite reaction",
//             "Energy cannot be created or destroyed"
//           ],
//           correctAnswer: 1,
//           explanation: "Newton's First Law, also called the Law of Inertia, states that an object will remain at rest or in uniform motion unless acted upon by an external force."
//         },
//         {
//           id: 2,
//           question: "What is the acceleration due to gravity on Earth?",
//           options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
//           correctAnswer: 0,
//           explanation: "The standard acceleration due to gravity on Earth's surface is approximately 9.8 m/s²."
//         },
//         {
//           id: 3,
//           question: "What is the formula for kinetic energy?",
//           options: ["½mv²", "mgh", "Fd", "ma"],
//           correctAnswer: 0,
//           explanation: "The kinetic energy of an object is given by ½mv² where m is mass and v is velocity."
//         },
//         {
//           id: 4,
//           question: "What is the unit of force in the SI system?",
//           options: ["Joule", "Watt", "Newton", "Pascal"],
//           correctAnswer: 2,
//           explanation: "The SI unit of force is the Newton, named after Sir Isaac Newton."
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Organic Chemistry Fundamentals',
//       subject: 'Chemistry',
//       questions: 4,
//       duration: 8,
//       difficulty: 'Medium',
//       attempts: 1100,
//       rating: 4.7,
//       topics: ['Hydrocarbons', 'Functional Groups', 'Reactions'],
//       premium: false,
//       questionsData: [
//         {
//           id: 1,
//           question: "What is the simplest hydrocarbon?",
//           options: ["Methane", "Ethane", "Propane", "Butane"],
//           correctAnswer: 0,
//           explanation: "Methane (CH₄) is the simplest hydrocarbon with just one carbon atom."
//         },
//         {
//           id: 2,
//           question: "Which functional group defines an alcohol?",
//           options: ["-COOH", "-OH", "-CHO", "-NH₂"],
//           correctAnswer: 1,
//           explanation: "The hydroxyl group (-OH) is characteristic of alcohols."
//         },
//         {
//           id: 3,
//           question: "What type of reaction is combustion?",
//           options: ["Addition", "Substitution", "Oxidation", "Polymerization"],
//           correctAnswer: 2,
//           explanation: "Combustion is an oxidation reaction where a substance reacts with oxygen."
//         },
//         {
//           id: 4,
//           question: "What is the general formula for alkanes?",
//           options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
//           correctAnswer: 1,
//           explanation: "Alkanes have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms."
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: 'Cell Biology & Genetics',
//       subject: 'Biology',
//       questions: 4,
//       duration: 8,
//       difficulty: 'Easy',
//       attempts: 1350,
//       rating: 4.6,
//       topics: ['Cell Structure', 'DNA & RNA', 'Heredity'],
//       premium: false,
//       questionsData: [
//         {
//           id: 1,
//           question: "What is the powerhouse of the cell?",
//           options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
//           correctAnswer: 1,
//           explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's ATP."
//         },
//         {
//           id: 2,
//           question: "What does DNA stand for?",
//           options: [
//             "Deoxyribonucleic Acid",
//             "Dinucleic Acid",
//             "Double Nuclear Acid",
//             "Deoxynucleic Acid"
//           ],
//           correctAnswer: 0,
//           explanation: "DNA stands for Deoxyribonucleic Acid."
//         },
//         {
//           id: 3,
//           question: "Which organelle is responsible for protein synthesis?",
//           options: ["Mitochondria", "Nucleus", "Ribosome", "Lysosome"],
//           correctAnswer: 2,
//           explanation: "Ribosomes are the cellular structures responsible for protein synthesis."
//         },
//         {
//           id: 4,
//           question: "What is the basic unit of heredity?",
//           options: ["Chromosome", "Gene", "Protein", "Nucleotide"],
//           correctAnswer: 1,
//           explanation: "Genes are the basic physical and functional units of heredity."
//         }
//       ]
//     },
//     {
//       id: 5,
//       title: 'Grammar & Composition',
//       subject: 'English',
//       questions: 4,
//       duration: 8,
//       difficulty: 'Easy',
//       attempts: 1200,
//       rating: 4.5,
//       topics: ['Parts of Speech', 'Sentence Structure', 'Punctuation'],
//       premium: true,
//       questionsData: [
//         {
//           id: 1,
//           question: "Which of these is a noun?",
//           options: ["Run", "Beautiful", "Quickly", "Happiness"],
//           correctAnswer: 3,
//           explanation: "Happiness is a noun representing a state of being."
//         },
//         {
//           id: 2,
//           question: "What is the subject in the sentence: 'The cat sat on the mat'?",
//           options: ["The cat", "sat", "on the mat", "the mat"],
//           correctAnswer: 0,
//           explanation: "The subject is 'The cat' as it's the doer of the action."
//         },
//         {
//           id: 3,
//           question: "Which punctuation mark is used at the end of a declarative sentence?",
//           options: ["Question mark", "Exclamation point", "Period", "Comma"],
//           correctAnswer: 2,
//           explanation: "A period (.) is used at the end of a declarative sentence."
//         },
//         {
//           id: 4,
//           question: "What type of word describes a noun?",
//           options: ["Verb", "Adjective", "Adverb", "Preposition"],
//           correctAnswer: 1,
//           explanation: "Adjectives describe or modify nouns."
//         }
//       ]
//     },
//     {
//       id: 6,
//       title: 'World History: Ancient Civilizations',
//       subject: 'History',
//       questions: 4,
//       duration: 8,
//       difficulty: 'Medium',
//       attempts: 950,
//       rating: 4.4,
//       topics: ['Mesopotamia', 'Egypt', 'Indus Valley', 'China'],
//       premium: false,
//       questionsData: [
//         {
//           id: 1,
//           question: "Which ancient civilization developed between the Tigris and Euphrates rivers?",
//           options: ["Egypt", "Mesopotamia", "Indus Valley", "China"],
//           correctAnswer: 1,
//           explanation: "Mesopotamia, meaning 'land between rivers', developed between the Tigris and Euphrates."
//         },
//         {
//           id: 2,
//           question: "What was the writing system of ancient Egypt called?",
//           options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Alphabet"],
//           correctAnswer: 1,
//           explanation: "Ancient Egyptians used hieroglyphics as their writing system."
//         },
//         {
//           id: 3,
//           question: "Which ancient civilization built the Great Wall?",
//           options: ["India", "Greece", "China", "Rome"],
//           correctAnswer: 2,
//           explanation: "The Great Wall was built by various Chinese dynasties."
//         },
//         {
//           id: 4,
//           question: "What was the main river of ancient Egypt?",
//           options: ["Tigris", "Euphrates", "Nile", "Indus"],
//           correctAnswer: 2,
//           explanation: "The Nile River was central to ancient Egyptian civilization."
//         }
//       ]
//     }
//   ];

//   const recentResults = [
//     { name: 'Lokesh', score: 98, subject: 'Mathematics', avatar: '👨‍🎓' },
//     { name: 'Priya Patel', score: 95, subject: 'Physics', avatar: '👩‍🎓' },
//     { name: 'Rohit Kumar', score: 92, subject: 'Chemistry', avatar: '👨‍🎓' },
//     { name: 'Sneha Singh', score: 88, subject: 'Biology', avatar: '👩‍🎓' }
//   ];

//   const filteredTests = mockTests.filter(test => {
//     if (activeFilter === 'all') return true;
//     if (activeFilter === 'free') return !test.premium;
//     if (activeFilter === 'premium') return test.premium;
//     return true;
//   });

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Easy': return '#4CAF50';
//       case 'Medium': return '#FF9800';
//       case 'Hard': return '#F44336';
//       default: return '#666';
//     }
//   };

//   const startTest = (test) => {
//     setCurrentTest(test);
//     setTimeLeft(test.duration * 60); // Convert minutes to seconds
//     setTestStarted(true);
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setTestSubmitted(false);
//     setScore(0);
//   };

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < currentTest.questionsData.length - 1) {
//       setCurrentQuestionIndex(prev => prev + 1);
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prev => prev - 1);
//     }
//   };

//   const submitTest = useCallback(() => {
//     let correctAnswers = 0;
//     currentTest.questionsData.forEach(question => {
//       if (selectedAnswers[question.id] === question.correctAnswer) {
//         correctAnswers++;
//       }
//     });
//     const calculatedScore = Math.round(
//       (correctAnswers / currentTest.questionsData.length) * 100
//     );
//     setScore(calculatedScore);
//     setTestSubmitted(true);
//   }, [currentTest, selectedAnswers]);

//   // Timer effect
//   useEffect(() => {
//     if (!testStarted || testSubmitted) return;

//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           submitTest();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [testStarted, testSubmitted, submitTest]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const exitTest = () => {
//     setTestStarted(false);
//     setCurrentTest(null);
//   };

//   const handleGradeSelect = (gradeValue) => {
//     setSelectedGrade(gradeValue);
    
//     // For grades 7-10, scroll to subject section
//     if (['7', '8', '9', '10'].includes(gradeValue)) {
//       setTimeout(() => {
//         subjectSectionRef.current?.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start'
//         });
//       }, 200);
//     } 
//     // For grades 11-12, show coming soon message
//     else if (['11', '12'].includes(gradeValue)) {
//       setComingSoonGrade(gradeValue);
//       setShowComingSoon(true);
//       setTimeout(() => setShowComingSoon(false), 2000);
//     }
//   };

//   const currentQuestion = currentTest?.questionsData?.[currentQuestionIndex];

//   return (
//     <div className="practice-container">
//       {/* Animated Background Elements */}
//       <div className="bg-elements">
//         <div className="floating-shape shape-1"></div>
//         <div className="floating-shape shape-2"></div>
//         <div className="floating-shape shape-3"></div>
//         <div className="floating-shape shape-4"></div>
//       </div>

//       {!testStarted ? (
//         <>
//           {/* Hero Section */}
//           <section className="hero-section">
//             <div className="hero-content">
//               <div className="hero-text">
//                 <h1 className="hero-title">
//                   Master Your Skills with 
//                   <span className="gradient-text"> Mock Tests</span>
//                 </h1>
//                 <p className="hero-subtitle">
//                   Practice makes perfect! Take comprehensive mock tests designed for grades 7-12 
//                   and boost your confidence before the real exam.
//                 </p>
                
//                 {/* Animated Stats */}
//                 <div className="stats-container">
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
//                     <div className="stat-label">Mock Tests</div>
//                   </div>
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
//                     <div className="stat-label">Students</div>
//                   </div>
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.avgScore}%</div>
//                     <div className="stat-label">Avg Score</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="hero-visual">
//                 <div className="test-preview">
//                   <div className="test-header">
//                     <div className="test-dots">
//                       <span></span><span></span><span></span>
//                     </div>
//                     <div className="test-title">Practice Test</div>
//                   </div>
//                   <div className="test-content">
//                     <div className="question-preview">
//                       <div className="question-number">Q1.</div>
//                       <div className="question-text">What is the derivative of x²?</div>
//                     </div>
//                     <div className="options-preview">
//                       <div className="option-line active"></div>
//                       <div className="option-line"></div>
//                       <div className="option-line"></div>
//                       <div className="option-line"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Grade Selection */}
//           <section className="grade-selection-section">
//             <h2 className="section-title">Choose Your Grade</h2>
//             <div className="grade-cards" style={{ position: "relative" }}>
//               {grades.map((grade) => (
//                 <div
//                   key={grade.value}
//                   className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
//                   onClick={() => handleGradeSelect(grade.value)}
//                   style={{ '--grade-color': grade.color, position: "relative" }}
//                 >
//                   {/* Toast message above the selected card */}
//                   {showComingSoon && comingSoonGrade === grade.value && ['11', '12'].includes(grade.value) && (
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "-48px",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         background: "#2D5D7B",
//                         color: "#fff",
//                         padding: "0.7rem 1.5rem",
//                         borderRadius: "8px",
//                         boxShadow: "0 4px 16px rgba(45,93,123,0.12)",
//                         zIndex: 10,
//                         fontSize: "1rem",
//                         fontWeight: 600,
//                         textAlign: "center",
//                         whiteSpace: "nowrap",
//                         animation: "fadeInOut 2s"
//                       }}
//                     >
//                       Coming Soon!
//                     </div>
//                   )}
//                   <div className="grade-number">{grade.value}</div>
//                   <div className="grade-label">{grade.label}</div>
//                   <div className="grade-glow"></div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Subject Selection */}
//           <section className="subject-selection-section" ref={subjectSectionRef}>
//             <h2 className="section-title">Select Subject</h2>
//             <div className="subjects-grid">
//               {subjects.map((subject) => (
//                 <div 
//                   key={subject.id}
//                   className={`subject-card ${selectedSubject === subject.id ? 'active' : ''}`}
//                   onClick={() => {
//                     setSelectedSubject(subject.id);
//                     // Automatically start the first test for this subject
//                     const firstTest = mockTests.find(
//                       (test) => test.subject.toLowerCase() === subject.id.toLowerCase()
//                     );
//                     if (firstTest) startTest(firstTest);
//                   }}
//                 >
//                   <div className="subject-icon">{subject.icon}</div>
//                   <h3 className="subject-name">{subject.name}</h3>
//                   <div className="subject-stats">
//                     <div className="stat">
//                       <BookOpen size={16} />
//                       <span>{subject.tests} Tests</span>
//                     </div>
//                     <div className="stat">
//                       <Target size={16} />
//                       <span>{subject.difficulty}</span>
//                     </div>
//                     <div className="stat">
//                       <Clock size={16} />
//                       <span>{subject.duration}</span>
//                     </div>
//                   </div>
//                   <div className="card-hover-effect"></div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Mock Tests Grid */}
//           <section className="mock-tests-section">
//             <div className="section-header">
//               <h2 className="section-title">Available Mock Tests</h2>
//               <div className="filter-tabs">
//                 <button 
//                   className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('all')}
//                 >
//                   All Tests
//                 </button>
//                 <button 
//                   className={`filter-tab ${activeFilter === 'free' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('free')}
//                 >
//                   Medium
//                 </button>
//                 <button 
//                   className={`filter-tab ${activeFilter === 'premium' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('premium')}
//                 >
//                  Advanced
//                 </button>
//               </div>
//             </div>
            
//             <div className="mock-tests-grid">
//               {filteredTests.map((test) => (
//                 <div key={test.id} className="mock-test-card">
//                   {test.premium && <div className="premium-badge">Advanced</div>}
                  
//                   <div className="test-header">
//                     <h3 className="test-title">{test.title}</h3>
//                     <div className="test-rating">
//                       <Star size={14} fill="currentColor" />
//                       <span>{test.rating}</span>
//                     </div>
//                   </div>
                  
//                   <div className="test-subject">{test.subject}</div>
                  
//                   <div className="test-meta">
//                     <div className="meta-item">
//                       <BookOpen size={16} />
//                       <span>{test.questions} Questions</span>
//                     </div>
//                     <div className="meta-item">
//                       <Clock size={16} />
//                       <span>{test.duration} min</span>
//                     </div>
//                     <div className="meta-item">
//                       <Target size={16} />
//                       <span 
//                         className="difficulty-badge"
//                         style={{ color: getDifficultyColor(test.difficulty) }}
//                       >
//                         {test.difficulty}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="test-topics">
//                     {test.topics.map((topic, index) => (
//                       <span key={index} className="topic-tag">{topic}</span>
//                     ))}
//                   </div>
                  
//                   <div className="test-stats">
//                     <div className="stat-item">
//                       <Users size={16} />
//                       <span>{test.attempts} attempts</span>
//                     </div>
//                   </div>
                  
//                   <button 
//                     className="start-test-btn"
//                     onClick={() => startTest(test)}
//                   >
//                     <Play size={18} />
//                     Start Test
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Recent Results */}
//           <section className="recent-results-section">
//             <h2 className="section-title">Top Performers</h2>
//             <div className="results-grid">
//               {recentResults.map((result, index) => (
//                 <div key={index} className="result-card">
//                   <div className="result-avatar">{result.avatar}</div>
//                   <div className="result-info">
//                     <div className="result-name">{result.name}</div>
//                     <div className="result-subject">{result.subject}</div>
//                   </div>
//                   <div className="result-score">{result.score}%</div>
//                   <div className="score-bar">
//                     <div 
//                       className="score-fill" 
//                       style={{ width: `${result.score}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       ) : (
//         <div className="test-taking-container">
//           {!testSubmitted ? (
//             <>
//               <div className="test-header-bar">
//                 <div className="test-info">
//                   <h2>{currentTest.title}</h2>
//                   <div className="test-meta">
//                     <span className="test-subject">{currentTest.subject}</span>
//                     <span className="test-difficulty" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
//                       {currentTest.difficulty}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="test-timer">
//                   <Clock size={20} />
//                   <span>{formatTime(timeLeft)}</span>
//                 </div>
//                 <button className="exit-test-btn" onClick={exitTest}>
//                   <X size={20} />
//                 </button>
//               </div>

//               <div className="test-progress-bar">
//                 <div 
//                   className="progress-fill" 
//                   style={{ 
//                     width: `${((currentQuestionIndex + 1) / currentTest.questionsData.length) * 100}%` 
//                   }}
//                 ></div>
//               </div>

//               <div className="question-container">
//                 <div className="question-header">
//                   <span className="question-number">Question {currentQuestionIndex + 1} of {currentTest.questionsData.length}</span>
//                 </div>
                
//                 <div className="question-text">{currentQuestion.question}</div>
                
//                 <div className="answer-options">
//                   {currentQuestion.options.map((option, index) => (
//                     <div 
//                       key={index}
//                       className={`option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
//                       onClick={() => handleAnswerSelect(currentQuestion.id, index)}
//                     >
//                       <div className="option-selector">
//                         {selectedAnswers[currentQuestion.id] === index ? (
//                           <div className="option-selected-indicator"></div>
//                         ) : null}
//                       </div>
//                       <div className="option-text">{option}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="test-navigation">
//                 <button 
//                   className="nav-btn prev-btn"
//                   onClick={goToPreviousQuestion}
//                   disabled={currentQuestionIndex === 0}
//                 >
//                   <ArrowLeft size={18} />
//                   Previous
//                 </button>
                
//                 <div className="question-indicators">
//                   {currentTest.questionsData.map((_, index) => (
//                     <div 
//                       key={index}
//                       className={`indicator ${currentQuestionIndex === index ? 'active' : ''} ${selectedAnswers[currentTest.questionsData[index].id] !== undefined ? 'answered' : ''}`}
//                       onClick={() => setCurrentQuestionIndex(index)}
//                     ></div>
//                   ))}
//                 </div>
                
//                 {currentQuestionIndex < currentTest.questionsData.length - 1 ? (
//                   <button 
//                     className="nav-btn next-btn"
//                     onClick={goToNextQuestion}
//                   >
//                     Next
//                     <ChevronRight size={18} />
//                   </button>
//                 ) : (
//                   <button 
//                     className="submit-test-btn"
//                     onClick={submitTest}
//                   >
//                     Submit Test
//                   </button>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div className="test-results-container">
//               <div className="results-header">
//                 <h2>Test Results</h2>
//                 <div className="test-title">{currentTest.title}</div>
//               </div>
              
//               <div className="results-summary">
//                 <div className="score-display">
//                   <div className="score-value">{score}%</div>
//                   <div className="score-label">Your Score</div>
//                 </div>
                
//                 <div className="results-details">
//                   <div className="detail-item">
//                     <div className="detail-label">Correct Answers</div>
//                     <div className="detail-value">
//                       {Object.values(selectedAnswers).filter((answer, index) => 
//                         answer === currentTest.questionsData[index].correctAnswer
//                       ).length} / {currentTest.questionsData.length}
//                     </div>
//                   </div>
//                   <div className="detail-item">
//                     <div className="detail-label">Time Taken</div>
//                     <div className="detail-value">
//                       {formatTime((currentTest.duration * 60) - timeLeft)}
//                     </div>
//                   </div>
//                   <div className="detail-item">
//                     <div className="detail-label">Difficulty</div>
//                     <div className="detail-value" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
//                       {currentTest.difficulty}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="answers-review">
//                 <h3>Answers Review</h3>
//                 {currentTest.questionsData.map((question, index) => (
//                   <div 
//                     key={question.id} 
//                     className={`question-review ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}
//                   >
//                     <div className="question-header">
//                       <span className="question-number">Question {index + 1}</span>
//                       {selectedAnswers[question.id] === question.correctAnswer ? (
//                         <span className="correct-indicator">
//                           <Check size={16} />
//                           Correct
//                         </span>
//                       ) : (
//                         <span className="incorrect-indicator">
//                           <X size={16} />
//                           Incorrect
//                         </span>
//                       )}
//                     </div>
//                     <div className="question-text">{question.question}</div>
//                     <div className="correct-answer">
//                       Correct Answer: {question.options[question.correctAnswer]}
//                     </div>
//                     {selectedAnswers[question.id] !== question.correctAnswer && (
//                       <div className="your-answer">
//                         Your Answer: {question.options[selectedAnswers[question.id]]}
//                       </div>
//                     )}
//                     <div className="explanation">
//                       <strong>Explanation:</strong> {question.explanation}
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="results-actions">
//                 <button 
//                   className="retake-test-btn"
//                   onClick={() => startTest(currentTest)}
//                 >
//                   <Play size={18} />
//                   Retake Test
//                 </button>
//                 <button 
//                   className="back-to-tests-btn"
//                   onClick={exitTest}
//                 >
//                   Back to All Tests
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//       {showComingSoon && (
//         <div
//           className="toast-coming-soon"
//           style={{
//             position: "fixed",
//             bottom: "32px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             background: "#2D5D7B",
//             color: "#fff",
//             padding: "0.9rem 2rem",
//             borderRadius: "8px",
//             boxShadow: "0 4px 16px rgba(45,93,123,0.15)",
//             zIndex: 9999,
//             fontSize: "1.1rem",
//             fontWeight: 600,
//             textAlign: "center",
//             whiteSpace: "nowrap",
//             animation: "fadeInOut 2s"
//           }}
//         >
//           Coming Soon!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;










import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './practice.css';

const Practice = () => {
  const navigate = useNavigate();

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

    animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
    animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));
    animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({ ...prev, avgScore: val })));
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
  // -------- Grade 7 Mock Tests --------
  {
    "id": 1,
    "title": "Algebra & Geometry Basics",
    "subject": "mathematics",
    "grade": "7",
    "questions": 5,
    "duration": 12,
    "difficulty": "Medium",
    "attempts": 980,
    "rating": 4.6,
    "topics": [
      "Algebra",
      "Geometry",
      "Fractions"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Simplify: 3x + 2x - 5",
        "options": [
          "5x - 5",
          "6x - 5",
          "5x + 5",
          "x - 5"
        ],
        "correctAnswer": 0,
        "explanation": "Combine like terms: 3x + 2x = 5x, so result is 5x - 5."
      },
      {
        "id": 2,
        "question": "The area of a rectangle is 36 cm² and its length is 9 cm. Find its breadth.",
        "options": [
          "4 cm",
          "5 cm",
          "6 cm",
          "7 cm"
        ],
        "correctAnswer": 0,
        "explanation": "Area = length × breadth → 36 = 9 × breadth → breadth = 4 cm."
      },
      {
        "id": 3,
        "question": "Which of these is a prime number?",
        "options": [
          "21",
          "29",
          "33",
          "49"
        ],
        "correctAnswer": 1,
        "explanation": "29 has no divisors other than 1 and itself, so it is prime."
      },
      {
        "id": 4,
        "question": "What is the value of (2/5) ÷ (3/10)?",
        "options": [
          "4/3",
          "2/3",
          "3/4",
          "5/3"
        ],
        "correctAnswer": 0,
        "explanation": "(2/5) ÷ (3/10) = (2/5) × (10/3) = 20/15 = 4/3."
      },
      {
        "id": 5,
        "question": "Find the perimeter of a square of side 8 cm.",
        "options": [
          "24 cm",
          "32 cm",
          "16 cm",
          "20 cm"
        ],
        "correctAnswer": 1,
        "explanation": "Perimeter = 4 × side = 4 × 8 = 32 cm."
      }
    ]
  },
  {
    "id": 2,
    "title": "Force & Energy Fundamentals",
    "subject": "physics",
    "grade": "7",
    "questions": 5,
    "duration": 15,
    "difficulty": "Medium",
    "attempts": 860,
    "rating": 4.5,
    "topics": [
      "Force",
      "Work",
      "Energy"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "What is the SI unit of force?",
        "options": [
          "Joule",
          "Newton",
          "Pascal",
          "Watt"
        ],
        "correctAnswer": 1,
        "explanation": "The SI unit of force is Newton (N)."
      },
      {
        "id": 2,
        "question": "Work is done when:",
        "options": [
          "Force is applied without motion",
          "Object moves without force",
          "Force is applied and object moves",
          "No motion occurs"
        ],
        "correctAnswer": 2,
        "explanation": "Work = Force × Displacement, so force and motion must both exist."
      },
      {
        "id": 3,
        "question": "Which energy is possessed by a stretched spring?",
        "options": [
          "Kinetic Energy",
          "Potential Energy",
          "Thermal Energy",
          "Nuclear Energy"
        ],
        "correctAnswer": 1,
        "explanation": "A stretched spring stores potential energy."
      },
      {
        "id": 4,
        "question": "Which of these is a renewable energy source?",
        "options": [
          "Coal",
          "Natural Gas",
          "Wind",
          "Petroleum"
        ],
        "correctAnswer": 2,
        "explanation": "Wind energy is renewable and unlimited."
      },
      {
        "id": 5,
        "question": "Power is defined as:",
        "options": [
          "Work done × time",
          "Work done ÷ time",
          "Force × time",
          "Energy × time"
        ],
        "correctAnswer": 1,
        "explanation": "Power = Work / Time."
      }
    ]
  },
  {
    "id": 3,
    "title": "Atoms, Molecules & Reactions",
    "subject": "chemistry",
    "grade": "7",
    "questions": 5,
    "duration": 20,
    "difficulty": "Hard",
    "attempts": 740,
    "rating": 4.7,
    "topics": [
      "Atomic Structure",
      "Chemical Reactions"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "What is the smallest unit of an element?",
        "options": [
          "Molecule",
          "Compound",
          "Atom",
          "Ion"
        ],
        "correctAnswer": 2,
        "explanation": "An atom is the smallest unit of an element that retains its chemical properties."
      },
      {
        "id": 2,
        "question": "What is the chemical formula of common salt?",
        "options": [
          "H₂O",
          "NaCl",
          "CO₂",
          "O₂"
        ],
        "correctAnswer": 1,
        "explanation": "Common salt is Sodium Chloride, with the formula NaCl."
      },
      {
        "id": 3,
        "question": "Which of the following is a physical change?",
        "options": [
          "Burning of wood",
          "Rusting of iron",
          "Melting of ice",
          "Cooking an egg"
        ],
        "correctAnswer": 2,
        "explanation": "Melting of ice is a physical change as it changes state but not chemical composition."
      },
      {
        "id": 4,
        "question": "What is the process of a liquid turning into a gas called?",
        "options": [
          "Melting",
          "Condensation",
          "Sublimation",
          "Evaporation"
        ],
        "correctAnswer": 3,
        "explanation": "Evaporation is the process of a substance in a liquid state changing to a gaseous state."
      },
      {
        "id": 5,
        "question": "Which gas is essential for burning?",
        "options": [
          "Nitrogen",
          "Carbon Dioxide",
          "Oxygen",
          "Hydrogen"
        ],
        "correctAnswer": 2,
        "explanation": "Oxygen is necessary for combustion to occur."
      }
    ]
  },
  {
    "id": 4,
    "title": "Life Processes & Classification",
    "subject": "biology",
    "grade": "7",
    "questions": 5,
    "duration": 15,
    "difficulty": "Medium",
    "attempts": 910,
    "rating": 4.6,
    "topics": [
      "Human Body",
      "Plants",
      "Classification"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Which organ is responsible for pumping blood?",
        "options": [
          "Lungs",
          "Heart",
          "Liver",
          "Kidney"
        ],
        "correctAnswer": 1,
        "explanation": "The heart is a muscular organ that pumps blood throughout the body."
      },
      {
        "id": 2,
        "question": "What is the process by which plants make their own food?",
        "options": [
          "Respiration",
          "Transpiration",
          "Photosynthesis",
          "Digestion"
        ],
        "correctAnswer": 2,
        "explanation": "Photosynthesis is the process used by plants to convert light energy into chemical energy."
      },
      {
        "id": 3,
        "question": "Which of these is a producer in a food chain?",
        "options": [
          "Lion",
          "Rabbit",
          "Mushroom",
          "Grass"
        ],
        "correctAnswer": 3,
        "explanation": "Grass is a producer because it creates its own food using sunlight."
      },
      {
        "id": 4,
        "question": "What are the building blocks of life?",
        "options": [
          "Tissues",
          "Organs",
          "Cells",
          "Molecules"
        ],
        "correctAnswer": 2,
        "explanation": "Cells are the basic structural, functional, and biological units of all known organisms."
      },
      {
        "id": 5,
        "question": "The skeleton of the human body is made up of:",
        "options": [
          "Muscles",
          "Nerves",
          "Bones",
          "Blood"
        ],
        "correctAnswer": 2,
        "explanation": "The human skeleton is an internal framework composed of bones."
      }
    ]
  },
  {
    "id": 5,
    "title": "Ancient Civilizations & Empires",
    "subject": "history",
    "grade": "7",
    "questions": 5,
    "duration": 10,
    "difficulty": "Easy",
    "attempts": 1200,
    "rating": 4.4,
    "topics": [
      "Indus Valley",
      "Ancient Rome",
      "Feudalism"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Which river valley is associated with the Harappan Civilization?",
        "options": [
          "Nile",
          "Tigris",
          "Indus",
          "Yellow"
        ],
        "correctAnswer": 2,
        "explanation": "The Harappan Civilization developed along the banks of the Indus River."
      },
      {
        "id": 2,
        "question": "The term 'Mughal' is derived from which word?",
        "options": [
          "Persian",
          "Mongol",
          "Turkish",
          "Arabic"
        ],
        "correctAnswer": 1,
        "explanation": "The Mughals were descendants of the Mongols."
      },
      {
        "id": 3,
        "question": "Who was the first emperor of Rome?",
        "options": [
          "Julius Caesar",
          "Augustus",
          "Nero",
          "Constantine"
        ],
        "correctAnswer": 1,
        "explanation": "Augustus (Octavian) was the first Roman Emperor."
      },
      {
        "id": 4,
        "question": "Feudalism was a system based on:",
        "options": [
          "Trade",
          "Land ownership",
          "Democracy",
          "Slavery"
        ],
        "correctAnswer": 1,
        "explanation": "Feudalism was a system in which land was exchanged for service or labor."
      },
      {
        "id": 5,
        "question": "The Great Wall of China was built to protect against:",
        "options": [
          "Japanese invaders",
          "Mongolian tribes",
          "European traders",
          "Internal rebellion"
        ],
        "correctAnswer": 1,
        "explanation": "The Great Wall was built to protect the Chinese empires from northern tribes, primarily the Mongols."
      }
    ]
  },

  // -------- Grade 8 Mock Tests --------
  {
    "id": 6,
    "title": "Ratio & Proportions",
    "subject": "mathematics",
    "grade": "8",
    "questions": 5,
    "duration": 15,
    "difficulty": "Medium",
    "attempts": 1100,
    "rating": 4.5,
    "topics": [
      "Ratios",
      "Proportions",
      "Percentage"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "If a car travels 150 km in 3 hours, what is its speed in km/h?",
        "options": [
          "45 km/h",
          "50 km/h",
          "55 km/h",
          "60 km/h"
        ],
        "correctAnswer": 1,
        "explanation": "Speed = Distance / Time = 150 km / 3 h = 50 km/h."
      },
      {
        "id": 2,
        "question": "A sum of money is divided between A and B in the ratio 4:5. If B gets ₹2500, what is the total sum?",
        "options": [
          "₹4000",
          "₹4500",
          "₹5000",
          "₹5500"
        ],
        "correctAnswer": 0,
        "explanation": "If 5 parts = ₹2500, then 1 part = ₹500. Total = 9 parts = 9 × ₹500 = ₹4500."
      },
      {
        "id": 3,
        "question": "What is 20% of 400?",
        "options": [
          "80",
          "60",
          "100",
          "200"
        ],
        "correctAnswer": 0,
        "explanation": "20% of 400 = (20/100) * 400 = 80."
      },
      {
        "id": 4,
        "question": "If 5 workers can build a wall in 12 days, how many days will 4 workers take to build the same wall?",
        "options": [
          "10 days",
          "15 days",
          "18 days",
          "20 days"
        ],
        "correctAnswer": 1,
        "explanation": "This is an inverse proportion. 5 × 12 = 4 × days → days = 60/4 = 15 days."
      },
      {
        "id": 5,
        "question": "A bag contains 5 red balls and 3 blue balls. What is the ratio of red balls to blue balls?",
        "options": [
          "3:5",
          "5:3",
          "5:8",
          "3:8"
        ],
        "correctAnswer": 1,
        "explanation": "The ratio is simply the number of red balls to the number of blue balls, which is 5:3."
      }
    ]
  },
  {
    "id": 7,
    "title": "Light, Sound & Heat",
    "subject": "physics",
    "grade": "8",
    "questions": 5,
    "duration": 18,
    "difficulty": "Medium",
    "attempts": 950,
    "rating": 4.7,
    "topics": [
      "Light",
      "Sound",
      "Heat"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "What is the phenomenon of light bouncing back from a surface called?",
        "options": [
          "Refraction",
          "Reflection",
          "Dispersion",
          "Scattering"
        ],
        "correctAnswer": 1,
        "explanation": "Reflection is the change in direction of a wavefront at an interface between two different media so that the wavefront returns into the medium from which it originated."
      },
      {
        "id": 2,
        "question": "Sound travels fastest in which medium?",
        "options": [
          "Air",
          "Water",
          "Vacuum",
          "Steel"
        ],
        "correctAnswer": 3,
        "explanation": "Sound travels fastest in solids (like steel) because the particles are closely packed."
      },
      {
        "id": 3,
        "question": "What is the SI unit of temperature?",
        "options": [
          "Celsius",
          "Fahrenheit",
          "Kelvin",
          "Joule"
        ],
        "correctAnswer": 2,
        "explanation": "The SI unit for temperature is Kelvin (K)."
      },
      {
        "id": 4,
        "question": "The transfer of heat through direct contact is called:",
        "options": [
          "Conduction",
          "Convection",
          "Radiation",
          "Insulation"
        ],
        "correctAnswer": 0,
        "explanation": "Conduction is the transfer of thermal energy through direct contact."
      },
      {
        "id": 5,
        "question": "Which type of mirror forms a virtual and erect image?",
        "options": [
          "Concave mirror",
          "Convex mirror",
          "Both",
          "None of these"
        ],
        "correctAnswer": 1,
        "explanation": "A convex mirror always forms a virtual, erect, and diminished image."
      }
    ]
  },
  {
    "id": 8,
    "title": "Elements, Compounds & Mixtures",
    "subject": "chemistry",
    "grade": "8",
    "questions": 5,
    "duration": 20,
    "difficulty": "Medium",
    "attempts": 880,
    "rating": 4.5,
    "topics": [
      "Elements",
      "Compounds",
      "Mixtures"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Which of these is a compound?",
        "options": [
          "Gold (Au)",
          "Oxygen (O₂)",
          "Water (H₂O)",
          "Nitrogen (N₂)"
        ],
        "correctAnswer": 2,
        "explanation": "A compound is a substance formed when two or more elements are chemically bonded."
      },
      {
        "id": 2,
        "question": "The process of separating a solid from a liquid using a filter is called:",
        "options": [
          "Distillation",
          "Filtration",
          "Evaporation",
          "Sublimation"
        ],
        "correctAnswer": 1,
        "explanation": "Filtration is used to separate insoluble solids from liquids."
      },
      {
        "id": 3,
        "question": "What is the chemical symbol for sodium?",
        "options": [
          "S",
          "Na",
          "So",
          "Nm"
        ],
        "correctAnswer": 1,
        "explanation": "The symbol for Sodium is Na, derived from the Latin 'natrium'."
      },
      {
        "id": 4,
        "question": "An example of a homogeneous mixture is:",
        "options": [
          "Sand and water",
          "Oil and water",
          "Salt dissolved in water",
          "Iron filings and sulfur"
        ],
        "correctAnswer": 2,
        "explanation": "A homogeneous mixture has a uniform composition, like saltwater."
      },
      {
        "id": 5,
        "question": "Which of the following is a noble gas?",
        "options": [
          "Hydrogen",
          "Oxygen",
          "Helium",
          "Carbon"
        ],
        "correctAnswer": 2,
        "explanation": "Helium is a noble gas, known for its low reactivity."
      }
    ]
  },
  {
    "id": 9,
    "title": "Cell Biology & Reproduction",
    "subject": "biology",
    "grade": "8",
    "questions": 5,
    "duration": 15,
    "difficulty": "Medium",
    "attempts": 1050,
    "rating": 4.6,
    "topics": [
      "Cells",
      "Reproduction",
      "Microorganisms"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Which part of the cell is the 'powerhouse'?",
        "options": [
          "Nucleus",
          "Mitochondria",
          "Cytoplasm",
          "Cell wall"
        ],
        "correctAnswer": 1,
        "explanation": "Mitochondria are the organelles responsible for generating energy (ATP)."
      },
      {
        "id": 2,
        "question": "Asexual reproduction involves:",
        "options": [
          "Two parents",
          "Gametes",
          "A single parent",
          "Fertilization"
        ],
        "correctAnswer": 2,
        "explanation": "Asexual reproduction is a mode of reproduction that involves a single parent."
      },
      {
        "id": 3,
        "question": "Which of these is a microorganism?",
        "options": [
          "Earthworm",
          "Bacteria",
          "Sparrow",
          "Whale"
        ],
        "correctAnswer": 1,
        "explanation": "Bacteria are microscopic single-celled organisms."
      },
      {
        "id": 4,
        "question": "What is the function of red blood cells?",
        "options": [
          "Fighting infections",
          "Clotting blood",
          "Transporting oxygen",
          "Producing antibodies"
        ],
        "correctAnswer": 2,
        "explanation": "Red blood cells contain hemoglobin, which transports oxygen from the lungs to the rest of the body."
      },
      {
        "id": 5,
        "question": "Pollination is the transfer of pollen from:",
        "options": [
          "Stigma to anther",
          "Ovary to petal",
          "Anther to stigma",
          "Stem to root"
        ],
        "correctAnswer": 2,
        "explanation": "Pollination is the process by which pollen is transferred from the anther to the stigma."
      }
    ]
  },
  {
    "id": 10,
    "title": "Medieval India & British Rule",
    "subject": "history",
    "grade": "8",
    "questions": 5,
    "duration": 12,
    "difficulty": "Medium",
    "attempts": 890,
    "rating": 4.5,
    "topics": [
      "Delhi Sultanate",
      "Mughal Empire",
      "British Raj"
    ],
    "premium": false,
    "questionsData": [
      {
        "id": 1,
        "question": "Who was the founder of the Mughal Empire in India?",
        "options": [
          "Akbar",
          "Humayun",
          "Babur",
          "Shah Jahan"
        ],
        "correctAnswer": 2,
        "explanation": "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi."
      },
      {
        "id": 2,
        "question": "The 'Battle of Plassey' was fought in which year?",
        "options": [
          "1757",
          "1764",
          "1857",
          "1947"
        ],
        "correctAnswer": 0,
        "explanation": "The Battle of Plassey was a decisive victory for the British East India Company in 1757."
      },
      {
        "id": 3,
        "question": "Who introduced the 'Doctrine of Lapse'?",
        "options": [
          "Lord Dalhousie",
          "Lord Canning",
          "Lord Curzon",
          "Lord Macaulay"
        ],
        "correctAnswer": 0,
        "explanation": "Lord Dalhousie was the Governor-General who implemented the Doctrine of Lapse."
      },
      {
        "id": 4,
        "question": "The 'Quit India' movement was launched by:",
        "options": [
          "Subhas Chandra Bose",
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Sardar Vallabhbhai Patel"
        ],
        "correctAnswer": 2,
        "explanation": "Mahatma Gandhi launched the Quit India Movement in 1942."
      },
      {
        "id": 5,
        "question": "Who built the Red Fort in Delhi?",
        "options": [
          "Humayun",
          "Akbar",
          "Shah Jahan",
          "Aurangzeb"
        ],
        "correctAnswer": 2,
        "explanation": "Shah Jahan commissioned the construction of the Red Fort."
      }
    ]
  },

  // -------- Grade 9 Mock Tests --------
  {
    "id": 11,
    "title": "Number Systems & Functions",
    "subject": "mathematics",
    "grade": "9",
    "questions": 5,
    "duration": 20,
    "difficulty": "Hard",
    "attempts": 800,
    "rating": 4.7,
    "topics": [
      "Number Systems",
      "Polynomials",
      "Functions"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "Which of these is an irrational number?",
        "options": [
          "√4",
          "0.333...",
          "π",
          "2/3"
        ],
        "correctAnswer": 2,
        "explanation": "An irrational number cannot be expressed as a simple fraction, like π."
      },
      {
        "id": 2,
        "question": "The zero of the polynomial p(x) = 2x - 3 is:",
        "options": [
          "3/2",
          "2/3",
          "-3/2",
          "-2/3"
        ],
        "correctAnswer": 0,
        "explanation": "Set p(x) = 0 → 2x - 3 = 0 → 2x = 3 → x = 3/2."
      },
      {
        "id": 3,
        "question": "A point (0, y) lies on which axis?",
        "options": [
          "X-axis",
          "Y-axis",
          "Both",
          "None"
        ],
        "correctAnswer": 1,
        "explanation": "Any point with an x-coordinate of 0 lies on the Y-axis."
      },
      {
        "id": 4,
        "question": "Find the value of 'a' if (x-1) is a factor of x² + ax - 2.",
        "options": [
          "1",
          "2",
          "-1",
          "-2"
        ],
        "correctAnswer": 1,
        "explanation": "By Factor Theorem, p(1) must be 0. So, 1² + a(1) - 2 = 0 → 1 + a - 2 = 0 → a = 1."
      },
      {
        "id": 5,
        "question": "What is the degree of the polynomial 5x⁴ - 3x + 7?",
        "options": [
          "1",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 2,
        "explanation": "The degree is the highest power of the variable in the polynomial, which is 4."
      }
    ]
  },
  {
    "id": 12,
    "title": "Motion, Gravitation & Sound",
    "subject": "physics",
    "grade": "9",
    "questions": 5,
    "duration": 22,
    "difficulty": "Hard",
    "attempts": 850,
    "rating": 4.8,
    "topics": [
      "Motion",
      "Newton's Laws",
      "Sound"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "An object's velocity is constant. Its acceleration is:",
        "options": [
          "Positive",
          "Negative",
          "Zero",
          "Infinite"
        ],
        "correctAnswer": 2,
        "explanation": "Acceleration is the rate of change of velocity. If velocity is constant, acceleration is zero."
      },
      {
        "id": 2,
        "question": "What is Newton's third law of motion?",
        "options": [
          "Law of Inertia",
          "F = ma",
          "Action-Reaction",
          "Law of Conservation of Momentum"
        ],
        "correctAnswer": 2,
        "explanation": "For every action, there is an equal and opposite reaction."
      },
      {
        "id": 3,
        "question": "The universal law of gravitation was given by:",
        "options": [
          "Albert Einstein",
          "Isaac Newton",
          "Galileo Galilei",
          "Johannes Kepler"
        ],
        "correctAnswer": 1,
        "explanation": "Sir Isaac Newton formulated the Law of Universal Gravitation."
      },
      {
        "id": 4,
        "question": "The pitch of a sound is determined by its:",
        "options": [
          "Amplitude",
          "Wavelength",
          "Frequency",
          "Speed"
        ],
        "correctAnswer": 2,
        "explanation": "Pitch is a perceptual property of sounds that allows their ordering on a frequency-related scale."
      },
      {
        "id": 5,
        "question": "What is the unit of momentum?",
        "options": [
          "kg·m/s",
          "N·m",
          "Joule",
          "Watt"
        ],
        "correctAnswer": 0,
        "explanation": "Momentum (p) = mass (m) × velocity (v), so its unit is kg·m/s."
      }
    ]
  },
  {
    "id": 13,
    "title": "Chemical Bonding & Periodic Table",
    "subject": "chemistry",
    "grade": "9",
    "questions": 5,
    "duration": 25,
    "difficulty": "Hard",
    "attempts": 780,
    "rating": 4.8,
    "topics": [
      "Periodic Table",
      "Chemical Bonds",
      "Atomic Structure"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "Which of these elements is a halogen?",
        "options": [
          "Sodium",
          "Calcium",
          "Chlorine",
          "Helium"
        ],
        "correctAnswer": 2,
        "explanation": "Chlorine is in Group 17 of the periodic table, which are the halogens."
      },
      {
        "id": 2,
        "question": "A covalent bond is formed by:",
        "options": [
          "Transfer of electrons",
          "Sharing of electrons",
          "Electrostatic attraction",
          "Hydrogen bonding"
        ],
        "correctAnswer": 1,
        "explanation": "A covalent bond is formed when atoms share electron pairs."
      },
      {
        "id": 3,
        "question": "Who developed the modern periodic table?",
        "options": [
          "John Dalton",
          "Dmitri Mendeleev",
          "Henry Moseley",
          "Niels Bohr"
        ],
        "correctAnswer": 2,
        "explanation": "The modern periodic table is based on atomic number, arranged by Henry Moseley."
      },
      {
        "id": 4,
        "question": "What is the maximum number of electrons in the first shell (K shell)?",
        "options": [
          "1",
          "2",
          "8",
          "18"
        ],
        "correctAnswer": 1,
        "explanation": "The maximum number of electrons in a shell is given by the formula 2n², where n=1 for the K shell, so 2(1)² = 2."
      },
      {
        "id": 5,
        "question": "A reaction that releases heat is called:",
        "options": [
          "Endothermic",
          "Exothermic",
          "Combination",
          "Decomposition"
        ],
        "correctAnswer": 1,
        "explanation": "An exothermic reaction is a chemical reaction that releases energy in the form of light or heat."
      }
    ]
  },
  {
    "id": 14,
    "title": "Tissues, Diversity & Health",
    "subject": "biology",
    "grade": "9",
    "questions": 5,
    "duration": 18,
    "difficulty": "Medium",
    "attempts": 920,
    "rating": 4.6,
    "topics": [
      "Tissues",
      "Biodiversity",
      "Health & Disease"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "Which tissue connects bone to muscle?",
        "options": [
          "Ligament",
          "Tendon",
          "Cartilage",
          "Epithelial"
        ],
        "correctAnswer": 1,
        "explanation": "Tendons are fibrous tissues that connect muscle to bone."
      },
      {
        "id": 2,
        "question": "The scientific study of classification is called:",
        "options": [
          "Anatomy",
          "Physiology",
          "Taxonomy",
          "Genetics"
        ],
        "correctAnswer": 2,
        "explanation": "Taxonomy is the science of naming, describing and classifying organisms."
      },
      {
        "id": 3,
        "question": "Which of these is a water-borne disease?",
        "options": [
          "Tuberculosis",
          "Malaria",
          "Cholera",
          "Dengue"
        ],
        "correctAnswer": 2,
        "explanation": "Cholera is an acute diarrheal illness caused by ingesting contaminated food or water."
      },
      {
        "id": 4,
        "question": "The 'Kingdom' in biological classification includes:",
        "options": [
          "Phylum",
          "Class",
          "Order",
          "All of these"
        ],
        "correctAnswer": 0,
        "explanation": "The hierarchy is Kingdom, Phylum, Class, Order, Family, Genus, Species."
      },
      {
        "id": 5,
        "question": "What is the function of xylem tissue in plants?",
        "options": [
          "Transporting food",
          "Transporting water",
          "Providing support",
          "Photosynthesis"
        ],
        "correctAnswer": 1,
        "explanation": "Xylem is a vascular tissue that transports water from the roots to the leaves."
      }
    ]
  },
  {
    "id": 15,
    "title": "French Revolution & World Wars",
    "subject": "history",
    "grade": "9",
    "questions": 5,
    "duration": 20,
    "difficulty": "Hard",
    "attempts": 820,
    "rating": 4.7,
    "topics": [
      "French Revolution",
      "Russian Revolution",
      "World War I & II"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "The French Revolution began in which year?",
        "options": [
          "1776",
          "1789",
          "1815",
          "1848"
        ],
        "correctAnswer": 1,
        "explanation": "The French Revolution began with the storming of the Bastille in 1789."
      },
      {
        "id": 2,
        "question": "The 'Treaty of Versailles' officially ended which war?",
        "options": [
          "American Civil War",
          "World War I",
          "World War II",
          "Korean War"
        ],
        "correctAnswer": 1,
        "explanation": "The Treaty of Versailles was the peace treaty that ended World War I."
      },
      {
        "id": 3,
        "question": "Who was the leader of the Bolshevik party during the Russian Revolution?",
        "options": [
          "Joseph Stalin",
          "Vladimir Lenin",
          "Leon Trotsky",
          "Nikita Khrushchev"
        ],
        "correctAnswer": 1,
        "explanation": "Vladimir Lenin led the Bolsheviks to power in the 1917 Russian Revolution."
      },
      {
        "id": 4,
        "question": "The Great Depression started in which country?",
        "options": [
          "United Kingdom",
          "Germany",
          "United States",
          "Soviet Union"
        ],
        "correctAnswer": 2,
        "explanation": "The Great Depression began with the stock market crash in the United States in 1929."
      },
      {
        "id": 5,
        "question": "The attack on Pearl Harbor led to which country entering World War II?",
        "options": [
          "Soviet Union",
          "United States",
          "Japan",
          "China"
        ],
        "correctAnswer": 1,
        "explanation": "The Japanese attack on Pearl Harbor on December 7, 1941, led to the US entering World War II."
      }
    ]
  },

  // -------- Grade 10 Mock Tests --------
  {
    "id": 16,
    "title": "Trigonometry & Statistics",
    "subject": "mathematics",
    "grade": "10",
    "questions": 5,
    "duration": 25,
    "difficulty": "Hard",
    "attempts": 950,
    "rating": 4.8,
    "topics": [
      "Trigonometry",
      "Statistics",
      "Probability"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "What is the value of sin(30°)?",
        "options": [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        "correctAnswer": 2,
        "explanation": "The standard trigonometric value for sin(30°) is 1/2."
      },
      {
        "id": 2,
        "question": "The mean of the numbers 2, 4, 6, 8, 10 is:",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctAnswer": 1,
        "explanation": "Mean = (2+4+6+8+10) / 5 = 30 / 5 = 6."
      },
      {
        "id": 3,
        "question": "What is the probability of getting a 'head' when a coin is tossed?",
        "options": [
          "1/4",
          "1/2",
          "3/4",
          "1"
        ],
        "correctAnswer": 1,
        "explanation": "There are two possible outcomes (head or tail), and one of them is favorable, so the probability is 1/2."
      },
      {
        "id": 4,
        "question": "The distance of the point (3, 4) from the origin is:",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "correctAnswer": 2,
        "explanation": "Using the distance formula from the origin, d = √(3² + 4²) = √(9+16) = √25 = 5."
      },
      {
        "id": 5,
        "question": "In a right-angled triangle, if one angle is 60°, what is the value of the third angle?",
        "options": [
          "30°",
          "60°",
          "90°",
          "180°"
        ],
        "correctAnswer": 0,
        "explanation": "The sum of angles in a triangle is 180°. So, 180° - 90° - 60° = 30°."
      }
    ]
  },
  {
    "id": 17,
    "title": "Electricity & Magnetism",
    "subject": "physics",
    "grade": "10",
    "questions": 5,
    "duration": 25,
    "difficulty": "Hard",
    "attempts": 980,
    "rating": 4.9,
    "topics": [
      "Electricity",
      "Magnetism",
      "Circuits"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "What is the unit of electric current?",
        "options": [
          "Volt",
          "Ohm",
          "Ampere",
          "Watt"
        ],
        "correctAnswer": 2,
        "explanation": "The SI unit of electric current is the Ampere (A)."
      },
      {
        "id": 2,
        "question": "Ohm's Law states the relationship between:",
        "options": [
          "Current, Power, and Resistance",
          "Voltage, Current, and Resistance",
          "Voltage, Charge, and Time",
          "Power, Energy, and Time"
        ],
        "correctAnswer": 1,
        "explanation": "Ohm's Law is V = IR, which relates Voltage (V), Current (I), and Resistance (R)."
      },
      {
        "id": 3,
        "question": "A device that converts electrical energy into mechanical energy is a:",
        "options": [
          "Generator",
          "Transformer",
          "Motor",
          "Resistor"
        ],
        "correctAnswer": 2,
        "explanation": "An electric motor uses electricity to produce motion."
      },
      {
        "id": 4,
        "question": "Which of these materials is a good conductor of electricity?",
        "options": [
          "Glass",
          "Rubber",
          "Copper",
          "Plastic"
        ],
        "correctAnswer": 2,
        "explanation": "Copper is a metal with free electrons, making it an excellent conductor."
      },
      {
        "id": 5,
        "question": "A fuse wire is made of an alloy with a:",
        "options": [
          "High melting point",
          "Low melting point",
          "High resistance",
          "Low resistance"
        ],
        "correctAnswer": 1,
        "explanation": "A fuse is designed to melt and break the circuit when a high current flows through it, so it needs a low melting point."
      }
    ]
  },
  {
    "id": 18,
    "title": "Acids, Bases & Salts",
    "subject": "chemistry",
    "grade": "10",
    "questions": 5,
    "duration": 25,
    "difficulty": "Hard",
    "attempts": 870,
    "rating": 4.8,
    "topics": [
      "Acids",
      "Bases",
      "Salts",
      "pH"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "A solution with a pH of 7 is:",
        "options": [
          "Acidic",
          "Basic",
          "Neutral",
          "Corrosive"
        ],
        "correctAnswer": 2,
        "explanation": "A pH of 7 indicates a neutral solution, such as pure water."
      },
      {
        "id": 2,
        "question": "What is the chemical name for baking soda?",
        "options": [
          "Sodium Chloride",
          "Sodium Bicarbonate",
          "Calcium Carbonate",
          "Sodium Hydroxide"
        ],
        "correctAnswer": 1,
        "explanation": "Baking soda is chemically known as Sodium Bicarbonate (NaHCO₃)."
      },
      {
        "id": 3,
        "question": "Which gas is released when an acid reacts with a metal?",
        "options": [
          "Oxygen",
          "Carbon Dioxide",
          "Hydrogen",
          "Nitrogen"
        ],
        "correctAnswer": 2,
        "explanation": "Acids react with active metals to produce a salt and hydrogen gas."
      },
      {
        "id": 4,
        "question": "The 'Litmus Test' is used to identify:",
        "options": [
          "Density of a substance",
          "Color of a substance",
          "Acidity or alkalinity",
          "Temperature"
        ],
        "correctAnswer": 2,
        "explanation": "Litmus paper changes color in the presence of an acid (red) or a base (blue)."
      },
      {
        "id": 5,
        "question": "A neutralization reaction is a reaction between:",
        "options": [
          "Acid and Salt",
          "Base and Salt",
          "Acid and Base",
          "Salt and Water"
        ],
        "correctAnswer": 2,
        "explanation": "A neutralization reaction is a chemical reaction in which an acid and a base react to form a salt and water."
      }
    ]
  },
  {
    "id": 19,
    "title": "Ecosystem & Environmental Issues",
    "subject": "biology",
    "grade": "10",
    "questions": 5,
    "duration": 20,
    "difficulty": "Medium",
    "attempts": 1020,
    "rating": 4.7,
    "topics": [
      "Ecosystems",
      "Environment",
      "Pollution"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "The main gas responsible for the greenhouse effect is:",
        "options": [
          "Oxygen",
          "Nitrogen",
          "Carbon Dioxide",
          "Helium"
        ],
        "correctAnswer": 2,
        "explanation": "Carbon dioxide (CO₂) is the primary greenhouse gas released by human activities."
      },
      {
        "id": 2,
        "question": "What is the term for a group of organisms of the same species living in a specific area?",
        "options": [
          "Community",
          "Ecosystem",
          "Population",
          "Biome"
        ],
        "correctAnswer": 2,
        "explanation": "A population is a group of individuals of the same species living in the same geographic area."
      },
      {
        "id": 3,
        "question": "Ozone layer depletion is caused by:",
        "options": [
          "Sulphur dioxide",
          "Carbon monoxide",
          "Chlorofluorocarbons (CFCs)",
          "Methane"
        ],
        "correctAnswer": 2,
        "explanation": "CFCs are the primary chemicals responsible for the destruction of the ozone layer."
      },
      {
        "id": 4,
        "question": "The process of nitrogen fixation is carried out by:",
        "options": [
          "Fungi",
          "Algae",
          "Bacteria",
          "Viruses"
        ],
        "correctAnswer": 2,
        "explanation": "Nitrogen-fixing bacteria convert atmospheric nitrogen into compounds usable by plants."
      },
      {
        "id": 5,
        "question": "Which of these is a biodegradable waste?",
        "options": [
          "Plastic bottle",
          "Glass",
          "Vegetable peels",
          "Aluminum can"
        ],
        "correctAnswer": 2,
        "explanation": "Biodegradable waste can be broken down by microorganisms, unlike plastic, glass, or metal."
      }
    ]
  },
  {
    "id": 20,
    "title": "Indian Freedom Struggle & Post-Independence",
    "subject": "history",
    "grade": "10",
    "questions": 5,
    "duration": 20,
    "difficulty": "Hard",
    "attempts": 900,
    "rating": 4.9,
    "topics": [
      "Freedom Struggle",
      "Constitution",
      "Post-1947"
    ],
    "premium": true,
    "questionsData": [
      {
        "id": 1,
        "question": "The 'Swaraj' Party was formed by:",
        "options": [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Motilal Nehru and C.R. Das",
          "Subhas Chandra Bose"
        ],
        "correctAnswer": 2,
        "explanation": "The Swaraj Party was formed by Motilal Nehru and C.R. Das in 1923."
      },
      {
        "id": 2,
        "question": "Who was the first Prime Minister of India?",
        "options": [
          "Sardar Vallabhbhai Patel",
          "Jawaharlal Nehru",
          "B.R. Ambedkar",
          "Rajendra Prasad"
        ],
        "correctAnswer": 1,
        "explanation": "Jawaharlal Nehru became the first Prime Minister of independent India."
      },
      {
        "id": 3,
        "question": "The 'Simon Commission' was boycotted because:",
        "options": [
          "It had no Indian members",
          "It recommended partition",
          "It was against the Congress",
          "It was pro-British"
        ],
        "correctAnswer": 0,
        "explanation": "The commission was an all-white body and had no Indian members, leading to widespread boycotts."
      },
      {
        "id": 4,
        "question": "Who is known as the 'Father of the Indian Constitution'?",
        "options": [
          "Mahatma Gandhi",
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Rajendra Prasad"
        ],
        "correctAnswer": 1,
        "explanation": "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constitution."
      },
      {
        "id": 5,
        "question": "The 'Dandi March' was a protest against:",
        "options": [
          "Indigo cultivation",
          "Salt Law",
          "Land revenue",
          "Famine"
        ],
        "correctAnswer": 1,
        "explanation": "The Dandi March, led by Mahatma Gandhi, was a nonviolent protest against the British salt monopoly."
      }
    ]
  }
]

  const recentResults = [
    { name: 'Lokesh', score: 98, subject: 'Mathematics', avatar: '👨‍🎓' },
    { name: 'Priya Patel', score: 95, subject: 'Physics', avatar: '👩‍🎓' },
    { name: 'Rohit Kumar', score: 92, subject: 'Chemistry', avatar: '👨‍🎓' },
    { name: 'Sneha Singh', score: 88, subject: 'Biology', avatar: '👩‍🎓' }
  ];

  // Filter tests by selected grade and filter tab
  const filteredTests = mockTests.filter(test => {
    if (test.grade !== selectedGrade) return false;
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
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
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
    const calculatedScore = Math.round((correctAnswers / currentTest.questionsData.length) * 100);
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

  const handleGradeSelect = (gradeValue) => {
    setSelectedGrade(gradeValue);

    // Scroll to subject section for grades 7-10
    if (['7', '8', '9', '10'].includes(gradeValue)) {
      setTimeout(() => {
        subjectSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200);
    }
    // Show coming soon message for grades 11-12
    else if (['11', '12'].includes(gradeValue)) {
      setComingSoonGrade(gradeValue);
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
    }
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
                    <div className="test-dots"><span></span><span></span><span></span></div>
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
                  onClick={() => handleGradeSelect(grade.value)}
                  style={{ '--grade-color': grade.color, position: "relative" }}
                >
                  {/* Toast message above the selected card */}
                  {showComingSoon && comingSoonGrade === grade.value && ['11', '12'].includes(grade.value) && (
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
                    const firstTest = mockTests.find(
                      (test) =>
                        test.subject.toLowerCase() === subject.name.toLowerCase() &&
                        test.grade === selectedGrade
                    );
                    if (firstTest) startTest(firstTest);
                    else alert('No mock test available for this subject and grade!');
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
                      <span className="difficulty-badge" style={{ color: getDifficultyColor(test.difficulty) }}>
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

                  <button className="start-test-btn" onClick={() => startTest(test)}>
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
                    <div className="score-fill" style={{ width: `${result.score}%` }}></div>
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
                <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / currentTest.questionsData.length) * 100}%` }}></div>
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
                <button className="nav-btn prev-btn" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
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
                  <button className="nav-btn next-btn" onClick={goToNextQuestion}>
                    Next
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button className="submit-test-btn" onClick={submitTest}>
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
                        answer === currentTest.questionsData[index].correctAnswer).length} / {currentTest.questionsData.length}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Time Taken</div>
                    <div className="detail-value">{formatTime((currentTest.duration * 60) - timeLeft)}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Difficulty</div>
                    <div className="detail-value" style={{ color: getDifficultyColor(currentTest.difficulty) }}>{currentTest.difficulty}</div>
                  </div>
                </div>
              </div>

              <div className="answers-review">
                <h3>Answers Review</h3>
                {currentTest.questionsData.map((question, index) => (
                  <div key={question.id} className={`question-review ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
                    <div className="question-header">
                      <span className="question-number">Question {index + 1}</span>
                      {selectedAnswers[question.id] === question.correctAnswer ? (
                        <span className="correct-indicator">
                          <Check size={16} /> Correct
                        </span>
                      ) : (
                        <span className="incorrect-indicator">
                          <X size={16} /> Incorrect
                        </span>
                      )}
                    </div>
                    <div className="question-text">{question.question}</div>
                    <div className="correct-answer">Correct Answer: {question.options[question.correctAnswer]}</div>
                    {selectedAnswers[question.id] !== question.correctAnswer && (
                      <div className="your-answer">Your Answer: {question.options[selectedAnswers[question.id]]}</div>
                    )}
                    <div className="explanation"><strong>Explanation:</strong> {question.explanation}</div>
                  </div>
                ))}
              </div>

              <div className="results-actions">
                <button className="retake-test-btn" onClick={() => startTest(currentTest)}>
                  <Play size={18} />
                  Retake Test
                </button>
                <button className="back-to-tests-btn" onClick={exitTest}>Back to All Tests</button>
              </div>
            </div>
          )}
        </div>
      )}
      {showComingSoon && (
        <div className="toast-coming-soon"
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











  // const grades = [
  //   { value: '7', label: 'Grade 7', color: '#FF6B6B' },
  //   { value: '8', label: 'Grade 8', color: '#4ECDC4' },
  //   { value: '9', label: 'Grade 9', color: '#45B7D1' },
  //   { value: '10', label: 'Grade 10', color: '#96CEB4' },
  //   { value: '11', label: 'Grade 11', color: '#FFEAA7' },
  //   { value: '12', label: 'Grade 12', color: '#DDA0DD' }
  // ];

  // // Grade-specific subjects
  // const grade7Subjects = [
  //   { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 32, difficulty: 'Medium', duration: '80 min' },
  //   { id: 'physics', name: 'Physics', icon: '⚡', tests: 28, difficulty: 'Medium', duration: '75 min' },
  //   { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '70 min' },
  //   { id: 'computer', name: 'Computer Science', icon: '💻', tests: 35, difficulty: 'Hard', duration: '90 min' },
  //   { id: 'english', name: 'English', icon: '📚', tests: 30, difficulty: 'Easy', duration: '60 min' }
  // ];

  // const grade8Subjects = [
  //   { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 28, difficulty: 'Medium', duration: '85 min' },
  //   { id: 'science', name: 'Science', icon: '🔬', tests: 32, difficulty: 'Medium', duration: '90 min' },
  //   { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 30, difficulty: 'Medium', duration: '80 min' },
  //   { id: 'english', name: 'English', icon: '📚', tests: 25, difficulty: 'Medium', duration: '70 min' },
  //   { id: 'computer', name: 'Computer Science', icon: '💻', tests: 22, difficulty: 'Hard', duration: '75 min' }
  // ];

  // const grade9Subjects = [
  //   { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 35, difficulty: 'Hard', duration: '90 min' },
  //   { id: 'science', name: 'Science', icon: '🔬', tests: 38, difficulty: 'Hard', duration: '95 min' },
  //   { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 32, difficulty: 'Medium', duration: '85 min' },
  //   { id: 'english', name: 'English', icon: '📚', tests: 28, difficulty: 'Medium', duration: '75 min' },
  //   { id: 'computer', name: 'Computer Science', icon: '💻', tests: 25, difficulty: 'Hard', duration: '80 min' }
  // ];

  // const grade10Subjects = [
  //   { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 35, difficulty: 'Hard', duration: '90 min' },
  //   { id: 'science', name: 'Science', icon: '🔬', tests: 38, difficulty: 'Hard', duration: '95 min' },
  //   { id: 'social', name: 'Social Studies', icon: '🏛️', tests: 32, difficulty: 'Medium', duration: '85 min' },
  //   { id: 'english', name: 'English', icon: '📚', tests: 28, difficulty: 'Medium', duration: '75 min' },
  //   { id: 'computer', name: 'Computer Science', icon: '💻', tests: 25, difficulty: 'Hard', duration: '80 min' }
  // ];

  // // Get subjects based on selected grade
  // const getSubjectsByGrade = () => {
  //   switch(selectedGrade) {
  //     case '7': return grade7Subjects;
  //     case '8': return grade8Subjects;
  //     case '9': return grade9Subjects;
  //     case '10': return grade10Subjects;
  //     default: return grade7Subjects;
  //   }
  // };

  // // Grade 7 mock tests
  // const grade7MockTests = [
  //   {
  //     id: 1,
  //     title: 'Numbers, Squares and Cubes',
  //     subject: 'mathematics',
  //     grade: '7',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Medium',
  //     attempts: 980,
  //     rating: 4.7,
  //     topics: ['Numbers', 'Squares', 'Cubes', 'Operations'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the square of 15?",
  //         options: ["225", "125", "250", "200"],
  //         correctAnswer: 0,
  //         explanation: "15 × 15 = 225, so the square of 15 is 225."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the cube root of 64?",
  //         options: ["4", "8", "16", "32"],
  //         correctAnswer: 0,
  //         explanation: "4 × 4 × 4 = 64, so the cube root of 64 is 4."
  //       },
  //       {
  //         id: 3,
  //         question: "Which of these is a perfect square?",
  //         options: ["50", "64", "75", "90"],
  //         correctAnswer: 1,
  //         explanation: "64 is 8², making it a perfect square."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the value of 7³?",
  //         options: ["343", "49", "2401", "21"],
  //         correctAnswer: 0,
  //         explanation: "7³ = 7 × 7 × 7 = 343."
  //       },
  //       {
  //         id: 5,
  //         question: "Which number is both a perfect square and perfect cube?",
  //         options: ["16", "27", "64", "81"],
  //         correctAnswer: 2,
  //         explanation: "64 is 8² and 4³, making it both a perfect square and perfect cube."
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'Particulate Nature of Matter',
  //     subject: 'physics',
  //     grade: '7',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Medium',
  //     attempts: 850,
  //     rating: 4.6,
  //     topics: ['States of Matter', 'Particles', 'Properties'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "Which state of matter has a definite volume but no definite shape?",
  //         options: ["Solid", "Liquid", "Gas", "Plasma"],
  //         correctAnswer: 1,
  //         explanation: "Liquids have a definite volume but take the shape of their container."
  //       },
  //       {
  //         id: 2,
  //         question: "What happens to the particles when a substance is heated?",
  //         options: [
  //           "They move closer together",
  //           "They move faster and farther apart",
  //           "They change color",
  //           "They become heavier"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "When heated, particles gain energy and move faster, increasing the space between them."
  //       },
  //       {
  //         id: 3,
  //         question: "Which of these is an example of diffusion?",
  //         options: [
  //           "Ice melting in water",
  //           "Smell of perfume spreading in a room",
  //           "Water boiling in a kettle",
  //           "Salt dissolving in water"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "Diffusion is the movement of particles from an area of high concentration to low concentration."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the process called when a solid turns directly into a gas?",
  //         options: ["Melting", "Sublimation", "Evaporation", "Condensation"],
  //         correctAnswer: 1,
  //         explanation: "Sublimation is the process where a solid turns directly into a gas without becoming a liquid first."
  //       },
  //       {
  //         id: 5,
  //         question: "Which state of matter has the strongest forces between particles?",
  //         options: ["Solid", "Liquid", "Gas", "Plasma"],
  //         correctAnswer: 0,
  //         explanation: "Solids have the strongest intermolecular forces, keeping particles in fixed positions."
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: 'Natural Resources',
  //     subject: 'social',
  //     grade: '7',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Easy',
  //     attempts: 920,
  //     rating: 4.5,
  //     topics: ['Resources', 'Conservation', 'Types'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "Which of these is a renewable resource?",
  //         options: ["Coal", "Solar energy", "Natural gas", "Petroleum"],
  //         correctAnswer: 1,
  //         explanation: "Solar energy is renewable as it is continuously available from the sun."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the main cause of resource depletion?",
  //         options: [
  //           "Overconsumption",
  //           "Natural disasters",
  //           "Lack of technology",
  //           "Animal activities"
  //         ],
  //         correctAnswer: 0,
  //         explanation: "Overconsumption by humans is the primary cause of resource depletion."
  //       },
  //       {
  //         id: 3,
  //         question: "Which natural resource is known as 'black gold'?",
  //         options: ["Coal", "Gold", "Petroleum", "Diamond"],
  //         correctAnswer: 2,
  //         explanation: "Petroleum is often called 'black gold' due to its high economic value."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the practice of conserving resources for future generations called?",
  //         options: [
  //           "Resource management",
  //           "Sustainable development",
  //           "Conservation",
  //           "Recycling"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "Sustainable development meets present needs without compromising future generations."
  //       },
  //       {
  //         id: 5,
  //         question: "Which of these is a non-renewable resource?",
  //         options: ["Wind", "Water", "Forests", "Minerals"],
  //         correctAnswer: 3,
  //         explanation: "Minerals are non-renewable as they take millions of years to form."
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: 'SQL and Database Concepts',
  //     subject: 'computer',
  //     grade: '7',
  //     questions: 5,
  //     duration: 12,
  //     difficulty: 'Hard',
  //     attempts: 780,
  //     rating: 4.8,
  //     topics: ['SQL', 'Databases', 'Queries'],
  //     premium: true,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What does SQL stand for?",
  //         options: [
  //           "Structured Query Language",
  //           "Simple Question Language",
  //           "Standard Query Logic",
  //           "System Query List"
  //         ],
  //         correctAnswer: 0,
  //         explanation: "SQL stands for Structured Query Language, used for managing databases."
  //       },
  //       {
  //         id: 2,
  //         question: "Which SQL command is used to retrieve data from a database?",
  //         options: ["GET", "SELECT", "RETRIEVE", "FIND"],
  //         correctAnswer: 1,
  //         explanation: "The SELECT command is used to retrieve data from a database."
  //       },
  //       {
  //         id: 3,
  //         question: "What is a primary key in a database?",
  //         options: [
  //           "A key that opens the database",
  //           "A unique identifier for each record",
  //           "The first column in a table",
  //           "The most important data field"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "A primary key uniquely identifies each record in a database table."
  //       },
  //       {
  //         id: 4,
  //         question: "Which SQL clause is used to filter records?",
  //         options: ["FILTER BY", "WHERE", "HAVING", "CONDITION"],
  //         correctAnswer: 1,
  //         explanation: "The WHERE clause is used to filter records based on specified conditions."
  //       },
  //       {
  //         id: 5,
  //         question: "What does the UPDATE command do in SQL?",
  //         options: [
  //           "Adds new records to a table",
  //           "Modifies existing records in a table",
  //           "Changes the table structure",
  //           "Updates the database software"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "The UPDATE command modifies existing records in a database table."
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: 'Science and Curiosity',
  //     subject: 'english',
  //     grade: '7',
  //     questions: 5,
  //     duration: 8,
  //     difficulty: 'Easy',
  //     attempts: 1050,
  //     rating: 4.4,
  //     topics: ['Vocabulary', 'Comprehension', 'Grammar'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the meaning of 'curiosity'?",
  //         options: [
  //           "A state of fear",
  //           "A desire to learn or know",
  //           "A type of scientific instrument",
  //           "A rare animal"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "Curiosity means a strong desire to know or learn something."
  //       },
  //       {
  //         id: 2,
  //         question: "Which word best describes a scientist?",
  //         options: ["Inquisitive", "Indifferent", "Uninterested", "Boring"],
  //         correctAnswer: 0,
  //         explanation: "Scientists are typically inquisitive, meaning curious and eager to learn."
  //       },
  //       {
  //         id: 3,
  //         question: "What is the correct plural form of 'hypothesis'?",
  //         options: ["Hypothesises", "Hypothesi", "Hypotheses", "Hypothesis"],
  //         correctAnswer: 2,
  //         explanation: "The plural of hypothesis is hypotheses."
  //       },
  //       {
  //         id: 4,
  //         question: "Which sentence is grammatically correct?",
  //         options: [
  //           "The experiment were successful",
  //           "The experiment was successful",
  //           "The experiment are successful",
  //           "The experiment am successful"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "The experiment was successful' is correct as 'experiment' is singular."
  //       },
  //       {
  //         id: 5,
  //         question: "What does 'empirical evidence' mean?",
  //         options: [
  //           "Evidence based on theory",
  //           "Evidence based on observation or experience",
  //           "Evidence from ancient texts",
  //           "Evidence that cannot be verified"
  //         ],
  //         correctAnswer: 1,
  //         explanation: "Empirical evidence is information acquired by observation or experimentation."
  //       }
  //     ]
  //   }
  // ];

  // // Grade 8 mock tests
  // const grade8MockTests = [
  //   {
  //     id: 1,
  //     title: 'Coordinate Geometry & Number Systems',
  //     subject: 'mathematics',
  //     grade: '8',
  //     questions: 5,
  //     duration: 12,
  //     difficulty: 'Medium',
  //     attempts: 920,
  //     rating: 4.6,
  //     topics: ['Coordinate Geometry', 'Number Systems', 'Polynomials', 'Linear Equations'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the distance between points (2, 3) and (5, 7)?",
  //         options: ["5 units", "6 units", "7 units", "8 units"],
  //         correctAnswer: 0,
  //         explanation: "Using distance formula: √[(5-2)² + (7-3)²] = √[9 + 16] = √25 = 5 units"
  //       },
  //       {
  //         id: 2,
  //         question: "Which of these is an irrational number?",
  //         options: ["√4", "√9", "√2", "√16"],
  //         correctAnswer: 2,
  //         explanation: "√2 cannot be expressed as a fraction and has non-terminating, non-repeating decimal expansion."
  //       },
  //       {
  //         id: 3,
  //         question: "What is the degree of the polynomial 3x³ + 2x² - 5x + 7?",
  //         options: ["1", "2", "3", "4"],
  //         correctAnswer: 2,
  //         explanation: "The highest power of the variable x is 3, so the degree is 3."
  //       },
  //       {
  //         id: 4,
  //         question: "If 2x + 5 = 15, what is the value of x?",
  //         options: ["5", "10", "7.5", "3"],
  //         correctAnswer: 0,
  //         explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
  //       },
  //       {
  //         id: 5,
  //         question: "In which quadrant does the point (-3, 4) lie?",
  //         options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
  //         correctAnswer: 1,
  //         explanation: "Points with negative x and positive y coordinates lie in Quadrant II."
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'Atoms, Molecules & Motion',
  //     subject: 'science',
  //     grade: '8',
  //     questions: 5,
  //     duration: 15,
  //     difficulty: 'Medium',
  //     attempts: 880,
  //     rating: 4.7,
  //     topics: ['Atoms & Molecules', 'Gravitation', 'Motion', 'Matter'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the atomic mass of oxygen?",
  //         options: ["12 u", "14 u", "16 u", "18 u"],
  //         correctAnswer: 2,
  //         explanation: "Oxygen has an atomic mass of 16 atomic mass units (u)."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the value of acceleration due to gravity on Earth?",
  //         options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "6.67 m/s²"],
  //         correctAnswer: 0,
  //         explanation: "The standard acceleration due to gravity on Earth is approximately 9.8 m/s²."
  //       },
  //       {
  //         id: 3,
  //         question: "Which law states that 'Every action has an equal and opposite reaction'?",
  //         options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
  //         correctAnswer: 2,
  //         explanation: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the SI unit of force?",
  //         options: ["Joule", "Watt", "Newton", "Pascal"],
  //         correctAnswer: 2,
  //         explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton."
  //       },
  //       {
  //         id: 5,
  //         question: "Which state of matter has the highest kinetic energy?",
  //         options: ["Solid", "Liquid", "Gas", "Plasma"],
  //         correctAnswer: 2,
  //         explanation: "Gas particles have the highest kinetic energy as they move freely at high speeds."
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: 'Constitutional Design & Democracy',
  //     subject: 'social',
  //     grade: '8',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Medium',
  //     attempts: 950,
  //     rating: 4.5,
  //     topics: ['Constitutional Design', 'Democracy', 'Democratic Rights', 'Electoral Politics'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "Who was the chairman of the Drafting Committee of the Indian Constitution?",
  //         options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
  //         correctAnswer: 2,
  //         explanation: "Dr. B.R. Ambedkar was the chairman of the Drafting Committee of the Indian Constitution."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the minimum voting age in India?",
  //         options: ["16 years", "18 years", "21 years", "25 years"],
  //         correctAnswer: 1,
  //         explanation: "The minimum voting age in India is 18 years as per the 61st Constitutional Amendment."
  //       },
  //       {
  //         id: 3,
  //         question: "Which fundamental right prohibits human trafficking?",
  //         options: ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Constitutional Remedies"],
  //         correctAnswer: 2,
  //         explanation: "Right against Exploitation (Article 23) prohibits human trafficking and forced labor."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the full form of EVM?",
  //         options: ["Electronic Voting Machine", "Electric Voting Mechanism", "Election Verification Method", "Electronic Validation Machine"],
  //         correctAnswer: 0,
  //         explanation: "EVM stands for Electronic Voting Machine, used in Indian elections."
  //       },
  //       {
  //         id: 5,
  //         question: "Who is the head of the Election Commission of India?",
  //         options: ["Prime Minister", "President", "Chief Election Commissioner", "Home Minister"],
  //         correctAnswer: 2,
  //         explanation: "The Chief Election Commissioner heads the Election Commission of India."
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: 'English Literature & Grammar',
  //     subject: 'english',
  //     grade: '8',
  //     questions: 5,
  //     duration: 8,
  //     difficulty: 'Medium',
  //     attempts: 1020,
  //     rating: 4.4,
  //     topics: ['The Sound of Music', 'The Little Girl', 'Truly Beautiful Mind', 'The Snake and the Mirror'],
  //     premium: true,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "Who is the author of 'The Sound of Music'?",
  //         options: ["Evelyn Glennie", "Deborah Cowley", "Bismillah Khan", "A.P.J. Abdul Kalam"],
  //         correctAnswer: 1,
  //         explanation: "Deborah Cowley is the author of 'The Sound of Music' chapter."
  //       },
  //       {
  //         id: 2,
  //         question: "What was the name of the little girl in the story 'The Little Girl'?",
  //         options: ["Evelyn", "Kezia", "Deborah", "Isabel"],
  //         correctAnswer: 1,
  //         explanation: "Kezia was the name of the little girl who was afraid of her father."
  //       },
  //       {
  //         id: 3,
  //         question: "Who is known as the 'Father of the Indian Nuclear Program'?",
  //         options: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam"],
  //         correctAnswer: 1,
  //         explanation: "Homi Jehangir Bhabha is known as the father of the Indian nuclear program."
  //       },
  //       {
  //         id: 4,
  //         question: "What profession did the narrator have in 'The Snake and the Mirror'?",
  //         options: ["Teacher", "Doctor", "Engineer", "Lawyer"],
  //         correctAnswer: 1,
  //         explanation: "The narrator was a homeopathic doctor who encountered a snake in his room."
  //       },
  //       {
  //         id: 5,
  //         question: "Which musical instrument did Bismillah Khan play?",
  //         options: ["Sitar", "Tabla", "Shehnai", "Flute"],
  //         correctAnswer: 2,
  //         explanation: "Bismillah Khan was a renowned shehnai player who popularized this instrument."
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: 'ICT & Digital Communication',
  //     subject: 'computer',
  //     grade: '8',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Hard',
  //     attempts: 820,
  //     rating: 4.8,
  //     topics: ['Introduction to ICT', 'Internet Connectivity', 'Textual Communication', 'Audio-Video Communication'],
  //     premium: true,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What does ICT stand for?",
  //         options: [
  //           "Information and Communication Technology",
  //           "International Communication Technology",
  //           "Internet Connection Technology",
  //           "Integrated Computer Technology"
  //         ],
  //         correctAnswer: 0,
  //         explanation: "ICT stands for Information and Communication Technology."
  //       },
  //       {
  //         id: 2,
  //         question: "Which protocol is used for transferring web pages on the internet?",
  //         options: ["FTP", "HTTP", "SMTP", "TCP"],
  //         correctAnswer: 1,
  //         explanation: "HTTP (HyperText Transfer Protocol) is used for transferring web pages."
  //       },
  //       {
  //         id: 3,
  //         question: "Which of these is NOT a method of digital communication?",
  //         options: ["Email", "Video Conferencing", "Blogging", "Handwritten Letter"],
  //         correctAnswer: 3,
  //         explanation: "Handwritten letter is a traditional form of communication, not digital."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the purpose of a modem?",
  //         options: [
  //           "To process data",
  //           "To store data",
  //           "To convert digital signals to analog and vice versa",
  //           "To display output"
  //         ],
  //         correctAnswer: 2,
  //         explanation: "A modem modulates and demodulates signals for communication over telephone lines."
  //       },
  //       {
  //         id: 5,
  //         question: "Which software is used for creating visual communication?",
  //         options: ["Word Processor", "Spreadsheet", "Presentation Software", "Database Software"],
  //         correctAnswer: 2,
  //         explanation: "Presentation software like PowerPoint is used for creating visual communication."
  //       }
  //     ]
  //   }
  // ];

  // // Grade 9 mock tests
  // const grade9MockTests = [
  //   {
  //     id: 1,
  //     title: 'Real Numbers & Polynomials',
  //     subject: 'mathematics',
  //     grade: '9',
  //     questions: 5,
  //     duration: 15,
  //     difficulty: 'Hard',
  //     attempts: 1250,
  //     rating: 4.7,
  //     topics: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the HCF of 96 and 404?",
  //         options: ["4", "8", "12", "16"],
  //         correctAnswer: 0,
  //         explanation: "Using Euclid's division algorithm: 404 = 96 × 4 + 20, 96 = 20 × 4 + 16, 20 = 16 × 1 + 4, 16 = 4 × 4 + 0. So HCF is 4."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the degree of the polynomial x³ + 2x² - 5x + 7?",
  //         options: ["1", "2", "3", "4"],
  //         correctAnswer: 2,
  //         explanation: "The highest power of the variable x is 3, so the degree is 3."
  //       },
  //       {
  //         id: 3,
  //         question: "If 2x + 3y = 12 and 3x + 2y = 13, what is the value of x + y?",
  //         options: ["5", "6", "7", "8"],
  //         correctAnswer: 0,
  //         explanation: "Adding both equations: 5x + 5y = 25 → x + y = 5."
  //       },
  //       {
  //         id: 4,
  //         question: "What are the roots of the quadratic equation x² - 5x + 6 = 0?",
  //         options: ["2, 3", "1, 6", "-2, -3", "-1, -6"],
  //         correctAnswer: 0,
  //         explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so roots are x = 2 and x = 3."
  //       },
  //       {
  //         id: 5,
  //         question: "What is the sum of the first 20 natural numbers?",
  //         options: ["210", "200", "190", "180"],
  //         correctAnswer: 0,
  //         explanation: "Sum of first n natural numbers = n(n+1)/2 = 20×21/2 = 210."
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'Chemical Reactions & Acids',
  //     subject: 'science',
  //     grade: '9',
  //     questions: 5,
  //     duration: 15,
  //     difficulty: 'Hard',
  //     attempts: 1150,
  //     rating: 4.8,
  //     topics: ['Chemical Reactions', 'Acids/Bases/Salts', 'Metals/Non-Metals', 'Carbon Compounds'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
  //         options: ["Combination", "Decomposition", "Displacement", "Double Displacement"],
  //         correctAnswer: 0,
  //         explanation: "This is a combination reaction where two elements combine to form a compound."
  //       },
  //       {
  //         id: 2,
  //         question: "What is the pH value of a neutral solution?",
  //         options: ["0", "7", "14", "1"],
  //         correctAnswer: 1,
  //         explanation: "A neutral solution has pH = 7."
  //       },
  //       {
  //         id: 3,
  //         question: "Which metal is liquid at room temperature?",
  //         options: ["Sodium", "Mercury", "Iron", "Copper"],
  //         correctAnswer: 1,
  //         explanation: "Mercury is the only metal that is liquid at room temperature."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the functional group of alcohols?",
  //         options: ["-COOH", "-OH", "-CHO", "-NH₂"],
  //         correctAnswer: 1,
  //         explanation: "Alcohols have the hydroxyl functional group (-OH)."
  //       },
  //       {
  //         id: 5,
  //         question: "Which process is essential for energy production in living organisms?",
  //         options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
  //         correctAnswer: 1,
  //         explanation: "Respiration is the process that releases energy from food in living organisms."
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: 'Resources & National Economy',
  //     subject: 'social',
  //     grade: '9',
  //     questions: 5,
  //     duration: 12,
  //     difficulty: 'Medium',
  //     attempts: 980,
  //     rating: 4.6,
  //     topics: ['Resources & GDP', 'Forests & Wildlife', 'National Economy', 'Agriculture'],
  //     premium: false,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What does GDP stand for?",
  //         options: ["Gross Domestic Product", "General Development Plan", "Governmental Development Program", "Gross Development Percentage"],
  //         correctAnswer: 0,
  //         explanation: "GDP is Gross Domestic Product."
  //       },
  //       {
  //         id: 2,
  //         question: "Which organization is responsible for wildlife conservation in India?",
  //         options: ["WHO", "UNESCO", "WWF", "CITES"],
  //         correctAnswer: 2,
  //         explanation: "WWF is key in Indian wildlife conservation."
  //       },
  //       {
  //         id: 3,
  //         question: "Which sector is the largest employer in India?",
  //         options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
  //         correctAnswer: 0,
  //         explanation: "The primary sector employs the most people."
  //       },
  //       {
  //         id: 4,
  //         question: "Which state is the largest producer of rice in India?",
  //         options: ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
  //         correctAnswer: 1,
  //         explanation: "West Bengal is India's main rice producer."
  //       },
  //       {
  //         id: 5,
  //         question: "Which city is known as the 'IT Capital of India'?",
  //         options: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
  //         correctAnswer: 2,
  //         explanation: "Bangalore is called the IT capital of India."
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: 'English Literature & Comprehension',
  //     subject: 'english',
  //     grade: '9',
  //     questions: 5,
  //     duration: 10,
  //     difficulty: 'Medium',
  //     attempts: 1100,
  //     rating: 4.5,
  //     topics: ['Investigative Writing', 'Invisible Living', 'Health', 'Electricity & Magnetism'],
  //     premium: true,
  //     questionsData: [
  //       {
  //         id: 1,
  //         question: "What is the main purpose of investigative writing?",
  //         options: ["To entertain readers", "To present facts and uncover truth", "To express personal opinions", "To create fictional stories"],
  //         correctAnswer: 1,
  //         explanation: "Investigative writing reveals factual, researched truths."
  //       },
  //       {
  //         id: 2,
  //         question: "What does 'Invisible Living' typically refer to in literature?",
  //         options: ["Microscopic organisms", "Spiritual or supernatural beings", "Digital life", "Underground communities"],
  //         correctAnswer: 0,
  //         explanation: "'Invisible Living' often means tiny unseen organisms."
  //       },
  //       {
  //         id: 3,
  //         question: "Which literary device is used to compare two unlike things using 'like' or 'as'?",
  //         options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
  //         correctAnswer: 1,
  //         explanation: "Simile compares using 'like' or 'as'."
  //       },
  //       {
  //         id: 4,
  //         question: "What is the theme of most health-related literature?",
  //         options: ["Wealth and prosperity", "Well-being and prevention", "Adventure and exploration", "Romance and relationships"],
  //                  correctAnswer: 1,
  //         explanation: "Health literature focuses on well-being and prevention."
  //       },
  //       {
  //         id: 5,
  //         question: "What is electromagnetic induction?",
  //         options: [
  //           "Production of voltage by changing magnetic field",
  //           "Inducing current through chemical reaction",
  //           "Creating magnets through electricity",
  //           "Generating electricity from sunlight"
  //         ],
  //         correctAnswer: 0,
  //         explanation: "Electromagnetic induction produces voltage via changing magnetic fields."
  //       }
  //     ]
  //   }
  // ];

  