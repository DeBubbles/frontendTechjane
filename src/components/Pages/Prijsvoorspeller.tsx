import React, { useState } from "react";
import { getValueForOption } from "../utils.tsx";
import "../css/prijsvoorspeller.css";
import Chart from "react-google-charts";
import PieChart from "../PieChart.tsx";

function Prijsvoorspeller() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "What is Lorem Ipsum?",
      options: [
        { value: "optionA", text: "Option A: Lorem Ipsum is a dummy text." },
        { value: "optionB", text: "Option B: It is a type of pasta." },
        {
          value: "optionC",
          text: "Option C: Lorem Ipsum comes from Latin roots.",
        },
      ],
    },
    {
      question: "What is React?",
      options: [
        {
          value: "optionA",
          text: "Option A: It is a JavaScript library for building user interfaces.",
        },
        {
          value: "optionB",
          text: "Option B: It is a type of programming language.",
        },
        {
          value: "optionC",
          text: "Option C: It is a database management system.",
        },
      ],
    },
    {
      question: "What does CSS stand for?",
      options: [
        { value: "optionA", text: "Option A: Cascading Style Sheets." },
        { value: "optionB", text: "Option B: Creative Style Selector." },
        { value: "optionC", text: "Option C: Computer Style Script." },
      ],
    },
  ];

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      setAnswers([...answers, selectedOption]);
      setSelectedOption(null);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    answers.forEach((answer) => {
      const value = getValueForOption(answer);
      total += value;
    });
    return total;
  };

  return (
    <div className="container">
      <div className="quiz-box">
        <div className="question-box">
          <h2>{questions[answers.length]?.question}</h2>
          {questions[answers.length]?.options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              {option.text}
            </label>
          ))}
        </div>
        <div className="answer-box">
          {selectedOption && (
            <div className="selected-answer">
              <h3>You selected: {selectedOption}</h3>
            </div>
          )}
          <button onClick={handleNextQuestion}>Next</button>
          {
            answers.length === questions.length && PieChart(answers)
            // <div className="quiz-result">
            //   <h3>Total Score: {calculateTotal()}</h3>
            // </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Prijsvoorspeller;
