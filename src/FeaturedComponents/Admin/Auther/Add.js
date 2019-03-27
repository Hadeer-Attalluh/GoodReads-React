import { Form, Button, Modal } from 'react-bootstrap';
import React from 'react';

import SimpleSchema from 'simpl-schema';

// import { context } from '../../../App';
import uuidv1 from 'uuid/v1';

export default class AddAuthorForm extends React.Component {
    constructor() {
        super();
        this.state = {
            photo: "",
            "first-name": "",
            "last-name": "",
            birthdate: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    addAuthor = (addHandler) => (e) => {
        e.preventDefault();
        const formValidatorCtx = new SimpleSchema({
            'first-name': String,
            'last-name': String,
            photo: String,
            birthdate: String
        }).newContext();
        formValidatorCtx.validate(this.state);
        if (formValidatorCtx.validationErrors().length === 0) {
            let newAuthor = {
                id: uuidv1(),
                "first-name":this.state["first-name"],
                "last-name":this.state["last-name"],
                photo:this.state.photo,
                birthdate:this.state.birthdate,
                deleted:false
            }
            console.log("jbiyf54")
            addHandler(newAuthor);
        }
        else {
            console.log(formValidatorCtx.validationErrors());
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state));
    }
    render() {
        // console.log(this.props)
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.addAuthor}>
                        <Form.Group controlId="fName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="Enter First Name" name="first-name" value={this.state['first-name']} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="lName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Enter Last Name" name="last-name" value={this.state['last-name']} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="photoURL">
                            <Form.Label>Photo URl</Form.Label>
                            <Form.Control placeholder="Enter Photo URL" name="photo" value={this.state.photo} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="photoURL">
                            <Form.Label>Birthdate</Form.Label>
                            <Form.Control placeholder="Enter Birthdate" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button variant="primary" type="submit" onClick={this.addAuthor}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

        );
    }
}