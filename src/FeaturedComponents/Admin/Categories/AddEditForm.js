import React from 'react'
import { context } from '../../../App';

import { Modal, Row, Col, Form, Button } from 'react-bootstrap';

export default class AdminCategoriesAddEditForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.editMode) {
      this.state = {
        CategoryId:this.props.id,
        CategoryName: this.props.name,
      }
    }
    else {
      this.state = {
        CategoryName: "",
      }
    }

  }

  render() {
    return (

      <context.Consumer>
        {
          value => (
            <Modal {...this.props}>
              <Modal.Header>
                <h3  >{this.props.editMode?' Edit Category' : 'Add Category'}</h3>
              </Modal.Header>
              <Modal.Body>
                <Form className="AddCategory">
                {
                //  if (this.props.editMode)
                //  {                   
                //         <Form.Group as={Row} >
                //         <Form.Label sm={2} >
                //           Category Id
                //        </Form.Label>
                //         <Col sm="9">
                //           <Form.Control type="text" placeholder="" />
                //         </Col>
                //       </Form.Group>
                //  }
                 }
                  <Form.Group as={Row} >
                    <Form.Label sm={2} >
                      Category Name
                   </Form.Label>
                    <Col sm="9">
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" type="submit">{ this.props.editMode?'Save Changes' : 'Add '}</Button>
               <Button variant="dark" onClick={this.props.onHide}>Close</Button>

              </Modal.Footer>
            </Modal>)
        }
      </context.Consumer>
    )
  }
}