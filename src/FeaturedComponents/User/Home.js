import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UserBooksFilter from './Books/Filter';
import UserBooksList from './Books/List';

import DisplayPagination from './Pagination'




const UserHome = (props) => {
	return (
		<Container>
		
			<Row>
				{/* <Col sm={1}></Col> */}
				<Col sm={2}>
				
					<UserBooksFilter />
			
				</Col>
				<Col sm={10}>
				<UserBooksList />
				</Col>
				{/* <Col sm={1}></Col> */}

			</Row>
			<Row>
				<Col sm={6}>
				</Col>
				<Col sm={4}>
					<DisplayPagination/>
				</Col >
				<Col sm={6}>
				</Col>
				</Row>
		</Container>
	)
}

export default UserHome;
