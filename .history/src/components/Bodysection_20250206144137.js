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
      <div className="typography">
        
        <div className='top-row'>
          <div className="text-content">
            <div className="text-content-wrapper">
              <span id="greeting">Hello,</span>
              <h1 id="myname">I'm S'bu</h1>
              <h2 id="j-title">Fullstack Web & Mobile Developer</h2>
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
          I always see myself as a Digital Architect. I have a
          Google UX Design Professional Certificate and
          Meta Introduction to Frontend Development
          Certificate. Proficient in HTML, CSS, React.js, React-
          native I specialize in creating dynamic user
          interfaces. Skilled in Figma, I excel in user research,
          UX design, wireframing, and prototyping. My
          commitment to user-centric design is reflected in
          my ability to merge creativity with technical
          prowess, crafting seamless digital experiences.
        </p>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-grid">
            <div className="education-item">
              <h4>Google UX Design Professional Certificate</h4>
              <p>COURSERA</p>
            </div>
            <div className="education-item">
              <h4>MERN Stack Development</h4>
              <p>Full Stack Developer</p>
            </div>
            <div className="education-item">
              <h4>Website Development</h4>
            </div>
            <div className="education-item">
              <h4>Mobile App Development</h4>
            </div>
          </div>
        </div>
        
      </div>

      <div className="content-row">
        <div className="skills-section">
          <h3>Skills Matrix</h3>
          <div className="skills-grid">
            {[
              { skill: 'HTML', level: 'Intermediate' },
              { skill: 'CSS', level: 'Advanced' },
              { skill: 'JavaScript', level: 'Intermediate' },
              { skill: 'React Native', level: 'Intermediate' },
              { skill: 'TypeScript', level: 'Beginner' },
              { skill: 'UX/UI Designer', level: 'Advanced' },
              { skill: 'Wordpress', level: 'Advanced' },
              { skill: 'Figma', level: 'Advanced' },
              { skill: 'MongoDB', level: 'Intermediate' },
              { skill: 'Firebase', level: 'Intermediate' }
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