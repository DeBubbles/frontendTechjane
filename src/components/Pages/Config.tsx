import React, { useState } from "react";
import '../css/Config.css'; 

function Config() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedColor, setSelectedColor] = useState('');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const colorOptions = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#00ff00' },
    { name: 'RGB', value: 'rgb(255, 0, 255)' } // Added RGB option
  ];
  const languageOptions = ['French', 'Dutch', 'English'];

  return (
    <div className="config-page">
      <h1>Configuration</h1>
      <ul>
        <li>
          Change Colors
        </li>
        <li>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Color
            </button>
            <ul className="dropdown-menu">
              {colorOptions.map((color, index) => (
                <li key={index} onClick={() => handleColorChange(color.value)}>
                  <button className="dropdown-item" type="button">
                    {color.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <span className="selected-color" style={{ backgroundColor: selectedColor }}></span>
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
              {languageOptions.map((language, index) => (
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
