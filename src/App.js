import React, { Component } from 'react';
import './App.css';

import AuthorsData from '../src/Data/Authers';
import AuthorsAdminListing from '../src/FeaturedComponents/Admin/Auther/Listing';


export const context = React.createContext();
class App extends Component {
  constructor() {
    super();
    this.state = {
      Authors: AuthorsData.slice(),
    }
    this.addAuthor = this.addAuthor.bind(this);
    this.editAuthor = this.editAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }


  addAuthor(author) {
    const newAuthors = this.state.Authors.slice();
    this.setState({ Authors: [...newAuthors.concat(author)] });
  }
  editAuthor(author){
    const newAuthors = this.state.Authors.slice();
    // newAuthors.find(a => a.id === author.id) = author ;
    
    this.setState({ Authors: [...newAuthors] });
  }
  deleteAuthor(authorID) {
    const newAuthors = this.state.Authors.slice();
    newAuthors.find(a => a.id === authorID).deleted = true
    this.setState({ Authors: [...newAuthors] });
  }


  render() {
    const contextValue = {
      authors: this.state.Authors,
      addAuthor: this.addAuthor,
      deleteAuthor: this.deleteAuthor,
    }
    return (
      <context.Provider value={contextValue}>
        <AuthorsAdminListing />
      </context.Provider>
    );
  }
}

export default App;
