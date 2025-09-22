 
// import { useState, useEffect } from 'react';
// import {
//   ChevronRight,
//   Calculator,
//   Atom,
//   FileText,
//   Users,
//   Code,
//   Menu,
//   X,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
 
// const ClassSevenInterface = () => {
//   const [selectedSubject, setSelectedSubject] = useState('Maths');
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
 
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
 
//   const isMobile = windowWidth < 768;
//   const isTablet = windowWidth >= 768 && windowWidth < 1024;
 
//   const subjects = [
//     { name: 'Maths', icon: Calculator },
//     { name: 'Science', icon: Atom },
//     { name: 'English', icon: FileText },
//     { name: 'Social', icon: Users },
//     { name: 'Computer', icon: Code },
//   ];
 
//   const allChapters = {
//     Maths: [
//       { number: 1, title: 'LARGE NUMBERS' },
//       { number: 2, title: 'ARTHMETIC EXPRESSIONS' },
//       { number: 3, title: 'PEEK POINT' },
//       { number: 4, title: 'NUMBER EXPRESSIONS' },
//       { number: 5, title: 'LINES' },
//     ],
//     Science: [
//       { number: 1, title: 'AGE OF SCIENCE' },
//       { number: 2, title: 'SUBSTANCES' },
//       { number: 3, title: 'ELECTRICITY' },
//       { number: 4, title: 'METALS' },
//       { number: 5, title: 'PHYSICAL AND CHEMICAL CHANGES' },
//     ],
//     English: [
//       { number: 1, title: 'LEARNING TOGETHER' },
//       { number: 2, title: 'WIT AND HUMOUR' },
//       { number: 3, title: 'DREAMS AND DISCOVERIES' },
//       { number: 4, title: 'TRAVEL AND ADVENTURE' },
//       { number: 5, title: 'BRAVE HEARTS' },
//     ],
//     Social: [
//       { number: 1, title: 'TRACE CHANGES' },
//       { number: 2, title: 'KINGDOMS' },
//       { number: 3, title: 'SULTANS' },
//       { number: 4, title: 'MUGHALS' },
//       { number: 5, title: 'RULERS' },
//     ],
//     Computer: [
//       { number: 1, title: 'MICROSOFT WORD' },
//       { number: 2, title: 'TEXT EDITING' },
//       { number: 3, title: 'MS WORD PICTURES' },
//       { number: 4, title: 'MS WORD SMART ART' },
//       { number: 5, title: 'SMART ART EDITING' },
//     ],
//   };
 
//   const handleSubjectClick = (subjectName) => {
//     setSelectedSubject(subjectName);
//     if (isMobile) setSidebarOpen(false); // auto close on mobile
//   };
 
//   const handleChapterClick = (chapterNumber) => {
//     navigate(`/lesson/${selectedSubject}/${chapterNumber}`);
//   };
 
//   const currentChapters = allChapters[selectedSubject] || [];
 
//   const getSubjectDescription = (subject) => {
//     const descriptions = {
//       Maths: 'Explore mathematical concepts, algebra, geometry and problem-solving skills.',
//       Science: 'Discover the wonders of physics, chemistry, and biology through experiments.',
//       English: 'Develop language skills through literature, grammar, and creative writing.',
//       Social: 'Understand society, history, geography, and civic responsibilities.',
//       Computer: 'Learn computer basics, software applications, and digital literacy.',
//     };
//     return descriptions[subject] || 'Explore the chapters and lessons.';
//   };
 
//   return (
//     <div
//       style={{
//         fontFamily: 'Arial, sans-serif',
//         margin: 0,
//         padding: 0,
//         backgroundColor: '#f8f9fa',
//         paddingTop: '80px', // space for fixed navbar
//       }}
//     >
//       <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: isTablet ? '200px' : '260px',
//             backgroundColor: 'white',
//             borderRight: '1px solid #e5e7eb',
//             padding: '16px',
//             position: isMobile ? 'fixed' : 'relative',
//             top: isMobile ? '80px' : 0, // push below navbar
//             left: 0,
//             height: isMobile ? 'calc(100% - 80px)' : '100%',
//             zIndex: 1000,
//             transform: isMobile
//               ? sidebarOpen
//                 ? 'translateX(0)'
//                 : 'translateX(-100%)'
//               : 'none',
//             transition: 'transform 0.3s ease',
//           }}
//         >
//           {/* Close Button (only on mobile, inside sidebar, below navbar) */}
//           {isMobile && (
//             <button
//               onClick={() => setSidebarOpen(false)}
//               style={{
//                 marginBottom: '16px',
//                 background: '#0f766e',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 width: '100%',
//               }}
//             >
//               <X size={20} /> Close
//             </button>
//           )}
 
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '8px',
//             }}
//           >
//             {subjects.map((subject, index) => {
//               const IconComponent = subject.icon;
//               const isSelected = selectedSubject === subject.name;
//               return (
//                 <div
//                   key={index}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     padding: '12px 16px',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     backgroundColor: isSelected ? '#0f766e' : 'transparent',
//                     color: isSelected ? 'white' : '#374151',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onClick={() => handleSubjectClick(subject.name)}
//                 >
//                   <IconComponent size={20} style={{ marginRight: '12px' }} />
//                   <span style={{ fontWeight: '500', fontSize: '15px' }}>
//                     {subject.name}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
 
//         {/* Overlay for mobile when sidebar is open (under navbar) */}
//         {isMobile && sidebarOpen && (
//           <div
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: 'fixed',
//               top: '80px', // start below navbar
//               left: 0,
//               width: '100%',
//               height: 'calc(100% - 80px)', // cover only below navbar
//               backgroundColor: 'rgba(0,0,0,0.4)',
//               zIndex: 999,
//             }}
//           />
//         )}
 
//         {/* Main Content */}
//         <div style={{ flex: 1, padding: isMobile ? '16px' : '32px' }}>
//           {/* Sidebar Toggle Button (Mobile Only, under navbar) */}
//           {isMobile && !sidebarOpen && (
//             <button
//               onClick={() => setSidebarOpen(true)}
//               style={{
//                 marginTop: '20px',
//                 marginBottom: '16px',
//                 background: '#0f766e',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px 12px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//               }}
//             >
//               <Menu size={20} /> Menu
//             </button>
//           )}
 
//           {/* Subject Title */}
//           <div style={{ marginBottom: '32px' }}>
//             <h1
//               style={{
//                 fontSize: isMobile ? '28px' : '48px',
//                 fontWeight: 'bold',
//                 color: '#4299e1',
//                 margin: '0 0 8px 0',
//               }}
//             >
//               {selectedSubject}
//             </h1>
//             <p
//               style={{
//                 color: '#6b7280',
//                 fontSize: '16px',
//                 margin: 0,
//               }}
//             >
//               {getSubjectDescription(selectedSubject)}
//             </p>
//           </div>
 
