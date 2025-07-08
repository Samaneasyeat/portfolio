import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "🛒",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      image: "📋",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts using external APIs and interactive charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      image: "🌤️",
      github: "https://github.com/Samaneasyeat/weather-app",
      live: "https://samaneasyeat.github.io/weather-app/"
    },
    {
      id: 4,
      title: "Habit Tracker",
      description: "A comprehensive habit tracking application with add, delete, and update functionality. Features include progress visualization, streak tracking, and habit categorization.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: "📈",
      github: "https://github.com/Samaneasyeat/habit-tracker",
      live: "https://samaneasyeat.github.io/habit-tracker/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5"],
      image: "💼",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <span>GitHub</span>
                  </a>
                  <a href={project.live} className="project-link">
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 