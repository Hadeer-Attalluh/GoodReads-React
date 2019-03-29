import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import UserNavBar from './FeaturedComponents/User/Nav';
import Col from 'react-bootstrap/Col';
import UserHome from './FeaturedComponents/User/Home'

import AuthorsData from '../src/Data/Authers';
import AuthorsAdminListing from '../src/FeaturedComponents/Admin/Auther/Listing';

import BooksData from '../src/Data/Books';
import UserBooksData from '../src/Data/UserBooks';
import BooksDisplayListing from '../src/FeaturedComponents/Featured/Book/Listing';
import BookDetails from '../src/FeaturedComponents/Featured/Book/Details';

export const context = React.createContext();
class App extends Component {
  constructor() {
    super();
    this.state = {
      Authors: AuthorsData.slice(),
      Books: BooksData.slice(),
      UserBooks: UserBooksData,
      FilteredUserBooks: UserBooksData,
      UserBooksTableTitle:"All",

    }
    this.addAuthor = this.addAuthor.bind(this);
    this.editAuthor = this.editAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.setFilteredUserBooks = this.setFilteredUserBooks.bind(this);
  }


  addAuthor(author) {
    const newAuthors = this.state.Authors.slice();
    this.setState({ Authors: [...newAuthors.concat(author)] });
  }
  editAuthor(author) {
    console.log(author);
    const newAuthors = this.state.Authors.slice();
    let authorEdited = newAuthors.findIndex(a => a.id === author.id);
    newAuthors[authorEdited] = author;

    this.setState({ Authors: [...newAuthors] });
  }
  deleteAuthor(authorID) {
    const newAuthors = this.state.Authors.slice();
    newAuthors.find(a => a.id === authorID).deleted = true
    this.setState({ Authors: [...newAuthors] });
  }
  setFilteredUserBooks(userbooks,UserBooksTableTitle) {
    const FilteredUserBooks = this.state.FilteredUserBooks.slice();
    this.setState({ FilteredUserBooks: [...userbooks],UserBooksTableTitle:UserBooksTableTitle })
  }


  render() {
    const contextValue = {
      authors: this.state.Authors,
      addAuthor: this.addAuthor,
      editAuthor: this.editAuthor,
      deleteAuthor: this.deleteAuthor,

      books: this.state.Books,
      UserBooksTableTitle:this.state.UserBooksTableTitle,

      setFilteredUserBooks: this.setFilteredUserBooks,
      UserBooks: this.state.UserBooks,
      FilteredUserBooks: this.state.FilteredUserBooks
    }
    return (
      <>
        <context.Provider value={contextValue}>
          {/* <UserHome/> */}
          {/* <AuthorsAdminListing /> */}
          {/* <BooksDisplayListing /> */}
          {/* <BookDetails {...contextValue.books[1]} /> */}
          <Col>
				<UserNavBar/>
				</Col>
          <Router>
            <>

              <Route exact path="/" component={UserHome} />
              <Route exact path="/books" component={BooksDisplayListing} />

            </>
          </Router>
        </context.Provider>


      </>
    );
  }
}

export default App;
