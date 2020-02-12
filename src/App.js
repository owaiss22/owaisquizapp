import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Register from './Screens/Registeration';
import Dashboard from './Screens/Dashboard';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false, 
    showDashboard: false,
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
      showDashboard: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
      showDashboard: false,
    })
  }

  renderDashboard = () => {
    this.setState({
      showDashboard: true,
      showRegister: false,
      showLogin: false,
    })
  }
  
  render() {
    const { showLogin, showRegister, showDashboard } = this.state;
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
        showDashboard && <Dashboard/>
      }
      </React.Fragment>
    )
  }
}

export default App;
