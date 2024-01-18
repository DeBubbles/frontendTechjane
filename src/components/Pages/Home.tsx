import React from "react";
import "../css/home.css";

import home1 from "../../assets/home1.jpg";

function Home(props: { username: string }) {
  return (
    <div className="home-bg">
      <div className="home-container">
        <section className="hero-section">
          <h1 className="main-heading">{props.username} Prijsvoorspeller</h1>
          <p className="sub-heading">Ontdek Spectaculaire Inhoud</p>
        </section>

        <section className="intro-section">
          <p className="intro-text">
            Hallo, welkom bij Techjane! Onze Prijsvoorspeller ondersteunt u bij
            het inschatten van de prijs van een product dat binnenkort op de
            markt verschijnt. Klik op de knop hieronder om te beginnen.
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
              data-analyse om nauwkeurige voorspellingen te genereren. Vertrouw
              op Techjane om uw prijsstrategie te optimaliseren en uw
              concurrentiepositie te versterken in een dynamische marktomgeving.
            </p>
            <a href="/Prijsvoorspeller" className="cta-button smooth-scroll">
              Start Nu
            </a>
          </div>
        </section>
        <section id="about-section" className="about-section">
          <div>
            <h2>Onze site</h2>
            <p>
              Techjane, een bedrijf gericht op innovatieve oplossingen en
              wereldwijde betrokkenheid, biedt de Prijsvoorspeller aan om u te
              helpen de marktprijs van uw product te voorspellen. Onze
              geavanceerde tool maakt gebruik van cutting-edge technologieën en
              data-analyse om nauwkeurige voorspellingen te genereren. Vertrouw
              op Techjane om uw prijsstrategie te optimaliseren en uw
              concurrentiepositie te versterken in een dynamische marktomgeving.
            </p>
          </div>
          <figure>
            <img src={home1} alt="" />
          </figure>
        </section>

        <section className="contact-section">
          <div className="contact-content">
            <h2>Neem contact op</h2>
            <p>
              Als u vragen of opmerkingen heeft, aarzel dan niet om contact met
              ons op te nemen!
            </p>
            <div className="contact-info">
              <p>
                Email ons:{" "}
                <a href="mailto:info@techjane.com">info@techjane.com</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
