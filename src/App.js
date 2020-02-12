import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Register from './Screens/Registeration';
import Dashboard from './Screens/Dashboard';
import QuizPanel from './Screens/QuizPanel';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false, 
    showDashboard: false,
    showQuizPanel: false,
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
      showDashboard: false,
      showQuizPanel: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
      showDashboard: false,
      showQuizPanel: false,
    })
  }

  renderDashboard = () => {
    this.setState({
      showDashboard: true,
      showRegister: false,
      showLogin: false,
      showQuizPanel: false,
    })
  }

  renderQuizPanel = () => {
    this.setState({
      showQuizPanel: true,
      showDashboard: false,
      showRegister: false,
      showLogin: false,
    })
  }
  
  render() {
    const { showLogin, showRegister, showDashboard, showQuizPanel } = this.state;
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
        showQuizPanel && <QuizPanel dash={this.renderDashboard}/>
      }
      </React.Fragment>
    )
  }
}

export default App;
