import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import novyaLogo from './assets/NOVYA LOGO.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Add this to track route changes
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = "Navbar|Prime Minds - Your Smart Learning Platform";
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced useEffect to check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userData = localStorage.getItem('user');
      
      console.log('Checking login status:', { loggedIn, userData }); // Debug log
      
      setIsLoggedIn(loggedIn);
      setUser(userData ? JSON.parse(userData) : null);
      setActiveLink(window.location.pathname);
    };

    // Check on mount
    checkLoginStatus();

    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener('storage', checkLoginStatus);
    
    // Custom event listener for login/logout events within the same tab
    window.addEventListener('loginStatusChanged', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('loginStatusChanged', checkLoginStatus);
    };
  }, [location.pathname]); // Also run when route changes

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileDropdown && !event.target.closest('.position-relative')) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfileDropdown]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('userToken'); // Also remove token if it exists
    localStorage.removeItem('userRole'); // Also remove role if it exists
    
    setIsLoggedIn(false);
    setUser(null);
    setShowProfileDropdown(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('loginStatusChanged'));
    
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Free Demo', path: '/free-demo' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ paddingTop: windowWidth > 992 ? '90px' : '80px' }}>
      <motion.nav
        className="shadow-sm fixed-top"
        style={{
          margin: windowWidth > 992 ? '20px auto' : '0',
          width: windowWidth > 992 ? '90%' : '100%',
          borderRadius: windowWidth > 992 ? '50px' : '0',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgb(255, 255, 255))',
          backdropFilter: 'blur(12px)',
          border: windowWidth > 992 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
          zIndex: 1030,
          padding: windowWidth > 992 ? '1rem 2rem' : '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 14 }}
      >
        {/* Logo and Hamburger Menu */}
        <div className="d-flex align-items-center">
          {windowWidth <= 992 && (
            <motion.button
              onClick={toggleMobileMenu}
              className="btn p-0 me-3"
              whileTap={{ scale: 0.9 }}
              style={{ background: 'transparent', border: 'none' }}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} color="#2D5D7B" />
              ) : (
                <FaBars size={24} color="#2D5D7B" />
              )}
            </motion.button>
          )}
          
          <motion.div
            className="fw-bold fs-3 d-flex align-items-center"
            whileHover={{ scale: window.innerWidth > 992 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src={novyaLogo}
                alt="NOVYA Logo"
                style={{ height: '60px', width: 'auto', maxWidth: '180px', objectFit: 'contain', display: 'block' }}
              />
              <motion.span
                style={{
                  background: 'linear-gradient(90deg, #2D5D7B 0%, #4a8db7 25%, #FF6B6B 50%, #FFD166 75%, #2D5D7B 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: '800',
                  fontSize: '1.8rem',
                  marginLeft: '12px',
                  letterSpacing: '1px',
                  fontFamily: "'Poppins', sans-serif",
                  backgroundSize: '200% auto',
                  animation: 'gradientText 3s ease infinite'
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{
                  backgroundPosition: 'right center',
                  transition: { duration: 1.5 }
                }}
              >
                NOVYA
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Nav Links */}
        {windowWidth > 992 && (
          <motion.ul 
            className="d-flex align-items-center m-0 p-0 list-unstyled"
            style={{
              background: '#f7f9fb',
              borderRadius: '50px',
              padding: '0.5rem 1rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {navItems.map(({ name, path }) => (
              <motion.li
                key={name}
                style={{ listStyle: 'none' }}
                onMouseEnter={() => setActiveLink(path)}
                onMouseLeave={() => setActiveLink(window.location.pathname)}
              >
                <Link
                  to={path}
                  className="fw-medium position-relative"
                  style={{
                    color: activeLink === path ? '#2D5D7B' : '#222831',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    padding: '0.5rem 1.5rem',
                    display: 'inline-block',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {name}
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '0%',
                      height: '2px',
                      background: '#ff3d3d',
                      transform: 'translateX(-50%)',
                    }}
                    animate={{
                      width: activeLink === path ? '80%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Right Side Buttons - Fixed positioning */}
        <div className="d-flex align-items-center" style={{ minHeight: '44px' }}>
          {/* Debug info - remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <small style={{ 
              marginRight: '10px', 
              fontSize: '10px', 
              color: '#666',
              display: windowWidth > 1200 ? 'block' : 'none'
            }}>
              {isLoggedIn ? 'Logged In' : 'Not Logged In'}
            </small>
          )}

          {/* Profile Section - Only show when logged in */}
          {isLoggedIn && user ? (
            <motion.div
              className="position-relative"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <motion.div
                className="d-flex align-items-center cursor-pointer"
                whileHover={{ scale: windowWidth > 992 ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#f7f9fb',
                  borderRadius: '50px',
                  padding: windowWidth > 576 ? '0.5rem 1rem' : '0.5rem',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={user.profileImage || "https://randomuser.me/api/portraits/men/32.jpg"}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                />
                {windowWidth > 768 && (
                  <span className="fw-medium">{user.name || 'User'}</span>
                )}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    width: '0%',
                    height: '2px',
                    background: '#ff3d3d',
                    transform: 'translateX(-50%)',
                  }}
                  animate={{
                    width: showProfileDropdown ? '80%' : '0%',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {showProfileDropdown && (
                  <motion.div
                    className="dropdown-menu show p-0 shadow-lg"
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      marginTop: '5px',
                      minWidth: '200px',
                      borderRadius: '15px',
                      border: 'none',
                      backgroundColor: 'white',
                      display: 'block',
                      overflow: 'hidden',
                      zIndex: 9999
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link
                      to="/profile"
                      className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                      style={{ color: '#222831', fontSize: '0.9rem' }}
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <FaUser className="me-2" /> My Profile
                      <motion.span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '0%',
                          height: '2px',
                          background: '#ff3d3d',
                        }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <Link
                      to="/settings"
                      className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                      style={{ color: '#222831', fontSize: '0.9rem' }}
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      <FaCog className="me-2" /> Settings
                      <motion.span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '0%',
                          height: '2px',
                          background: '#ff3d3d',
                        }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <div
                      className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                      style={{ color: '#dc3545', fontSize: '0.9rem', cursor: 'pointer' }}
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="me-2" /> Logout
                      <motion.span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '0%',
                          height: '2px',
                          background: '#ff3d3d',
                        }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Login/Register Button - Only show when NOT logged in */
            <motion.button
              onClick={() => navigate('/login')}
              className="btn position-relative"
              whileHover={{ 
                scale: windowWidth > 992 ? 1.05 : 1,
                boxShadow: '0 6px 16px rgba(255, 61, 61, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#2D5D7B',
                color: '#fff',
                borderRadius: '50px',
                fontWeight: '600',
                padding: windowWidth > 576 ? '10px 24px' : '8px 16px',
                fontSize: windowWidth > 576 ? '1rem' : '0.9rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                border: 'none',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {windowWidth > 576 ? 'Login / Register' : 'Login'}
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '0%',
                  height: '3px',
                  background: '#ff3d3d',
                }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && windowWidth <= 992 && (
            <motion.div
              className="mobile-menu-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: '80px',
                left: 0,
                right: 0,
                background: 'white',
                padding: '1rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                zIndex: 1029
              }}
            >
              <ul className="list-unstyled">
                {navItems.map(({ name, path }) => (
                  <motion.li
                    key={name}
                    className="mb-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={path}
                      className="d-block p-3 fw-medium"
                      style={{
                        color: activeLink === path ? '#2D5D7B' : '#222831',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        backgroundColor: activeLink === path ? '#f7f9fb' : 'transparent',
                      }}
                      onClick={() => {
                        setActiveLink(path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Mobile Login Button - show only when not logged in */}
                {!isLoggedIn && (
                  <motion.li className="mt-3">
                    <button
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="btn w-100"
                      style={{
                        backgroundColor: '#2D5D7B',
                        color: '#fff',
                        borderRadius: '25px',
                        fontWeight: '600',
                        padding: '10px',
                        border: 'none'
                      }}
                    >
                      Login / Register
                    </button>
                  </motion.li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradientText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;