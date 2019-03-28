import React, { Component } from 'react';
import AuthorsData from '../src/Data/Authers';
import AuthorsAdminListing from '../src/FeaturedComponents/Admin/Auther/Listing';
import UsersData from './Data/Users.json';
import { SignUpForm } from './FeaturedComponents/UserForms/signup';


export const context = React.createContext();
class App extends Component {
  constructor() {
    super();
    this.state = {
      Authors: AuthorsData.slice(),
      Users: UsersData.slice(),
    }
    this.addAuthor = this.addAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  
  addAuthor(author)
  {
    const newAuthors = this.state.Authors.slice();
    this.setState({Authors: [...newAuthors.concat(author)]});
  }
  
  deleteAuthor(authorID)
  {
    const newAuthors = this.state.Authors.slice();
    newAuthors.find(a=> a.id===authorID).deleted = true
    this.setState({Authors: [...newAuthors]});
  }
  
  addUser(user) {
    const newUsers = this.state.Users.slice();
    this.setState({Users: [...newUsers.concat(user)]});
  }

  render() {
    const contextValue = {
      authors: this.state.Authors,
      addAuthor:this.addAuthor,
      deleteAuthor:this.deleteAuthor,
      addUser: this.addUser,
    }
    return (
      <context.Provider value={contextValue}>
        <SignUpForm/>
        <AuthorsAdminListing  />
      </context.Provider>
    );
  }
}

export default App;
