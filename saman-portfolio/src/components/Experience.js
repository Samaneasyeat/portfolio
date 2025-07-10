import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'Easy Eat',
    location: 'Gurugram, Haryana',
    date: 'Jan 2024 – Present',
    tech: ['React.js', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Bootstrap', 'Tailwind CSS'],
    highlights: [
      'Renewed real-time payment polling UI in React.js for transaction validation, improving UX and reducing latency.',
      'Delivered end-to-end Settlement Module in Angular using modular architecture and Pusher-based live sync.',
      'Created Split Bill workflows tailored to order types with dynamic UI validations.',
      'Engineered adaptable and reusable components across multi-tenant restaurant models in Angular.',
      'Built custom loan banners and popups across Admin and Partner panels, boosting merchant visibility.',
      'Launched instant loan application flows for Malaysian restaurants — contributed to a 5% uplift in engagement.',
      'Implemented subscription gating UI with payment status checks for access control — improved conversion.',
      'Restructured payment status dashboard, enhancing clarity and usability. Reduced payment-related bugs by 10%.',
      'Developed high-performance, reusable UI components using React.js, Angular, and JavaScript (ES6+), reducing load times by 15%.',
      'Remodeled payment page UX, resulting in a 25% decrease in payment-related bugs.',
      'Created dynamic banners with centralized state management, improving CTR by 20%.',
      'Optimized performance with lazy loading, code splitting, and tree shaking.'
    ]
  },
  {
    title: 'Front-End Developer',
    company: 'Vodafone Intelligent Solutions',
    location: 'Pune, Maharashtra',
    date: 'June 2022 – Jan 2024',
    tech: ['React.js', 'Bootstrap', 'HTML5', 'CSS3', 'Redux', 'Jest', 'React Testing Library'],
    highlights: [
      'Developed and maintained 5+ reusable UI components for the Marketplace platform using React.js, Bootstrap, HTML5, and CSS3.',
      'Implemented time-sensitive Marketplace views using Context API to share data across components and handle conditional rendering.',
      'Independently delivered the Campaign Module, enabling dynamic image rendering and supporting CRUD operations through efficient state handling in React.',
      'Redesigned the Marketplace landing page using CSS Grid Layout, enhancing layout clarity, mobile responsiveness, and content hierarchy.',
      'Resolved over 100 frontend issues, including layout inconsistencies, cross-browser bugs, and performance bottlenecks.',
      'Enhanced accessibility by applying semantic HTML, ARIA attributes, and keyboard navigation to align with WCAG standards.',
      'Utilized Redux for predictable state management and to simplify data flow across complex components.',
      'Maintained test coverage and code quality by writing unit tests with Jest and React Testing Library.',
      'Used Storybook to develop and document UI components in isolation, enabling easier QA and reusability.',
      'Followed best practices in Git, code reviews, and CI/CD pipelines to ensure smooth collaboration and deployment.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="exp-simple-card" key={idx}>
            <div className="exp-header">
              <span className="exp-title">{exp.title}</span>
              <span className="exp-company">{exp.company}</span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">{exp.date}</span>
              <span className="exp-location">{exp.location}</span>
            </div>
            <div className="exp-tech">
              {exp.tech.map((tech, i) => (
                <span className="exp-tech-tag" key={i}>{tech}</span>
              ))}
            </div>
            <ul className="exp-highlights">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 