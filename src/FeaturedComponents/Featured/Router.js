import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserNavBar from './Nav';
import { SignUpForm } from '../UserForms/signup';
//user
import UserHome from '../User/Home'
import BooksDisplayListing from './Book/Listing';
import BookDetails from './Book/Card';
//Admin
import AdminPanel from '../Admin/Panel';
import BooksAdminListing from '../Admin/Books/Listing';
import AuthorsAdminListing from '../Admin/Author/Listing';
import AdminCategoriesList from '../Admin/Categories/List'

export default class Routing extends React.Component  {
	render(){
		return(
      <>   
		    {/* 
        //    <AdminPanel /> 
        //    <BooksAdminListing />*/}
         {/* <AuthorsAdminListing /> 
          <AdminCategoriesList/>  */}
            {/* //   <BookDetails {...contextValue.books[1]} />
        //   <SignUpForm />  */}
              
            {/* <UserNavBar /> */}
         <Router>
            <>
              <Route exact path="/" component={UserHome} />
              <Route exact path="/books" component={BooksDisplayListing} />
            </>
          </Router>
					</>
		)
	}
}






     