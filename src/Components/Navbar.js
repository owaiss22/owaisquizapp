import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import firebase from '../Config/Firebase';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

export default class Appbar extends React.Component {

    state = {

    }

    logout = () => {

        firebase.auth().signOut()
            .then(function () {
                swal('User logged out');
                // this.props.history.push('/');
                window.location.replace('/');
            })
            .catch(function (error) {
                swal('Something went wrong');
            });
    }

    render() {
        const { register, login, userId } = this.props;
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    {
                        this.state.userLoggedin && <Button onClick={login} variant="outline-info">Login</Button>
                    }
                    <Button onClick={this.logout} variant="outline-info">Logout</Button>
                </Navbar>
            </React.Fragment>
        )
    }
}