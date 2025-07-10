import React, { useState, useEffect } from 'react';
import './About.css';

const comments = [
  'Committed',
  'Challenge Taker',
  'Team Player',
  'Pixel-Perfect Coder',
  'Always Learning',
  'Proactive',
  'Creative Problem Solver'
];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % comments.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about themed-about-section">
      <div className="container">
        <h2 className="section-title themed-about-title">About Me</h2>
        <div className="about-badge-carousel">
          <span className="about-badge animated-badge">{comments[current]}</span>
        </div>
        <div className="about-content about-content-centered">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating 
              innovative digital solutions. With expertise in modern web technologies, 
              I specialize in building scalable applications that deliver exceptional 
              user experiences.
            </p>
            <p>
              My journey in software development began with curiosity and has evolved 
              into a career focused on solving complex problems through elegant code. 
              I believe in writing clean, maintainable code and staying up-to-date 
              with the latest industry trends and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I'm always excited to take on new challenges 
              and collaborate on interesting projects.
            </p>
          </div>
          <div className="about-stats-card">
            <div className="themed-stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="themed-stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="themed-stat-item">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 