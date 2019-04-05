import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { getAuthorById, getBooksByAuthorId } from '../../../helper';
import { context } from '../../../App';
import AuthorBookItem from './BookItem';

export default class AuthorDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }
    componentWillMount() {
        const id = this.props.match.params.authorId;
        this.setState({
            ...getAuthorById(id), books: [...getBooksByAuthorId(id)]
        });
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={false} className="mt-7 mb-5">
                            <Row className="no-gutters my-3">
                                <Col sm={3} className="px-3">
                                    <Card className="border-0">
                                        <Card.Img
                                            className="img-fluid rounded-circle"
                                            variant="top"
                                            src={this.state.photo === "" ? "https://www.lycatv.tv/img/web/avatar_1.png" : require('../../../Assets/Authors/' + this.state.photo)} alt="Auhtor Picture" />
                                    </Card>
                                </Col>
                                <Col className="border-0">
                                    <Card className="border-0">
                                        <Card.Title className="text-capitalize text-mint">{`${this.state['first-name']} ${this.state['last-name']}`}</Card.Title>
                                        <Card.Subtitle>{`Date of Birth: ${this.state.birthdate === "" ? "unknown" : this.state.birthdate}`}</Card.Subtitle>
                                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xm={12}>
                                    <ListGroup>
                                        {
                                            this.state.books.map(
                                                b => <ListGroup.Item key={b.id}>
                                                    <AuthorBookItem {...b} />
                                                </ListGroup.Item>
                                            )
                                        }
                                    </ListGroup>

                                </Col>
                            </Row>
                        </Container >
                    )
                }
            </context.Consumer>
        );
    }
}