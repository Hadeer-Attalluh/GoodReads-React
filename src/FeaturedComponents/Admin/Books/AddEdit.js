import { Form, Button, Modal, Col } from 'react-bootstrap';
import React from 'react';

import SimpleSchema from 'simpl-schema';

import { context } from '../../../App';
import uuidv1 from 'uuid/v1';

export default class AddEditBookForm extends React.Component {
    constructor(props) {
        super(props);
        //initial values from end points when mounting??
        if (this.props.editmode) {
            this.state = {
                title: this.props.title,
                authorId: this.props.authorId,
                categoryId: this.props.categoryId,
                cover: this.props.cover,
            }
        }
        else {
            this.state = {
                title: "",
                authorId: "1",
                categoryId: "1",
                cover: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = (actionHandler) => (e) => {
        e.preventDefault();
        const formValidatorCtx = new SimpleSchema({
            title: { type: String, required: true, min: 1, max: 50 },
            categoryId: { type: String, required: true },
            authorId: { type: String, required: true },
            cover: { type: String }, // has  an issue if regex
        }, { requiredByDefault: false }).newContext();
        // formValidatorCtx.validate(this.state).clean(this.state,{removeEmptyStrings: true});
        formValidatorCtx.validate(this.state);
        if (formValidatorCtx.validationErrors().length === 0) {
            let newBook = {
                id: uuidv1(),
                title: this.state.title,
                authorId: this.state.authorId,
                categoryId: this.state.categoryId,
                cover: this.state.cover,
                deleted: false
            }
            if (this.props.editmode) {
                newBook.id = this.props.id;
                actionHandler(newBook); // edit function
            }
            else {
                actionHandler(newBook); // add function
            }
            this.setState({ title: "", authorId: "0", categoryId: "0", cover: "" });
            this.props.onHide();
        }
        else {
            console.log(formValidatorCtx.validationErrors());
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Modal show={this.props.show} onHide={this.props.onHide}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.props.editmode ? "Edit Book" : "Add New Book"}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundImage: "url('" + require('../../../Assets/bookform.jpg') + "')" }}>
                                <Form onSubmit={this.props.editmode ? this.handleSubmit(value.editBook) : this.handleSubmit(value.addBook)}>
                                    <Form.Group controlId="title">
                                        <Form.Label>Book Name</Form.Label>
                                        <Form.Control placeholder="Enter Book Name" name="title" value={this.state.title} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" name="categoryId" onChange={this.handleChange} value={this.state.categoryId}>
                                            {
                                                value.Categories.filter(c => c.deleted === false).map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                                            }
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control as="select" name="authorId" onChange={this.handleChange} value={this.state.authorId}>
                                            {
                                                value.authors.filter(a => a.deleted === false).map(a => <option key={a.id} value={a.id}>{a['first-name'] + ' ' + a['last-name']}</option>)
                                            }
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="photoURL">
                                        <Form.Label>Book Cover</Form.Label>
                                        <Form.Control placeholder="Enter Photo URL" name="cover" value={this.state.cover} onChange={this.handleChange} />
                                    </Form.Group>

                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                                <Button variant="primary" type="submit" onClick={this.props.editmode ? this.handleSubmit(value.editBook) : this.handleSubmit(value.addBook)}>{this.props.editmode ? "Save Changes" : "Add"}</Button>
                            </Modal.Footer>
                        </Modal>
                    )
                }
            </context.Consumer>


        );
    }
}