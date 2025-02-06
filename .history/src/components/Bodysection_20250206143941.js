import React from 'react';
import './Body.css';
import profileImage from '../assets/Sibusiso.png';

function Bodysection() {
  const handleDownloadResume = () => {
    const resumeContent = `
      S'bu - Fullstack Web & Mobile Developer

      EDUCATION
      - Google UX Design Professional Certificate (COURSERA)
      - MERN Stack Developer
      - Website Developer
      - Mobile App Developer

      SKILLS
      Design Tools: Figma, Design Thinking, UX Research, Wireframing, Prototyping
      Development: HTML, CSS, JavaScript, React.js, React Native, MongoDB, Firebase
      Specialties: UX Designer, Website Developer, Mobile and WebApp Developer
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SibusisoKhozaResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      {/* ... previous code remains the same ... */}

        <div className="projects-section">
          <h3>Projects</h3>
          <div className="projects-grid">
            {[
              {
                title: 'Todo List',
                description: 'Prototype of a todo list mobile application',
                techStack: ['Figma']
              },
              {
                title: 'Recipe App',
                description: 'React recipe app uses APIs to fetch recipes',
                techStack: ['React', 'Restful APIs'],
                link: 'https://recipe-eta-one.vercel.app/'
              },
              {
                title: 'Hotel App',
                description: 'A comprehensive web application for Booking accommodations',
                techStack: ['React'],
                link: 'https://hotelappv4.vercel.app/'
              }
            ].map((project) => (
              <div key={project.title} className="project-card">
                <h4>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="facilitator-feedback">
            <h3>Facilitator's Feedback</h3>
            <p>
              S'bu consistently demonstrates exceptional potential as a developer and designer. 
              His projects showcase not just technical skills, but a deep understanding of user 
              experience and innovative problem-solving. The Recipe App and Hotel App particularly 
              highlight his ability to create functional, user-friendly interfaces that solve real-world 
              challenges. His commitment to learning, attention to detail, and creative approach 
              set him apart as a promising talent in web and mobile development. Keep pushing 
              boundaries, continue learning, and stay curious – your growth trajectory is incredibly 
              impressive!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodysection;