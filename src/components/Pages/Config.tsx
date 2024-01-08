import React, { useState, useEffect } from "react";
import "../css/Config.css";

function Config() {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('c') || "English");
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('selectedColor'));

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  useEffect(() => {
    const r = document.querySelector(":root");
    if (r && selectedColor) {
      r.style.setProperty("--achtergrondkleur", selectedColor);
      localStorage.setItem('selectedColor', selectedColor);
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem('selectedLanguage', selectedLanguage);
    }
  }, [selectedLanguage]);

  const languageOptions = ["French", "Dutch", "English"];

  return (
    <div className="config-page">
      <h1>Configuration</h1>
      <ul>
        <li>Change Colors</li>
        <li>
          <div>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value={selectedColor}
              title="Choose your color"
              onChange={handleColorChange}
            />
          </div>
        </li>
        <li>Change Language</li>
        <li>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedLanguage}
            </button>
            <ul className="dropdown-menu">
              {languageOptions
                .filter((language) => language !== selectedLanguage)
                .map((language, index) => (
                  <li
                    key={index}
                    onClick={() => handleLanguageChange(language)}
                  >
                    <button className="dropdown-item" type="button">
                      {language}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </li>
        <li>Create Quiz</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Config;
