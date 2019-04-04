import React from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../../App';
import { Col, Form } from 'react-bootstrap';

export default class UserBookCard extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			shelve: props.shelve,
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (value) => (e) => {
		this.setState({ [e.target.name]: e.target.value })
		console.log(this.props)
		value.UserBooks.find(b => b.id === this.props.id).shelve = e.target.value;
	}
	render() {
		return (
			<context.Consumer>
				{
					value =>
						(
							<tr className="no-gutters text-center">
								<td><img className="table_bookImg" src={this.props.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : this.props.cover} alt="Book Cover" />  </td>
								<td><Link to={`/books/${this.props.id}`}>{this.props.title}</Link></td>
								{/* <td>{this.props.author}   </td> */}
								<td>	<Link to={`/authors/${this.props.authorId}`}>{' ' + value.authors.find(a => a.id === this.props.authorId)['first-name']}</Link></td>
								<td> {this.props.AvgRate}  </td>
								<td>{this.props.Rating}   </td>
								<td>
									<Form.Group as={Col}>
										<Form.Control as="select" name="shelve" value={this.state.shelve} onChange={this.handleChange(value)}>
											<option value="read">Read</option>
											<option value="currently reading">Currently Reading</option>
											<option value="wanted to read">Want To Read</option>
										</Form.Control>
									</Form.Group>
								</td>
							</tr>
						)
				}
			</context.Consumer>
		)
	}
}
