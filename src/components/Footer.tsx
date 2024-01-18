import React from "react";
import "./css/footer.css";
import logo from "../assets/techjane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <section id="footer">
      <div className="footer-content">
        <div className="left-content">
          <p>
            <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
            info@techjane.com
          </p>
          <a href="">
            <p>
              <FontAwesomeIcon icon={["fas", "shield-alt"]} size="1x" />
              Privacybeleid en voorwaarden
            </p>
          </a>
          <p>&copy; 2023 TechJane. All Rights Reserved.</p>
        </div>
        <div className="right-content">
          <a href="https://techjane.be/">
            <img src={logo} alt="logo techjane" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
