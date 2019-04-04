import React from 'react';
import { context } from '../../../App';


export default class UserBooksFilter extends React.Component {

	handleClick = (value) => (e) => {
		value.setFilterKey(e.target.id);
	}

	render() {
		return (
			<context.Consumer>
				{
					value => (
						<div className="userbooksfilter text-white bg-grey">
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