//           {/* Chapters Section */}
//           <div>
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginBottom: '24px',
//                 paddingBottom: '12px',
               
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: isMobile ? '22px' : '32px',
//                   fontWeight: 'bold',
//                   color: '#1f2937',
//                   margin: 0,
//                 }}
//               >
//                 Chapters
//               </h2>
//               <span
//                 style={{
//                   marginLeft: '8px',
//                   color: '#6b7280',
//                   fontSize: '16px',
//                 }}
//               >
//                 ({currentChapters.length} chapters)
//               </span>
//             </div>
 
//             {/* Chapters Grid */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: isMobile
//                   ? '1fr'
//                   : isTablet
//                   ? 'repeat(2, 1fr)'
//                   : 'repeat(auto-fit, minmax(400px, 1fr))',
//                 gap: '16px',
//               }}
//             >
//               {currentChapters.map((chapter, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     padding: '16px',
//                     backgroundColor: 'white',
//                     borderRadius: '8px',
//                     border: '1px solid #e5e7eb',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onClick={() => handleChapterClick(chapter.number)}
//                 >
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <div
//                       style={{
//                         width: '40px',
//                         height: '40px',
//                         backgroundColor: '#ddd6fe',
//                         color: '#7c3aed',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         fontWeight: 'bold',
//                         marginRight: '16px',
//                       }}
//                     >
//                       {chapter.number}
//                     </div>
//                     <span
//                       style={{
//                         color: '#1f2937',
//                         fontWeight: '500',
//                         fontSize: '15px',
//                       }}
//                     >
//                       {chapter.title}
//                     </span>
//                   </div>
//                   <ChevronRight size={18} style={{ color: '#9ca3af' }} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {/* Floating Chat Button */}
      
//     </div>
//   );
// };
 
// export default ClassSevenInterface;
 
 






























