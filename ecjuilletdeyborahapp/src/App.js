import logo from './logo.svg';
import React from 'react';
import './App.css';
import Quizz from "./components/Quizz"
import questions from "./components/Questions";
import Resultats from "./components/Resultats";

function App({ level }) {
  return (
      <div className="App">
        <main>
          <Quizz level={level}/>
        </main>
    </div>
  );
}

export default App;
