import React from 'react';
import '..';
import profileImage from '../assets/Sibusiso.png'; // You'll need to replace this with your own image
import resumePDF from '../assets/SibusisoKhozaResume.pdf'; // Replace with your own resume

function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div className="typography">
        <div className='top-row'>
          <div className="text-content">
            <div className="text-content-wrapper">
              <span id="greeting">Hello,</span>
              <h1 id="myname">I'm [Your Name]</h1>
              <h2 id="j-title">Software Developer & Digital Innovator</h2>
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

        <button className="download-btn" onClick={handleDownloadResume}>
          Download Resume
        </button>

        <p className="bio-text">
          I'm a passionate software developer with a keen eye for creating intuitive 
          and innovative digital solutions. With a strong background in web and mobile 
          development, I bring creativity and technical expertise to every project. 
          My approach combines user-centric design principles with robust technical 
          implementation, ensuring both functionality and exceptional user experience.
        </p>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-grid">
            <div className="education-item">
              <h4>Software Development Certification</h4>
              <p>Full Stack Web Development</p>
            </div>
            <div className="education-item">
              <h4>Web Technologies</h4>
              <p>Advanced Web Development</p>
            </div>
            <div className="education-item">
              <h4>Mobile App Development</h4>
              <p>Cross-Platform Applications</p>
            </div>
            <div className="education-item">
              <h4>UX Design Principles</h4>
              <p>User Experience Design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="skills-section">
          <h3>Skills Matrix</h3>
          <div className="skills-grid">
            {[
              { skill: 'HTML', level: 'Advanced' },
              { skill: 'CSS', level: 'Advanced' },
              { skill: 'JavaScript', level: 'Advanced' },
              { skill: 'React', level: 'Advanced' },
              { skill: 'React Native', level: 'Intermediate' },
              { skill: 'TypeScript', level: 'Intermediate' },
              { skill: 'Node.js', level: 'Intermediate' },
              { skill: 'MongoDB', level: 'Intermediate' },
              { skill: 'Firebase', level: 'Intermediate' },
              { skill: 'UX/UI Design', level: 'Advanced' }
            ].map((item, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{item.skill}</span>
                <span className="skill-level">{item.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3>Notable Projects</h3>
          <div className="projects-grid">
            {[
              {
                title: 'Task Management App',
                description: 'Full-featured task tracking application with user authentication and real-time updates',
                techStack: ['React Native', 'Firebase', 'TypeScript']
              },
              {
                title: 'Recipe Discovery Platform',
                description: 'Web application aggregating recipes from multiple sources with advanced search functionality',
                techStack: ['React', 'Node.js', 'RESTful APIs']
              },
              {
                title: 'E-commerce Dashboard',
                description: 'Comprehensive admin panel for managing product inventory, sales, and user analytics',
                techStack: ['React', 'MongoDB', 'Express']
              }
            ].map((project) => (
              <div key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;