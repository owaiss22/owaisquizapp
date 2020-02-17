import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Register from './Screens/Registeration';
import Dashboard from './Screens/Dashboard';
import QuizPanel from './Screens/QuizPanel';
import Prokey from './Screens/ProductKey';
import QuizScreen from './Screens/QuizScreen';
import firebase from './Config/Firebase';

//React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    showLogin: true,
    showRegister: false,
    showDashboard: false,
    showQuizPanel: false,
    showProkey: false,
    showQuizScreen: false,
    usr: '',
    usrEmail: '',
    userLoggedIn: false,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let uId = "null";
      let uEmail = "null";
      if (user) {
        uId = firebase.auth().currentUser.uid;
        uEmail = firebase.auth().currentUser.email;
        console.log(uEmail);
        this.setState({
          usrEmail: uEmail,
          usr: uId,
          showQuizScreen: false,
        });
        this.renderDashboard();

      } else {
        this.setState({
          showLogin: true,
          showQuizScreen: false,
        })
      }
    })

  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
      showDashboard: false,
      showQuizPanel: false,
      showProkey: false,
      showQuizScreen: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      userLoggedIn: true,
      showLogin: false,
      showDashboard: false,
      showQuizPanel: false,
      showProkey: false,
      showQuizScreen: false,
    })
  }

  renderDashboard = () => {
    this.setState({
      showDashboard: true,
      showRegister: false,
      showLogin: false,
      showQuizPanel: false,
      showProkey: false,
      showQuizScreen: false,
    })
  }

  renderQuizPanel = () => {
    this.setState({
      showQuizPanel: true,
      showDashboard: false,
      showRegister: false,
      showLogin: false,
      showProkey: false,
      showQuizScreen: false,
    })
  }

  renderProkey = () => {
    this.setState({
      showProkey: true,
      showQuizPanel: false,
      showDashboard: false,
      showRegister: false,
      showLogin: false,
      showQuizScreen: false,
    })
  }

  renderQuizScreen = () => {
    this.setState({
      showQuizScreen: true,
      showProkey: false,
      showQuizPanel: false,
      showDashboard: false,
      showRegister: false,
      showLogin: false,
    })
  }

  render() {
    const { showLogin, showRegister, showDashboard, showQuizPanel, showProkey, showQuizScreen, usrEmail, usr } = this.state;
    return (
      <Router>
        <Navbar register={this.renderRegister} login={this.renderLogin} userId={usr} />

        <Switch>
          <Route path='/register' render={props => (<Register {...props} />)} />
          <Route path='/' exact render={props => (<Login {...props} />)} />
          <Route path='/dashboard' exact render={props => (<Dashboard {...props} user={usr} />)} />
          <Route path='/quiz-panel/:course' render={props => (<QuizPanel {...props} user={usr} />)} />

        </Switch>
        {/* {
        showLogin && <Login dash={this.renderDashboard}/>
      }
      {
        showRegister && <Register login={this.renderLogin} dash={this.renderDashboard}/>
      }
      {
        showDashboard && <Dashboard panel={this.renderQuizPanel} user={usr} userEmail={usrEmail}/>
      }
      {
        showQuizPanel && <QuizPanel dash={this.renderDashboard} pk={this.renderProkey}/>
      }
      {
        showProkey && <Prokey panel={this.renderQuizPanel} Qscreen={this.renderQuizScreen}/>
      }
      {
        showQuizScreen && <QuizScreen/>
      } */}
      </Router>
    )
  }
}

export default App;
