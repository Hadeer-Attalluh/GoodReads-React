import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UserBooksFilter from './Books/Filter';
import UserBooksList from './Books/List';

import pagination from './Pagination'




const UserHome = (props) => {
	return (
		<container>
		
				
				
		
				
				
			
			<Row>
				<Col sm={1}></Col>
				<Col sm={2}>
				
					<UserBooksFilter />
			
				</Col>
				<Col sm={8}>
				<UserBooksList />
				</Col>
				<Col sm={1}></Col>

			</Row>
			<Row>
				<pagination/>
				</Row>
		</container>
	)
}

export default UserHome;
