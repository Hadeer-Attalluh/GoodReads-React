import React from 'react'

export default class UserBookCard  extends React.Component {
	render(){
		return(
			<tr  className="no-gutters text-center">
			<td><img className="table_bookImg" src={this.props.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : this.props.cover} alt="Book Cover"/>  </td>
			<td>{this.props.title }</td>
			<td>{this.props.author }   </td>
			<td> {this.props.AvgRate }  </td>
			<td>{this.props.Rating }   </td>
			<td>{this.props.shelve }   </td>
		</tr>
		)
	}
}
