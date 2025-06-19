import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        {/* Hero Image/Illustration */}
        <div className="hero-image-container" style={{ marginLeft: 'auto' }}>
          <div className="hero-illustration">
            <div className="image-wrapper">
              <img 
                src="6.PNG" 
                alt="Fashion" 
                className="main-hero-img" 
              />
              <div className="gradient-circle"></div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">🎨</div>
              <div className="floating-element element-2">💻</div>
              <div className="floating-element element-3">✨</div>
              <div className="floating-element element-4">🎓</div>
            </div>
          </div>
        </div>
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sadikshya Bashyal</span>
            </h1>
            <h2 className="hero-subtitle">
              Fashion Designer and passionate coder
            </h2>
            <p className="hero-description">
              I am 1st year student at Namuna Fashion College, Purwanchal University. I am passionate about fashion and coding. I love to design clothes and learn new things.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/SadikshyaBashyal" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sadikshyabashyal/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:sadikshya.bashyal01@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a href='https://www.youtube.com/@sadikshyabashyal' target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Home; 