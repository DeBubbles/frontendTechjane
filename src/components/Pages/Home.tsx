import React from "react";
import "../css/home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="intro-section">
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/Prijsvoorspeller" className="cta-button">
          Start Now
        </a>
      </section>

      <section className="hero-section">
        <h1 className="main-heading">Welcome to Our Website</h1>
        <p className="sub-heading">Discover Amazing Content</p>
      </section>

      <section id="about-section" className="about-section">
        <h2>About Our Site</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions? Get in touch with us at{" "}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default Home;
