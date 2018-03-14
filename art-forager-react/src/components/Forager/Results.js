import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Results extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Forage Code</h1>
          <h3>Forage Level: ${this.forage-level?}</h3>
        </header>
        <div>
          <h4>You Scored ${this.answers.correct} out of ${this.answers.length}</h4>

          <div>
            <ul>
              <li>${this.answers} ${this.answers.correct}</li>
            </ul>

            <ul>
              <li>${this .clue_answer}</li>
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Results;
