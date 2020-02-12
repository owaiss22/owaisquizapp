import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class Register extends React.Component {
    render() {
        const { login, dash } = this.props;
        return(
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
                                        // onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        // onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        // onChange={this.handleTextFields}
                                    />
                                </Form.Group>
                            </Form>
                            <Button onClick={dash} style={{ width: '100%' }} variant="dark" type="submit">Register</Button>
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