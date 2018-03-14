import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Makecode extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">This is where an Organizer will make codes for their Forages...</h1>
        </header>

        <div>
          <h3>Create Codes For Your Foragers:</h3>
          <form onSubmit="">
            <input type="text" name="forage_code"></input>
            <input type="submit"></input>
          </form>
        </div>

      </div>
    );
  }
}

export default Makecode;
