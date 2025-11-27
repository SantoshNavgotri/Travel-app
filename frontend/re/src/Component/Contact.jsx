import React from 'react'
import './About.css';

function Contact() {
  return (
    <div>
      <div className="about-contact-info">
        <h2>Contact Us</h2>
        <ul className="contact-list">
          <li>
            <span className="icon"><i className="fas fa-envelope"></i></span>
            <a href="mailto:santoshnavgotri@gmail.com">santoshnavgotri@gmail.com</a>
          </li>
          <li>
            <span className="icon"><i className="fab fa-instagram"></i></span>
            <a href="https://www.instagram.com/santoshn02" target="_blank" rel="noopener noreferrer">@santoshn02</a>
          </li>
          <li>
            <span className="icon"><i className="fas fa-phone"></i></span>
            <span>9179xxx200</span>
          </li>
        </ul>
      </div>
      <div className="about-footer">
        <p>Run by Santosh Navgotri ✈️</p>
      </div>
    </div>
  )
}

export default Contact
