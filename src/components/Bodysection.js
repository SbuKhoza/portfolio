// Body.js
import React from 'react';
import './Body.css';
import profileImage from '../../public/Sibusiso.png'; // You'll need to add your image

function Bodysection() {
  return (
    <div className="container">
      <div className="typography">
        <span id="greeting">Hello,</span>
        <h1 id="myname">I'm S'bu</h1>
        <h2 id="j-title">Fullstack Web & Mobile Developer</h2>
        
        <div className="about-section">
          <h3>About Me</h3>
          <p>A passionate developer with experience in creating beautiful and functional web applications.</p>
        </div>

        <div className="skills-section">
          <h3>Skills Matrix</h3>
          <div className="skills-grid">
            {[
              { skill: 'HTML', level: 'Intermediate' },
              { skill: 'CSS', level: 'Advanced' },
              { skill: 'JavaScript', level: 'Intermediate' },
              { skill: 'React Native', level: 'Intermediate' },
              { skill: 'TypeScript', level: 'Beginner' }
            ].map((item, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{item.skill}</span>
                <span className="skill-level">{item.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3>Projects</h3>
          <div className="projects-grid">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <h4>Project {project}</h4>
                <p>Description of the project goes here</p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="picture">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profileimage"
        />
      </div>
    </div>
  );
}

export default Bodysection;