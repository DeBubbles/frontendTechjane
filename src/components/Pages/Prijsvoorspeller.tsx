import React, { useState } from "react";
import "../css/prijsvoorspeller.css";
import PieChart from "../PieChart.tsx";
import questions, {
  Products,
  IQuestion,
  IProduct,
} from "../utils/questions.tsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as FontAwesomeSolidIcons from "@fortawesome/free-solid-svg-icons";
import * as FontAwesomeRegularIcons from "@fortawesome/free-regular-svg-icons";
import * as FontAwesomeBrandsIcons from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ISelectedAnswer {
  category: string;
  question: string;
  answer: string;
  price: number;
}

function Prijsvoorspeller() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [answers, setAnswers] = useState<ISelectedAnswer[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IQuestion[]>([]);

  const handleProductChange = (selectedProduct: IProduct) => {
    setSelectedProduct(selectedProduct);

    const newFilteredQuestions = questions.filter((question) => {
      return question.products.some(
        (product) => product.name === selectedProduct.name
      );
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

  const handleRestartQuiz = () => {
    setSelectedProduct(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setFilteredQuestions([]);
  };

  const geticonList = (module: any) =>
    Object.keys(module)
      .filter(
        (key) =>
          key !== "fas" && key !== "far" && key !== "fab" && key !== "prefix"
      )
      .map((icon) => module[icon]);

  library.add(
    ...[
      ...geticonList(FontAwesomeRegularIcons),
      ...geticonList(FontAwesomeSolidIcons),
      ...geticonList(FontAwesomeBrandsIcons),
    ]
  );

  return (
    <>
      {selectedProduct === null ? (
        <div className="selector">
          <h2>Selecteer het product voor de prijsvoorspeller.</h2>
          <div className="product-list">
            {Object.values(Products).map((product) => (
              <div className="product-box">
                <FontAwesomeIcon
                  icon={["fas", product.icon as FontAwesomeSolidIcons.IconName]}
                  size="4x"
                />
                <button
                  key={product.name}
                  onClick={() => {
                    handleProductChange(product);
                  }}
                >
                  {product.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {currentQuestionIndex === filteredQuestions.length ? (
            <div className="quiz-finished">
            {PieChart(answers)}
            <button onClick={handleRestartQuiz}>Go Back</button>
          </div>
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
