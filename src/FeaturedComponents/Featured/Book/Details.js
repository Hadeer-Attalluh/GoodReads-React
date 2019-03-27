import React from 'react';
import { Container, Row, Col, Card, Form, Media, ListGroup } from 'react-bootstrap';

export default class BookDetails extends React.Component {
    render() {
        return (
            <Container fluid={false} className="d-flex flex-column">
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <Card>
                            <Card.Img variant="top" src={this.props.cover === "" ? "http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png" : this.props.cover} alt="Book Cover" />
                        </Card>

                        <Form.Group as={Col}>
                            <Form.Control as="select">
                                <option>Read</option>
                                <option>Currently Reading</option>
                                <option>Want To Read</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <Card className="border-0">
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">By {this.props.authorId}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Category</Card.Subtitle>
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
                                        <h5>Media Heading</h5>
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
                                    <h5>Media Heading</h5>
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
        );
    }
}