import React, { Component } from 'react';
import '../../App.css';
// import axios from 'Axios';

class Cluepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clueLoaded: false,
      clue: '',
      clueCount: '',
      clueAnswer: '',
      clue_answer: ''
    };
    this.getClue = this.getClue.bind(this);
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

  // Riddle(e) {
  //   if (this.state.riddleAnswer === 626){
  //   return ("Correct. You will begin your search in Gallery 626.")
  //     } else {
  //       return ("That is not the answer. Try again.")
  //     };
  // };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clues will be rendered here for a Forager...</h1>
          <form onSubmit="">
            <label>Answer
            <input
              type="text"
              name="clueAnswer"
              onChange={this.handleChange}
              value={this.state.clueAnswer}
            />
          </label>
          <button type="submit" value="submit">Previous Clue</button>
          <button type="submit" value="submit">Next Clue</button>
          <button type="submit" value="submit">Finish Forage</button>
          </form>
        </header>

      </div>
    );
  }
}

export default Cluepage;
