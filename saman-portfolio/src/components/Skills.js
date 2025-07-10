import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript']
  },
  {
    category: 'Markup & Styling',
    skills: ['HTML5', 'CSS3', 'SCSS']
  },
  {
    category: 'Frameworks/Libraries',
    skills: ['React.js', 'Angular', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Ant Design']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'IntelliJ Idea']
  },
  {
    category: 'Database',
    skills: ['Oracle SQL Developer']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills skills-categories-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-categories-list">
        {skillCategories.map((cat, idx) => (
          <div className="skills-category-box" key={idx}>
            <div className="skills-category-title">{cat.category}</div>
            <div className="skills-category-tags">
              {cat.skills.map((skill, i) => (
                <span className="skills-category-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 