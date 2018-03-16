import React, { Component } from 'react';
import '../../App.css';
// import axios from 'Axios';

class Riddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // match: {},
      riddleAnswer: '',
      riddleMessage: '',
      // eachClue:''
    }
    // this.getClue = this.getClue.bind(this);
    this.riddle = this.riddle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.riddle(this.state.match);
    console.log("riddle-riddle handle submit: ", this.props);
    this.props.levelSetter();
    this.props.getClue(this.props.forageLevel, 1);
    console.log("get clue submit: ", this.state);
  }

  handleChange(e) {
    const {riddleAnswer, value} = e.target
    this.setState({
      riddleAnswer: value
    });
    console.log(this.state);
  }

  riddle(match) {
    console.log('riddle answer')
    if (this.state.riddleAnswer === "626") {
      console.log("riddle match obj: ", this.props.match);
      // this.props.getClue("small", 1)
    this.props.history.push(`/${this.props.forageLevel}clues/${this.props.currentClueId}`);
    console.log("in the riddle method");
  } else if (this.state.riddleAnswer !== "626") {
          console.log("WRONG");
          this.setState({riddleMessage: 'You are wrong, please have another go.'})
      }
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Which gallery will you begin foraging in?</h1>
          <h4>The answer lies in this riddle:</h4>
          <h2>{this.state.riddleMessage}</h2>
          <h3>One digit is ⅓ of a digit next to it. The sum of my digits is 14. I am a palindrome.</h3>
          <h5>HINT: The solution (like all Galleries in the MET) is a 3 digit number...</h5>
          <form onSubmit={this.handleSubmit}>
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
