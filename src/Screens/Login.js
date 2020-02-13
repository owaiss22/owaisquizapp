import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import swal from 'sweetalert';
import firebase from '../Config/Firebase';

export default class Login extends React.Component {

    state = {
        email: null,
        password: null,
    }

    login = () => {
        const { email, password } = this.state;
        const { dash } = this.props;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // swal("Welcome to Dashboard");
                dash();

            })
            .catch(error => {
                var errorMessage = error.message;
                swal(`Error ${errorMessage}`);
            });
    }

    handle = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {
        const { dash } = this.props;
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h1 style={{marginTop:'150px',textAlign:'center'}}>Login</h1>
                            <br/>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={this.handle}    
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.handle}    
                                    />
                                </Form.Group>
                            </Form>
                            <Button onClick={this.login} style={{width:'100%',fontSize:'20px'}} variant="dark" type="submit">Login</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}