import React from 'react'

export default class UserBookCard extends React.Component {
	render() {
		return (
			<tr className="no-gutters text-center">
				<td>{this.props.cover}</td>
				<td>{this.props.title}</td>
				<td>{this.props.author}</td>
				<td> {this.props.AvgRate}</td>
				<td>{this.props.Rating}</td>
				<td>{this.props.shelve}</td>
			</tr>
		)
	}
}
