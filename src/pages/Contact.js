import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mb-3">Contact us</h1>
                <Row>
                    <Col md={6}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0017430164717!2d73.87224801533554!3d18.528823373756772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7459ff7e62b%3A0x4f52c4c4933f5d68!2sPune%20Railway%20Station!5e0!3m2!1sen!2sin!4v1620582258884!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter full name"
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPhone"
                                    className="mt-3"
                                >
                                    <Form.Label>Mobile no</Form.Label>
                                    <Form.Control
                                        required
                                        type="tel"
                                        placeholder="Enter mobile no"
                                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                    />
                                    <Form.Text type="invalid">
                                        Format: 1234-456-789
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridEmail"
                                    className="mt-3"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                    className="mt-3"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-3"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
