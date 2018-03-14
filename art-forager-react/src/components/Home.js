import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cluepage from "./Forager/Cluepage"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forage_submit: ''
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
        console.log(forageWhole.orgs_code);
        return forageWhole.orgs_code === code;
      });
      console.log('this is currentCode:', currentCode);
      // console.log("Match", forageWhole.orgs_code, " and ", this.state.forage_submit);
  }


  render() {
    return (
      <div>
        <h3>Have A Forager Code? Enter It Here:</h3>
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
