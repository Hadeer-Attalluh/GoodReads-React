import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserNavBar from './FeaturedComponents/User/Nav';

//user
import { SignUpForm } from './FeaturedComponents/UserForms/signup';
import UserHome from './FeaturedComponents/User/Home'
import BooksDisplayListing from '../src/FeaturedComponents/Featured/Book/Listing';
import BookDetails from '../src/FeaturedComponents/Featured/Book/Details';
//Admin
import AdminPanel from './FeaturedComponents/Admin/Panel';
// import BooksAdminListing from './FeaturedComponents/Admin/Books/Listing';
// import AuthorsAdminListing from '../src/FeaturedComponents/Admin/Author/Listing';
// import AdminCategoriesList from '../src/FeaturedComponents/Admin/Categories/List'
import AdminCategoriesAddEditForm from  '../src/FeaturedComponents/Admin/Categories/AddEditForm'

export default class Routing extends React.Component  {
	render(){
		return(
      <>   
		    {/* //  <SignUpForm/> 
        //    <AdminPanel /> 
        //    <BooksAdminListing />
        //   <AuthorsAdminListing /> 
          <AdminCategoriesList/> */}
          {/* <AdminCategoriesAddEditForm/> */}
        {/* //   <BookDetails {...contextValue.books[1]} />
        //   <SignUpForm />  */}
          
         
         
            {/* <UserNavBar /> */}
         <Router>
            <>

              <Route exact path="/" component={UserHome} />
              <Route exact path="/books" component={BooksDisplayListing} />
              <Route exact path="/Admin" component={AdminPanel} />

            </>
          </Router>
					</>
		)
	}
}






     