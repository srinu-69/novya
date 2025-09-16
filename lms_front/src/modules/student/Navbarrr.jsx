
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
// import './Navbarrr.css';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [avatarOpen, setAvatarOpen] = useState(false);
//   const [classDropdownOpen, setClassDropdownOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//     setIsOpen(false);
//     setAvatarOpen(false);
//     setClassDropdownOpen(false);
//   }, [location.pathname]);

//   const handleLogout = () => navigate('/');

//   // ✅ Classroom dropdown with Learn, Recordings, Quizzies
//   const navLinks = [
//     { path: '/student/dashboard', name: 'Home' },
//     {
//       path: '/learn',
//       name: 'Class Room',
//       hasDropdown: true,
//       dropdownItems: [
//         { path: '/learn', name: 'Learn' },
//         { path: '/learn/recordings', name: 'Recordings' },
//         { path: '/learn/quizzes', name: 'quizzes' },
//       ],
//     },
//     { path: '/practice', name: 'Practice' },
//     { path: '/career', name: 'Career' },
//     { path: '/mentorship', name: 'Mentorship' },
//   ];

//   return (
//     <motion.nav
//       className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
//           <Link
//             to="/student/dashboard"
//             className="navbar-logo-link"
//             style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
//           >
//             <img
//               src={novyaLogo}
//               alt="NOVYA Logo"
//               style={{ height: '50px', width: 'auto', maxWidth: '160px', objectFit: 'contain', display: 'block' }}
//             />
//             <motion.span
//               style={{
//                 background: 'linear-gradient(90deg, #2D5D7B 0%, #4a8db7 25%, #FF6B6B 50%, #FFD166 75%, #2D5D7B 100%)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//                 fontWeight: '800',
//                 fontSize: '1.8rem',
//                 marginLeft: '12px',
//                 letterSpacing: '1px',
//                 fontFamily: "'Poppins', sans-serif",
//                 backgroundSize: '200% auto',
//                 animation: 'gradientText 3s ease infinite',
//               }}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               whileHover={{ backgroundPosition: 'right center', transition: { duration: 1.5 } }}
//             >
//               NOVYA
//             </motion.span>
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="navbar-desktop-links">
//           <ul>
//             {navLinks.map((link) => (
//               <li
//                 key={link.path}
//                 className={`nav-item ${
//                   activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''
//                 } ${link.hasDropdown ? 'has-dropdown' : ''}`}
//                 onMouseEnter={() => link.hasDropdown && setClassDropdownOpen(true)}
//                 onMouseLeave={() => link.hasDropdown && setClassDropdownOpen(false)}
//               >
//                 {link.hasDropdown ? (
//                   <div className="nav-link-wrapper">
//                     <Link to={link.path} className="nav-link">
//                       {link.name}
//                       <FaChevronDown
//                         size={10}
//                         style={{
//                           marginLeft: '5px',
//                           transform: classDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                           transition: 'transform 0.3s ease',
//                         }}
//                       />
//                       <span className="nav-link-underline" />
//                     </Link>
//                     <AnimatePresence>
//                       {classDropdownOpen && (
//                         <motion.div
//                           className="nav-dropdown"
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ul>
//                             {link.dropdownItems.map((dropdownItem) => (
//                               <li key={dropdownItem.path}>
//                                 <Link to={dropdownItem.path} className="dropdown-link">
//                                   {dropdownItem.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link to={link.path} className="nav-link">
//                     {link.name}
//                     <span className="nav-link-underline" />
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Avatar + Toggler */ }
//         {/* <div className="navbar-end">
//           <div className="navbar-avatar-container" onClick={() => setAvatarOpen(!avatarOpen)}>
//             <FaUserCircle size={30} className="navbar-avatar-icon" />
//             {avatarOpen && (
//               <div className="avatar-dropdown">
//                 <button onClick={handleLogout} className="logout-button">Logout</button>
//               </div>
//             )}
//           </div> */}


//                   {/* Avatar + Toggler */}
// <div className="navbar-end" style={{ display: "flex", alignItems: "center" }}>
//   <div
//     className="navbar-avatar-container"
//     style={{ marginLeft: "30px" }}   // 👈 adjust gap here
//     onClick={() => setAvatarOpen(!avatarOpen)}
//   >
//     <FaUserCircle size={30} className="navbar-avatar-icon" />
//     {avatarOpen && (
//       <div className="avatar-dropdown">
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     )}
//   </div>

