import React, { useState, useEffect } from "react";
import '../css/Config.css'; 

function Config() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedColor, setSelectedColor] = useState('');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  useEffect(() => {
    const navigation = document.getElementById('navigation');
    if (navigation) {
      navigation.style.backgroundColor = selectedColor;
    }

    const footer = document.getElementById('footer');
    if (footer) {
      footer.style.backgroundColor = selectedColor;
    }
  }, [selectedColor]);

  const languageOptions = ['French', 'Dutch', 'English'];

  return (
    <div className="config-page">
      <h1>Configuration</h1>
      <ul>
        <li>
          Change Colors
        </li>
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
        <li>
          Change Language
        </li>
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
                .filter((language) => language !== selectedLanguage) // Filter out selected language
                .map((language, index) => (
                  <li key={index} onClick={() => handleLanguageChange(language)}>
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
