import React from 'react'
import Table from 'react-bootstrap/Table'

import { context } from '../../../App';
import UserBookCard from'./Card'


export default class UserBooksList extends React.Component {

  render() {
    return (
      
      <context.Consumer>
        {
          value => (
            <form>
              <fieldset>
                <legand><h3>{value.UserBooksTableTitle}</h3> </legand>
                    <Table striped bordered hover responsive id="mytable" >
                    <thead>
                      <tr >
                        <th>cover</th>
                        <th>Name </th>
                        <th> Author </th>
                        <th>Avg Rate </th>
                        <th> Rating </th>
                        <th>shelve </th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.log(value.FilteredUserBooks)}
                  {value.FilteredUserBooks.map(b => <UserBookCard key={b.id}  {...b} />)}
                    </tbody>
                  </Table>
                  </fieldset>
                  </form>
               )
        }
      </context.Consumer>
  
    
    )
  }
}
