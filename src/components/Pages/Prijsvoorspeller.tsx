import React, { useState } from "react";
import "../css/prijsvoorspeller.css";
import PieChart from "../PieChart.tsx";
import questions, { Product, IQuestion } from "../utils/questions.tsx";

interface ISelectedAnswer {
  category: string;
  question: string;
  answer: string;
  price: number;
}

function Prijsvoorspeller() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [answers, setAnswers] = useState<ISelectedAnswer[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IQuestion[]>([]);

  const handleProductChange = (selectedProduct: Product) => {
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
          <h2>Kies het product voor de prijsvoorspeller:</h2>
          <select
            onChange={(e) =>
              handleProductChange(
                Product[e.target.value as keyof typeof Product]
              )
            }
          >
            <option>Selecteer een keuze</option>
            {Object.values(Product)
              .filter((value) => typeof value === "string")
              .map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
          </select>
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
