import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import TokenServices from './services/TokenServices.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forages: []
    }
    this.getForages = this.getForages.bind(this);
  }

componentDidMount(){
  this.getForages();
};

getClue(forage_level, id) {
  axios({
    url: `localhost:3000/${forage_level}clues/${id}`,
    method: "GET"
  }).then(response => {
    console.log("Current Clue: ", response.data);
    this.setState({
      dataLoaded: true,
      clue_text: response.data
    });
  });
}

  register(data) {
    axios('http://localhost:3000/organizers/', {
      method: "POST",
      data
    }).then(resp => {
      TokenServices.save(resp.data.token)
    })
    .catch(err => console.log(`err: ${err}`));
  }


  getForages(data) {
    axios({
    url: "http://localhost:3000/forages/",
    method:"GET",
    data
  }).then(resp => {
    console.log("this is the forage responeses", resp);
    this.setState({
      forages: resp.data
    });
  })
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    axios('http://localhost:3000/organizers/login', {
      method: "POST",
      data
    }).then(resp => {
      TokenServices.save(resp.data.token);
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // calling a restricted route on the server
  // the important part is setting the Authorization header
  // with the token retrieved from the TokenService
  authClick(ev) {
    ev.preventDefault();
    axios('http://localhost:3000/organizers/forages', {
      headers: {
        Authorization: `Bearer ${TokenServices.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  // just delete the token
  logout(ev) {
    ev.preventDefault();
    TokenServices.destroy();
  }

  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenServices.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* <div>
          Weird button: <button onClick={this.authClick.bind(this)}>Weird Button</button>
          <p><button onClick={this.checkLogin.bind(this)}>Check If Logged In</button></p>
          <p><button onClick={this.logout.bind(this)}>Logout</button></p>
        </div> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={(props) => (
              <Home {...props} forages={this.state.forages} />
            )}/>
            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
            )} />
          <Route exact path="/login" component={(props) => (
            <Login {...props} submit={this.login.bind(this)} />
          )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
