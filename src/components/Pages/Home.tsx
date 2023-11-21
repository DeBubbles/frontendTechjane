import React from "react";
import "../css/home.css";

import home1 from "../../assets/home1.jpg";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="main-heading">Techjane Prijsvoorspeller</h1>
        <p className="sub-heading">Ontdek Spectaculaire Inhoud</p>
      </section>

      <section className="intro-section">
        <p className="intro-text">
          Hallo, welkom bij Techjane! Onze Prijsvoorspeller ondersteunt u bij
          het inschatten van de prijs van een product dat binnenkort op de markt
          verschijnt. Klik op de knop hieronder om te beginnen.
        </p>
        <a href="/Prijsvoorspeller" className="cta-button smooth-scroll">
          Start Nu
        </a>
      </section>

      <section id="about-section" className="about-section">
        <div>
          <h2>Onze site</h2>
          <p>
            Techjane, een bedrijf gericht op innovatieve oplossingen en
            wereldwijde betrokkenheid, biedt de Prijsvoorspeller aan om u te
            helpen de marktprijs van uw product te voorspellen. Onze
            geavanceerde tool maakt gebruik van cutting-edge technologieën en
            data-analyse om nauwkeurige voorspellingen te genereren. Vertrouw op
            Techjane om uw prijsstrategie te optimaliseren en uw
            concurrentiepositie te versterken in een dynamische marktomgeving.
          </p>
        </div>
        <figure>
          <img src={home1} alt="" />
        </figure>
      </section>

      <section className="contact-section">
        <h2>Neem contact op</h2>
        <p>
          Hebt u vragen? Contacteer ons via mail:{" "}
          <a href="mailto:info@techjane.com">info@techjane.com</a>
        </p>
      </section>
    </div>
  );
}

export default Home;
