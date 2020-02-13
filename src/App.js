import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Register from './Screens/Registeration';
import Dashboard from './Screens/Dashboard';
import QuizPanel from './Screens/QuizPanel';
import Prokey from './Screens/ProductKey';
import QuizScreen from './Screens/QuizScreen';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false, 
    showDashboard: false,
    showQuizPanel: false,
    showProkey: false,
    showQuizScreen: false,
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
    const { showLogin, showRegister, showDashboard, showQuizPanel, showProkey, showQuizScreen } = this.state;
    return(
      <React.Fragment>
        <Navbar register={this.renderRegister}/>
      {
        showLogin && <Login dash={this.renderDashboard}/>
      }
      {
        showRegister && <Register login={this.renderLogin} dash={this.renderDashboard}/>
      }
      {
        showDashboard && <Dashboard panel={this.renderQuizPanel}/>
      }
      {
        showQuizPanel && <QuizPanel dash={this.renderDashboard} pk={this.renderProkey}/>
      }
      {
        showProkey && <Prokey panel={this.renderQuizPanel} Qscreen={this.renderQuizScreen}/>
      }
      {
        showQuizScreen && <QuizScreen/>
      }
      </React.Fragment>
    )
  }
}

export default App;
