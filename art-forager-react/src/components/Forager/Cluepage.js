import React, { Component } from 'react';
import '../../App.css';
// import axios from 'Axios';

class Cluepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forages: [],
      match: {},
      clueLoaded: false,
      clue: '',
      clueCount: '',
      clueAnswer: '',
      clue_answer: ''
    };
    // this.getClue = this.getClue.bind(this);
    // this.nextClue = this.nextClue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // nextClue(e) {
  //   this.props.getClue("small", 3);
  // }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.submit(this.state);
    this.props.getClue();
    this.props.history.push(`/${this.props.forageLevel}clues/${this.props.currentClueId}`);
    console.log(this.state);
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  }

componentDidMount() {
  console.log("match from props: ", this.props);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.clue_text}</h1>
          <h2>{this.state.clue}</h2>
          <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              placeholder="Paste Your Photo URL"
              name="clueAnswer"
              onChange={this.handleChange}
              value={this.state.clueAnswer}
            />

          <br />
          <button onClick={this.props.getClue} type="submit" value="submit">Next Clue</button>
          <br />
          <button onClick={this.finishForage} type="submit" value="submit">Finish Forage</button>
          </form>
        </header>

      </div>
    );
  }
}

export default Cluepage;
