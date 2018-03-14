import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Setnumber extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is where an Organizer will set the number of Foragers that will participate in their Forage...</h1>
        </header>

        <div>
          <h3>Select the Number of Foragers</h3>
          <form onSubmit="">
            <input type="number" name="quantity" min="1" max="10"></input>
            <input type="submit"></input>
          </form>
        </div>

      </div>
    );
  }
}

export default Setnumber;
