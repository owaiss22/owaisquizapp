import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default class Appbar extends React.Component {
    render() {
        const { register } = this.props;
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Button onClick={register} variant="outline-info">Signup</Button>
                </Navbar>
            </React.Fragment>
        )
    }
}