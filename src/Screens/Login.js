import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class Login extends React.Component {
    render() {
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
                                        // onChange={this.handle}    
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        // onChange={this.handle}    
                                    />
                                </Form.Group>
                            </Form>
                            <Button /*onClick={this.login}*/ style={{width:'100%',fontSize:'20px'}} variant="dark" type="submit">Login</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}