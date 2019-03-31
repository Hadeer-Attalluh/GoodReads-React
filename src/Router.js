import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import UserNavBar from './FeaturedComponents/User/Nav';
//user
import { SignUpForm } from './FeaturedComponents/UserForms/signup';
import UserHome from './FeaturedComponents/User/Home'
import BooksDisplayListing from '../src/FeaturedComponents/Featured/Book/Listing';
import BookDetails from '../src/FeaturedComponents/Featured/Book/Details';
//Admin
import AdminPanel from './FeaturedComponents/Admin/Panel';
import AdminCategoriesAddEditForm from '../src/FeaturedComponents/Admin/Categories/AddEditForm';

export default class Routing extends React.Component {
  render() {
    return (
      <>
        {/* //  <SignUpForm/> 
          <AdminCategoriesList/> */}
        {/* <AdminCategoriesAddEditForm/> */}
        {/* //   <BookDetails {...contextValue.books[1]} />  */}
        {/* <UserNavBar /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={UserHome} />
            <Route exact path="/books" component={BooksDisplayListing} />
            <Route exact path="/admin" component={AdminPanel} />
          </Switch>
        </Router>
      </>
    )
  }
}






