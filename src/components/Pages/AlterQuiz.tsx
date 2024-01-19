import axios from "axios";
import { useState, FormEvent } from "react";

function AlterQuiz() {
    const [questionId, setQuestionId] = useState("")
    const [responseSucces, setResponseSucces] = useState<Boolean>(false)
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
                setUpdatedQuestion({vraagtext: "",
                antwoord1: { text: "", value: 0 },
                antwoord2: { text: "", value: 0 },
                antwoord3: { text: "", value: 0 },
                imgurl: "",
                webUrl: "",
                category: ""})
                setTimeout(() => {
                    setResponseSucces(false)
                }, 10000)

            } else {
                console.error('Failed to Update question to the database');
                setResponseSucces(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Alter a Quiz</h2>
            <form onSubmit={handleSubmit}>
                <label>Which quiz do you want to alter? Give the ID please</label>
                <input
                    type="text"
                    name="quizId"
                    value={questionId}
                    onChange={(e) => setQuestionId(e.target.value)}
                />
                <label>Vraagtext:</label>
                <input
                    type="text"
                    name="vraagtext"
                    value={updatedQuestion.vraagtext}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, vraagtext: e.target.value }))}
                />

                <label>Antwoord 1 Text:</label>
                <input
                    type="text"
                    name="antwoord1Text"
                    value={updatedQuestion.antwoord1.text}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, text: e.target.value } }))}
                />
                <label>Antwoord 1 Value:</label>
                <input
                    type="number"
                    name="antwoord1Value"
                    value={updatedQuestion.antwoord1.value}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, value: parseInt(e.target.value, 10) } }))}
                />

                <label>Antwoord 2 Text:</label>
                <input
                    type="text"
                    name="antwoord2Text"
                    value={updatedQuestion.antwoord2.text}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord2: { ...prevData.antwoord2, text: e.target.value } }))}
                />
                <label>Antwoord 2 Value:</label>
                <input
                    type="number"
                    name="antwoord2Value"
                    value={updatedQuestion.antwoord2.value}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord2: { ...prevData.antwoord2, value: parseInt(e.target.value, 10) } }))}
                />

                <label>Antwoord 3 Text:</label>
                <input
                    type="text"
                    name="antwoord3Text"
                    value={updatedQuestion.antwoord3.text}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord3: { ...prevData.antwoord3, text: e.target.value } }))}
                />
                <label>Antwoord 3 Value:</label>
                <input
                    type="number"
                    name="antwoord3Value"
                    value={updatedQuestion.antwoord3.value}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, antwoord3: { ...prevData.antwoord3, value: parseInt(e.target.value, 10) } }))}
                />

                <label>Imgurl:</label>
                <input
                    type="text"
                    name="imgurl"
                    value={updatedQuestion.imgurl}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, imgurl: e.target.value }))}
                />

                <label>WebUrl:</label>
                <input
                    type="text"
                    name="webUrl"
                    value={updatedQuestion.webUrl}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, webUrl: e.target.value }))}
                />

                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={updatedQuestion.category}
                    onChange={(e) => setUpdatedQuestion((prevData) => ({ ...prevData, category: e.target.value }))}
                />

                <button>Alter this quiz</button>
            </form>
            {responseSucces &&
                <div>

                    Your question has been successfully Alterd.

                </div>

            }

        </div>
    );

}

export default AlterQuiz;