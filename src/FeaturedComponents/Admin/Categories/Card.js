import React from 'react'
import AdminCategoriesAddEditForm from'./AddEditForm'
import {context} from '../../../App';

export default class AdminCategoryCard  extends React.Component {
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
	handleDelete(e)
	{

	}
	

	render(){
		return(
			<context.Consumer>
                {
                    value => (
			<>
			<tr  className="no-gutters text-center">

			<td>{this.props.id}   </td>
			<td>{this.props.name}</td>
			<td>
				<i className="fas fa-edit" onClick={this.handleShow} ></i>  
			  <i className="fas fa-trash-alt" onClick={this.handleDelete} ></i>			
			</td>
	</tr>
	 <AdminCategoriesAddEditForm show={this.state.showAddModal} onHide={this.handleClose} editMode={true} {...this.props}/>
		
		</>)
								}
								</context.Consumer>
								)
	}
}