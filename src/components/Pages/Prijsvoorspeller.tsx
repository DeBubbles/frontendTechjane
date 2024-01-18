import React, { useState, useEffect } from "react";
import "../css/prijsvoorspeller.css";
import PieChart from "../PieChart.tsx";
import {
  Products,
  IQuestion,
  IProduct,
  fetchQuestionsFromAPI,
} from "../utils/questions.tsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as FontAwesomeSolidIcons from "@fortawesome/free-solid-svg-icons";
import * as FontAwesomeRegularIcons from "@fortawesome/free-regular-svg-icons";
import * as FontAwesomeBrandsIcons from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import emailjs from "emailjs-com";

interface ISelectedAnswer {
  category: string;
  question: string;
  answer: string;
  price: number;
}

function Prijsvoorspeller() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(Products.Webdesign);
  const [answers, setAnswers] = useState<ISelectedAnswer[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IQuestion[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showEmailSentPopup, setShowEmailSentPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleProductChange = (selectedProduct: IProduct) => {
    setSelectedProduct(selectedProduct);
  };
  
  const [allQuestions, setAllQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestionsFromAPI();
        setAllQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    loadQuestions();
  }, []);
  
  useEffect(() => {
    console.log("selectedProduct");
    console.log(selectedProduct);
    if (selectedProduct) {
      const newFilteredQuestions = allQuestions.filter((question) => {
        return question.products.some(
          (product) => product.name === selectedProduct.name
        );
      });
      setFilteredQuestions(newFilteredQuestions);
    }
  }, [selectedProduct, allQuestions]);
  
  

  const handleOptionChange = (e: any) => {
    console.log("e.target.value");
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    console.log("selectedOption");
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowEmailSentPopup(true);
    exportToEmail();
  };

  const exportToEmail = () => {
    const pieChartUrl = PieChart(answers);
    const priceDetails = answers
      .map((answer) => `${answer.question}: ${answer.price}`)
      .join("\n");

    const templateParams = {
      to_email: email,
      message: message,
      pie_chart_url: pieChartUrl,
      price_details: priceDetails,
    };

    emailjs
      .send(
        "techjane",
        "template_0jxieew",
        templateParams,
        "yaXBT1fCWtR1RiCSu"
      )
      .then((response) => {
        console.log("Email sent!", response.status, response.text);
        setEmail("");
        setMessage("");
        setPopupMessage("Email has been sent successfully!");
        setShowEmailSentPopup(true);
        setTimeout(() => setShowEmailSentPopup(false), 10000);
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        setPopupMessage(`Email could not be sent: ${error.text}`);
        setShowEmailSentPopup(true);
        setTimeout(() => setShowEmailSentPopup(false), 10000);
      });
  };

  const EmailSentPopup = () => {
    return (
      <div className="email-sent-popup">
        <p>{popupMessage}</p>
      </div>
    );
  };

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
              <button type="button" onClick={exportToEmail}>
                Export to Email
              </button>
              <div className="contact-form">
                <h2>Contact Us</h2>
                <br />
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                  />
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
      {showEmailSentPopup && <EmailSentPopup />}
    </>
  );
}

export default Prijsvoorspeller;
