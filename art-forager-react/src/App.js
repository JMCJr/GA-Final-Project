import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import TokenServices from './services/TokenServices.js';
import Riddle from "./components/Forager/Riddle.js";
import Cluepage from "./components/Forager/Cluepage.js";

const maxCluesId = {
  small: 18,
  medium: 26,
  large: 42
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forageMatch: {},
      forages: [],
      currentClueId: null,
      maxCluesId: null,
      eachClue: '',
      clue_text: ''
    }
    this.getClue = this.getClue.bind(this);
    this.getForages = this.getForages.bind(this);
    this.persistForageCode = this.persistForageCode.bind(this);
    this.iterateClueId = this.iterateClueId.bind(this);
    this.levelSetter = this.levelSetter.bind(this);
    // this.getSmallClue = this.getSmallClue.bind(this);
    // this.getMediumClue = this.getMediumClue.bind(this);
    // this.getLargeClue = this.getLargeClue.bind(this);
  }

componentDidMount(){
  this.getForages();
};

persistForageCode(match) {
  this.setState({
    forageMatch: match[0],
    currentClueId: 1,
    maxCluesId: maxCluesId[match.forage_level]
  });
  console.log("this is match in app js: ", match);
}

levelSetter() {
  if (this.state.forageMatch.forage_level === "small") {
    this.setState({
      maxCluesId: 19
    })
  } else if (this.state.forageMatch.forage_level === "medium") {
      this.setState({
        maxCluesId: 27
      })
  } else if (this.state.forageMatch.forage_level === "large") {
      this.setState({
        maxCluesId: 43
      })
  };
}


iterateClueId() {
  this.setState((prevState) => {
    return {currentClueId: prevState.currentClueId + 1}
  })
}


getClue()
 {
   axios({
     url: `http://localhost:3000/${this.state.forageMatch.forage_level}clues/${this.state.currentClueId}`,
     method: "GET"
   }).then(response => {
     console.log("Current Clue is: ", response.data.clue_text);
     this.setState({
       dataLoaded: true,
       clue_text: response.data.clue_text
     });
   });
   this.iterateClueId();
 }

// getSmallClue(id) {
//   axios({
//     url: `http://localhost:3000/smallclues/${id}`,
//     method: "GET"
//   }).then(response => {
//     console.log("Current Clue: ", response.data);
//     this.setState({
//       dataLoaded: true,
//       clue_text: response.data.clue_text
//     });
//   });
// }
//
// getMediumClue(id) {
//   axios({
//     url: `http://localhost:3000/mediumclues/${id}`,
//     method: "GET"
//   }).then(response => {
//     console.log("Current Clue: ", response.data);
//     this.setState({
//       dataLoaded: true,
//       clue_text: response.data
//     });
//   });
// }
//
// getLargeClue(id) {
//   axios({
//     url: `http://localhost:3000/largeclues/${id}`,
//     method: "GET"
//   }).then(response => {
//     console.log("Current Clue: ", response.data);
//     this.setState({
//       dataLoaded: true,
//       clue_text: response.data
//     });
//   });
// }

newAnswer(newAnswer) {
    axios({
      url: "http://localhost:3000/answers",
      method: "POST",
      data: newAnswer
    }).then(res => {
      this.getAnswers(this.state.user.id);
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
    console.log("this are the forage responses", resp);
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
    // var riddleThis = this.riddle.bind(this);
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
                <Home {...props} forages={this.state.forages} persistForageCode={this.persistForageCode} />
              )}/>
            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
              )} />
            <Route exact path="/login" component={(props) => (
              <Login {...props} submit={this.login.bind(this)} />
            )} />
            <Route exact path="/riddle" component={(props) => (
              <Riddle {...props} getClue={this.getClue} match={this.state.match}
                                 forageLevel={this.state.forageMatch.forage_level}
                                 currentClueId={this.state.currentClueId}
                                 levelSetter={this.levelSetter}
                />
            )} />
            <Route exact path="/smallclues/:id" component={(props) => (
              <Cluepage {...props} forageMatch={this.state.match} clue_text={this.state.clue_text} getClue={this.getClue}/>
            )} />
            <Route exact path="/mediumclues/:id" component={(props) => (
              <Cluepage {...props} forageMatch={this.state.match} clue_text={this.state.clue_text} getClue={this.getClue} />
            )} />
            <Route exact path="/largeclues/:id" component={(props) => (
              <Cluepage {...props} forageMatch={this.state.match} clue_text={this.state.clue_text} getClue={this.getClue} />
            )} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
