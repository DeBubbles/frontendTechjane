import { FormEvent, useState } from "react";
import axios from "axios";

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

    const [newQuestion, setNewQuestion] = useState<IQuestion>(initialQuestionState);
    const [responseSucces, setResponseSucces] = useState<Boolean>(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7279/Question/CreateQuestion',
                newQuestion, {

                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'F244428FB88143F9A8FA93EFF965CE73'
                },

            });

            if (response.status === 200) {
                console.log('Question successfully added to the database');
                setResponseSucces(true);
                setNewQuestion(initialQuestionState);
                setTimeout(()=>{
                    setResponseSucces(false)
                },10000)
                
            } else {
                console.error('Failed to add question to the database');
                setResponseSucces(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <h2>Add Questions</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Vraagtext:
                    <input
                        type="text"
                        name="vraagtext"
                        value={newQuestion.vraagtext}
                        onChange={(e) => setNewQuestion((prevData: any) => ({ ...prevData, vraagtext: e.target.value }))}
                    />
                </label>

                <label>
                    Antwoord 1 Text:
                    <input
                        type="text"
                        name="text"
                        value={newQuestion.antwoord1.text}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, text: e.target.value } }))}
                    />
                </label>
                <label>
                    Antwoord 1 Value:
                    <input
                        type="number"
                        name="value"
                        value={newQuestion.antwoord1.value}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord1: { ...prevData.antwoord1, value: parseInt(e.target.value, 10) } }))}
                    />
                </label>

                <label>
                    Antwoord 2 Text:
                    <input
                        type="text"
                        name="text"
                        value={newQuestion.antwoord2.text}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord2: { ...prevData.antwoord2, text: e.target.value } }))}
                    />
                </label>
                <label>
                    Antwoord 2 Value:
                    <input
                        type="number"
                        name="value"
                        value={newQuestion.antwoord2.value}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord2: { ...prevData.antwoord2, value: parseInt(e.target.value, 10) } }))}
                    />
                </label>

                <label>
                    Antwoord 3 Text:
                    <input
                        type="text"
                        name="text"
                        value={newQuestion.antwoord3.text}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord3: { ...prevData.antwoord3, text: e.target.value } }))}
                    />
                </label>
                <label>
                    Antwoord 3 Value:
                    <input
                        type="number"
                        name="value"
                        value={newQuestion.antwoord3.value}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, antwoord3: { ...prevData.antwoord3, value: parseInt(e.target.value, 10) } }))}
                    />
                </label>

                <label>
                    Imgurl:
                    <input
                        type="text"
                        name="imgurl"
                        value={newQuestion.imgurl}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, imgurl: e.target.value }))}
                    />
                </label>

                <label>
                    WebUrl:
                    <input
                        type="text"
                        name="webUrl"
                        value={newQuestion.webUrl}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, webUrl: e.target.value }))}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={newQuestion.category}
                        onChange={(e) => setNewQuestion((prevData) => ({ ...prevData, category: e.target.value }))}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>

            {responseSucces &&
                <div>

                    Your question has been successfully added, Please fill in the form again if you want to add another question

                </div>

            }


        </div>

    );
}

export default AddQuiz;