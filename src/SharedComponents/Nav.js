/* eslint-disable no-tabs */
import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { server } from '../API/Book';

class UserNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.perventDefault();
		axios.get(`${server}/api/books/search`, {
			searchKey: this.state.searchKey
		}).then(res => {
			// ??
		})
	}
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" fixed="top" className="Navbar" >
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as="div" ><Link to="/" className="link-white"> Home </Link> </Nav.Link>
						<Nav.Link as="div" ><Link to="/categories" className="link-white"> Categories </Link> </Nav.Link>
						<Nav.Link as="div" ><Link to="/books" className="link-white"> Books </Link> </Nav.Link>
						<Nav.Link as="div" ><Link to="/authors" className="link-white"> Authors </Link> </Nav.Link>
					</Nav>
					<Form inline onSubmit={this.handleSubmit}>
						<FormControl type="text" name="searchKey" onchange={this.handleChange} placeholder="Search" className="mr-sm-2 search" />
					</Form>
					{/* <h3><i className="fas fa-user"></i></h3>
				<h3>user 1</h3>
				<h3><i className="fas fa-arrow-alt-circle-right"></i></h3> */}
					<Nav.Link as="div" >
						<Link className="login-btn" to="/login">Login </Link>
					</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
export default UserNavBar;
