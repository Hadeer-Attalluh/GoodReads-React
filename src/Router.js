import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import UserNavBar from './FeaturedComponents/User/Nav';
//user
import { SignUpForm } from './FeaturedComponents/UserForms/signup';
import UserHome from './FeaturedComponents/User/Home'
import BooksDisplayListing from '../src/FeaturedComponents/Featured/Book/Listing';
import BookDetails from './FeaturedComponents/Featured/Book/Details';
//Admin
import AdminPanel from './FeaturedComponents/Admin/Panel';
import AdminCategoriesAddEditForm from '../src/FeaturedComponents/Admin/Categories/AddEditForm';
import { LoginForm } from './FeaturedComponents/UserForms/login';
import CategoriesListing from './FeaturedComponents/Featured/Categories/Listing';

export default class Routing extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={UserHome} />
            <Route exact path="/books/:bookId" component={AdminPanel} />
            <Route exact path="/books" component={BooksDisplayListing} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/categories" component={CategoriesListing} />
          </Switch>
        </Router>
      </>
    )
  }
}






