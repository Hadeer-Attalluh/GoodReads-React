import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { context } from '../../../App';

export default class BookDisplayCard extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value =>
                        (
                            <Card>
                                <Card.Img variant="top" src={this.props.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : require('../../../Assets/Books/' + this.props.cover)} alt="Book Cover" />
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/books/${this.props.id}`}>{this.props.title}</Link>
                                    </Card.Title>
                                    <Card.Text>
                                        By
                    <Link to={`/authors/${this.props.authorId}`}>{' ' + value.authors.find(a => a.id === this.props.authorId)['first-name']}</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                }
            </context.Consumer>

        );
    }
}