//           <button
//             className={`navbar-toggler ${isOpen ? 'open' : ''}`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="toggler-line"></span>
//             <span className="toggler-line"></span>
//             <span className="toggler-line"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="navbar-mobile-menu"
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -15 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ul>
//               {navLinks.map((link) => (
//                 <li
//                   key={link.path}
//                   className={`nav-item ${
//                     activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''
//                   }`}
//                 >
//                   {link.hasDropdown ? (
//                     <div className="mobile-dropdown-container">
//                       <Link
//                         to={link.path}
//                         className="nav-link"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           setClassDropdownOpen(!classDropdownOpen);
//                         }}
//                       >
//                         {link.name}
//                         <FaChevronDown
//                           size={10}
//                           style={{
//                             marginLeft: '5px',
//                             transform: classDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                             transition: 'transform 0.3s ease',
//                           }}
//                         />
//                       </Link>
//                       <AnimatePresence>
//                         {classDropdownOpen && (
//                           <motion.div
//                             className="mobile-dropdown"
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                           >
//                             {link.dropdownItems.map((dropdownItem) => (
//                               <Link
//                                 key={dropdownItem.path}
//                                 to={dropdownItem.path}
//                                 className="mobile-dropdown-link"
//                                 onClick={() => {
//                                   setIsOpen(false);
//                                   setClassDropdownOpen(false);
//                                 }}
//                               >
//                                 {dropdownItem.name}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>
//                       {link.name}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//               <li>
//                 <button onClick={handleLogout} className="logout-button-mobile">Logout</button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import './Navbarrr.css';
import novyaLogo from '../home/assets/NOVYA LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsOpen(false);
    setAvatarOpen(false);
    setClassDropdownOpen(false);
  }, [location.pathname]);

  const handleLogout = () => navigate('/');

  // ✅ Classroom dropdown with Learn, Recordings, Quizzies
  const navLinks = [
    { path: '/student/dashboard', name: 'Home' },
    {
      path: '/learn',
      name: 'Class Room',
      hasDropdown: true,
      dropdownItems: [
        { path: '/learn', name: 'Class 7' },
        { path: '/learn/class8', name: 'Class 8' },
        { path: '/learn/class9', name: 'Class 9' },
        { path: '/learn/class10', name: 'Class 10' },

      ],
    },
    { path: '/practice', name: 'Practice' },
    { path: '/career', name: 'Career' },
    { path: '/mentorship', name: 'Mentorship' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/student/dashboard"
            className="navbar-logo-link"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <img
              src={novyaLogo}
              alt="NOVYA Logo"
              style={{ height: '50px', width: 'auto', maxWidth: '160px', objectFit: 'contain', display: 'block' }}
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
                animation: 'gradientText 3s ease infinite',
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ backgroundPosition: 'right center', transition: { duration: 1.5 } }}
            >
              NOVYA
            </motion.span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-desktop-links">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`nav-item ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''
                  } ${link.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.hasDropdown && setClassDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setClassDropdownOpen(false)}
              >
                {link.hasDropdown ? (
                  <div className="nav-link-wrapper">
                    <Link to={link.path} className="nav-link">
                      {link.name}
                      <FaChevronDown
                        size={10}
                        style={{
                          marginLeft: '5px',
                          transform: classDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                      <span className="nav-link-underline" />
                    </Link>
                    <AnimatePresence>
                      {classDropdownOpen && (
                        <motion.div
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul>
                            {link.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.path}>
                                <Link to={dropdownItem.path} className="dropdown-link">
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link to={link.path} className="nav-link">
                    {link.name}
                    <span className="nav-link-underline" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Avatar + Toggler */}
        {/* <div className="navbar-end">
          <div className="navbar-avatar-container" onClick={() => setAvatarOpen(!avatarOpen)}>
            <FaUserCircle size={30} className="navbar-avatar-icon" />
            {avatarOpen && (
              <div className="avatar-dropdown">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            )}
          </div> */}


        {/* Avatar + Toggler */}
        <div className="navbar-end" style={{ display: "flex", alignItems: "center" }}>
          <div
            className="navbar-avatar-container"
            style={{ marginLeft: "30px", cursor: "pointer" }}
            onClick={() => navigate('/student/profile')}
          >
            <FaUserCircle size={30} className="navbar-avatar-icon" />
          </div>

          <button
            className={`navbar-toggler ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className={`nav-item ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''
                    }`}
                >
                  {link.hasDropdown ? (
                    <div className="mobile-dropdown-container">
                      <Link
                        to={link.path}
                        className="nav-link"
                        onClick={(e) => {
                          e.preventDefault();
                          setClassDropdownOpen(!classDropdownOpen);
                        }}
                      >
                        {link.name}
                        <FaChevronDown
                          size={10}
                          style={{
                            marginLeft: '5px',
                            transform: classDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </Link>
                      <AnimatePresence>
                        {classDropdownOpen && (
                          <motion.div
                            className="mobile-dropdown"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                className="mobile-dropdown-link"
                                onClick={() => {
                                  setIsOpen(false);
                                  setClassDropdownOpen(false);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <button onClick={handleLogout} className="logout-button-mobile">Logout</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
