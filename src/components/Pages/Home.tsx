import React from 'react';
import '../css/home.css'; 

function Home() {
  return (
    <div className="home-container">
       <section className="intro-section">
      <p className="intro-text">
        Hallo, welcome to TechJane! Onze Price Forecaster helpt u bij het voorspellen van de prijs van een product dat op de markt wordt gebracht. Klik op de knop hieronder om te beginnen.
      </p>
      <a href="/Prijsvoorspeller" className="cta-button smooth-scroll">Start Nu</a>
    </section>

    <section className="hero-section">
      <h1 className="main-heading">Welkom bij Ons Website</h1>
      <p className="sub-heading">Ontdek Spectaculaire Inhoud</p>
    </section>

    <section id="about-section" className="about-section">
      <h2>Over Ons Site</h2>
      <p>
        TechJane is een bedrijf dat zich richt op innovatieve oplossingen en wereldwijde betrokkenheid. Door gebruik te maken van onze Price Forecaster, kunnen wij u helpen bij het voorspellen van de prijs van uw product op de markt.
      </p>
    </section>

    <section className="contact-section">
      <h2>Neem Contact Op</h2>
      <p>  Hebt u vragen? Neem contact op met ons via <a href="mailto:info@techjane.com">info@techj</a></p>
    </section>
    </div>
  );
}

export default Home;

