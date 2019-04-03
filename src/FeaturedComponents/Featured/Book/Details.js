import React from 'react';
import { Container, Row, Col, Card, Form, Media, ListGroup } from 'react-bootstrap';
import { getBookById } from '../../../helper';
import { Link } from 'react-router-dom';
import { context } from '../../../App';

import Rating from 'react-rating';

export default class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: "",
            // authorId: "",
            // categoryId: "",
            // title: "",
            // cover: "",
            // deleted: false
        }
    }
    componentWillMount() {
        const id = this.props.match.params.bookId;
        this.setState({
            ...getBookById(id)
        }, () => { console.log(this.state) });
    }
    getAuthorFullName(AuthorsData, id) {
        let index = AuthorsData.findIndex(a => a.id === id);
        return AuthorsData[index]['first-name'] + ' ' + AuthorsData[index]['last-name'];
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={false} className="d-flex flex-column m-3 p-3">
                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <Card>
                                        <Card.Img variant="top" src={this.state.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : this.state.cover} alt="Book Cover" />
                                    </Card>
                                    <Form.Group as={Col} className="d-block">
                                        <Form.Control as="select">
                                            <option>Read</option>
                                            <option>Currently Reading</option>
                                            <option>Want To Read</option>
                                        </Form.Control>
                                    </Form.Group>

                                </div>
                                <Card className="border-0">
                                    <Card.Body>
                                        <Card.Title>{this.state.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">By
                                            <Link to={`/authors/${this.state.authorId}`}>{' ' + this.getAuthorFullName(value.authors, this.state.authorId)}</Link>
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <Link to={`/categories/${this.state.categoryId}`}>{' ' + value.Categories.find(a => a.id === this.state.categoryId).name}</Link>
                                        </Card.Subtitle>
                                        <Rating readonly initialRating={4} emptySymbol="far fa-star" fullSymbol="fas fa-star text-warning" />
                                        <Card.Text> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card >
                                    <Card.Header>Reviews</Card.Header>
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
                                        <ListGroup.Item><Media>
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
                                        </Media></ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </div>
                        </Container >
                    )
                }
            </context.Consumer>

        );
    }
}