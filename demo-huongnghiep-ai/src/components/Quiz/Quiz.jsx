import React, { useState, useEffect } from 'react';
import "./style.css";
const Quiz = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('questions.txt');
            const data = await response.text();
            const parsedData = parseQuestions(data);
            setQuestions(parsedData);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const parseQuestions = (data) => {
        const lines = data.split('\n');
        const parsedQuestions = [];

        let currentQuestion = null;
        let currentChoices = [];

        for (let line of lines) {
            line = line.trim();

            if (line.startsWith('Câu hỏi')) {
                if (currentQuestion !== null) {
                    parsedQuestions.push({
                        question: currentQuestion,
                        choices: currentChoices,
                    });
                    currentChoices = [];
                }

                currentQuestion = line.substring(line.indexOf(':') + 1).trim();
            } else if (line.length > 0) {
                currentChoices.push({
                    label: line.substring(5).trim(),
                    checked: line.charAt(1) === 'x',
                });
            }
        }

        if (currentQuestion !== null) {
            parsedQuestions.push({
                question: currentQuestion,
                choices: currentChoices,
            });
        }

        return parsedQuestions;
    };

    const handleCheckboxChange = (questionIndex, choiceIndex) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].choices[choiceIndex].checked = !updatedQuestions[questionIndex].choices[choiceIndex].checked;
            return updatedQuestions;
        });
    };

    return (
        <div>
            {questions.map((question, questionIndex) => (
                <div className="quiz-container" key={questionIndex}>
                    <h3 className="quiz-question">Câu hỏi {questionIndex + 1}: {question.question}</h3>
                    <ul className="quiz-choices">
                        {question.choices.map((choice, choiceIndex) => (
                            <li className="quiz-choice-item" key={choiceIndex}>
                                <label className="quiz-choice-label">
                                    <input
                                        type="checkbox"
                                        className="quiz-choice-checkbox"
                                        checked={choice.checked}
                                        onChange={() => handleCheckboxChange(questionIndex, choiceIndex)}
                                    />
                                    {choice.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Quiz;