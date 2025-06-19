import { FaGraduationCap, FaHeart, FaPalette, FaCode, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          {/* Personal Info */}
          <div className="about-card">
            <div className="about-image">
              <div className="profile-placeholder">
                <FaUserTie />
              </div>
            </div>
            <div className="about-text">
              <h3>Who Am I?</h3>
              <p>
                I'm a passionate fashion designer with a unique blend of technical skills and creative vision. When I'm not doing either, you'll find me in Youtube exploring me in the Kathmandu Valley making vlogs and promoting products.
              </p>
            </div>
          </div>
          
          {/* Education */}
          <div className="about-card">
            <div className="about-image">
              <div className="profile-placeholder">
                <FaGraduationCap />
              </div>
            </div>
            <div className="about-text">
              <h3>Education</h3>
              {/* <div className="education-item"> */}
                <h4>Bachelor's Degree in Fashion Design</h4>
                <p>Namuna College • 2024 - Ongoing</p>
                <p>Fashion Design and Modeling</p>
              {/* </div> */}
            </div>
          </div>
          
          {/* Interests */}
          <div className="about-card">
          <div className="about-image">
              <div className="profile-placeholder">
                <FaHeart />
              </div>
            </div>
            <div className="about-text">
              <h3>Interests & Hobbies</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <FaPalette />
                  <span>Fashion Design</span>
                </div>
                <div className="interest-item">
                  <FaCode />
                  <span>Coding</span>
                </div>
                <div className="interest-item">
                  <FaHeart />
                  <span>Creative Arts</span>
                </div>
                <div className="interest-item">
                  <FaGraduationCap />
                  <span>Learning</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="about-card">
            <div className="about-image">
              <div className="profile-placeholder">
                <FaCode />
              </div>
            </div>
            <div className="about-text">
              <h3>What I Do</h3>
              <p>
                I specialize in creating responsive, user-friendly websites and applications. 
                My expertise includes front-end development with React, modern CSS techniques, 
                and creating seamless user experiences that combine functionality with style.
              </p>
              <Link to="/skills" className="btn btn-outline">View My Skills</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 