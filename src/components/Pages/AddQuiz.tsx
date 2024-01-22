
import { FormEvent, useState } from "react";
import axios from "axios";
import '../css/addquiz.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPlus, faTrash, faFont,faImage,faTag, faGlobe } from "@fortawesome/free-solid-svg-icons";

function AddQuiz() {
    interface IQuestion {
        vraagtext: string;
        antwoord1: {
            text: string;
            value: number;
        };
        antwoord2: {
            text: string;
            value: number;
        };
        antwoord3: {
            text: string;
            value: number;
        };
        imgurl: string;
        webUrl: string;
        category: string;
    }

    const initialQuestionState: IQuestion = {
        vraagtext: "",
        antwoord1: { text: "", value: 0 },
        antwoord2: { text: "", value: 0 },
        antwoord3: { text: "", value: 0 },
        imgurl: "",
        webUrl: "",
        category: "",
    }

    const [questions, setQuestions] = useState<IQuestion[]>([initialQuestionState]);
    const [responseSucces, setResponseSucces] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7279/Question/CreateQuestion',
                questions, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'F244428FB88143F9A8FA93EFF965CE73'
                },
            });

            if (response.status === 200) {
                console.log('Questions successfully added to the database');
                setResponseSucces(true);
                setQuestions([initialQuestionState]);
                setTimeout(() => {
                    setResponseSucces(false);
                }, 10000);
            } else {
                console.error('Failed to add questions to the database');
                setResponseSucces(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddQuestion = () => {
        if (questions.length < 3) {
            setQuestions([...questions, initialQuestionState]);
        }
    };

    const handleRemoveQuestion = (index: number) => {
        if (questions.length > 1) {
            const updatedQuestions = [...questions];
            updatedQuestions.splice(index, 1);
            setQuestions(updatedQuestions);
        }
    };

    return (
        <div className="add-quiz-page">
        <h1>
            <FontAwesomeIcon icon={faPalette} className="fa-icon" />
            Add Questions
            <FontAwesomeIcon icon={faPlus} className="add-question-btn" onClick={handleAddQuestion} />
        </h1>

        <form className="add-quiz-form" onSubmit={handleSubmit}>

            {questions.map((question, index) => (
                <div key={index}>
                    <label>
                        <FontAwesomeIcon icon={faFont} />
                        Vraagtext:
                        <input
                            type="text"
                            name="vraagtext"
                            value={question.vraagtext}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((prevQuestion, i) => (i === index ? { ...prevQuestion, vraagtext: e.target.value } : prevQuestion))
                            ))}
                        />
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faFont} />
                        Antwoord Text:
                        <input
                            type="text"
                            name="text"
                            value={question.antwoord1.text}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((q, i) => i === index ? { ...q, antwoord1: { ...q.antwoord1, text: e.target.value } } : q)
                            ))}
                        />
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faFont} />
                        Antwoord Value:
                        <input
                            type="number"
                            name="value"
                            value={question.antwoord1.value}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((q, i) => i === index ? { ...q, antwoord1: { ...q.antwoord1, value: parseInt(e.target.value, 10) } } : q)
                            ))}
                        />
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faImage} />
                        Imgurl:
                        <input
                            type="text"
                            name="imgurl"
                            value={question.imgurl}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((q, i) => i === index ? { ...q, imgurl: e.target.value } : q)
                            ))}
                        />
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faGlobe} />
                        WebUrl:
                        <input
                            type="text"
                            name="webUrl"
                            value={question.webUrl}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((q, i) => i === index ? { ...q, webUrl: e.target.value } : q)
                            ))}
                        />
                    </label>

                    <label>
                        <FontAwesomeIcon icon={faTag} />
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={question.category}
                            onChange={(e) => setQuestions((prevData) => (
                                prevData.map((q, i) => i === index ? { ...q, category: e.target.value } : q)
                            ))}
                        />
                    </label>

                    {questions.length > 1 && (
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="remove-question-btn"
                                onClick={() => handleRemoveQuestion(index)}
                            />
                        )}
                    </div>
                ))}

                <button type="submit">Submit</button>

            </form>

            {responseSucces && (
                <div>
                    Your questions have been successfully added. Please fill in the form again if you want to add more questions.
                </div>
            )}
        </div>
    );
}

export default AddQuiz;