import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIDemo from './AIDemo'; // your full existing AIDemo component
 
function FloatingChatBot() {
   useEffect(() => {
        document.title = "Chat bot|NOVYA - Your Smart Learning Platform";
      }, []);
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <>
      {/* Floating Button */}
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        className="position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#2D5D7B',
          color: '#fff',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🤖
      </motion.div>
 
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              bottom: '100px',
              right: '20px',
              width: '350px',
              maxWidth: '90vw',
              height: '500px',
              backgroundColor: '#fff',
              zIndex: 9998,
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              overflow: 'hidden',
            }}
          >
            <AIDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
 
export default FloatingChatBot;
 