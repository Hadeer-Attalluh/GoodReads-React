import React from 'react';
import { Container, Row, Col, Card, Form, Media, ListGroup } from 'react-bootstrap';
// import { getBookById } from '../../../helper';
import { Link } from 'react-router-dom';
// import { context } from '../../../App';
import axios from 'axios';
import Rating from 'react-rating';
import { server, GetBookById } from '../../../API/Book';
import LoaderGIF from '../../../SharedComponents/Loader/Loader';
export default class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelves: [],
            selectedShelve: ""
        }
    }
    componentDidMount() {
        //get book data 
        const id = this.props.match.params.bookId;
        GetBookById(id)
            .then(data => {
                //fill state
                debugger
                this.setState({ bookData: data.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            this.state.bookData ?
                <Container fluid={false} className="mt-7 mb-5">
                    <Row>
                        <Col xs={4}>
                            <Row className="no-gutters m-2">
                                <Col xs={12}>
                                    <Card>
                                        <Card.Img variant="top" src=/*{this.state.cover === "" ?*/ "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" /*: require('../../../Assets/Books/' + this.state.cover)}*/ alt="Book Cover" />
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="text-center no-gutters m-2">
                                <Col xs={12}>
                                    <Rating emptySymbol="far fa-star" fullSymbol="fas fa-star text-warning" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Form.Group as={Col} className="d-block">
                                        <Form.Control as="select">
                                            <option>Read</option>
                                            <option>Currently Reading</option>
                                            <option>Want To Read</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={8}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Card.Title>{this.state.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">By
                                            <Link className="link-mint" to={`/authors/${this.state.bookData.authorId._id}`}>{` ${this.state.bookData.authorId.firstname} ${this.state.bookData.authorId.lastname}`}</Link>
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Link className="link-mint" to={`/categories/${this.state.bookData.categoryId._id}`}>{` ${this.state.bookData.categoryId.name}`}</Link>
                                    </Card.Subtitle>
                                    <Card.Text className="text-muted">Published 2010</Card.Text>
                                    <Rating readonly initialRating={4} emptySymbol="far fa-star" fullSymbol="fas fa-star text-warning" />
                                    <Card.Text> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Card >
                                <Card.Header className="bg-dark text-center text-light">Reviews</Card.Header>
                                <ListGroup variant="li">
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src="http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png"
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Review 1</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.</p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Media>
                                            <img
                                                width={64}
                                                height={64}
                                                className="align-self-start mr-3"
                                                src="http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png"
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5>Review 2</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus. </p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container >
                : <LoaderGIF />
        );
    }
}