import { FaCode, FaPalette, FaLanguage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'HTML5', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 80 },
        { name: 'Vite', level: 80 }
      ]
    },
    {
      id: 'design',
      title: 'Design & UI/UX',
      icon: <FaPalette />,
      skills: [
        { name: 'Drawing/ Painting', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'Illustrator', level: 65 },
        { name: 'UI/UX Design', level: 85 }
      ]
    },
    {
      id: 'program',
      title: 'Programming Languages',
      icon: <FaLanguage />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Skills Overview */}
        <div className="skills-overview">
          <div className="overview-card">
            <h3>My Approach</h3>
            <p><b>
              I combine technical expertise with creative design thinking to create 
              user-centered digital experiences. My passion for fashion and design 
              influences my way of thinking and influencing people to code and model. I am Beauty with Brain.</b>
            </p>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillCategories.map(category => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">Modeling</span>
            <span className="skill-tag">Fashion Design</span>
            <span className="skill-tag">Fashion Styling</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Team Collaboration</span> 
            <span className="skill-tag">Creative Thinking</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills-cta">
          <p>Ready to bring your ideas to life?</p>
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
        </div>
      </div>
    </section>
  );
};

export default Skills; 