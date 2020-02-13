import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


export default class ProKey extends React.Component {
    render() {
        const { panel, Qscreen } = this.props;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Form style={{marginTop:'150px'}}>
                                <Form.Group controlId="formBasicText">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Product Key"
                                        name="productKey"
                                    />
                                </Form.Group>
                            </Form>
                           
                           
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={3}>
                        <Button style={{width:'100%'}} onClick={Qscreen} variant="outline-dark">Next</Button>
                        </Col>
                        <Col sm={3}>
                        <Button style={{width:'100%'}} onClick={panel} variant="outline-dark">Back</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}