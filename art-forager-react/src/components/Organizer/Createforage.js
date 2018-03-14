import React, { Component } from 'react';
import './App.css';
import Pickforage from "./Pickforage";
import Setnumber from "./Setnumber";
import Makecode from "./Makecode";
import axios from 'Axios';

class Createforage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a Forage here...</h1>
        </header>

        <Pickforage />
        <Setnumber />
        <Makecode />
      </div>
    );
  }
}

export default Createforage;
