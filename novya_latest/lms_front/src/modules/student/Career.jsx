


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, BarChart2, BookOpen, Briefcase, Clock, Compass, 
  Globe, GraduationCap, Rocket,  
  Star, Target, TrendingUp, Users, Zap, X, ChevronDown,
  Bookmark, Award, Code, Music, Palette, Mic, Activity
} from 'lucide-react';
import './career.css';

const Career = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Career | NOVYA - Your Smart Learning Platform";
  }, []);
  
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    successRate: 0,
    careers: 0,
    universities: 0
  });
  const [showDetails, setShowDetails] = useState(null);
  const [heroAnimation, setHeroAnimation] = useState(false);
  
  const metricsRef = useRef(null);
  const futureRef = useRef(null);

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

    animateValue(0, 12500, 2000, (val) => setAnimatedStats(prev => ({...prev, students: val})));
    animateValue(0, 92, 1800, (val) => setAnimatedStats(prev => ({...prev, successRate: val})));
    animateValue(0, 350, 2200, (val) => setAnimatedStats(prev => ({...prev, careers: val})));
    animateValue(0, 2800, 2500, (val) => setAnimatedStats(prev => ({...prev, universities: val})));

    setTimeout(() => {
      setHeroAnimation(true);
    }, 500);
  }, []);

  const scrollToMetrics = () => {
    metricsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFuture = () => {
    futureRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToHome = () => {
    navigate('/student/dashboard'); // Changed to the correct path
  };

  const performanceMetrics = [
    {
      id: 'academic',
      title: 'Academic Performance',
      icon: <GraduationCap size={24} />,
      metrics: [
        { name: 'GPA', value: 3.8, max: 4.0, trend: 'up' },
        { name: 'Test Scores', value: 92, max: 100, trend: 'steady' },
        { name: 'Course Rigor', value: 4, max: 5, trend: 'up' }
      ],
      details: {
        description: "Your academic performance shows strong results across all subjects with particular strengths in STEM fields.",
        strengths: [
          "Consistent high achiever in Mathematics and Science",
          "Excellent problem-solving skills",
          "Strong analytical abilities"
        ],
        recommendations: [
          "Consider advanced placement courses in Math and Science",
          "Participate in academic competitions to challenge yourself",
          "Explore research opportunities in your areas of strength"
        ],
        chartData: {
          labels: ['Math', 'Science', 'English', 'History', 'Foreign Lang'],
          datasets: [
            {
              label: 'Your Scores',
              data: [95, 93, 88, 85, 80],
              backgroundColor: 'rgba(102, 126, 234, 0.6)'
            },
            {
              label: 'Class Average',
              data: [82, 81, 85, 78, 75],
              backgroundColor: 'rgba(200, 200, 200, 0.6)'
            }
          ]
        }
      }
    },
    {
      id: 'skills',
      title: 'Skill Development',
      icon: <Zap size={24} />,
      metrics: [
        { name: 'Critical Thinking', value: 8.5, max: 10, trend: 'up' },
        { name: 'Creativity', value: 7.2, max: 10, trend: 'steady' },
        { name: 'Collaboration', value: 9.1, max: 10, trend: 'up' }
      ],
      details: {
        description: "You demonstrate excellent collaborative skills and strong critical thinking abilities, with room to further develop creative problem-solving approaches.",
        strengths: [
          "Exceptional teamwork and leadership in group projects",
          "Logical reasoning and analysis",
          "Effective communication skills"
        ],
        recommendations: [
          "Engage in activities that require innovative thinking",
          "Try brainstorming techniques to enhance creativity",
          "Lead more group projects to develop leadership"
        ],
        chartData: {
          labels: ['Critical Thinking', 'Creativity', 'Collaboration', 'Communication', 'Adaptability'],
          datasets: [
            {
              label: 'Your Skills',
              data: [8.5, 7.2, 9.1, 8.3, 7.8],
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            },
            {
              label: 'Peer Average',
              data: [7.1, 6.8, 7.5, 7.2, 6.9],
              backgroundColor: 'rgba(200, 200, 200, 0.6)'
            }
          ]
        }
      }
    },
    {
      id: 'engagement',
      title: 'School Engagement',
      icon: <Users size={24} />,
      metrics: [
        { name: 'Attendance', value: 98, max: 100, trend: 'steady' },
        { name: 'Extracurriculars', value: 3, max: 5, trend: 'up' },
        { name: 'Leadership', value: 2, max: 5, trend: 'up' }
      ],
      details: {
        description: "Your school engagement is strong with perfect attendance, though there's potential to expand your extracurricular involvement and leadership roles.",
        strengths: [
          "Perfect attendance record",
          "Active participation in class discussions",
          "Growing extracurricular involvement"
        ],
        recommendations: [
          "Explore 1-2 new extracurricular activities",
          "Consider running for student government",
          "Start a club in your area of interest"
        ],
        chartData: {
          labels: ['Attendance', 'Extracurriculars', 'Leadership', 'Class Participation', 'Community Service'],
          datasets: [
            {
              label: 'Your Engagement',
              data: [98, 3, 2, 4, 1],
              backgroundColor: 'rgba(255, 159, 64, 0.6)'
            },
            {
              label: 'School Average',
              data: [94, 2, 1, 3, 1],
              backgroundColor: 'rgba(200, 200, 200, 0.6)'
            }
          ]
        }
      }
    },
    {
      id: 'growth',
      title: 'Growth Potential',
      icon: <TrendingUp size={24} />,
      metrics: [
        { name: 'Improvement Rate', value: 15, max: 20, trend: 'up' },
        { name: 'Goal Achievement', value: 80, max: 100, trend: 'steady' },
        { name: 'Learning Pace', value: 4, max: 5, trend: 'up' }
      ],
      details: {
        description: "Your growth potential is excellent, showing consistent improvement across all areas with particularly strong learning pace and adaptability.",
        strengths: [
          "Quick to master new concepts",
          "Consistent quarter-over-quarter improvement",
          "Effective goal setting and achievement"
        ],
        recommendations: [
          "Set more ambitious stretch goals",
          "Document your learning process to identify patterns",
          "Seek out mentors in your areas of interest"
        ],
        chartData: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'Your Improvement',
              data: [12, 14, 15, 17],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              fill: true
            },
            {
              label: 'Your Goals',
              data: [10, 12, 15, 18],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderDash: [5, 5],
              fill: false
            }
          ]
        }
      }
    }
  ];

  const studentDetails = {
    name: "Alex Johnson",
    grade: "8th Grade",
    school: "Maplewood Middle School",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    interests: ["Robotics", "Creative Writing", "Basketball", "Debate"],
    strengths: [
      { name: "Mathematical Reasoning", icon: <Bookmark size={16} /> },
      { name: "Scientific Inquiry", icon: <Award size={16} /> },
      { name: "Logical Analysis", icon: <Code size={16} /> }
    ],
    hobbies: [
      { name: "Coding", icon: <Code size={16} /> },
      { name: "Music", icon: <Music size={16} /> },
      { name: "Art", icon: <Palette size={16} /> },
      { name: "Public Speaking", icon: <Mic size={16} /> }
    ],
    recentAchievements: [
      "1st Place in Regional Math Olympiad",
      "Published short story in school magazine",
      "Elected as class representative",
      "Perfect attendance award"
    ]
  };

  const openDetails = (category) => {
    setShowDetails(category);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setShowDetails(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="career-container">
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '15%', left: '5%' }}>
          <Rocket size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '25%', right: '8%', animationDelay: '0.3s' }}>
          <BookOpen size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '70%', left: '10%', animationDelay: '0.6s' }}>
          <Briefcase size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ bottom: '20%', right: '12%', animationDelay: '0.9s' }}>
          <Globe size={24} />
        </div>
      </div>

      <section className="career-hero" ref={futureRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className={`title-word ${heroAnimation ? 'animate' : ''}`}>Shape</span>{' '}
              <span className={`title-word ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>Your</span>{' '}
              <span className={`gradient-text ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>Future</span>
            </h1>
            <p className={`hero-subtitle ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              Track your academic performance, skill development, and growth potential 
              to maximize your future opportunities.
            </p>
            
            <div className={`hero-cta ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
              <button className="cta-btn primary" onClick={scrollToMetrics}>
                <BarChart2 size={20} />
                View Dashboard
              </button>
              {/* <button className="cta-btn secondary" onClick={navigateToHome}>
                <Compass size={20} />
                Explore Careers
              </button> */}
            </div>
          </div>
          
          <div className={`hero-visual ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '1s' }}>
            <div className="performance-scale">
              <div className="scale-item scale-excellent">
                <Star size={32} />
                <span>Excellent</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-good">
                <TrendingUp size={32} />
                <span>Good</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-average">
                <BarChart2 size={32} />
                <span>Average</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-needs-improvement">
                <Compass size={32} />
                <span>Needs Work</span>
                <div className="scale-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <Users size={32} />
            </div>
            <div className="stat-number">{animatedStats.students.toLocaleString()}+</div>
            <div className="stat-label">Students Tracked</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Star size={32} />
            </div>
            <div className="stat-number">{animatedStats.successRate}%</div>
            <div className="stat-label">Improvement Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Target size={32} />
            </div>
            <div className="stat-number">{animatedStats.careers}+</div>
            <div className="stat-label">Metrics Tracked</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Clock size={32} />
            </div>
            <div className="stat-number">{animatedStats.universities.toLocaleString()}+</div>
            <div className="stat-label">Hours Analyzed</div>
          </div>
        </div>
      </section>

      <section className="performance-section" ref={metricsRef}>
        <h2 className="section-title">Your Performance Metrics</h2>
        <p className="section-subtitle">
          Comprehensive analysis of your academic and personal development
        </p>
        
        <div className="metrics-grid">
          {performanceMetrics.map((category) => (
            <div key={category.id} className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  {category.icon}
                </div>
                <h3 className="metric-title">{category.title}</h3>
              </div>
              
              <div className="metric-items">
                {category.metrics.map((metric, index) => (
                  <div key={index} className="metric-item">
                    <div className="metric-info">
                      <span className="metric-name">{metric.name}</span>
                      <span className="metric-value">
                        {typeof metric.value === 'number' && metric.value % 1 !== 0 ? 
                          metric.value.toFixed(1) : metric.value}
                        {metric.max ? `/${metric.max}` : ''}
                      </span>
                    </div>
                    <div className="metric-bar">
                      <div 
                        className="bar-fill" 
                        style={{ 
                          width: `${(metric.value / (metric.max || 10)) * 100}%`,
                          backgroundColor: getMetricColor(metric.value, metric.max || 10)
                        }}
                      ></div>
                    </div>
                    <div className="metric-trend">
                      {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
                      {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
                      {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="metric-btn" onClick={() => openDetails(category)}>
                View Details
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="scale-section">
           <h2 className="section-title" style={{ textAlign: "center", width: "45%" }}>
  Performance Scale
</h2>
 
        <p className="section-subtitle">
          Understand how your metrics compare to benchmarks
        </p>
        
        <div className="scale-container">
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#4CAF50' }}>
              <span>Excellent</span>
              <span>Top 10%</span>
            </div>
            <div className="scale-description">
              Performance significantly exceeds expectations. Demonstrates mastery of skills and concepts.
            </div>
          </div>
          
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#8BC34A' }}>
              <span>Good</span>
              <span>Top 25%</span>
            </div>
            <div className="scale-description">
              Performance exceeds expectations. Shows strong understanding with minor areas for improvement.
            </div>
          </div>
          
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#FFC107' }}>
              <span>Average</span>
              <span>Middle 50%</span>
            </div>
            <div className="scale-description">
              Meets expectations. Demonstrates adequate understanding with room for growth.
            </div>
          </div>
          
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#FF9800' }}>
              <span>Developing</span>
              <span>Lower 25%</span>
            </div>
            <div className="scale-description">
              Approaching expectations. Needs targeted support in key areas.
            </div>
          </div>
          
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#F44336' }}>
              <span>Needs Work</span>
              <span>Bottom 10%</span>
            </div>
            <div className="scale-description">
              Below expectations. Requires significant intervention and support.
            </div>
          </div>
        </div>
      </section>

      <section className="career-cta">
        <div className="cta-content">
          <h2>Ready to Analyze Your Performance?</h2>
          <p>
            Get detailed insights into your strengths and areas for improvement 
            with our comprehensive performance analysis.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={scrollToMetrics}>
              <BarChart2 size={20} />
              View Full Report
            </button>
            {/* <button className="cta-btn secondary" onClick={scrollToFuture}>
              <Compass size={20} />
              Get Improvement Plan
            </button> */}
          </div>
        </div>
      </section>

      {showDetails && (
        <div className="details-modal">
          <div className="modal-overlay" onClick={closeDetails}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeDetails}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">
                {showDetails.icon}
              </div>
              <h2>{showDetails.title}</h2>
              <p>{showDetails.details.description}</p>
            </div>
            
            <div className="modal-grid">
              <div className="student-profile">
                <div className="profile-header">
                  <img src={studentDetails.avatar} alt="Student" className="profile-avatar" />
                  <div>
                    <h3>{studentDetails.name}</h3>
                    <p>{studentDetails.grade} • {studentDetails.school}</p>
                  </div>
                </div>
                
                <div className="profile-section">
                  <h4>Interests</h4>
                  <div className="interests-list">
                    {studentDetails.interests.map((interest, index) => (
                      <span key={index} className="interest-tag">{interest}</span>
                    ))}
                  </div>
                </div>
                
                <div className="profile-section">
                  <h4>Strengths</h4>
                  <ul className="strengths-list">
                    {studentDetails.strengths.map((strength, index) => (
                      <li key={index}>
                        {strength.icon}
                        <span>{strength.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="profile-section">
                  <h4>Recent Achievements</h4>
                  <ul className="achievements-list">
                    {studentDetails.recentAchievements.map((achievement, index) => (
                      <li key={index}>
                        <Award size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="performance-details">
                <div className="detail-section">
                  <h3>Key Metrics</h3>
                  <div className="detail-metrics">
                    {showDetails.metrics.map((metric, index) => (
                      <div key={index} className="detail-metric">
                        <div className="metric-label">
                          {metric.name}
                          <span className="metric-trend">
                            {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
                            {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
                            {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
                          </span>
                        </div>
                        <div className="metric-value">
                          {typeof metric.value === 'number' && metric.value % 1 !== 0 ? 
                            metric.value.toFixed(1) : metric.value}
                          {metric.max ? `/${metric.max}` : ''}
                        </div>
                        <div className="metric-bar">
                          <div 
                            className="bar-fill" 
                            style={{ 
                              width: `${(metric.value / (metric.max || 10)) * 100}%`,
                              backgroundColor: getMetricColor(metric.value, metric.max || 10)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Strengths</h3>
                  <ul className="strengths-list">
                    {showDetails.details.strengths.map((strength, index) => (
                      <li key={index}>
                        <Activity size={16} color="#4CAF50" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-section">
                  <h3>Recommendations</h3>
                  <ul className="recommendations-list">
                    {showDetails.details.recommendations.map((recommendation, index) => (
                      <li key={index}>
                        <Compass size={16} color="#667eea" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getMetricColor = (value, max) => {
  const percentage = (value / max) * 100;
  if (percentage >= 90) return '#4CAF50';
  if (percentage >= 75) return '#8BC34A';
  if (percentage >= 50) return '#FFC107';
  if (percentage >= 25) return '#FF9800';
  return '#F44336';
};

export default Career;