// import React, { useState, useEffect } from 'react';
// import {
//   ChevronRight,
//   Calculator,
//   Atom,
//   FileText,
//   Users,
//   Code,
//   Menu,
//   X,
//   List, // Import the List icon
// } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Learn = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const initialSubject = queryParams.get('subject') || 'Maths';
//   const navigate = useNavigate();
//   const [selectedSubject, setSelectedSubject] = useState(initialSubject);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [expandedChapters, setExpandedChapters] = useState({});

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getCurrentClass = () => {
//     if (location.pathname.includes('/learn/class8')) return '8';
//     if (location.pathname.includes('/learn/class9')) return '9';
//     if (location.pathname.includes('/learn/class10')) return '10';
//     return '7';
//   };

//   const currentClass = getCurrentClass();
//   const isMobile = windowWidth < 768;
//   const isTablet = windowWidth >= 768 && windowWidth < 1024;

//   const subjects = [
//     { name: 'Maths', icon: Calculator },
//     { name: 'Science', icon: Atom },
//     { name: 'English', icon: FileText },
//     { name: 'Social', icon: Users },
//     { name: 'Computer', icon: Code },
//   ];

//   const allChapters = {
//     '7': {
//       Maths: [
//         { number: 1, title: 'LARGE NUMBERS' },
//         { number: 2, title: 'ARITHMETIC EXPRESSIONS' },
//         { number: 3, title: 'PEEK POINT' },
//         { number: 4, title: 'NUMBER EXPRESSIONS' },
//         { number: 5, title: 'LINES' },
//       ],
//       Science: [
//         { number: 1, title: 'AGE OF SCIENCE' },
//         { number: 2, title: 'SUBSTANCES' },
//         { number: 3, title: 'ELECTRICITY' },
//         { number: 4, title: 'METALS' },
//         { number: 5, title: 'PHYSICAL AND CHEMICAL CHANGES' },
//       ],
//       English: [
//         { number: 1, title: 'LEARNING TOGETHER' },
//         { number: 2, title: 'WIT AND HUMOUR' },
//         { number: 3, title: 'DREAMS AND DISCOVERIES' },
//         { number: 4, title: 'TRAVEL AND ADVENTURE' },
//         { number: 5, title: 'BRAVE HEARTS' },
//       ],
//       Social: [
//         { number: 1, title: 'TRACE CHANGES' },
//         { number: 2, title: 'KINGDOMS' },
//         { number: 3, title: 'SULTANS' },
//         { number: 4, title: 'MUGHALS' },
//         { number: 5, title: 'RULERS' },
//       ],
//       Computer: [
//         { number: 1, title: 'MICROSOFT WORD' },
//         { number: 2, title: 'TEXT EDITING' },
//         { number: 3, title: 'MS WORD PICTURES' },
//         { number: 4, title: 'MS WORD SMART ART' },
//         { number: 5, title: 'SMART ART EDITING' },
//       ],
//     },
//     '8': {
//       Maths: [
//         { number: 1, title: 'A SQUARE AND A CUBE' },
//         { number: 2, title: 'POWER PLAY' },
//         { number: 3, title: 'A STORY OF NUMBERS' },
//         { number: 4, title: 'QUADRILATERALS' },
//         { number: 5, title: 'NUMBER PLAY' },
//       ],
//       Science: [
//         { number: 1, title: 'PARTICULATE NATURE OF MATTER' },
//         { number: 2, title: 'BEYOND OUR NAKED EYE' },
//         { number: 3, title: 'THE ULTIMATE TREASURE' },
//         { number: 4, title: 'MAGNETIC AND HEATING EFFECTS' },
//         { number: 5, title: 'EXPLORING FORCES' },
//       ],
//       English: [
//         { number: 1, title: 'WIT AND WISDOM' },
//         { number: 2, title: 'VALUES AND DISPOSITIONS' },
//         { number: 3, title: 'MYSTERY AND MAGIC' },
//         { number: 4, title: 'ENVIRONMENT' },
//         { number: 5, title: 'SCIENCE AND CURIOSITY' },
//       ],
//       Social: [
//         { number: 1, title: 'NATURAL RESOURCES' },
//         { number: 2, title: 'RESHAPING INDIAS POLITICAL MAP'},
//         { number: 3, title: 'THE COLONIAL ERA IN INDIA' },
//         { number: 4, title: 'THE PARLIAMENTARY SYSTEM: LEGISLATURE AND EXECUTIVE' },
//         { number: 5, title: 'UNIVERSAL FRANCHISE AND INDIA ELECTORAL SYSTEM' },
//       ],
//       Computer: [
//         { number: 1, title: 'EXCEPTION HANDLING IN PYTHON' },
//         { number: 2, title: 'FILE HANDLING IN PYTHON' },
//         { number: 3, title: 'STACK' },
//         { number: 4, title: 'QUEUE' },
//         { number: 5, title: 'SORTING' },
//       ],
//     },
//     '9': {
//       Maths: [
//         { number: 1, title: 'NUMBER SYSTEMS' },
//         { number: 2, title: 'POLYNOMIALS' },
//         { number: 3, title: 'COORDINATE GEOMETRY' },
//         { number: 4, title: 'LINEAR EQUATIONS' },
//         { number: 5, title: 'INTRODUCTION TO EUCLIDS GEOMETRY' },
//       ],
//       Science: [
//         { number: 1, title: 'MATTER IN OUR SURROUNDINGS' },
//         { number: 2, title: 'MOTION' },
//         { number: 3, title: 'ATOMS AND MOLECULES' },
//         { number: 4, title: 'GRAVITATION' },
//         { number: 5, title: 'THE FUNDAMENTAL UNIT OF LIFE' },
//       ],
//       English: [
//         { number: 1, title: 'NOTES OF THE TEACHER' },
//         { number: 2, title: 'THE SOUND OF MUSIC' },
//         { number: 3, title: 'THE LITTLE GIRL' },
//         { number: 4, title: 'A TRULY BEAUTIFUL MIND' },
//         { number: 5, title: 'THE SNAKE AND THE MIRROR' },
//       ],
//       Social: [
//         { number: 1, title: 'DEMOCRACY RIGHTS CHAPTER 1' },
//         { number: 2, title: 'CONSTITUTIONAL DESIGN' },
//         { number: 3, title: 'ELECTORAL POLITICS' },
//         { number: 4, title: 'ELECTORAL INSTITUTIONS' },
//         { number: 5, title: 'DEMOCRACY RIGHTS CHAPTER 2' },
//       ],
//       Computer: [
//         { number: 1, title: 'INTRODUCTION TO ICT' },
//         { number: 2, title: 'CREATING TEXTUAL COMMUNICATION' },
//         { number: 3, title: 'CREATING VISUAL COMMUNICATION' },
//         { number: 4, title: 'CREATING AUDIO VIDEO COMMUNICATION' },
//         { number: 5, title: 'GETTING CONNECTED TO THE INTERNET' },
//       ],
//     },
//     '10': {
//       Maths: [
//         { number: 1, title: 'REAL NUMBERS' },
//         { number: 2, title: 'POLYNOMIALS' },
//         { number: 3, title: 'PAIR OF LINEAR EQUATIONS' },
//         { number: 4, title: 'QUADRATIC EQUATIONS' },
//         { number: 5, title: 'ARITHMETIC PROGRESSIONS' },
//       ],
//       Science: [
//         { number: 1, title: 'CHEMICAL REACTIONS AND EQUATIONS' },
//         { number: 2, title: 'ACIDS, BASES AND SALTS' },
//         { number: 3, title: 'METALS AND NON-METALS' },
//         { number: 4, title: 'CARBON AND ITS COMPOUNDS' },
//         { number: 5, title: 'LIFE PROCESSES' },
//       ],
//       English: [
//         { number: 1, title: 'EXPLORING THE INVESTIGATIVE WORLD OF SCIENCE' },
//         { number: 2, title: 'THE INVISIBLE LIVING WORLD:BEYOND OUR NAKED EYE' },
//         { number: 3, title: 'THE ULTIMATE TREASURE' },
//         { number: 4, title: 'MAGNETIC AND HEATING EFFECTS' },
//         { number: 5, title: 'EXPLORING FORCES' },
//       ],
//       Social: [
//         { number: 1, title: 'RESOURCES GNP PTVTLOFMTNT' },
//         { number: 2, title: 'FOREST AND WILDLIFE RESOURCES' },
//         { number: 3, title: 'LIFELINES OF NATIONAL ECONOMY' },
//         { number: 4, title: 'AGRICULTURE' },
//         { number: 5, title: 'MANUFACTURING INDUSTRIES' },
//       ],
//       Computer: [
//         { number: 1, title: 'COMPUTER FUNDAMENTALS' },
//         { number: 2, title: 'ADVANCED GIMP' },
//         { number: 3, title: 'TABLES' },
//         { number: 4, title: 'FORMS' },
//         { number: 5, title: 'DHTML & CSS' },
//       ],
//     },
//   };

//   const subtopics = {
//     '8': {
//       Maths: {
//         1: ['Intro to Rational Numbers', 'Properties', 'Operations'],
//         2: ['Linear Equations', 'Solving Methods', 'Applications'],
//         3: ['Quadrilaterals Types', 'Properties', 'Examples'],
//         4: ['Data Collection', 'Data Organization', 'Data Representation'],
//         5: ['Squares', 'Square Roots', 'Applications'],
//       },
//       Science: {
//         1: ['Crop Production Process', 'Methods', 'Importance'],
//         2: ['Types of Microorganisms', 'Roles', 'Examples'],
//         3: ['Synthetic Fibers Introduction', 'Manufacturing', 'Uses'],
//         4: ['Metals Properties', 'Non-Metals Properties', 'Uses'],
//         5: ['Coal Formation', 'Petroleum Extraction', 'Uses'],
//       },
//       English: {
//         1: ['Christmas Present Story', 'Characters', 'Themes'],
//         2: ['Tsunami Story', 'Events', 'Lessons'],
//         3: ['Glimpses of Past', 'Historical Context', 'Summary'],
//         4: ['Bepin Chaudhary Story', 'Memory Lapse', 'Consequences'],
//         5: ['The Summit Within', 'Motivations', 'Key Points'],
//       },
//       Social: {
//         1: ['How, When & Where', 'Historical Overview', 'Significance'],
//         2: ['Trade to Territory Changes', 'Economic Impact', 'Examples'],
//         3: ['Ruling Countryside', 'Land Tenure', 'Governance'],
//         4: ['Tribals, Dikus', 'Vision & Resistance', 'Stories'],
//         5: ['When People Rebel', 'Rebellion Causes', 'Case Studies'],
//       },
//       Computer: {
//         1: ['Database Intro', 'Types', 'Applications'],
//         2: ['HTML Basics', 'Tags and Elements', 'Examples'],
//         3: ['CSS Basics', 'Selectors', 'Styling'],
//         4: ['Networking Basics', 'Components', 'Protocols'],
//         5: ['Python Intro', 'Syntax', 'Simple Programs'],
//       },
//     },
//     '9': {
//       Maths: {
//         1: ['Number Systems Types', 'Rational & Irrational'],
//         2: ['Polynomials Basics', 'Operations', 'Applications'],
//         3: ['Coordinate Geometry Intro', 'Plotting Points', 'Lines'],
//         4: ['Linear Equations in 2 Variables', 'Graphing', 'Solutions'],
//         5: ['Introduction to Euclid’s Geometry', 'Postulates', 'Theorems'],
//       },
//       Science: {
//         1: ['Matter Properties', 'States', 'Changes'],
//         2: ['Pure Substances', 'Mixtures', 'Examples'],
//         3: ['Atoms and Molecules', 'Structure', 'Compounds'],
//         4: ['Atomic Structure', 'Electrons', 'Protons & Neutrons'],
//         5: ['Cell Structure', 'Functions', 'Types of Cells'],
//       },
//       English: {
//         1: ['The Fun They Had', 'Summary', 'Themes'],
//         2: ['The Sound of Music', 'Characters', 'Moral'],
//         3: ['The Little Girl', 'Plot', 'Reflection'],
//         4: ['A Truly Beautiful Mind', 'Mental Strength', 'Life Story'],
//         5: ['The Snake and The Mirror', 'Narrative', 'Lesson'],
//       },
//       Social: {
//         1: ['French Revolution Overview', 'Causes', 'Effects'],
//         2: ['Socialism in Europe', 'Theory', 'Movements'],
//         3: ['Nazism and Hitler', 'Rise', 'Policies'],
//         4: ['Forest Society', 'Colonialism Impact', 'Resistance'],
//         5: ['Pastoralists Today', 'Challenges', 'Adaptations'],
//       },
//       Computer: {
//         1: ['Computer Systems Overview', 'Hardware', 'Software'],
//         2: ['Software Types', 'System & Application', 'Examples'],
//         3: ['Operating Systems', 'Functions', 'Examples'],
//         4: ['Python Programming Intro', 'Syntax', 'Control Structures'],
//         5: ['Cyber Security Basics', 'Threats', 'Protection'],
//       },
//     },
//     '10': {
//       Maths: {
//         1: ['Real Numbers Overview', 'Properties', 'Operations'],
//         2: ['Polynomials', 'Degree', 'Algebraic Identities'],
//         3: ['Pair of Linear Equations', 'Methods to Solve', 'Applications'],
//         4: ['Quadratic Equations', 'Forms', 'Solutions'],
//         5: ['Arithmetic Progressions', 'Formulas', 'Applications'],
//       },
//       Science: {
//         1: ['Chemical Reactions', 'Types', 'Equations'],
//         2: ['Acids, Bases, and Salts', 'Properties', 'Uses'],
//         3: ['Metals and Non-Metals', 'Physical Properties', 'Reactions'],
//         4: ['Carbon and Its Compounds', 'Hydrocarbons', 'Uses'],
//         5: ['Periodic Classification', 'Elements', 'Groups & Periods'],
//       },
//       English: {
//         1: ['A Letter to God', 'Summary', 'Theme'],
//         2: ['Nelson Mandela', 'Biography', 'Legacy'],
//         3: ['Two Stories about Flying', 'Plot', 'Moral'],
//         4: ['From the Diary of Anne Frank', 'Context', 'Reflection'],
//         5: ['The Hundred Dresses', 'Characters', 'Themes'],
//       },
//       Social: {
//         1: ['Rise of Nationalism', 'Europe Context', 'Impact'],
//         2: ['Nationalism in India', 'Movements', 'Leaders'],
//         3: ['Global World Making', 'Trade', 'Colonialism'],
//         4: ['Industrialization Age', 'Technology', 'Economy'],
//         5: ['Print Culture', 'Mass Communication', 'Social Change'],
//       },
//       Computer: {
//         1: ['Networking Concepts', 'Types of Networks', 'Protocols'],
//         2: ['Internet Basics', 'History', 'Structure'],
//         3: ['HTML II', 'Advanced Tags', 'Forms'],
//         4: ['Cyber Ethics', 'Rules', 'Online Safety'],
//         5: ['Database Concepts', 'Models', 'SQL Intro'],
//       },
//     },
//   };

//   const handleSubjectClick = (subjectName) => {
//     setSelectedSubject(subjectName);
//     setExpandedChapters({});
//     if (isMobile) setSidebarOpen(false);
//   };

//   const toggleChapterExpansion = (chapterNumber) => {
//     setExpandedChapters((prev) => ({
//       ...prev,
//       [chapterNumber]: !prev[chapterNumber],
//     }));
//   };

//   const handleChapterClick = (chapterNumber) => {
//     navigate(`/lesson/${currentClass}/${selectedSubject}/${chapterNumber}`);
//   };

//   const handleSubtopicClick = (chapterNumber, subtopicIndex) => {
//     navigate(`/lesson/${currentClass}/${selectedSubject}/${chapterNumber}`);
//   };

//   const currentChapters = allChapters[currentClass]?.[selectedSubject] || [];

//   const getSubjectDescription = (subject) => {
//     const descriptions = {
//       Maths:
//         'Explore mathematical concepts, algebra, geometry and problem-solving skills.',
//       Science:
//         'Discover the wonders of physics, chemistry, and biology through experiments.',
//       English:
//         'Develop language skills through literature, grammar, and creative writing.',
//       Social:
//         'Understand society, history, geography, and civic responsibilities.',
//       Computer:
//         'Learn computer basics, software applications, and digital literacy.',
//     };
//     return descriptions[subject] || 'Explore the chapters and lessons.';
//   };

//   const classButtons = [
//     { id: '7', label: 'Class 7' },
//     { id: '8', label: 'Class 8' },
//     { id: '9', label: 'Class 9' },
//     { id: '10', label: 'Class 10' },
//   ];

//   const handleClassChange = (classId) => {
//     navigate(`/learn/class${classId}`);
//     setExpandedChapters({});
//     setSelectedSubject('Maths');
//   };

//   return (
//     <div
//       style={{
//         fontFamily: 'Arial, sans-serif',
//         margin: 0,
//         padding: 0,
//         backgroundColor: '#f8f9fa',
//         paddingTop: '80px',
//       }}
//     >
//       <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
//         {/* Sidebar */}
//         <div
//           style={{
//             width: isTablet ? '200px' : '260px',
//             backgroundColor: 'white',
//             borderRight: '1px solid #e5e7eb',
//             padding: '16px',
//             position: isMobile ? 'fixed' : 'relative',
//             top: isMobile ? '80px' : 0,
//             left: 0,
//             height: isMobile ? 'calc(100% - 80px)' : '100%',
//             zIndex: 1000,
//             transform: isMobile
//               ? sidebarOpen
//                 ? 'translateX(0)'
//                 : 'translateX(-100%)'
//               : 'none',
//             transition: 'transform 0.3s ease',
//           }}
//         >
//           {isMobile && (
//             <button
//               onClick={() => setSidebarOpen(false)}
//               style={{
//                 marginBottom: '16px',
//                 background: '#0f766e',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 width: '100%',
//               }}
//             >
//               <X size={20} /> Close
//             </button>
//           )}

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//             {subjects.map((subject, index) => {
//               const IconComponent = subject.icon;
//               const isSelected = selectedSubject === subject.name;
//               return (
//                 <div
//                   key={index}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     padding: '12px 16px',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     backgroundColor: isSelected ? '#0f766e' : 'transparent',
//                     color: isSelected ? 'white' : '#374151',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onClick={() => handleSubjectClick(subject.name)}
//                 >
//                   <IconComponent size={20} style={{ marginRight: '12px' }} />
//                   <span style={{ fontWeight: '500', fontSize: '15px' }}>
//                     {subject.name}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Overlay for mobile sidebar */}
//         {isMobile && sidebarOpen && (
//           <div
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: 'fixed',
//               top: '80px',
//               left: 0,
//               width: '100%',
//               height: 'calc(100% - 80px)',
//               backgroundColor: 'rgba(0,0,0,0.4)',
//               zIndex: 999,
//             }}
//           />
//         )}

//         {/* Main Content */}
//         <div style={{ flex: 1, padding: isMobile ? '16px' : '32px' }}>
//           {isMobile && !sidebarOpen && (
//             <button
//               onClick={() => setSidebarOpen(true)}
//               style={{
//                 marginBottom: '16px',
//                 background: '#0f766e',
//                 color: 'white',
//                 border: 'none',
//                 padding: '8px 12px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 width: '100%',
//               }}
//             >
//               <Menu size={20} /> Menu
//             </button>
//           )}

//           {/* Class selector buttons */}
//           <div
//             style={{
//               marginBottom: '32px',
//               display: 'flex',
//               gap: '12px',
//               flexWrap: 'wrap',
//               justifyContent: isMobile ? 'center' : 'flex-start',
//             }}
//           >
          
//           </div>

//           {/* Subject Title */}
//           <div style={{ marginBottom: '32px' }}>
//             <h1
//               style={{
//                 fontSize: isMobile ? '28px' : '48px',
//                 fontWeight: 'bold',
//                 color: '#4299e1',
//                 margin: '0 0 8px 0',
//               }}
//             >
//               {selectedSubject} (Class {currentClass})
//             </h1>
//             <p
//               style={{
//                 color: '#6b7280',
//                 fontSize: '16px',
//                 margin: 0,
//               }}
//             >
//               {getSubjectDescription(selectedSubject)}
//             </p>
//           </div>

//           {/* Chapters Section */}
//           <div>
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginBottom: '24px',
//                 paddingBottom: '12px',
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: isMobile ? '22px' : '32px',
//                   fontWeight: 'bold',
//                   color: '#1f2937',
//                   margin: 0,
//                 }}
//               >
//                 Chapters
//               </h2>
//               <span
//                 style={{
//                   marginLeft: '8px',
//                   color: '#6b7280',
//                   fontSize: '16px',
//                 }}
//               >
//                 ({currentChapters.length} chapters)
//               </span>
//             </div>

//             {currentClass === '7' ? (
//               <div
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: isMobile
//                     ? '1fr'
//                     : isTablet
//                     ? 'repeat(2, 1fr)'
//                     : 'repeat(auto-fit, minmax(400px, 1fr))',
//                   gap: '16px',
//                 }}
//               >
//                 {currentChapters.map((chapter) => (
//                   <div
//                     key={chapter.number}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       padding: '16px',
//                       backgroundColor: 'white',
//                       borderRadius: '8px',
//                       border: '1px solid #e5e7eb',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                     }}
//                     onClick={() => handleChapterClick(chapter.number)}
//                   >
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <div
//                         style={{
//                           width: '40px',
//                           height: '40px',
//                           backgroundColor: '#ddd6fe',
//                           color: '#7c3aed',
//                           borderRadius: '8px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           fontWeight: 'bold',
//                           marginRight: '16px',
//                         }}
//                       >
//                         {chapter.number}
//                       </div>
//                       <span
//                         style={{
//                           color: '#1f2937',
//                           fontWeight: '500',
//                           fontSize: '15px',
//                         }}
//                       >
//                         {chapter.title}
//                       </span>
//                     </div>
//                     <ChevronRight size={18} style={{ color: '#9ca3af' }} />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '12px',
//                 }}
//               >
//                 {currentChapters.map((chapter) => {
//                   const isExpanded = !!expandedChapters[chapter.number];
//                   const chapterSubtopics =
//                     subtopics?.[currentClass]?.[selectedSubject]?.[
//                       chapter.number
//                     ] || [];

//                   return (
//                     <div
//                       key={chapter.number}
//                       style={{
//                         backgroundColor: 'white',
//                         borderRadius: '8px',
//                         border: '1px solid #e5e7eb',
//                         padding: '12px 16px',
//                       }}
//                     >
//                       <div
//                         style={{
//                           cursor: 'pointer',
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                         }}
//                         onClick={() => toggleChapterExpansion(chapter.number)}
//                       >
//                         <div
//                           style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '12px',
//                           }}
//                         >
//                           <div
//                             style={{
//                               width: '40px',
//                               height: '40px',
//                               backgroundColor: '#ddd6fe',
//                               color: '#7c3aed',
//                               borderRadius: '8px',
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               fontWeight: 'bold',
//                             }}
//                           >
//                             {chapter.number}
//                           </div>
//                           <span
//                             style={{
//                               fontWeight: '600',
//                               fontSize: '16px',
//                               color: '#1f2937',
//                             }}
//                           >
//                             {chapter.title}
//                           </span>
//                         </div>
//                         <ChevronRight
//                           size={20}
//                           style={{
//                             color: isExpanded ? '#0f766e' : '#9ca3af',
//                             transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
//                             transition: 'transform 0.3s ease',
//                           }}
//                         />
//                       </div>

