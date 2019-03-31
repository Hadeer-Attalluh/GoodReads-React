import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const UserNavBar = (props) => {
return(

<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="Navbar" >
 
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
	<Nav className="mr-auto">
	<Nav.Link href="/">Home</Nav.Link>
		<Nav.Link href="#features">Categories</Nav.Link>
		<Nav.Link href="/books">Books</Nav.Link>     
		<Nav.Link href="#pricing">Authors</Nav.Link>	 
	</Nav>
	<Form inline>
		<FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
		
	</Form>
	<h3><i class="fas fa-user"></i></h3>
	<h3>user 1</h3>
<h3>	<i class="fas fa-arrow-alt-circle-right"></i></h3>
 </Navbar.Collapse>
</Navbar>

						)
}

export default UserNavBar;








