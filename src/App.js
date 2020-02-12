import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Register from './Screens/Registeration';

class App extends React.Component{
  state = {
    showLogin: true,
    showRegister: false, 
  }

  renderLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
    })
  }

  renderRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
    })
  }
  
  render() {
    const { showLogin, showRegister } = this.state;
    return(
      <React.Fragment>
        <Navbar register={this.renderRegister}/>
      {
        showLogin && <Login/>
      }
      {
        showRegister && <Register login={this.renderLogin}/>
      }
      </React.Fragment>
    )
  }
}

export default App;
