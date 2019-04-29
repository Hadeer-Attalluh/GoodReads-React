import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { context } from '../../../App';

export default class BookDisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // autherName: "",
            // // categoryName:"",
            // title: "",
            // cover: ""
        }
    }
    render() {
        return (
            <Card>
                <Card.Img variant="top" src= /*{this.props.cover === "" ?*/ "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" /*: require('../../../Assets/Books/' + this.props.cover)}*/ alt="Book Cover" />
                <Card.Body>
                    <Card.Title>
                        <Link className="link-mint" to={`/books/${this.props._id}`}>{this.props.title}</Link>
                    </Card.Title>
                    <Card.Text>
                        By
                        <Link className="link-mint" to={`/authors/${this.props.authorId._id}`}>{` ${this.props.authorId.firstname} ${this.props.authorId.lastname}`}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}