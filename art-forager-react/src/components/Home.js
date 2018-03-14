import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cluepage from "./Forager/Cluepage"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forage_submit: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.parseCode(this.state.forage_submit);
  }

  handleChange(e) {
    const { forage_submit, value } = e.target
    this.setState({
      forage_submit: value
    });
  }

  // makeMatch(forages) {
  //     return ();
  // };

  // componentDidMount() {
  //   console.log('this is parsecode:', this.parseCode());
  // }

  parseCode(code) {
    console.log('called')
    console.log("The submit: ", this.state.forage_submit)
    let currentCode = this.props.forages.filter(forageWhole => {
      return forageWhole.orgs_code === code;
    });
    if (currentCode.length) {
      this.props.history.push("/riddle")
    } else {
      this.setState({message: 'Invalid CODE, please enter a different CODE'})
    }

  }

  render() {
    return (
      <div>
        <h3>Have A Forager Code? Enter It Here:</h3>
        <h4>{this.state.message}</h4>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="forage_submit"
          value={this.state.forage_submit}
          onChange={this.handleChange}  />
          <button type="submit" value="Submit">Submit</button>
        </form>

        <br />

        <div>Forage the MET for Cultures</div>
        <Link to="/register"><button>Register</button></Link>
        <br />
        <Link to="/login"><button>Login</button></Link>
        <br />
      </div>
    )
  }
}
