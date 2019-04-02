import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { context } from '../../App';

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (checkUser) => (e) => {
        e.preventDefault();
        if (!(this.state.email && this.state.password)) return;
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        checkUser(user);
        if (user.email === "Sincere@april.biz"){
            this.props.history.push('/admin');
        }
        // else{
        //     this.props.history.push('/categories');
        // }
    }

    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Form className='login bg-gold form-border' onSubmit={this.handleSubmit(value.checkUser)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button className="submit-btn" type="submit">
                                Login
                             </Button>
                        </Form>
                    )
                }
            </context.Consumer>
        );
    }
}