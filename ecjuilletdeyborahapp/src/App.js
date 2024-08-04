import logo from './logo.svg';
import React from 'react';
import './App.css';
import Quizz from "./components/Quizz"
import questions from "./components/Questions";
import Resultats from "./components/Resultats";

function App() {
    return (
        <div className="App">
            <main>
                <Quizz />
            </main>

        </div>
    );
}

export default App;
