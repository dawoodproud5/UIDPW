import React, { useState } from "react";

function Questionnaire() {
    const [answers, setAnswers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the answers, like submit them to a backend API
        console.log(answers);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question 1:
                <input
                    type="text"
                    name="answer1"
                    value={answers.answer1}
                    onChange={handleChange}
                />
            </label>
            <label>
                Question 2:
                <input
                    type="text"
                    name="answer2"
                    value={answers.answer2}
                    onChange={handleChange}
                />
            </label>
            <label>
                Question 3:
                <input
                    type="text"
                    name="answer3"
                    value={answers.answer3}
                    onChange={handleChange}
                />
            </label>
            <label>
                Question 4:
                <input
                    type="text"
                    name="answer4"
                    value={answers.answer4}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Questionnaire;
