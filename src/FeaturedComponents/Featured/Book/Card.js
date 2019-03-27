import React from 'react';
import { Card } from 'react-bootstrap';
export default class BookDisplayCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : this.props.cover} alt="Book Cover" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>By {this.props.authorId}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}