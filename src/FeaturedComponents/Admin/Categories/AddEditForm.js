import React from 'react'
import { context } from '../../../App';

import { Container, Row, Col,Form,Button } from 'react-bootstrap';

export default class AdminCategoriesAddEditForm extends React.Component {

  render() {
    return (
      
      <context.Consumer>
        {
          value => (
           <Container>	
	<Form className="AddCategory">
  <h3  >Add Category</h3>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="1">
      Category Name
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
   <Button variant="primary" type="submit"> Add Category
  </Button>
</Form>
					</Container>	)
				}
				</context.Consumer>
		)
			}
		}