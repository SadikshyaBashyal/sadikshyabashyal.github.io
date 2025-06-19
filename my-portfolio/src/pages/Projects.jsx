import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills with modern design principles.",
      image: "portfolio.png",
      technologies: ["React", "CSS", "JavaScript", "Vite"],
      category: "frontend",
      github: "https://github.com/SadikshyaBashyal/sadikshyabashyal.github.io",
      live: "https://sadikshyabashyal.github.io",
      featured: true
    },
    {
      id: 2,
      title: "Hang-Man Game made from Python",
      description: "Pygame Hang-Man, install in your system and run the code to play the game.",
      image: "hangman-python.png",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      category: "Python",
      github: "https://github.com/SadikshyaBashyal/Hangman-Game",
      live: "https://github.com/SadikshyaBashyal/Hangman-Game/blob/main/README.md",
      featured: true
    },
    {
      id: 3,
      title: "Hang-Man Game Frontend",
      description: "Hangman game made from HTML, CSS, and JavaScript. Deployed using GitHub Pages.",
      image: "hangman-frontend.png",
      technologies: ["HTML5", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/SadikshyaBashyal/Hangman-Game",
      live: "https://sadikshyabashyal.github.io/Hangman-Game/"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'Python', label: 'Python' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <p>Interested in working together?</p>
          <Link to="/contact" className="btn btn-primary">Let's Connect</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 