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

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = filteredQuestions[currentQuestionIndex];
      const selectedAnswer = currentQuestion.answers.find(
        (a) => a.answer === selectedOption
      );

      if (selectedAnswer) {
        const answerIndex = answers.findIndex(
          (answer) => answer.question === currentQuestion.question
        );

        if (answerIndex !== -1) {
          const updatedAnswers = [...answers];
          updatedAnswers[answerIndex] = {
            category: currentQuestion.category,
            question: currentQuestion.question,
            answer: selectedOption,
            price: selectedAnswer.price,
          };
          setAnswers(updatedAnswers);
        } else {
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
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }

      const answerIndex = answers.findIndex(
        (answer) =>
          answer.question === filteredQuestions[currentQuestionIndex].question
      );

      if (answerIndex !== -1) {
        setSelectedOption(answers[answerIndex].answer);
      } else {
        setSelectedOption(null);
      }

      console.log(filteredQuestions.length + " " + currentQuestionIndex);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      if (selectedOption !== null) {
        const currentQuestion = filteredQuestions[currentQuestionIndex];
        const selectedAnswer = currentQuestion.answers.find(
          (a) => a.answer === selectedOption
        );

        if (selectedAnswer) {
          const answerIndex = answers.findIndex(
            (answer) => answer.question === currentQuestion.question
          );

          console.log(answerIndex);

          if (answerIndex !== -1) {
            const updatedAnswers = [...answers];
            updatedAnswers[answerIndex] = {
              category: currentQuestion.category,
              question: currentQuestion.question,
              answer: selectedOption,
              price: selectedAnswer.price,
            };
            setAnswers(updatedAnswers);
          } else {
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
        }

        setSelectedOption(null);
      }

      const prevQuestionIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevQuestionIndex);

      const currentQuestion = filteredQuestions[prevQuestionIndex];
      const answerIndex = answers.findIndex(
        (answer) => answer.question === currentQuestion.question
      );

      if (answerIndex !== -1) {
        setSelectedOption(answers[answerIndex].answer);
      }
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
              <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                 <label htmlFor="email">Email:</label>
                 <input type="email" id="email" name="email" />

                 <label htmlFor="message">Message:</label>
                 <textarea id="message" name="message" rows={4} />

                 <button type="submit">Submit</button>
                </form>
             </div>
            </div>
            
          ) : (
            <div className="container">
              <div className="quiz-box">
                <div className="question-box">
                  <h2>{filteredQuestions[currentQuestionIndex]?.question}</h2>
                  <div className="answer-box">
                    {filteredQuestions[currentQuestionIndex]?.answers.map(
                      (option) => (
                        <button
                          key={option.answer}
                          className={
                            selectedOption === option.answer
                              ? "button selected"
                              : "button"
                          }
                          onClick={() =>
                            handleOptionChange({
                              target: { value: option.answer },
                            })
                          }
                        >
                          {option.answer}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="questionHandler">
                  {currentQuestionIndex !== 0 && (
                    <div className="button">
                      <button onClick={handlePrevQuestion}>Back</button>
                    </div>
                  )}
                  <div className="button">
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedOption === null}
                      style={{
                        cursor:
                          selectedOption === null ? "not-allowed" : "pointer",
                      }}
                    >
                      Next
                    </button>
                  </div>
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
