import React from 'react'
import Table from 'react-bootstrap/Table'

import { context } from '../../../App';
import AdminCategoryCard from './Card'
import { Container } from 'react-bootstrap';

export default class AdminCategoriesList extends React.Component {

  render() {
    return (
      
      <context.Consumer>
        {
          value => (
           <Container>
						 <h3><i class="fas fa-plus-circle"></i></h3>
						<Table striped bordered hover responsive  >
						<thead>
						<tr  className=" text-center" >
								<th>ID</th>
								<th>Name </th>
								<th> Actions </th>
							</tr>
						
						</thead>
						<tbody>
							{console.log(value.categories)}
						
					{value.Categories.map(c => <AdminCategoryCard key={c.id}  {...c} />)}

						</tbody>
					</Table>
					</Container>

					)
					}
		</context.Consumer>
		)
				}
			}