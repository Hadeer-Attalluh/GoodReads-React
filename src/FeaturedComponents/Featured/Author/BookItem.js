import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function AuthorBookItem(props) {
    return (
        <Row className="border-0">
            <Col sm={2}>
                <Card>
                    <Card.Img
                        className="align-self-start mr-3 img-fluid"
                        src=/*{props.cover === "" ? */"http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" /*: require('../../../Assets/Books/' + props.cover)}*/
                        alt="Book Picture"
                    />
                </Card>
            </Col>
            <Col >
                <Card className="border-0">
                    <Link to={`/books/${props._id}`} className="link-mint">
                        <Card.Title className="text-capitalize">{props.title}</Card.Title>
                    </Link>
                    <Rating readonly initialRating={3} emptySymbol="far fa-star" fullSymbol="fas fa-star text-warning" />
                </Card>
            </Col>
            <Col sm={3}>
                <Form.Group as={Col} className="d-block">
                    <Form.Control as="select">
                        <option>Read</option>
                        <option>Currently Reading</option>
                        <option>Want To Read</option>
                    </Form.Control>
                </Form.Group>
                <Rating className="ml-4" initialRating={2} emptySymbol="far fa-star" fullSymbol="fas fa-star text-warning" />
            </Col>
        </Row>
    );
}