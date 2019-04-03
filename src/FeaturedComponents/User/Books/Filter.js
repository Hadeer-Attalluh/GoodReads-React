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

	handleclickAll = (value) => (e) => {
		console.log(e);
		console.log(value.UserBooks);
		const userbooks = value.UserBooks.slice();
		const newuserbooks = userbooks.filter(a => a.shelve === "currently reading" || a.shelve === "read" || a.shelve === "wanted to read");
		value.setFilteredUserBooks(newuserbooks, "All");
		console.log(newuserbooks);
	}

	handleclickRead = (value) => (e) => {
		console.log(e);
		console.log(value.UserBooks);
		const userbooks = value.UserBooks.slice();
		const newuserbooks = userbooks.filter(a => a.shelve === "read")
		value.setFilteredUserBooks(newuserbooks, "Read");

	}

	handleclickCurrentlyReading = (value) => (e) => {
		console.log(e);
		console.log(value.UserBooks);
		const userbooks = value.UserBooks.slice();
		const newuserbooks = userbooks.filter(a => a.shelve === "currently reading")
		value.setFilteredUserBooks(newuserbooks, "Currently Reading");
	}

	handleclickWantedToRead = (value) => (e) => {
		console.log(e);
		console.log(value.UserBooks);
		const userbooks = value.UserBooks.slice();
		const newuserbooks = userbooks.filter(a => a.shelve === "wanted to read")
		value.setFilteredUserBooks(newuserbooks, "Wanted To Read");
	}
	handleClick = (value) => (e) => {
		value.setFilterKey(e.target.id);
	}

	render() {
		return (

			<context.Consumer>
				{
					value => (
						<div className="userbooksfilter">
							{/* <h6 className="filter_link" onClick={this.handleclickAll(value)}>All</h6><br />
							<h6 className="filter_link" onClick={this.handleclickRead(value)}>Read</h6><br />
							<h6 className="filter_link" onClick={this.handleclickCurrentlyReading(value)}>Currently Reading</h6><br />
							<h6 className="filter_link" onClick={this.handleclickWantedToRead(value)}>Wanted To Read</h6><br /> */}
							<h6 className="filter_link" id="all" onClick={this.handleClick(value)}>All</h6><br />
							<h6 className="filter_link" id="read" onClick={this.handleClick(value)}>Read</h6><br />
							<h6 className="filter_link" id="currently reading" onClick={this.handleClick(value)}>Currently Reading</h6><br />
							<h6 className="filter_link" id="wanted to read" onClick={this.handleClick(value)}>Wanted To Read</h6><br />
						</div>

					)
				}
			</context.Consumer>
		)
	}
}