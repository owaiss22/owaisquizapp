import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

export default class Dash extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{marginTop:'20px'}} bg="dark" text="white">
                                <Card.Header>Current User Email</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    <Card.Title>Welcome Owais@gmail.com</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{marginTop:'20px'}} bg="dark" text="white">
                                <Card.Header>Joined Courses</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    <Card.Title>You may not joined for any course</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                        </Col>
                        <Col sm={8}>
                            <Card style={{marginTop:'20px'}} bg="dark" text="white">
                                <Card.Header>Recommended Courses</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                   <div>
                                   <Card.Title>HTML
                                   <Button style={{float:'right'}} variant="dark" type="submit">Join</Button>
                                   </Card.Title>
                                   </div>
                                   <br/>
                                   <div>
                                   <Card.Title>CSS
                                   <Button style={{float:'right'}} variant="dark" type="submit">Join</Button>
                                   </Card.Title>
                                   </div>
                                   <br/>
                                   <div>
                                   <Card.Title>JavaScript
                                   <Button style={{float:'right'}} variant="dark" type="submit">Join</Button>
                                   </Card.Title>
                                   </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}