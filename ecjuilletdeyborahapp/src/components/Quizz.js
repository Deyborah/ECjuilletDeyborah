import React, {useState, useEffect, Component} from 'react';
import Resultats from './Resultats';
import Question from './Questions';
class Quizz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            currentQuestion: 0,
            score: 0,
            showResult: false,
        };
    }
    componentDidMount() {
        fetch('/Questions.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ questions: data });
            })
            .catch(error => console.error('Error fetching the questions:', error));
    }

    // Méthode pour gérer la soumission de la réponse
    handleSubmit = (isCorrect) => {
        if (isCorrect) {
            this.setState((prevState) => ({
                score: prevState.score + 1,
            }));
        }

        if (this.state.currentQuestion === this.state.questions.length - 1) {
            this.setState({ showResult: true });
        } else {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
            }));
        }

    };

    render() {
        const { questions, currentQuestion } = this.state;

        if (questions.length === 0) {
            return <div>Chargement...</div>;
        }

        const question = questions[currentQuestion];

        return (
            <div>
                <h2>{question.text}</h2>
                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <button onClick={() => this.handleOptionClick(option.isCorrect)}>
                                {option.text}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Autres éléments du quiz */}
            </div>
        );
    }
}

export default Quizz;