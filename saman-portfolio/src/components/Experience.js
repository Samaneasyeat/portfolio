import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Easy Eat',
    role: 'Front-End Developer',
    location: 'Gurugram, Haryana',
    dates: 'Jan 2024 – Present',
    achievements: [
      'Revamped real-time payment polling UI in React.js for transaction validation, improving UX and reducing latency.',
      'Delivered end-to-end Settlement Module in Angular using modular architecture and Pusher-based live sync.',
      'Created Split Bill workflows tailored to order types (Dine-in, Delivery, Takeaway) with dynamic UI validations.',
      'Engineered adaptable and reusable components across multi-tenant restaurant models in Angular.',
      'Built custom loan banners and popups across Admin and Partner panels, boosting merchant visibility.',
      'Launched instant loan application flows for Malaysian restaurants — contributed to a <b>5% uplift</b> in engagement.',
      'Implemented subscription gating UI with payment status checks for access control — improved conversion.',
      'Restructured payment status dashboard, enhancing clarity and usability. <b>Reduced payment-related bugs by 10%</b>.',
      'Enhanced component-level performance and conditional rendering, <b>increasing banner click-through rate by 20%</b>.',
      'Developed high-performance, reusable UI components using React.js, Angular, and JavaScript (ES6+), <b>reducing load times by 15%</b>.',
      'Remodeled payment page UX, resulting in a <b>25% decrease</b> in payment-related bugs.',
      'Created dynamic banners with centralized state management, <b>improving CTR by 20%</b>.',
      'Optimized performance with lazy loading, code splitting, and tree shaking.',
      'Enhanced internal module for restaurants, HQs, orders, and settlements using Angular.'
    ]
  },
  {
    company: 'Vodafone Intelligent Solutions',
    role: 'Front-End Developer',
    location: 'Pune, Maharashtra',
    dates: 'June 2022 – Jan 2024',
    achievements: [
      'Developed and maintained <b>5+</b> reusable UI components for the Marketplace platform using React.js, Bootstrap, HTML5, and SCSS.',
      'Implemented time-sensitive Marketplace views using Context API to share data across components and handle conditional rendering based on business logic.',
      'Independently delivered the Campaign Module, enabling dynamic image rendering and supporting CRUD operations through efficient state handling in React.',
      'Redesigned the Marketplace landing page using CSS Grid Layout, enhancing layout clarity, mobile responsiveness, and content hierarchy.',
      'Resolved over <b>100</b> frontend issues, including layout inconsistencies, cross-browser bugs, and performance bottlenecks.',
      'Enhanced accessibility by applying semantic HTML, ARIA attributes, and keyboard navigation to align with WCAG standards.',
      'Utilized Redux for predictable state management and to simplify data flow across complex components.',
      'Maintained test coverage and code quality by writing unit tests with Jest and React Testing Library.',
      'Used Storybook to develop and document UI components in isolation, enabling easier QA and reusability.',
      'Followed best practices in Git, code reviews, and CI/CD pipelines to ensure smooth collaboration and deployment.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={exp.company} className="experience-card fade-in" style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}>
            <div className="experience-header">
              <h3 className="experience-role">{exp.role} <span className="experience-company">@ {exp.company}</span></h3>
              <div className="experience-meta">{exp.location} | {exp.dates}</div>
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((ach, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ach }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 