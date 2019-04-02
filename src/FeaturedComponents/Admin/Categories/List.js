import React from 'react'
import Table from 'react-bootstrap/Table'

import { context } from '../../../App';
import AdminCategoryCard from './Card'
import { Container, Row, Col } from 'react-bootstrap';
import  AdminCategoriesAddEditForm from './AddEditForm'

export default class AdminCategoriesList extends React.Component {
	constructor(){
		super();
		this.state={
         showAddModal:false,
		}
		this.handleShow=this.handleShow.bind(this);
		this.handleClose=this.handleClose.bind(this);
	}

	handleShow(e)
	{
		this.setState({showAddModal:true})
	}
	handleClose(e)
	{
		this.setState({showAddModal:false})
	}



  render() {
    return (
		  <context.Consumer>
        {
          value => (
           <Container>
						 <Row >
							 <Col sm={11}>
							 </Col>
							 <Col sm={1}>
							 <h3><i className="fas fa-plus-circle" onClick={this.handleShow}></i></h3>
							 </Col>
						 </Row>
						 <AdminCategoriesAddEditForm show={this.state.showAddModal} onHide={this.handleClose} editMode={false}/>
						<Table  bordered hover responsive  >
						<thead>
						<tr  className=" text-center" >
								<th>ID</th>
								<th>Name </th>
								<th> Actions </th>
							</tr>
						
						</thead>
						<tbody>
							{console.log(value.categories)}
						
					{value.Categories.map(c => <AdminCategoryCard key={c.id}  {...c} />)}

						</tbody>
					</Table>
					</Container>

					)
					}
		</context.Consumer>
		)
				}
			}