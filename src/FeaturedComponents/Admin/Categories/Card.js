import React from 'react'

export default class AdminCategoryCard  extends React.Component {
	render(){
		return(
			<tr  className="no-gutters text-center">

			<td>{this.props.id}   </td>
			<td>{this.props.name}</td>
			<td>
				<i className="fas fa-edit" ></i>  
			  <i className="fas fa-trash-alt" ></i>			
			</td>
		
		</tr>
		)
	}
}