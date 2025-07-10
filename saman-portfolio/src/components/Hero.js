import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpeg';

const codeLines = [
  'const name = "Saman Rashid";',
  'const role = "Frontend Developer";',
  'const location = "Delhi, India";',
  'const skills = ["React", "Angular", "TypeScript", "JavaScript"]',
  '// Let\'s build something amazing together!'
];

const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [popupFade, setPopupFade] = useState(false);

  useEffect(() => {
    if (!showPopup && currentLine < codeLines.length) {
      let i = 0;
      const type = () => {
        if (i <= codeLines[currentLine].length) {
          setTyped(codeLines[currentLine].slice(0, i));
          i++;
          setTimeout(type, 28);
        } else {
          setDisplayedLines((prev) => [...prev, codeLines[currentLine]]);
          setTyped("");
          setCurrentLine((prev) => prev + 1);
        }
      };
      setTimeout(type, 400);
    }
  }, [currentLine, showPopup]);

  const handlePopupClose = () => {
    setPopupFade(true);
    setTimeout(() => setShowPopup(false), 500);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero terminal-hero-bg solid-black-bg">
      {showPopup && (
        <div className={`hero-popup ${popupFade ? 'fade-out' : ''}`}>
          <div className="hero-popup-content">
            <h2 className="hero-popup-title">Hi, I am <span className="highlight-gold">Saman</span></h2>
            <h3 className="hero-popup-subtitle">A Frontend Developer</h3>
            <button className="btn hero-popup-btn" onClick={handlePopupClose}>Click here to know me</button>
          </div>
        </div>
      )}
      {!showPopup && (
        <>
          <div className="hero-container terminal-hero-container">
            <div className="terminal-hero-left">
              <div className="terminal-hero-window">
                <div className="terminal-hero-header">
                  <span className="dot dot-gold"></span>
                  <span className="dot dot-cream"></span>
                  <span className="dot dot-dark"></span>
                </div>
                <div className="terminal-hero-body">
                  {displayedLines.map((line, idx) => (
                    <div className="terminal-hero-line" key={idx}>
                      <span className="terminal-prompt">$</span> <span className="terminal-code">{line}</span>
                    </div>
                  ))}
                  {currentLine < codeLines.length && (
                    <div className="terminal-hero-line">
                      <span className="terminal-prompt">$</span> <span className="terminal-code">{typed}<span className="typewriter-cursor">|</span></span>
                    </div>
                  )}
                </div>
              </div>
              <div className="terminal-hero-buttons">
                <button className="btn terminal-btn-gold" onClick={() => scrollToSection('projects')}>View My Work</button>
                <button className="btn terminal-btn-outline" onClick={() => scrollToSection('contact')}>Get In Touch</button>
              </div>
            </div>
            <div className="terminal-hero-right">
              <div className="terminal-hero-avatar">
                <img src={profileImg} alt="Saman's profile" className="profile-img" />
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero; 