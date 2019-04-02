import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserNavBar from './Nav';
//user
import Home from '../SharedComponents/Home';
import UserHome from '../FeaturedComponents/User/Home';
import BooksDisplayListing from '../FeaturedComponents/Featured/Book/Listing';
//Admin
import AdminPanel from '../FeaturedComponents/Admin/Panel';
import { LoginForm } from '../FeaturedComponents/UserForms/login';
import { SignUpForm } from '../FeaturedComponents/UserForms/signup';
import CategoriesListing from '../FeaturedComponents/Featured/Categories/Listing';

export default class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/" component={UserHome} /> */}
          <Route exact path="/books" component={BooksDisplayListing} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/categories" component={CategoriesListing} />
        </Switch>
      </Router>
    )
  }
}






