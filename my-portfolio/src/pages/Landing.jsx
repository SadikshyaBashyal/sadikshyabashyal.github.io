import { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Node images - you can replace these with your actual images
  const nodeImages = [
    '4.jpeg',
    '9.jpeg',
    '5.jpeg',
    '1.jpeg',
    '3.jpeg',
    '2.jpeg',
    '6.PNG',
    '7.PNG',
    '8.PNG',
  ];

  // Handle node click
  const handleNodeClick = (nodeIndex) => {
    setActiveNode(nodeIndex);
    setShowImage(true);
    // Pause auto-play for 5 seconds when user clicks
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => {
        const next = (prev + 1) % 9;
        setShowImage(true);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="landing-page">
      {/* Content overlay */}
      <div className="landing-content">
        <div className="landing-header">
          <h1>Welcome to My Portfolio</h1>
        </div>
        <div className="landing-main-container">
        <div className="landing-main">
          {/* Graph Component */}
          <div className="graph-section">
            <div className="graph-container">
              <svg className="graph-svg" viewBox="0 0 400 300">
                {/* Connections between all nodes */}
                <line x1="100" y1="50" x2="200" y2="50" className="connection" />
                <line x1="100" y1="50" x2="300" y2="50" className="connection" />
                <line x1="100" y1="50" x2="100" y2="150" className="connection" />
                <line x1="100" y1="50" x2="200" y2="150" className="connection" />
                <line x1="100" y1="50" x2="300" y2="150" className="connection" />
                <line x1="100" y1="50" x2="100" y2="250" className="connection" />
                <line x1="100" y1="50" x2="200" y2="250" className="connection" />
                <line x1="100" y1="50" x2="300" y2="250" className="connection" />
                
                <line x1="200" y1="50" x2="300" y2="50" className="connection" />
                <line x1="200" y1="50" x2="100" y2="150" className="connection" />
                <line x1="200" y1="50" x2="200" y2="150" className="connection" />
                <line x1="200" y1="50" x2="300" y2="150" className="connection" />
                <line x1="200" y1="50" x2="100" y2="250" className="connection" />
                <line x1="200" y1="50" x2="200" y2="250" className="connection" />
                <line x1="200" y1="50" x2="300" y2="250" className="connection" />
                
                <line x1="300" y1="50" x2="100" y2="150" className="connection" />
                <line x1="300" y1="50" x2="200" y2="150" className="connection" />
                <line x1="300" y1="50" x2="300" y2="150" className="connection" />
                <line x1="300" y1="50" x2="100" y2="250" className="connection" />
                <line x1="300" y1="50" x2="200" y2="250" className="connection" />
                <line x1="300" y1="50" x2="300" y2="250" className="connection" />
                
                <line x1="100" y1="150" x2="200" y2="150" className="connection" />
                <line x1="100" y1="150" x2="300" y2="150" className="connection" />
                <line x1="100" y1="150" x2="100" y2="250" className="connection" />
                <line x1="100" y1="150" x2="200" y2="250" className="connection" />
                <line x1="100" y1="150" x2="300" y2="250" className="connection" />
                
                <line x1="200" y1="150" x2="300" y2="150" className="connection" />
                <line x1="200" y1="150" x2="100" y2="250" className="connection" />
                <line x1="200" y1="150" x2="200" y2="250" className="connection" />
                <line x1="200" y1="150" x2="300" y2="250" className="connection" />
                
                <line x1="300" y1="150" x2="100" y2="250" className="connection" />
                <line x1="300" y1="150" x2="200" y2="250" className="connection" />
                <line x1="300" y1="150" x2="300" y2="250" className="connection" />
                
                <line x1="100" y1="250" x2="200" y2="250" className="connection" />
                <line x1="100" y1="250" x2="300" y2="250" className="connection" />
                
                <line x1="200" y1="250" x2="300" y2="250" className="connection" />
                
                {/* 8 Image Nodes */}
                <image 
                  x="75" y="25" width="50" height="50" 
                  href={nodeImages[0]} 
                  className={`node ${activeNode === 0 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(0)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="175" y="25" width="50" height="50" 
                  href={nodeImages[1]} 
                  className={`node ${activeNode === 1 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(1)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="275" y="25" width="50" height="50" 
                  href={nodeImages[2]} 
                  className={`node ${activeNode === 2 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(2)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="75" y="125" width="50" height="50" 
                  href={nodeImages[3]} 
                  className={`node ${activeNode === 3 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(3)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="175" y="125" width="50" height="50" 
                  href={nodeImages[4]} 
                  className={`node ${activeNode === 4 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(4)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="275" y="125" width="50" height="50" 
                  href={nodeImages[5]} 
                  className={`node ${activeNode === 5 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(5)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="75" y="225" width="50" height="50" 
                  href={nodeImages[6]} 
                  className={`node ${activeNode === 6 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(6)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="175" y="225" width="50" height="50" 
                  href={nodeImages[7]} 
                  className={`node ${activeNode === 7 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(7)}
                  style={{ cursor: 'pointer' }}
                />
                <image 
                  x="275" y="225" width="50" height="50" 
                  href={nodeImages[8]} 
                  className={`node ${activeNode === 8 ? 'active' : ''}`}
                  onClick={() => handleNodeClick(8)}
                  style={{ cursor: 'pointer' }}
                />
              </svg>
            </div>
          </div>
          
          {/* Image Display Section */}
          <div className="image-section">
            <div className="image-container">
              {showImage && (
                <img 
                  src={nodeImages[activeNode]} 
                  alt={`Node ${activeNode + 1}`}
                  className="node-image"
                />
              )}
              <div className="image-info">

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;