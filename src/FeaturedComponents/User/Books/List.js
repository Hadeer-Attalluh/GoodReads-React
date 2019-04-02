import React from 'react'
import Table from 'react-bootstrap/Table'

import { context } from '../../../App';
import UserBookCard from './Card'


export default class UserBooksList extends React.Component {

  render() {
    return (
      <context.Consumer>
        {
          value => (
            <form>
              <fieldset>
                <legend className="legend"><h3>{value.UserBooksTableTitle}</h3> </legend>
                <Table bordered hover responsive  >
                  <thead>
                    <tr className="no-gutters text-center" >
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
