import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

// sweetsalert2

import firebase from '../Config/Firebase';

export default class Register extends React.Component {

    state = {
        username: null,
        email: null,
        password: null,
    }

    userRegister = () => {
        const { username, email, password } = this.state;
        const { dash } = this.props;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                //userCreated
                swal("user registered successfully");

                firebase.auth().onAuthStateChanged((user) => {

                    if (user) {
                        const userID = firebase.auth().currentUser.uid;
                        const dbRef = firebase.database().ref().child("Users").child(userID);
                        dbRef.set({
                            Full_Name: username,
                            Email: email,
                            Courses: {
                                Available_Courses: [
                                    'HTML',
                                    'CSS',
                                    'JavaScript'
                                ],
                                // Joined_Courses: [
                                //     'You may not joined for any course'
                                // ],
                            }
                        })
                        this.props.history.push('/dashboard')
                    }
                })
            })
            .catch((error) => {
                // Handle Errors here.

                var errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    handleTextFields = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })

    }
    render() {
        const { login, dash } = this.props;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <div>
                                <h1 style={{ marginTop: '150px', textAlign: 'center' }}>Sign Up</h1>
                            </div>
                            <br />
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="username"
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                            </Form>
                            <Button onClick={this.userRegister} style={{ width: '100%' }} variant="dark" type="submit">Register</Button>
                            <br /><br />
                            {/* fontAwesome se Back Button lagana h arrrow type */}
                            <Button onClick={login} style={{ width: '100%' }} variant="dark" type="submit">Back To Login</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}