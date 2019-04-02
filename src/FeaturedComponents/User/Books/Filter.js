import React from 'react';
import { context } from '../../../App';


export default class UserBooksFilter extends React.Component {
	constructor() {
    super();
    this.handleclickCurrentlyReading = this.handleclickCurrentlyReading.bind(this);
    this.handleclickAll = this.handleclickAll.bind(this);
		this.handleclickRead = this.handleclickRead.bind(this);
		 	this.handleclickWantedToRead = this.handleclickWantedToRead.bind(this);
	}
	
	handleclickAll=(e)=>(value)=>
	{
		console.log(e);
		console.log(e.UserBooks);
		const userbooks=e.UserBooks.slice();
		const newuserbooks=userbooks.filter(a=>a.shelve==="currently reading"||a.shelve==="read"||a.shelve==="wanted to read");
		e.setFilteredUserBooks(newuserbooks,"All");
				console.log(newuserbooks);
	}

	handleclickRead=(e)=>(value)=>
	{
		console.log(e);
		console.log(e.UserBooks);
		const userbooks=e.UserBooks.slice();
		const newuserbooks=userbooks.filter(a=>a.shelve==="read")
		e.setFilteredUserBooks(newuserbooks,"Read");
	
	}

	handleclickCurrentlyReading=(e)=>(value)=>
	{
		console.log(e);
		console.log(e.UserBooks);
		const userbooks=e.UserBooks.slice();
		const newuserbooks=userbooks.filter(a=>a.shelve==="currently reading")
		e.setFilteredUserBooks(newuserbooks,"Currently Reading");
		}

	handleclickWantedToRead=(e)=>(value)=>
	{
		console.log(e);
		console.log(e.UserBooks);
		const userbooks=e.UserBooks.slice();
		const newuserbooks=userbooks.filter(a=>a.shelve==="wanted to read")
		e.setFilteredUserBooks(newuserbooks,"Wanted To Read");
		}

  render() {
    return (

      <context.Consumer>
        {
          value => (

           
						<div className="userbooksfilter">
               <h6 className="filter_link" onClick={this.handleclickAll(value) }>All</h6><br/>
							 <h6 className="filter_link"  onClick={this.handleclickRead(value)}>Read</h6><br/>
							 <h6 className="filter_link"  onClick={this.handleclickCurrentlyReading(value)}>Currently Reading</h6><br/>
							 <h6 className="filter_link"  onClick={this.handleclickWantedToRead(value)}>Wanted To Read</h6><br/>
							 </div>
							
					)
					}
					</context.Consumer>
					)
					}
					}