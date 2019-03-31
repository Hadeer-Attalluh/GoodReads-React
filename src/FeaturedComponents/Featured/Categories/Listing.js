import React, { Component } from 'react';
import { context } from '../../../App';

export default class CategoriesListing extends Component {
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <>
                            {value.Categories.map(c => <a href="#" key={c.id}>{c.name}<br></br></a>)}
                        </>
                    )
                }
            </context.Consumer>
        )
    }
}