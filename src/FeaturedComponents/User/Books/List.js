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
              <fieldset className="userbooks bg-darkgrey">
                <legend className="legend text-white bg-darkgrey"><h3>{value.UserBooksTableTitle}</h3> </legend>
                <Table bordered hover responsive className="text-white" >
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
                    {value.UserBooks.length
                      ? value.UserBooks.filter(a => value.filterKey === 'all' ? (a.shelve === "currently reading" || a.shelve === "read" || a.shelve === "wanted to read") : a.shelve === value.filterKey).map(b => <UserBookCard key={b.id}  {...b} />)
                      : <tr text-center>welcome to Our Website......... you will enjoy....select books to be easy to find....</tr>}

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
