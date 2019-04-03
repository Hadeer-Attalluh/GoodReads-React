import React, { Component } from 'react';
import { getBooksByCategoryId } from '../../../helper';
import { context } from '../../../App';

export default class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        // debugger;
        const id = this.props.match.params.categoryId;
        this.setState({
            ...getBooksByCategoryId(id)
        }, () => { console.log(this.state) });
    }

    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <>
                            {<p style={{marginTop:'5rem'}}>{this.state[0].title}</p>}
                        </>
                    )
                }
            </context.Consumer>
        )
    }
}
