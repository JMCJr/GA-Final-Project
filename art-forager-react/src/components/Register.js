import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.submit(data);
  }

  render() {
    return (
      <div className="App">
        I'm a register
        <LoginForm submit={this.onSubmit} />
        <p><Link to="/"><button>Back Home</button></Link></p>
      </div>
    )
  }
}
