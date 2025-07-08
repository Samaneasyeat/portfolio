import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpeg';

const summaryPhrases = [
  'I build beautiful, functional, and user-centered digital experiences. Passionate about clean code and innovative solutions.',
  'Experienced in React, Node.js, and modern web technologies. Always eager to learn and grow.',
  'Let’s create something amazing together. I love solving real-world problems with code.',
  'Open to new opportunities and collaborations. Let’s connect!'
];

const Hero = () => {
  const [summaryIndex, setSummaryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSummaryIndex((prev) => (prev + 1) % summaryPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Saman</span>
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Developer & Creative Problem Solver
          </h2>
          <p className="hero-description fade-in">
            {summaryPhrases[summaryIndex]}
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src={profileImg} alt="Saman's profile" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 