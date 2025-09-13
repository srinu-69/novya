 
import { useState, useEffect } from 'react';
import {
  ChevronRight,
  Calculator,
  Atom,
  FileText,
  Users,
  Code,
  Menu,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 
const ClassSevenInterface = () => {
  const [selectedSubject, setSelectedSubject] = useState('Maths');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
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
    Maths: [
      { number: 1, title: 'LARGE NUMBERS' },
      { number: 2, title: 'ARTHMETIC EXPRESSIONS' },
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
  };
 
  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName);
    if (isMobile) setSidebarOpen(false); // auto close on mobile
  };
 
  const handleChapterClick = (chapterNumber) => {
    navigate(`/lesson/${selectedSubject}/${chapterNumber}`);
  };
 
  const currentChapters = allChapters[selectedSubject] || [];
 
  const getSubjectDescription = (subject) => {
    const descriptions = {
      Maths: 'Explore mathematical concepts, algebra, geometry and problem-solving skills.',
      Science: 'Discover the wonders of physics, chemistry, and biology through experiments.',
      English: 'Develop language skills through literature, grammar, and creative writing.',
      Social: 'Understand society, history, geography, and civic responsibilities.',
      Computer: 'Learn computer basics, software applications, and digital literacy.',
    };
    return descriptions[subject] || 'Explore the chapters and lessons.';
  };
 
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f8f9fa',
        paddingTop: '80px', // space for fixed navbar
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
            top: isMobile ? '80px' : 0, // push below navbar
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
          {/* Close Button (only on mobile, inside sidebar, below navbar) */}
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
 
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
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
 
        {/* Overlay for mobile when sidebar is open (under navbar) */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: 'fixed',
              top: '80px', // start below navbar
              left: 0,
              width: '100%',
              height: 'calc(100% - 80px)', // cover only below navbar
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 999,
            }}
          />
        )}
 
        {/* Main Content */}
        <div style={{ flex: 1, padding: isMobile ? '16px' : '32px' }}>
          {/* Sidebar Toggle Button (Mobile Only, under navbar) */}
          {isMobile && !sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              style={{
                marginTop: '20px',
                marginBottom: '16px',
                background: '#0f766e',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <Menu size={20} /> Menu
            </button>
          )}
 
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
              {selectedSubject}
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
 
            {/* Chapters Grid */}
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
              {currentChapters.map((chapter, index) => (
                <div
                  key={index}
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
          </div>
        </div>
      </div>
 
      {/* Floating Chat Button */}
      
    </div>
  );
};
 
export default ClassSevenInterface;
 
 