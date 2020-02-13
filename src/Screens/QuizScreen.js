import React from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';


export default class Qscreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Card style={{ marginTop: '150px' }} bg="dark" text="white">
                                <Card.Header>Question</Card.Header>
                                <Card.Body style={{ backgroundColor: 'white', color: 'black' }}>
                                    <Card.Title> Html stands for:</Card.Title>
                                    <Card.Text>
                                        <Form.Check
                                            type="radio"
                                            label=" Hyper Text Markup Language"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label=" Hyper Transform Markup Language"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label=" Hyper Text Makeup Language "
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                        <br />
                                        <Button style={{float:'right'}} variant="dark">Next</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}