//                       {isExpanded && chapterSubtopics.length > 0 && (
//                         <div
//                           style={{
//                             marginTop: '12px',
//                             paddingLeft: '52px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             gap: '8px',
//                           }}
//                         >
//                           {chapterSubtopics.map((subtopic, index) => (
//                             <div
//                               key={index}
//                               style={{
//                                 cursor: 'pointer',
//                                 color: '#4299e1',
//                                 fontWeight: '500',
//                                 fontSize: '14px',
//                                 padding: '8px 12px', // Increased padding
//                                 borderRadius: '6px',
//                                 transition: 'background-color 0.2s ease',
//                                 display: 'flex', // Added flex for icon
//                                 alignItems: 'center',
//                                 gap: '8px',
//                               }}
//                               onClick={() =>
//                                 handleSubtopicClick(chapter.number, index)
//                               }
//                               onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = '#e0f2fe';
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = 'transparent';
//                               }}
//                             >
//                               <List size={16} /> {/* Added a list icon */}
//                               {subtopic}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Learn;

















import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Calculator,
  Atom,
  FileText,
  Users,
  Code,
  Menu,
  X,
  List, 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Learn = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSubject = queryParams.get('subject') || 'Maths';
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState({});

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentClass = () => {
    if (location.pathname.includes('/learn/class8')) return '8';
    if (location.pathname.includes('/learn/class9')) return '9';
    if (location.pathname.includes('/learn/class10')) return '10';
    return '7';
  };

  const currentClass = getCurrentClass();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const subjects = [
    { name: 'Maths', icon: Calculator },
    { name: 'Science', icon: Atom },
    { name: 'English', icon: FileText },
    { name: 'Social', icon: Users },
    { name: 'Computer', icon: Code },
  ];

  const allChapters = {
    '7': {
      Maths: [
        { number: 1, title: 'LARGE NUMBERS' },
        { number: 2, title: 'ARITHMETIC EXPRESSIONS' },
        { number: 3, title: 'PEEK POINT' },
        { number: 4, title: 'NUMBER EXPRESSIONS' },
        { number: 5, title: 'LINES' },
      ],
      Science: [
        { number: 1, title: 'AGE OF SCIENCE' },
        { number: 2, title: 'SUBSTANCES' },
        { number: 3, title: 'ELECTRICITY' },
        { number: 4, title: 'METALS' },
        { number: 5, title: 'PHYSICAL AND CHEMICAL CHANGES' },
      ],
      English: [
        { number: 1, title: 'LEARNING TOGETHER' },
        { number: 2, title: 'WIT AND HUMOUR' },
        { number: 3, title: 'DREAMS AND DISCOVERIES' },
        { number: 4, title: 'TRAVEL AND ADVENTURE' },
        { number: 5, title: 'BRAVE HEARTS' },
      ],
      Social: [
        { number: 1, title: 'TRACE CHANGES' },
        { number: 2, title: 'KINGDOMS' },
        { number: 3, title: 'SULTANS' },
        { number: 4, title: 'MUGHALS' },
        { number: 5, title: 'RULERS' },
      ],
      Computer: [
        { number: 1, title: 'MICROSOFT WORD' },
        { number: 2, title: 'TEXT EDITING' },
        { number: 3, title: 'MS WORD PICTURES' },
        { number: 4, title: 'MS WORD SMART ART' },
        { number: 5, title: 'SMART ART EDITING' },
      ],
    },
    '8': {
      Maths: [
        { number: 1, title: 'A SQUARE AND A CUBE' },
        { number: 2, title: 'POWER PLAY' },
        { number: 3, title: 'A STORY OF NUMBERS' },
        { number: 4, title: 'QUADRILATERALS' },
        { number: 5, title: 'NUMBER PLAY' },
      ],
      Science: [
        { number: 1, title: 'PARTICULATE NATURE OF MATTER' },
        { number: 2, title: 'BEYOND OUR NAKED EYE' },
        { number: 3, title: 'THE ULTIMATE TREASURE' },
        { number: 4, title: 'MAGNETIC AND HEATING EFFECTS' },
        { number: 5, title: 'EXPLORING FORCES' },
      ],
      English: [
        { number: 1, title: 'WIT AND WISDOM' },
        { number: 2, title: 'VALUES AND DISPOSITIONS' },
        { number: 3, title: 'MYSTERY AND MAGIC' },
        { number: 4, title: 'ENVIRONMENT' },
        { number: 5, title: 'SCIENCE AND CURIOSITY' },
      ],
      Social: [
        { number: 1, title: 'NATURAL RESOURCES' },
        { number: 2, title: 'RESHAPING INDIAS POLITICAL MAP'},
        { number: 3, title: 'THE COLONIAL ERA IN INDIA' },
        { number: 4, title: 'THE PARLIAMENTARY SYSTEM: LEGISLATURE AND EXECUTIVE' },
        { number: 5, title: 'UNIVERSAL FRANCHISE AND INDIA ELECTORAL SYSTEM' },
      ],
      Computer: [
        { number: 1, title: 'EXCEPTION HANDLING IN PYTHON' },
        { number: 2, title: 'FILE HANDLING IN PYTHON' },
        { number: 3, title: 'STACK' },
        { number: 4, title: 'QUEUE' },
        { number: 5, title: 'SORTING' },
      ],
    },
    '9': {
      Maths: [
        { number: 1, title: 'NUMBER SYSTEMS' },
        { number: 2, title: 'POLYNOMIALS' },
        { number: 3, title: 'COORDINATE GEOMETRY' },
        { number: 4, title: 'LINEAR EQUATIONS' },
        { number: 5, title: 'INTRODUCTION TO EUCLIDS GEOMETRY' },
      ],
      Science: [
        { number: 1, title: 'MATTER IN OUR SURROUNDINGS' },
        { number: 2, title: 'MOTION' },
        { number: 3, title: 'ATOMS AND MOLECULES' },
        { number: 4, title: 'GRAVITATION' },
        { number: 5, title: 'THE FUNDAMENTAL UNIT OF LIFE' },
      ],
      English: [
        { number: 1, title: 'NOTES OF THE TEACHER' },
        { number: 2, title: 'THE SOUND OF MUSIC' },
        { number: 3, title: 'THE LITTLE GIRL' },
        { number: 4, title: 'A TRULY BEAUTIFUL MIND' },
        { number: 5, title: 'THE SNAKE AND THE MIRROR' },
      ],
      Social: [
        { number: 1, title: 'DEMOCRACY RIGHTS CHAPTER 1' },
        { number: 2, title: 'CONSTITUTIONAL DESIGN' },
        { number: 3, title: 'ELECTORAL POLITICS' },
        { number: 4, title: 'ELECTORAL INSTITUTIONS' },
        { number: 5, title: 'DEMOCRACY RIGHTS CHAPTER 2' },
      ],
      Computer: [
        { number: 1, title: 'BASICS OF COMPUTER SYSTEMS' },
        { number: 2, title: 'TYPES OF SOFTWARE' },
        { number: 3, title: 'OPERATING SYSTEM' },
        { number: 4, title: 'INTRODUCTION TO PYTHON PROGRAMMING' },
        { number: 5, title: 'INTRODUCTION TO CYBER SECURITY' },
      ],
    },
    '10': {
      Maths: [
        { number: 1, title: 'REAL NUMBERS' },
        { number: 2, title: 'POLYNOMIALS' },
        { number: 3, title: 'PAIR OF LINEAR EQUATIONS' },
        { number: 4, title: 'QUADRATIC EQUATIONS' },
        { number: 5, title: 'ARITHMETIC PROGRESSIONS' },
      ],
      Science: [
        { number: 1, title: 'CHEMICAL REACTIONS AND EQUATIONS' },
        { number: 2, title: 'ACIDS, BASES AND SALTS' },
        { number: 3, title: 'METALS AND NON-METALS' },
        { number: 4, title: 'CARBON AND ITS COMPOUNDS' },
        { number: 5, title: 'LIFE PROCESSES' },
      ],
      English: [
        { number: 1, title: 'EXPLORING THE INVESTIGATIVE WORLD OF SCIENCE' },
        { number: 2, title: 'THE INVISIBLE LIVING WORLD:BEYOND OUR NAKED EYE' },
        { number: 3, title: 'THE ULTIMATE TREASURE' },
        { number: 4, title: 'MAGNETIC AND HEATING EFFECTS' },
        { number: 5, title: 'EXPLORING FORCES' },
      ],
      Social: [
        { number: 1, title: 'RESOURCES GNP PTVTLOFMTNT' },
        { number: 2, title: 'FOREST AND WILDLIFE RESOURCES' },
        { number: 3, title: 'LIFELINES OF NATIONAL ECONOMY' },
        { number: 4, title: 'AGRICULTURE' },
        { number: 5, title: 'MANUFACTURING INDUSTRIES' },
      ],
      Computer: [
        { number: 1, title: 'COMPUTER FUNDAMENTALS' },
        { number: 2, title: 'ADVANCED GIMP' },
        { number: 3, title: 'TABLES' },
        { number: 4, title: 'FORMS' },
        { number: 5, title: 'DHTML & CSS' },
      ],
    },
  };

  const subtopics = {
    '8': {
      Maths: {
        1: ['Intro of A Square and A Cube', 'Squares roots and cube roots', 'Square pairs and cube pairs'],
        2: ['Experiencing the power play', 'Exponential Notation of Operations', 'The other side of Powers'],
        3: ['Story of Number System', 'Some Early Number Systems', 'The Idea of a Base'],
        4: ['Rectangle and Squares', 'Angles in a Quadrilateral', 'Quadrilaterals with opposite parallel sides'],
        5: ['Multiples of Numbers?', 'Divisibility Rules', 'Digits in Disingue'],
      },
      Science: {
        1: ['What is Matter Composed of?', 'States of Matter', ' Change of State'],
        2: ['What is Cell', 'Body of Living Organisms', 'What are Microorganisms?'],
        3: ['Keep the Environment clean', 'non-communicable diseases', 'How to Prevent and Control Diseases'],
        4: ['Electric Current', 'Electromagnets', 'Battery and cells'],
        5: ['What is Force?', 'Types of Forces', 'Effects of Forces'],
      },
      English: {
        1: ['A story of wit and wisdom', 'A Concrete Examples', 'Wisdom Paves the Way'],
        2: ['A tale of Waves', 'Somebody Mother', 'I Too Had A Dream'],
        3: ['The Case of the Fifth Word', 'The Magic Brush of Dreams', 'Transcripts'],
        4: ['The Cherry Tree', 'Harvest HYMN', 'The Tree'],
        5: ['Feathered Friend', 'A Story of BIBHA CHOWDARY'],
      },
      Social: {
        1: ['Intro of Natural Resources', 'Renewable Resources and non-renewable Resources', 'Conservation of Resources'],
        2: ['The Vijayanagara Empire', 'The Mughals'],
        3: ['Ruling Countryside', 'Land Tenure', 'Governance'],
        4: ['Tribals, Dikus', 'Vision & Resistance', 'Stories'],
        5: ['When People Rebel', 'Rebellion Causes', 'Case Studies'],
      },
      Computer: {
        1: ['Intro of Exception Handling', 'Types of Exceptions', 'Try and Except'],
        2: ['Intro of File handling', 'Reading and Writing Files', 'File Methods'],
        3: ['What is stack?', 'Stack Operations', 'Applications of Stack'],
        4: ['What is Queue?', 'Queue Operations', 'Applications of Queue'],
        5: ['What is Sorting?', 'Sorting Algorithms', 'Bubble Sort'],
      },
    },
    '9': {
      Maths: {
        1: ['Number Systems Types', 'Rational & Irrational'],
        2: ['Polynomials Basics', 'Operations', 'Applications'],
        3: ['Coordinate Geometry Intro', 'Plotting Points', 'Lines'],
        4: ['Linear Equations in 2 Variables', 'Graphing', 'Solutions'],
        5: ['Introduction to Euclid’s Geometry', 'Postulates', 'Theorems'],
      },
      Science: {
        1: ['Matter Properties', 'States', 'Changes'],
        2: ['Pure Substances', 'Mixtures', 'Examples'],
        3: ['Atoms and Molecules', 'Structure', 'Compounds'],
        4: ['Atomic Structure', 'Electrons', 'Protons & Neutrons'],
        5: ['Cell Structure', 'Functions', 'Types of Cells'],
      },
      English: {
        1: ['The Fun They Had', 'Summary', 'Themes'],
        2: ['The Sound of Music', 'Characters', 'Moral'],
        3: ['The Little Girl', 'Plot', 'Reflection'],
        4: ['A Truly Beautiful Mind', 'Mental Strength', 'Life Story'],
        5: ['The Snake and The Mirror', 'Narrative', 'Lesson'],
      },
      Social: {
        1: ['French Revolution Overview', 'Causes', 'Effects'],
        2: ['Socialism in Europe', 'Theory', 'Movements'],
        3: ['Nazism and Hitler', 'Rise', 'Policies'],
        4: ['Forest Society', 'Colonialism Impact', 'Resistance'],
        5: ['Pastoralists Today', 'Challenges', 'Adaptations'],
      },
      Computer: {
        1: ['Computer Systems Overview', 'Hardware', 'Software'],
        2: ['Software Types', 'System & Application', 'Examples'],
        3: ['Operating Systems', 'Functions', 'Examples'],
        4: ['Python Programming Intro', 'Syntax', 'Control Structures'],
        5: ['Cyber Security Basics', 'Threats', 'Protection'],
      },
    },
    '10': {
      Maths: {
        1: ['Real Numbers Overview', 'Properties', 'Operations'],
        2: ['Polynomials', 'Degree', 'Algebraic Identities'],
        3: ['Pair of Linear Equations', 'Methods to Solve', 'Applications'],
        4: ['Quadratic Equations', 'Forms', 'Solutions'],
        5: ['Arithmetic Progressions', 'Formulas', 'Applications'],
      },
      Science: {
        1: ['Chemical Reactions', 'Types', 'Equations'],
        2: ['Acids, Bases, and Salts', 'Properties', 'Uses'],
        3: ['Metals and Non-Metals', 'Physical Properties', 'Reactions'],
        4: ['Carbon and Its Compounds', 'Hydrocarbons', 'Uses'],
        5: ['Periodic Classification', 'Elements', 'Groups & Periods'],
      },
      English: {
        1: ['world of science', 'Summary', ],
        2: ['What is A cell?', 'Structure and Function', 'Types of Cells'],
        3: ['Our Scientific Heritage', 'Contributions', 'Impact of Science'],
        4: ['Electric Current and Magnetic Current', 'Current', 'Magnetism'],
        5: ['What is a force?', 'Types of Forces', 'Laws of Motion'],
      },
      Social: {
        1: ['Soil Erosion', 'Causes', 'Prevention'],
        2: ['Forests and wild life resources', 'Biodiversity'],
        3: ['About National Economy', 'Sectors', 'Importance of Economy'],
        4: ['Cultivation of Rice', 'Methods', 'Challenges'],
        5: ['Industrialization', 'Impact on Society', 'Environment Effects'],
      },
      Computer: {
        1: ['Intro of Hardware and software', 'Generations of Computers', 'Categories of Computers'],
        2: ['Intro of GIMP', 'Installation', 'Tools of GIMP'],
        3: ['intro of Tables', 'Structure and its Tags', 'Frames'],
        4: ['Intro of Forms', 'Structure and its Tags', 'Form Elements'],
        5: ['Summary of DHTML', 'Introduction to CSS', 'Types of CSS'],
      },
    },
  };

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName);
    setExpandedChapters({});
    if (isMobile) setSidebarOpen(false);
  };

  const toggleChapterExpansion = (chapterNumber) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterNumber]: !prev[chapterNumber],
    }));
  };

  const handleChapterClick = (chapterNumber) => {
    navigate(`/lesson/${currentClass}/${selectedSubject}/${chapterNumber}`);
  };

  const handleSubtopicClick = (chapterNumber, subtopicIndex) => {
    navigate(`/lesson/${currentClass}/${selectedSubject}/${chapterNumber}`);
  };

  const currentChapters = allChapters[currentClass]?.[selectedSubject] || [];

  const getSubjectDescription = (subject) => {
    const descriptions = {
      Maths:
        'Explore mathematical concepts, algebra, geometry and problem-solving skills.',
      Science:
        'Discover the wonders of physics, chemistry, and biology through experiments.',
      English:
        'Develop language skills through literature, grammar, and creative writing.',
      Social:
        'Understand society, history, geography, and civic responsibilities.',
      Computer:
        'Learn computer basics, software applications, and digital literacy.',
    };
    return descriptions[subject] || 'Explore the chapters and lessons.';
  };

  const classButtons = [
    { id: '7', label: 'Class 7' },
    { id: '8', label: 'Class 8' },
    { id: '9', label: 'Class 9' },
    { id: '10', label: 'Class 10' },
  ];

  const handleClassChange = (classId) => {
    navigate(`/learn/class${classId}`);
    setExpandedChapters({});
    setSelectedSubject('Maths');
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f8f9fa',
        paddingTop: '80px',
      }}
    >
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        {/* Sidebar */}
        <div
          style={{
            width: isTablet ? '200px' : '260px',
            backgroundColor: 'white',
            borderRight: '1px solid #e5e7eb',
            padding: '16px',
            position: isMobile ? 'fixed' : 'relative',
            top: isMobile ? '80px' : 0,
            left: 0,
            height: isMobile ? 'calc(100% - 80px)' : '100%',
            zIndex: 1000,
            transform: isMobile
              ? sidebarOpen
                ? 'translateX(0)'
                : 'translateX(-100%)'
              : 'none',
            transition: 'transform 0.3s ease',
          }}
        >
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              style={{
                marginBottom: '16px',
                background: '#0f766e',
                color: 'white',
                border: 'none',
                padding: '8px',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <X size={20} /> Close
            </button>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              const isSelected = selectedSubject === subject.name;
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: isSelected ? '#0f766e' : 'transparent',
                    color: isSelected ? 'white' : '#374151',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => handleSubjectClick(subject.name)}
                >
                  <IconComponent size={20} style={{ marginRight: '12px' }} />
                  <span style={{ fontWeight: '500', fontSize: '15px' }}>
                    {subject.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              width: '100%',
              height: 'calc(100% - 80px)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 999,
            }}
          />
        )}

        {/* Main Content */}
        <div style={{ flex: 1, padding: isMobile ? '16px' : '32px' }}>
          {isMobile && !sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                marginBottom: '16px',
                background: '#0f766e',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <Menu size={20} /> Menu
            </button>
          )}

          {/* Class selector buttons */}
          <div
            style={{
              marginBottom: '32px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
          
          </div>

          {/* Subject Title */}
          <div style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontSize: isMobile ? '28px' : '48px',
                fontWeight: 'bold',
                color: '#4299e1',
                margin: '0 0 8px 0',
              }}
            >
              {selectedSubject} (Class {currentClass})
            </h1>
            <p
              style={{
                color: '#6b7280',
                fontSize: '16px',
                margin: 0,
              }}
            >
              {getSubjectDescription(selectedSubject)}
            </p>
          </div>

          {/* Chapters Section */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px',
                paddingBottom: '12px',
              }}
            >
              <h2
                style={{
                  fontSize: isMobile ? '22px' : '32px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0,
                }}
              >
                Chapters
              </h2>
              <span
                style={{
                  marginLeft: '8px',
                  color: '#6b7280',
                  fontSize: '16px',
                }}
              >
                ({currentChapters.length} chapters)
              </span>
            </div>

            {currentClass === '7' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile
                    ? '1fr'
                    : isTablet
                    ? 'repeat(2, 1fr)'
                    : 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '16px',
                }}
              >
                {currentChapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={() => handleChapterClick(chapter.number)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#ddd6fe',
                          color: '#7c3aed',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          marginRight: '16px',
                        }}
                      >
                        {chapter.number}
                      </div>
                      <span
                        style={{
                          color: '#1f2937',
                          fontWeight: '500',
                          fontSize: '15px',
                        }}
                      >
                        {chapter.title}
                      </span>
                    </div>
                    <ChevronRight size={18} style={{ color: '#9ca3af' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {currentChapters.map((chapter) => {
                  const isExpanded = !!expandedChapters[chapter.number];
                  const chapterSubtopics =
                    subtopics?.[currentClass]?.[selectedSubject]?.[
                      chapter.number
                    ] || [];

                  return (
                    <div
                      key={chapter.number}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        padding: '12px 16px',
                      }}
                    >
                      <div
                        style={{
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                        onClick={() => toggleChapterExpansion(chapter.number)}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                          }}
                        >
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: '#ddd6fe',
                              color: '#7c3aed',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                            }}
                          >
                            {chapter.number}
                          </div>
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '16px',
                              color: '#1f2937',
                            }}
                          >
                            {chapter.title}
                          </span>
                        </div>
                        <ChevronRight
                          size={20}
                          style={{
                            color: isExpanded ? '#0f766e' : '#9ca3af',
                            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </div>

                      {isExpanded && chapterSubtopics.length > 0 && (
                        <div
                          style={{
                            marginTop: '12px',
                            paddingLeft: '52px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                          }}
                        >
                          {chapterSubtopics.map((subtopic, index) => (
                            <div
                              key={index}
                              style={{
                                cursor: 'pointer',
                                color: '#4299e1',
                                fontWeight: '500',
                                fontSize: '14px',
                                padding: '8px 12px', // Increased padding
                                borderRadius: '6px',
                                transition: 'background-color 0.2s ease',
                                display: 'flex', // Added flex for icon
                                alignItems: 'center',
                                gap: '8px',
                              }}
                              onClick={() =>
                                handleSubtopicClick(chapter.number, index)
                              }
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#e0f2fe';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <List size={16} /> {/* Added a list icon */}
                              {subtopic}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;