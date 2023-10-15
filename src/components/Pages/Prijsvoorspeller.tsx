import React, { useState } from 'react';
import '../css/prijsvoorspeller.css'

function Prijsvoorspeller() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <div className="quiz-question">
        <h2>Question 1</h2>
        <p>What is Lorem Ipsum?</p>

        <label>
          <input
            type="radio"
            value="optionA"
            checked={selectedOption === 'optionA'}
            onChange={handleOptionChange}
          />
          Option A: Lorem Ipsum is a dummy text.
        </label>

        <label>
          <input
            type="radio"
            value="optionB"
            checked={selectedOption === 'optionB'}
            onChange={handleOptionChange}
          />
          Option B: It is a type of pasta.
        </label>

        <label>
          <input
            type="radio"
            value="optionC"
            checked={selectedOption === 'optionC'}
            onChange={handleOptionChange}
          />
          Option C: Lorem Ipsum comes from Latin roots.
        </label>
      </div>

      {selectedOption && (
        <div className="selected-answer">
          <h3>You selected: {selectedOption}</h3>
        </div>
      )}
    </div>
  );
}

export default Prijsvoorspeller;

