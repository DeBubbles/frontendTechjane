import axios from "axios";
import { useState, FormEvent } from "react";
import '../css/alterquiz.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faQuestion, faTag, faGlobe, faImage, faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


function AlterQuiz() {
    const [questionId, setQuestionId] = useState("");
    const [responseSucces, setResponseSucces] = useState<Boolean>(false);
    const [updatedQuestion, setUpdatedQuestion] = useState({
        vraagtext: "",
        antwoord1: { text: "", value: 0 },
        antwoord2: { text: "", value: 0 },
        antwoord3: { text: "", value: 0 },
        imgurl: "",
        webUrl: "",
        category: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://localhost:7279/Question/UpdateQuestion/${questionId}`,
                updatedQuestion,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'F244428FB88143F9A8FA93EFF965CE73'
                    },
                });

            if (response.status === 200) {
                console.log('Question successfully Updated in the database');
                setResponseSucces(true);
                setQuestionId("");
                setUpdatedQuestion({
                    vraagtext: "",
                    antwoord1: { text: "", value: 0 },
                    antwoord2: { text: "", value: 0 },
                    antwoord3: { text: "", value: 0 },
                    imgurl: "",
                    webUrl: "",
                    category: ""
                });
                setTimeout(() => {
                    setResponseSucces(false);
                }, 10000);
            } else {
                console.error('Failed to Update question to the database');
                setResponseSucces(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddQuestion = () => {
        setUpdatedQuestion((prevData) => ({
            ...prevData,
            antwoord4: { text: "", value: 0 }, // Add antwoord4 as an example
        }));
    };

    const handleRemoveQuestion = () => {
        setUpdatedQuestion((prevData) => {
            const { antwoord4, ...updatedData } = prevData; // Remove antwoord4 as an example
            return updatedData;
        });
    };

    return (
        <div className="alter-quiz-page">
        <h1>
            <FontAwesomeIcon icon={faEdit} /> Alter a Quiz
        </h1>
        <form onSubmit={handleSubmit} className="alter-quiz-form">
            <label>
                <FontAwesomeIcon icon={faQuestion} /> Which quiz do you want to alter? Give the ID please
            </label>
            <input
                type="text"
                name="quizId"
                value={questionId}
                onChange={(e) => setQuestionId(e.target.value)}
            />

            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 1 Text:
            </label>
            <input
                type="text"
                name="antwoord1Text"
                value={updatedQuestion.antwoord1.text}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, text: e.target.value } }))}
            />
            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 1 Value:
            </label>
            <input
                type="number"
                name="antwoord1Value"
                value={updatedQuestion.antwoord1.value}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, value: parseInt(e.target.value, 10) } }))}
            />

            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 2 Text:
            </label>
            <input
                type="text"
                name="antwoord1Text"
                value={updatedQuestion.antwoord1.text}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, text: e.target.value } }))}
            />
            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 2 Value:
            </label>
            <input
                type="number"
                name="antwoord1Value"
                value={updatedQuestion.antwoord1.value}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, value: parseInt(e.target.value, 10) } }))}
            />

            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 3 Text:
            </label>
            <input
                type="text"
                name="antwoord1Text"
                value={updatedQuestion.antwoord1.text}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, text: e.target.value } }))}
            />
            <label>
                <FontAwesomeIcon icon={faTag} /> Antwoord 3 Value:
            </label>
            <input
                type="number"
                name="antwoord1Value"
                value={updatedQuestion.antwoord1.value}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, value: parseInt(e.target.value, 10) } }))}
            />

            <label>
                <FontAwesomeIcon icon={faImage} /> Imgurl:
            </label>
            <input
                type="text"
                name="imgurl"
                value={updatedQuestion.imgurl}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, imgurl: e.target.value }))}
            />

            <label>
                <FontAwesomeIcon icon={faGlobe} /> WebUrl:
            </label>
            <input
                type="text"
                name="webUrl"
                value={updatedQuestion.webUrl}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, webUrl: e.target.value }))}
            />

            <label>
                <FontAwesomeIcon icon={faTag} /> Category:
            </label>
            <input
                type="text"
                name="category"
                value={updatedQuestion.category}
                onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, category: e.target.value }))}
            />
            <button type="submit">
                <FontAwesomeIcon icon={faCheck} /> Alter this quiz
            </button>
        </form>
            {responseSucces && (
                <div className="success-message">
                    Your question has been successfully Altered.
                </div>
            )}
        </div>
    );
}

export default AlterQuiz;