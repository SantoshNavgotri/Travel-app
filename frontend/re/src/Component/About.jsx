import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Toor Travels</h1>
        <p>Curated local trips & bookings</p>
      </div>
      <div className="about-content">
        <p>
          Founded and operated by Santosh Navgotri, Toor Travels blends deep local knowledge with practical, friendly service to create trips that feel effortless. From customized weekend getaways and group tours to seamless booking and on-ground support, Santosh handles the logistics so you can enjoy the journey. Safety, value, and a personal touch are at the heart of every package.
        </p>
      </div>
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
  );
};

export default About;
