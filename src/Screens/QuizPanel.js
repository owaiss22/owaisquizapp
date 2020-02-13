import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Quizpanel extends React.Component {

    render() {
        const { dash, pk } = this.props;
        return (
            <React.Fragment>
                <Button style={{ margin: '20px' }} onClick={dash} variant="dark">Back</Button>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Card bg="dark" text="white">
                                <Card.Header>QuizTitle:HTML</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    <ListGroup border="dark" >
                                        <ListGroupItem>Quiz1</ListGroupItem>
                                        <ListGroupItem>Quiz2</ListGroupItem>
                                        <ListGroupItem>Quiz3</ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={5}>
                            <Card border="0">
                                <Card.Body>
                                    <h3>Welcome to HTML Quiz</h3>
                                   
                                    <h6>Quiz Title: HTML Quiz1</h6>
                                    
                                    <h6>Passing Score: 50%</h6>
                                  
                                    <h6>Quiz Duration: 30 Minutes</h6>
                                   
                                    <h6>Total Questions: 3</h6>
                                    <br/>
                                    <Button onClick={pk} variant="dark" type="submit">Continue</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}