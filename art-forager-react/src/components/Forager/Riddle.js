import React, { Component } from 'react';
import './App.css';
import axios from 'Axios';

class Riddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddleAnswer: ''
    };
    this.riddle = this.riddle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    console.log(this.state);
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  }

  riddle(e) {
    if (riddleAnswer == "626"){
    return ("Correct. You will begin your search in Gallery 626.")
      } else {
        return ("That is not the answer. Try again.")
      };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Opening Riddle will be rendered here for a Forager...</h1>
          <form onSubmit="">
            <label>Answer
            <input
              type="text"
              name="answer"
              onChange={this.handleChange}
              value={this.state.answer}
            />
          </label>
          <button type="submit" value="submit">Check Answer</button>
          </form>
        </header>

      </div>
    );
  }
}

export default Riddle;
