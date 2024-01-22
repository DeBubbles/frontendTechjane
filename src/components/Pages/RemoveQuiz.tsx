import { FormEvent, useState } from "react";
import axios from "axios";
import '../css/removequiz.css'; // Make sure to replace with the correct path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

function RemoveQuiz() {
    const [questionId, setQuestionId] = useState("");
    const [responseSucces, setResponseSucces] = useState<Boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`https://localhost:7279/Question/Delete/${questionId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'F244428FB88143F9A8FA93EFF965CE73'
                },
            });

            if (response.status === 200) {
                console.log('Question successfully Deleted in the database');
                setResponseSucces(true);
                setQuestionId("");

                setTimeout(() => {
                    setResponseSucces(false);
                }, 10000);
            } else {
                console.error('Failed to delete question from the database');
                setResponseSucces(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="remove-quiz-page">
            <h2>
                <FontAwesomeIcon icon={faTrashAlt} /> Delete a Question
            </h2>
            <form onSubmit={handleSubmit} className="remove-quiz-form">
                <label>
                    <FontAwesomeIcon icon={faTrashAlt} /> Which question do you want to delete? Give the ID please
                </label>
                <input
                    type="text"
                    name="questionId"
                    value={questionId}
                    onChange={(e) => setQuestionId(e.target.value)}
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faCheck} /> Delete this question
                </button>
            </form>
            {responseSucces && (
                <div className="success-message">
                    Your question has been successfully Deleted.
                </div>
            )}
        </div>
    );
}

export default RemoveQuiz;