import React, { Component } from 'react';
import '../../App.css';
// import axios from 'Axios';

class Riddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddleAnswer: '',
      riddleMessage: ''
    }
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
    console.log(this.state);
  }

  riddle() {
    if (this.state.riddleAnswer === "626") {
    this.props.history.push("/smallclues/1");
    console.log("in the riddle method");
  } else if (this.state.riddleAnswer !== "626") {
          console.log("WRONG");
        // this.setState({riddleMessage: 'You are wrong, please have another go.'})
      }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Which gallery will you begin foraging in?</h1>
          <h4>The answer lies in this riddle:</h4>
          <h3>One digit is ⅓ of a digit next to it. The sum of my digits is 14. I am a palindrome.</h3>
          <h5>HINT: The solution is a 3 digit number...</h5>
          <h4>{this.state.riddleMessage}</h4>
          <form onSubmit={this.riddle}>
            <input
              type="text"
              name="riddleAnswer"
              onChange={this.handleChange}
              value={this.state.riddleAnswer}
            />
          <button type="submit" value="submit">Check Answer</button>
          </form>
        </header>

      </div>
    );
  }
}

export default Riddle;
