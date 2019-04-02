/* eslint-disable no-tabs */
import React from 'react';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import {  Link } from "react-router-dom";

const UserNavBar = (props) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="Navbar" >
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/categories">Categories</Nav.Link>
					<Nav.Link href="/books">Books</Nav.Link>
					<Nav.Link href="#authors">Authors</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
				</Form>
				<h3><i className="fas fa-user"></i></h3>
				<h3>user 1</h3>
				<h3>	<i className="fas fa-arrow-alt-circle-right"></i></h3>
				<Link className="login-btn" to="/login">
					Login
                </Link>
			</Navbar.Collapse>
		</Navbar>
	)
}
export default UserNavBar;
