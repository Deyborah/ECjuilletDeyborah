import React from 'react';

const Resultats  = ({ score, totalQuestions, rejouerQuizz }) => {
    return (
        <div>
            <h2>Résultat du Quizz</h2>
            <p>
                Votre score est de {score}/{totalQuestions}.
            </p>
            <button className="btn btn-primary" onClick={rejouerQuizz}>
                Rejouer
            </button>
        </div>
    );
};

export default Resultats;