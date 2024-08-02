import React, { useState, useEffect } from 'react';
import Resultats from './Resultats';
import Question from './Questions';

const Quizz = ({ level }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        fetch('/questions.json')
            .then((response) => response.json())
            .then((data) => {
                const filteredQuestions = data.filter((q) => q.level === level);
                setQuestions(filteredQuestions);
            })
            .catch((error) => console.error('Error fetching questions:', error));
    }, [level]);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quizz">
            {showScore ? (
                <Resultats score={score} totalQuestions={questions.length} />
            ) : (
                questions.length > 0 && (
                    <Question
                        question={questions[currentQuestionIndex]}
                        handleSubmit={handleAnswerOptionClick}
                    />
                )
            )}
        </div>
    );
};

export default Quizz;