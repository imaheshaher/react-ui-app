import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img from './img.png'
class LayoutJs extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-2">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} height="150" width="100" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    This is card
                            </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col xs={6}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} height="150" width="100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is card
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                    <Col className="mt-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} height="150" width="100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is card
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        );
    }
}

export default LayoutJs;