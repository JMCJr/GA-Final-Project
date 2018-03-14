import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Grade extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is where an Organizer will Grade a Forage they set up...</h1>
        </header>

        <div>
          <div>
            <p>${this.smallclue[i]}</p>
            <p>${this.answer[i]}</p>
            <form>
              <input type="radio" value="correct">Correct</input>
              <input type="radio" value="correct">Wrong</input>
              <input type="submit">Grade This Answer</input>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Grade;
