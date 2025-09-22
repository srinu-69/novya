import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ChildProfile from './ChildProfile';
import Attendance from './Attendance';
import Progress from './Progress';
import Homework from './HomeWork';
import MockTestReports from './MockTestReports';
import StudyPlanner from './StudyPlanner';
import ContactUs from './ContactUs';
import { Typewriter } from 'react-simple-typewriter';
import { 
  FiLogOut,        
  FiBell,          
  FiSettings,
        
  FiGlobe,         
  FiTrendingUp,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { 
  HiOutlineUserCircle,
  HiOutlineCalendarDays,
  HiOutlineChartBarSquare,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineHome
} from 'react-icons/hi2';
import novyaLogo from '../home/assets/NOVYA LOGO.png';
import { FaPhoneAlt } from 'react-icons/fa';

const ParentDashboard = () => {
  
  const [selectedSection, setSelectedSection] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [parentName, setParentName] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainContentRef = useRef(null);
  const navigate = useNavigate();
const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const username = localStorage.getItem('parentUsername') || localStorage.getItem('username') || 'Parent';
    setParentName(username);
    
    setNotifications([
      { id: 1, title: 'New Assignment', message: 'Math homework assigned to your child', time: '2 hours ago', read: false },
      { id: 2, title: 'Progress Report', message: 'Weekly progress report is available', time: '1 day ago', read: false },
      { id: 3, title: 'Parent-Teacher Meeting', message: 'Reminder: Meeting scheduled for tomorrow', time: '2 days ago', read: false },
      { id: 4, title: 'Attendance', message: 'Warning:Missed two classes', time: '2 days ago', read: false },
    ]);
    
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const titles = {
      profile: 'Child Profile',
      attendance: 'Attendance',
      grades: 'Progress',
      homework: 'Assignments',
      mockreports: 'Mock Tests',
      studyplanner: 'Study Plan',
      faq:'Contactus'
    };
    document.title = selectedSection && titles[selectedSection]
      ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
      : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
  }, [selectedSection]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('themePreference', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('themePreference', 'light');
    }
  }, [darkMode]);

  const sections = [
    { 
      key: '', 
      label: 'Dashboard', 
      icon: HiOutlineHome,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      
    },
    { 
      key: 'profile', 
      label: 'Child Profile', 
      icon: HiOutlineUserCircle,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
   
    },
    { 
      key: 'attendance', 
      label: 'Attendance', 
      icon: HiOutlineCalendarDays,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    
    },
    { 
      key: 'grades', 
      label: 'Progress', 
      icon: HiOutlineChartBarSquare,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      
    },
    { 
      key: 'homework', 
      label: 'Assignments', 
      icon: HiOutlineAcademicCap,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
   
    },
    { 
      key: 'mockreports', 
      label: 'Mock Tests', 
      icon: HiOutlineClipboardDocumentList,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
     
    },
    { 
      key: 'studyplanner', 
      label: 'Study Plan', 
      icon: HiOutlineLightBulb,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
   
    },
    { 
      key: 'faq', 
      label: 'Contact us', 
      icon: FaPhoneAlt,
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
   
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userToken');
    localStorage.removeItem('parentUsername');
    localStorage.removeItem('username');
    navigate('/');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: 'numeric', 
      minute: '2-digit' 
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowSettings(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSectionSelect = (sectionKey) => {
    setSelectedSection(sectionKey);
    setMobileMenuOpen(false); // Close mobile menu when selecting a section
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'profile': return <ChildProfile />;
      case 'attendance': return <Attendance />;
      case 'grades': return <Progress />;
      case 'homework': return <Homework />;
      case 'mockreports': return <MockTestReports />;
      case 'studyplanner': return <StudyPlanner />;
      case 'faq': return <ContactUs />;
      default:
        return (
          <div className="dashboard-home">
            <div className="welcome-section">
              <div className="welcome-content">
                <div className="welcome-text">
                  <h1>Welcome back, {parentName}!</h1>
                  <div className="typewriter-container">
                    <Typewriter
                      words={[
                        "Monitor academic progress in real-time",
                        "Stay connected with teachers and assignments", 
                        "Celebrate every milestone and achievement",
                        "Support your child's educational journey"
                      ]}
                      loop
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={2500}
                    />
                  </div>
                </div>
                <div className="welcome-image">
                  <img
                    src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d92aaad8-daf4-48e8-9313-bc4d45f82b91.png"
                    alt="Parent and child learning together"
                    className="parent-child-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <h2>Quick Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    <FiTrendingUp />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">85%</div>
                    <div className="stat-label">Overall Progress</div>
                    <div className="stat-change positive">+5% this week</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                    <HiOutlineCalendarDays />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">92%</div>
                    <div className="stat-label">Attendance Rate</div>
                    <div className="stat-change positive">+2% this month</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                    <HiOutlineClipboardDocumentList />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">15</div>
                    <div className="stat-label">Achievements</div>
                    <div className="stat-change positive">+3 this week</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                    <HiOutlineAcademicCap />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">8/10</div>
                    <div className="stat-label">Assignments</div>
                    <div className="stat-change neutral">2 pending</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="features-section">
              <h2>What Makes NOVYA Special</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🧠</div>
                  <h3>AI-Powered Learning</h3>
                  <p>Personalized learning paths adapted to your child's unique learning style and pace.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Real-time Analytics</h3>
                  <p>Track progress with detailed insights and performance metrics updated in real-time.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3>Goal-based Learning</h3>
                  <p>Set and achieve learning goals with milestone tracking and celebration of achievements.</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`parent-dashboard ${darkMode ? 'dark-mode' : ''}`}>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
      
      {/* Sidebar */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={novyaLogo} alt="NOVYA" />
            {!sidebarCollapsed && <span>NOVYA</span>}
          </div>
        
          <button 
            className="sidebar-toggle mobile-only"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.key}
                className={`nav-item ${selectedSection === section.key ? 'active' : ''}`}
                onClick={() => handleSectionSelect(section.key)}
                title={sidebarCollapsed ? section.label : ''}
              >
                <div className="nav-icon">
                  <IconComponent />
                </div>
                {!sidebarCollapsed && (
                  <div className="nav-content">
                    <span className="nav-label">{section.label}</span>
                    <span className="nav-description">{section.description}</span>
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <FiLogOut />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <button 
              className="mobile-menu-btn"
              onClick={handleMobileMenuToggle}
            >
              <FiMenu />
            </button>
            <div className="header-title">
              <h1>{selectedSection ? sections.find(s => s.key === selectedSection)?.label || 'Dashboard' : 'Dashboard'}</h1>
              <p>{getGreeting()}! Track your child's learning journey</p>
            </div>
          </div>
          
          <div className="header-right">
            <div className="time-display">
              <div className="current-time">{formatTime(currentTime)}</div>
              <div className="current-date">{currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</div>
            </div>

            <div className="header-actions">
              {/* Notifications */}
              <div className="notification-container">
                <button 
                  className="action-btn"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowSettings(false);
                  }}
                >
                  <FiBell />
                  {unreadNotificationsCount > 0 && (
                    <span className="notification-badge">{unreadNotificationsCount}</span>
                  )}
                </button>

                {showNotifications && (
                  <div className="notification-dropdown">
                <div className="dropdown-header" style={{ alignItems: "center" }}>
  <h3 style={{ margin: 0, flex: 1 }}>Notifications</h3>
  <div className="header-actions-right" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
   
    <button
      className="clear-all-btn"
      onClick={() => setNotifications([])}
    >
      Clear
    </button>
    <button
      className="close-dropdown-btn"
      onClick={() => setShowNotifications(false)}
      style={{ fontSize: "1.2rem" }}
    >
      <FiX />
    </button>
  </div>
</div>
                    <div className="notification-list">
                      {notifications.length > 0 ? (
                        notifications.map(notification => (
                          <div 
                            key={notification.id} 
                            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                            onClick={() => markNotificationAsRead(notification.id)}
                          >
                            <div className="notification-content">
                              <h4>{notification.title}</h4>
                              <p>{notification.message}</p>
                              <span className="notification-time">{notification.time}</span>
                            </div>
                            {!notification.read && <div className="unread-dot"></div>}
                          </div>
                        ))
                      ) : (
                        <p className="no-notifications">No notifications</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Settings */}
              <div className="settings-container">
                <button 
                  className="action-btn"
                  onClick={() => {
                    setShowSettings(!showSettings);
                    setShowNotifications(false);
                  }}
                >
                  <FiSettings />
                </button>
                
                {showSettings && (
                  <div className="settings-dropdown">
                    <div className="dropdown-header">
                      <h3>Settings</h3>
                      <button 
                        className="close-dropdown-btn"
                        onClick={() => setShowSettings(false)}
                      >
                        <FiX />
                      </button>
                    </div>
                    
                    
                    
                    <div className="settings-option">
                      <div className="settings-label">
                        <FiGlobe />
                        <span>Language</span>
                      </div>
                      <div className="language-options">
                        <button 
                          className={language === 'English' ? 'active' : ''}
                          onClick={() => changeLanguage('English')}
                        >
                          English
                        </button>
                       
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* User Profile */}
              <div
  className="user-profile"
  style={{ cursor: "pointer" }}
  onClick={() => setShowProfile(true)}
>
  <img
    src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d92aaad8-daf4-48e8-9313-bc4d45f82b91.png"
    alt="Parent"
    className="profile-avatar"
  />
  <div className="profile-info">
    <span className="profile-name">{parentName}</span>
    <span className="profile-role">tulasi</span>
  </div>
</div>
{showProfile && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.3)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    onClick={() => setShowProfile(false)}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        padding: "2rem",
        minWidth: "300px",
        maxWidth: "90vw",
        position: "relative"
      }}
      onClick={e => e.stopPropagation()}
    >
      <button
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer"
        }}
        onClick={() => setShowProfile(false)}
        aria-label="Close"
      >
        ×
      </button>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <img
          src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d92aaad8-daf4-48e8-9313-bc4d45f82b91.png"
          alt="Parent"
          style={{ width: 64, height: 64, borderRadius: "50%", marginBottom: "0.5rem" }}
        />
        <h3 style={{ margin: 0 }}>{parentName}</h3>
      
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p><strong>Email:</strong> tulasi.kumar@example.com</p>
        <p><strong>Contact:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> 45, MG Road, Visakhapatanam, Andhra Pradesh</p>
      </div>
    </div>
  </div>
)}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="content-area" ref={mainContentRef}>
          {renderSection()}
        </main>
      </div>

      <style jsx>{`
        .parent-dashboard {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.3s ease;
          opacity: ${isLoaded ? 1 : 0};
        }

        .parent-dashboard.dark-mode {
          background: #0f172a;
          color: #e2e8f0;
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
          display: none;
        }

       @media (max-width: 768px) {
  /* Fallback: guarantee visibility when sidebar is open */
  .sidebar.mobile-open .sidebar-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 280px;           /* match sidebar width on mobile */
    border-top: 1px solid #e2e8f0;
    background: var(--sidebar-bg, #ffffff);
    z-index: 1100;
  }
  .dark-mode .sidebar.mobile-open .sidebar-footer {
    border-top: 1px solid #334155;
    background: var(--sidebar-bg, #1e293b);
  }
}


        /* Custom scrollbar styles */
        .sidebar-nav::-webkit-scrollbar,
        .notification-list::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-nav::-webkit-scrollbar-track,
        .notification-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .sidebar-nav::-webkit-scrollbar-thumb,
        .notification-list::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }

        .dark-mode .sidebar-nav::-webkit-scrollbar-thumb,
        .dark-mode .notification-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }

        .sidebar-nav::-webkit-scrollbar-thumb:hover,
        .notification-list::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }

        .dark-mode .sidebar-nav::-webkit-scrollbar-thumb:hover,
        .dark-mode .notification-list::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Sidebar Styles */
        .sidebar {
          width: 280px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: fixed;
          height: 100vh;
          z-index: 1050;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
        }

        .sidebar.collapsed {
          width: 70px;
        }

        .dark-mode .sidebar {
          background: #1e293b;
          border-right: 1px solid #334155;
        }

        .sidebar-header {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-mode .sidebar-header {
          border-bottom: 1px solid #334155;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1e293b;
        }

        .dark-mode .sidebar-logo {
          color: #e2e8f0;
        }

        .sidebar-logo img {
          width: 32px;
          height: 32px;
        }

        .sidebar-toggle {
          background: #f1f5f9;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dark-mode .sidebar-toggle {
          background: #334155;
          color: #e2e8f0;
        }

        .sidebar-toggle:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        .dark-mode .sidebar-toggle:hover {
          background: #475569;
        }

        /* Desktop/Mobile Toggle Visibility */
        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-only {
            display: flex;
          }
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 1rem;
          margin-bottom: 0.5rem;
          border: none;
          background: transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          gap: 1rem;
        }

        .nav-item:hover {
          background: #f1f5f9;
          transform: translateX(4px);
        }

        .dark-mode .nav-item:hover {
          background: #334155;
        }

        .nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .nav-icon {
          font-size: 1.25rem;
          min-width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-label {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .nav-description {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .dark-mode .sidebar-footer {
          border-top: 1px solid #334155;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        /* Main Container */
        .main-container {
          flex: 1;
          margin-left: 280px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .sidebar.collapsed + .main-container {
          margin-left: 70px;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          background: #f1f5f9;
          border: none;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1e293b;
          font-size: 1.2rem;
        }

        .dark-mode .mobile-menu-btn {
          background: #334155;
          color: #e2e8f0;
        }

        .mobile-menu-btn:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        .dark-mode .mobile-menu-btn:hover {
          background: #475569;
        }

        /* Top Header */
        .top-header {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .dark-mode .top-header {
          background: #1e293b;
          border-bottom: 1px solid #334155;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-title h1 {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-title p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0.25rem 0 0 0;
        }

        .dark-mode .header-title p {
          color: #94a3b8;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .time-display {
          text-align: right;
          padding: 0.75rem 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .dark-mode .time-display {
          background: #334155;
          border: 1px solid #475569;
        }

        .current-time {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
        }

        .dark-mode .current-time {
          color: #e2e8f0;
        }

        .current-date {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 2px;
        }

        .dark-mode .current-date {
          color: #94a3b8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .action-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dark-mode .action-btn {
          background: #334155;
          border: 1px solid #475569;
          color: #e2e8f0;
        }

        .action-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dark-mode .action-btn:hover {
          background: #475569;
        }

        .notification-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #ef4444;
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 600;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .dark-mode .user-profile {
          background: #334155;
          border: 1px solid #475569;
        }

        .profile-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .profile-name {
          font-weight: 600;
          font-size: 0.9rem;
          display: block;
          color: #1e293b;
        }

        .dark-mode .profile-name {
          color: #e2e8f0;
        }

        .profile-role {
          font-size: 0.75rem;
          color: #64748b;
        }

        .dark-mode .profile-role {
          color: #94a3b8;
        }

        /* Dropdown Styles */
        .notification-container, .settings-container {
          position: relative;
        }

        .notification-dropdown, .settings-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 320px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          margin-top: 10px;
          padding: 1rem;
        }

        .dark-mode .notification-dropdown,
        .dark-mode .settings-dropdown {
          background: #1e293b;
          border: 1px solid #334155;
        }

        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-mode .dropdown-header {
          border-bottom: 1px solid #334155;
        }

        .header-actions-right {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .clear-all-btn {
          background: transparent;
          border: none;
          color: #64748b;
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .clear-all-btn:hover {
          color: #1e293b;
        }

        .dark-mode .clear-all-btn:hover {
          color: #e2e8f0;
        }

        .close-dropdown-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #64748b;
          font-size: 1.2rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: color 0.2s ease;
        }

        .close-dropdown-btn:hover {
          color: #1e293b;
        }

        .dark-mode .close-dropdown-btn:hover {
          color: #e2e8f0;
        }

        .notification-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .notification-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .dark-mode .notification-item {
          border-bottom: 1px solid #334155;
        }

        .notification-item:hover {
          background: #f1f5f9;
        }

        .dark-mode .notification-item:hover {
          background: #334155;
        }

        .notification-item.unread {
          font-weight: 600;
        }

        .notification-content h4 {
          margin: 0 0 0.2rem 0;
          font-size: 0.9rem;
        }

        .notification-content p {
          margin: 0 0 0.3rem 0;
          font-size: 0.8rem;
          color: #64748b;
        }

        .dark-mode .notification-content p {
          color: #94a3b8;
        }

        .notification-time {
          font-size: 0.7rem;
          color: #94a3b8;
        }

        .dark-mode .notification-time {
          color: #cbd5e1;
        }

        .unread-dot {
          width: 10px;
          height: 10px;
          background: #ef4444;
          border-radius: 50%;
          align-self: center;
          margin-left: 0.5rem;
        }

        .no-notifications {
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          padding: 1rem 0;
        }

        .dark-mode .no-notifications {
          color: #94a3b8;
        }

        .settings-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .settings-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #1e293b;
        }

        .dark-mode .settings-label {
          color: #e2e8f0;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #64748b;
        }

        .dark-mode .theme-toggle {
          color: #94a3b8;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 22px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 22px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #667eea;
        }

        input:checked + .slider:before {
          transform: translateX(18px);
        }

        .language-options button {
          background: transparent;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.3rem 0.75rem;
          font-size: 0.85rem;
          cursor: pointer;
          color: #64748b;
          transition: all 0.3s ease;
          margin-left: 0.5rem;
        }

        .dark-mode .language-options button {
          border: 1px solid #475569;
          color: #94a3b8;
        }

        .language-options button.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .language-options button:hover:not(.active) {
          background: #f1f5f9;
          color: #1e293b;
        }

        .dark-mode .language-options button:hover:not(.active) {
          background: #475569;
          color: #e2e8f0;
        }

        /* Dashboard Home Styles */
        .dashboard-home {
          padding: 2rem;
        }

        .welcome-section {
          margin-bottom: 3rem;
        }

        .welcome-content {
          display: flex;
          align-items: center;
          gap: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 2.5rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .welcome-text h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: white;
        }

        .typewriter-container {
          font-size: 1.2rem;
          opacity: 0.9;
          min-height: 2rem;
        }

        .welcome-image {
          position: relative;
          flex-shrink: 0;
        }

        .parent-child-image {
          width: 400px;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          transition: all 0.5s ease;
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
        }

        .welcome-image:hover .parent-child-image {
          transform: perspective(1000px) rotateY(0) rotateX(0) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(102, 126, 234, 0.4) 0%,
            rgba(118, 75, 162, 0.4) 100%
          );
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .welcome-image:hover .image-overlay {
          opacity: 1;
        }

        .stats-section {
          margin-bottom: 3rem;
        }

        .stats-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .dark-mode .stats-section h2 {
          color: #e2e8f0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .dark-mode .stat-card {
          background: #1e293b;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .dark-mode .stat-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .dark-mode .stat-value {
          color: #e2e8f0;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .dark-mode .stat-label {
          color: #94a3b8;
        }

        .stat-change {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .stat-change.positive {
          color: #10b981;
        }

        .stat-change.neutral {
          color: #f59e0b;
        }

        .features-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .dark-mode .features-section h2 {
          color: #e2e8f0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .dark-mode .feature-card {
          background: #1e293b;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .dark-mode .feature-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .dark-mode .feature-card h3 {
          color: #e2e8f0;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.6;
        }

        .dark-mode .feature-card p {
          color: #94a3b8;
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .welcome-content {
            flex-direction: column;
            text-align: center;
          }
          
          .parent-child-image {
            width: 100%;
            max-width: 500px;
            height: auto;
          }
        }

        @media (max-width: 768px) {
          /* Mobile Sidebar Styles */
          .sidebar {
            left: -280px;
            transition: left 0.3s ease;
          }
          
          .sidebar.mobile-open {
            left: 0;
          }
          
          .sidebar.collapsed {
            width: 280px;
            left: -280px;
          }
          
          .sidebar.collapsed.mobile-open {
            left: 0;
          }
          
          /* Mobile Main Container */
          .main-container {
            margin-left: 0;
          }
          
          .sidebar.collapsed + .main-container {
            margin-left: 0;
          }
          
          /* Show Mobile Menu Button */
          .mobile-menu-btn {
            display: flex;
          }
          
          /* Mobile Header Adjustments */
          .top-header {
            padding: 1rem;
          }
          
          .header-right {
            gap: 0.75rem;
          }
          
          .time-display {
            display: none;
          }
          
          .user-profile .profile-info {
            display: none;
          }
          
          .notification-dropdown, .settings-dropdown {
            width: 280px;
            right: -1rem;
          }
          
          /* Mobile Dashboard Content */
          .dashboard-home {
            padding: 1rem;
          }
          
          .welcome-text h1 {
            font-size: 2rem;
          }
          
          .typewriter-container {
            font-size: 1rem;
          }
          
          .welcome-content {
            padding: 1.5rem;
            gap: 1.5rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .header-title h1 {
            font-size: 1.5rem;
          }
          
          .header-title p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .top-header {
            padding: 0.75rem;
          }
          
          .welcome-text h1 {
            font-size: 1.75rem;
          }
          
          .welcome-content {
            padding: 1rem;
          }
          
          .stat-card {
            padding: 1rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
          
          .notification-dropdown, .settings-dropdown {
            width: calc(100vw - 2rem);
            left: 1rem;
            right: 1rem;
          }
        }
          /* Show nav labels on mobile even when collapsed */
.sidebar .nav-content {
  display: flex !important;
}

.sidebar.collapsed .nav-content {
  display: flex !important;
}
  /* Mobile Dropdown Fixes - Add at end of CSS */
@media (max-width: 768px) {
  .notification-dropdown, .settings-dropdown {
    position: fixed !important;
    top: 70px !important;
    left: 1rem !important;
    right: 1rem !important;
    width: auto !important;
    max-width: none !important;
    margin-top: 0 !important;
    z-index: 1100 !important;
    transform: translateY(-10px) !important;
    animation: slideDown 0.3s ease forwards !important;
  }
  
  @keyframes slideDown {
    to {
      transform: translateY(0) !important;
    }
  }
}

@media (max-width: 480px) {
  .notification-dropdown, .settings-dropdown {
    left: 0.5rem !important;
    right: 0.5rem !important;
    top: 65px !important;
    font-size: 0.9rem !important;
  }
  
  .dropdown-header h3 {
    font-size: 1.1rem !important;
  }
  
  .notification-item {
    padding: 0.75rem 0 !important;
  }
  
  .settings-option {
    margin-bottom: 1.5rem !important;
  }
}
  .dark-mode .sidebar {
  color: white !important;
}

.dark-mode .nav-item {
  color: white !important;
}

.dark-mode .nav-icon {
  color: white !important;
}

.dark-mode .sidebar-logo {
  color: white !important;
}

.dark-mode .sidebar-footer {
  color: white !important;
}

.dark-mode .logout-btn {
  color: white !important;
}
  .dark-mode .stats-section > h2 {
  color: #0d0d0dff !important;
}



      `}</style>
    </div>
  );
};

export default ParentDashboard;