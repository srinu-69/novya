import React from 'react';
import {
  Calculator,
  Atom,
  BookOpen,
  AlertTriangle,
  Globe,
  Languages,
  Code,
  TrendingUp,
  TrendingDown,
  Calendar,
  Award,
 
  BarChart3,
  User,
  Clock,
  CheckCircle2
} from 'lucide-react';
 
const Progress = () => {
  const weeklyData = [
    { day: 'Mon', activity: 85, hours: 4.2 },
    { day: 'Tue', activity: 72, hours: 3.5 },
    { day: 'Wed', activity: 93, hours: 5.1 },
    { day: 'Thu', activity: 88, hours: 4.7 },
    { day: 'Fri', activity: 76, hours: 3.8 },
    { day: 'Sat', activity: 95, hours: 5.5 },
    { day: 'Sun', activity: 82, hours: 4.1 },
  ];
 
  const subjects = [
    { name: 'Mathematics', icon: Calculator, score: 82, trend: 'up', change: '+5%' },
    { name: 'Science', icon: Atom, score: 90, trend: 'up', change: '+8%' },
    { name: 'English', icon: BookOpen, score: 86, trend: 'up', change: '+3%' },
    { name: 'Social Studies', icon: Globe, score: 72, trend: 'down', change: '-4%' },
    
    { name: 'Computer Science', icon: Code, score: 96, trend: 'up', change: '+12%' }
  ];
 
  const stats = [
    { title: 'Overall Score', value: '84%', icon: Award, color: '#667eea' },
    { title: 'Study Hours', value: '28.9h', icon: Clock, color: '#f093fb' },
    { title: 'Tasks Completed', value: '21/25', icon: CheckCircle2, color: '#4facfe' },
  ];
 
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
 
      <div
        style={{
          minHeight: '100vh',
          background: ' #e9eaf0ff ',
          fontFamily: '"Inter", system-ui, -apple-system, sans-serif'
        }}
      >
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center text-white mb-4">
            <h1 className="display-6 fw-bold mb-0 text-dark">Progress Dashboard</h1>
           
          </div>
 
          <div className="row g-4 mb-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="col-12 col-md-4">
                  <div
                    className="card border-0 h-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <p className="text-muted small mb-1 fw-medium">{stat.title}</p>
                          <h2 className="fw-bold mb-0" style={{ color: stat.color }}>{stat.value}</h2>
                        </div>
                        <div
                          className="p-3 rounded-circle"
                          style={{ backgroundColor: stat.color + '20' }}
                        >
                          <IconComponent size={24} style={{ color: stat.color }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
 
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div
                className="card border-0 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h5 className="fw-bold mb-1">Weekly Activity</h5>
                      <p className="text-muted small mb-0">Your child's study time this week</p>
                    </div>
                    <BarChart3 className="text-muted" size={24} />
                  </div>
                  <div className="row g-3">
                    {weeklyData.map((day, index) => (
                      <div key={index} className="col">
                        <div className="text-center">
                        <div
  style={{
    height: 120,
    width: 24,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    margin: "0 auto",
    position: "relative"
  }}
>
  {/* Bar Track */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: 12,
      height: "100%",
      background: "#e5e7eb",
      borderRadius: 8,
      zIndex: 0
    }}
  />
  {/* Bar Fill */}
  <div
    style={{
      width: 12,
      height: `${day.activity}%`,
      background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
      borderRadius: 8,
      zIndex: 1,
      boxShadow: "0 2px 8px rgba(102,126,234,0.15)"
    }}
  />
</div>
                          <div className="small fw-medium text-dark">{day.day}</div>
                          <div className="small text-muted">{day.hours}h</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col-12 col-lg-4">
              <div
                className="card border-0 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="position-relative mb-4">
                    <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                      <circle
                        cx="70"
                        cy="70"
                        r="60"
                        stroke="#e9ecef"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="60"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="377"
                        strokeDashoffset="75"
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 2s ease-out' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                      <div className="display-6 fw-bold text-dark">84%</div>
                      <div className="small text-muted">Complete</div>
                    </div>
                  </div>
                  <h6 className="fw-bold mb-2">This Week's Goal</h6>
                  <p className="text-muted small mb-0">16% more to reach the target!</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Subject Cards - WHITE BG + ORANGE GRADIENT BORDER */}
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="card border-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h5 className="fw-bold mb-1">Subject Performance</h5>
                      <p className="text-muted small mb-0">Track your child's progress across subjects</p>
                    </div>
                    <User className="text-muted" size={24} />
                  </div>
                  <div className="row g-4">
                    {subjects.map((subject, index) => {
                      const IconComponent = subject.icon;
                      return (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                          <div
                            className="p-4 rounded-4 h-100 position-relative overflow-hidden"
                            style={{
    background: '#fff',
    color: '#313131',
    borderRadius: '999px', // pill/ellipse shape!
    border: '3px solid #f4a468',
    borderImage: 'linear-gradient(135deg, #f4a468 0%, #fee140 100%) 1',
    boxShadow: '0 6px 20px rgba(244,164,104,0.06)',
    transition: 'transform 0.3s, box-shadow 0.3s'
  }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-5px)';
                              e.currentTarget.style.boxShadow = '0 24px 56px rgba(244,164,104,0.16)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(244,164,104,0.06)';
                            }}
                          >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <IconComponent size={28} style={{ color: '#f4a468' }} />
                              <div className="d-flex align-items-center">
                                {subject.trend === 'up' ? (
                                  <TrendingUp size={16} className="me-1" color="#28a745" />
                                ) : (
                                  <TrendingDown size={16} className="me-1" color="#dc3545" />
                                )}
                                <span className="small">{subject.change}</span>
                              </div>
                            </div>
                            <h6 className="fw-semibold mb-2">{subject.name}</h6>
                            <div className="d-flex align-items-end justify-content-between">
                              <div>
                                <div className="display-6 fw-bold">{subject.score}%</div>
                                <div className="small opacity-75">Current Score</div>
                              </div>
                            </div>
                            <div
                              className="position-absolute"
                              style={{
                                bottom: '-20px',
                                right: '-20px',
                                width: '80px',
                                height: '80px',
                                background: 'rgba(244,164,104,0.10)',
                                borderRadius: '50%'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="row mt-4">
            <div className="col-12">
              <div
                className="alert border-0 d-flex align-items-center p-4"
                style={{
                  background: 'white',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 193, 7, 0.2)'
                }}
              >
                <div
                  className="p-3 rounded-circle me-3"
                  style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)' }}
                >
                  <AlertTriangle size={24} style={{ color: '#f57c00' }} />
                </div>
                <div className="flex-grow-1" >
                  <h6 className="fw-bold mb-2" style={{ color: '#f57c00' }}>Social Studies Needs Attention</h6>
                  <p className="mb-3 text-dark opacity-75">
                    Your child's performance has dropped by 4%. Consider reviewing recent topics and completing practice exercises.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </>
  );
};
 
export default Progress;
 
 