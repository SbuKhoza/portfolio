import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Details Section */}
          <div className="contact-details">
            <h2 className="section-title">Contact Details</h2>
            <div className="contact-info">
              <p><span className="label">Name:</span> Sibusiso Khoza</p>
              <p><span className="label">Phone:</span> 078 029 6288</p>
              <p><span className="label">Email:</span> <a href="mailto:sibusisok59@gmail.com" className="link">sibusisok59@gmail.com</a></p>
              <div className="social-link">
                <span className="label">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link social-icon"
                >
                  <FaLinkedin className="icon" />
                  Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h2 className="section-title">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} S'bu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;