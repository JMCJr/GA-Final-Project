import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Dashmenu extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Dash menu goes here...</h1>
        </header>

        <div>
          <div>Home Page</div>
          <div>List of Forages</div>
          <div>Create Forage</div>
        </div>
      </div>
    );
  }
}

export default Dashmenu;
