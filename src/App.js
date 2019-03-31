import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import UserNavBar from './FeaturedComponents/User/Nav';
import Col from 'react-bootstrap/Col';
import UserHome from './FeaturedComponents/User/Home'

import AuthorsData from '../src/Data/Authors';
import AuthorsAdminListing from '../src/FeaturedComponents/Admin/Author/Listing';
import UsersData from './Data/Users.json';

import { SignUpForm } from './FeaturedComponents/UserForms/signup';

import BooksData from '../src/Data/Books';
import UserBooksData from '../src/Data/UserBooks';
import BooksDisplayListing from '../src/FeaturedComponents/Featured/Book/Listing';
import BookDetails from '../src/FeaturedComponents/Featured/Book/Details';

import AdminPanel from './FeaturedComponents/Admin/Panel';
import BooksAdminListing from './FeaturedComponents/Admin/Books/Listing';

export const context = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      Authors: AuthorsData.slice(),
      Users: UsersData.slice(),
      Books: BooksData.slice(),
      UserBooks: UserBooksData,
      FilteredUserBooks: UserBooksData,
      UserBooksTableTitle: "All",

    }
    this.addAuthor = this.addAuthor.bind(this);
    this.editAuthor = this.editAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);

    this.addBook = this.addBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.setFilteredUserBooks = this.setFilteredUserBooks.bind(this);
    this.addUser = this.addUser.bind(this);
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

  addBook(book) {
    // const newAuthors = this.state.Authors.slice();
    // this.setState({ Authors: [...newAuthors.concat(author)] });
  }
  editBook(book) {
    // console.log(author);
    // const newAuthors = this.state.Authors.slice();
    // let authorEdited = newAuthors.findIndex(a => a.id === author.id);
    // newAuthors[authorEdited] = author;
    // this.setState({ Authors: [...newAuthors] });
  }
  deleteBook(bookID) {
    const newbooks = this.state.Books.slice();
    newbooks.find(b => b.id === bookID).deleted = true
    this.setState({ Books: [...newbooks] });
  }

  setFilteredUserBooks(userbooks, UserBooksTableTitle) {
    const FilteredUserBooks = this.state.FilteredUserBooks.slice();
    this.setState({ FilteredUserBooks: [...userbooks], UserBooksTableTitle: UserBooksTableTitle })
  }


  addUser(user) {
    const newUsers = this.state.Users.slice();
    this.setState({ Users: [...newUsers.concat(user)] });
  }

  render() {
    const contextValue = {
      authors: this.state.Authors,
      addAuthor: this.addAuthor,
      editAuthor: this.editAuthor,
      deleteAuthor: this.deleteAuthor,

      books: this.state.Books,
      addBook: this.addBook,
      editBook: this.editBook,
      deleteBook: this.deleteBook,

      addUser: this.addUser,

      UserBooksTableTitle: this.state.UserBooksTableTitle,
      setFilteredUserBooks: this.setFilteredUserBooks,
      UserBooks: this.state.UserBooks,
      FilteredUserBooks: this.state.FilteredUserBooks
    }
    return (
      <>
        <context.Provider value={contextValue}>
          {/* <UserHome/> */}
          {/* <SignUpForm/> */}
          <AdminPanel />
          {/* <BooksAdminListing /> */}

          {/* <AuthorsAdminListing /> */}
          {/* <BooksDisplayListing /> */}
          {/* <BookDetails {...contextValue.books[1]} /> */}
          {/* <Col>
            <UserNavBar />
          </Col>
          <Router>
            <> */}

              {/* <Route exact path="/" component={UserHome} />
              <Route exact path="/books" component={BooksDisplayListing} />

            </>
          </Router>
          <SignUpForm /> */}
          {/* <AuthorsAdminListing /> */}
          {/* <BooksDisplayListing /> */}
          {/* <BookDetails {...contextValue.books[1]} /> */}
        </context.Provider>
      </>
    );
  }
}

export default App;
