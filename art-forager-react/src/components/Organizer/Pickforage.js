import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Pickforage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">This is where an Organizer will pick the fficulty level/sie of a Forage...</h1>
        </header>

        <div>
          <div onClick={this.selectForage.${smallclues}}>
            <h4>Small</h4>
          </div>
          <div onClick={this.selectForage.${mediumclues}}>
            <h4>Medium</h4>
          </div>
          <div onClick={this.selectForage.${largeclues}}>
            <h4>Large</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Pickforage;
