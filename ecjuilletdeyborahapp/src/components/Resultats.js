import React from 'react';

const Resultats = ({ score, totalQuestions }) => {
    return (
        <div>
            <h2>Résultat de votre quizz</h2>
            <p>
                Votre score est : {score}/{totalQuestions}.
            </p>
        </div>
    );
};

export default Resultats;