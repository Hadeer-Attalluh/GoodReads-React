import React, { Component } from 'react';
import './App.css';

import Col from 'react-bootstrap/Col';
import Routing from './Router'
//Data
import AuthorsData from '../src/Data/Authors';
import UsersData from './Data/Users.js';
import BooksData from '../src/Data/Books';
import UserBooksData from '../src/Data/UserBooks';
import CategoriesData from '../src/Data/Categories';

export const context = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      //Admin
      Authors: AuthorsData.slice(),
      Users: UsersData.slice(),
      Books: BooksData.slice(),
      Categories: CategoriesData,
      //user
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
    const newBooks = this.state.Books.slice();
    this.setState({ Books: [...newBooks.concat(book)] });
  }
  editBook(book) {
    const newBooks = this.state.Books.slice();
    let bookEdited = newBooks.findIndex(b => b.id === book.id);
    newBooks[bookEdited] = book;
    this.setState({ Books: [...newBooks] });
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
      //admin authors
      authors: this.state.Authors,
      addAuthor: this.addAuthor,
      editAuthor: this.editAuthor,
      deleteAuthor: this.deleteAuthor,
      //admin books
      books: this.state.Books,
      addBook: this.addBook,
      editBook: this.editBook,
      deleteBook: this.deleteBook,
      //admin categories
      Categories: this.state.Categories,

      addUser: this.addUser,
      //user
      UserBooksTableTitle: this.state.UserBooksTableTitle,
      setFilteredUserBooks: this.setFilteredUserBooks,
      UserBooks: this.state.UserBooks,
      FilteredUserBooks: this.state.FilteredUserBooks
    }
    return (
      <>
        <context.Provider value={contextValue}>
          <Routing />
        </context.Provider>
      </>
    );
  }
}

export default App;
