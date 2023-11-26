import React, { useState } from "react";
import "../css/prijsvoorspeller.css";
import PieChart from "../PieChart.tsx";
import questions, { Products, IQuestion } from "../utils/questions.tsx";

interface ISelectedAnswer {
  category: string;
  question: string;
  answer: string;
  price: number;
}

function Prijsvoorspeller() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<String | null>(null);
  const [answers, setAnswers] = useState<ISelectedAnswer[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IQuestion[]>([]);

  const handleProductChange = (selectedProduct: string) => {
    setSelectedProduct(selectedProduct);
    const newFilteredQuestions = questions.filter((question) => {
      return question.products.includes(selectedProduct);
    });

    setFilteredQuestions(newFilteredQuestions);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = filteredQuestions[currentQuestionIndex];
      const selectedAnswer = currentQuestion.answers.find(
        (a) => a.answer === selectedOption
      );
      if (selectedAnswer) {
        setAnswers([
          ...answers,
          {
            category: currentQuestion.category,
            question: currentQuestion.question,
            answer: selectedOption,
            price: selectedAnswer.price,
          },
        ]);
      }

      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <>
      {selectedProduct === null ? (
        <div>
          <h2>Selecteer het product voor de prijsvoorspeller.</h2>
          <div>
            {Object.values(Products).map((product) => (
              <button
                key={product}
                onClick={() => handleProductChange(product)}
              >
                {product}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {currentQuestionIndex === filteredQuestions.length ? (
            PieChart(answers)
          ) : (
            <div className="container">
              <div className="quiz-box">
                <div className="question-box">
                  <h2>{filteredQuestions[answers.length]?.question}</h2>
                  {filteredQuestions[answers.length]?.answers.map((option) => (
                    <label key={option.answer}>
                      <input
                        type="radio"
                        value={option.answer}
                        checked={selectedOption === option.answer}
                        onChange={handleOptionChange}
                      />
                      {option.answer}
                    </label>
                  ))}
                </div>
                <div className="button">
                  <button onClick={handleNextQuestion}>Next</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Prijsvoorspeller;
