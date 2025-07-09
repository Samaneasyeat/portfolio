import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Languages',
    icon: '💻',
    items: ['JavaScript (ES6+)', 'TypeScript']
  },
  {
    category: 'Markup & Styling',
    icon: '🎨',
    items: ['HTML5', 'CSS3', 'SCSS', 'SASS']
  },
  {
    category: 'Frameworks / Libraries',
    icon: '⚛️',
    items: ['React.js', 'Angular', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Ant Design']
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'IntelliJ Idea']
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['Oracle SQL Developer']
  }
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skills-group">
            <div className="skills-group-title">{group.icon} {group.category}</div>
            <ul className="skills-list">
              {group.items.map((item) => (
                <li key={item} className="skills-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 