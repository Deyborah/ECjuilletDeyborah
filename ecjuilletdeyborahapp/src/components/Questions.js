import React from 'react';

class Question extends React.Component {
    render() {
const { question, handleSubmit } = this.props;

return (
    <div>
        <h2 className="mb-4">{question.question}</h2>
        <ul className="list-group">
            {question.answers.map((option, index) => (
                <li key={index} className="list-group-item">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit(option.isCorrect)}
                    >
                        {option.text}
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
    }
}

export default Question;