import React from 'react';
import '../css/home.css'; // Create a CSS file named Home.css in the same directory

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="main-heading">Welcome to Our Website</h1>
        <p className="sub-heading">Discover Amazing Content</p>
        <a href="#" className="cta-button">Get Started</a>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions? Get in touch with us at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default Home;
