import React from 'react'
import { context } from '../../../App';
import SimpleSchema from 'simpl-schema';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';

export default class AdminCategoriesAddEditForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.editmode) {

      this.state = {
        name: this.props.name,
        errors: []
      }
      console.log(this.props)
    }
    else {
      this.state = {
        name: " ",
        errors: []
      }
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.hadlechange = this.hadlechange.bind(this);
  }
  hadlechange(e) {
    this.setState({ name: e.target.value })
    console.log(e.target.value)
  }
  handleAdd = (value) => (e) => {
    e.preventDefault();

    const formValidatorCtx = new SimpleSchema({
      name: {
        type: String, required: true, min: 3, max: 50
      },
    }, { requiredByDefault: false }).newContext();
    formValidatorCtx.validate({ name: this.state.name });
    if (formValidatorCtx.validationErrors().length === 0) {
      const newBook = {
        id: uuidv1(),
        name: this.state.name,
        deleted: 'false',
      };
      const categories = value.Categories.slice();
      if (this.props.editmode) {
        newBook.id = this.props.id;
        newBook.index = categories.findIndex(a => a.id === newBook.id)
        const editedbook = categories[newBook.index];
        editedbook.name = this.state.name;
        categories[newBook.index] = editedbook;
        value.setCategories(categories);
        console.log(categories);
      }
      else {
        const newCategories = [...categories].concat(newBook)
        value.setCategories(newCategories);
        console.log(newCategories);
      }
    }
    else {
      this.setState({ errors: formValidatorCtx.validationErrors() })
    }

    this.setState({
      name: "",
    });
    this.props.onHide();
  }
  render() {
    return (
      <context.Consumer>
        {
          value => (
            <Modal {...this.props}>
              <Modal.Header>
                <h3  >{this.props.editmode ? ' Edit Category' : 'Add Category'}</h3>
              </Modal.Header>
              <Modal.Body>
                <Form className="AddCategory">
                  <Form.Group as={Row} >
                    <Form.Label sm={2} >
                      Category Name
                   </Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" value={this.state.name} onChange={this.hadlechange} />
                    </Col>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" type="submit" onClick={this.handleAdd(value)}>
                  {this.props.editmode ? 'Save Changes' : 'Add '}
                </Button>
                <Button variant="dark" onClick={this.props.onHide}>Close</Button>

              </Modal.Footer>
            </Modal>)

        }
        {
          // this.state.errors.length
          //   ? this.state.errors.map(e => <h1 key={e.name}>{e.name}{''}is not valid</h1>)
          //   : <h1>No errors</h1>


        }
      </context.Consumer>
    )
  }
}