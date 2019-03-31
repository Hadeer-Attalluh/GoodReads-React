import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export class LoginForm extends Component {
    render() {
        return (
            <Form className='login bg-gold form-border'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="submit-btn" type="submit">
                    Submit
                 </Button>
            </Form>
        );
    }
}