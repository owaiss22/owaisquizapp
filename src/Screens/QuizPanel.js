import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Quizpanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button style={{ margin: '20px' }}  variant="dark">Back</Button>
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
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}