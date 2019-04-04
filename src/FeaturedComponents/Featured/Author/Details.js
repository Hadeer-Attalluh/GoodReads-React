import React from 'react';
import { Container, Row, Col, Card, Form, Media, ListGroup } from 'react-bootstrap';
import { getAuthorById } from '../../../helper';
import { Link } from 'react-router-dom';
import { context } from '../../../App';

import Rating from 'react-rating';

export default class AuthorDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        const id = this.props.match.params.authorId;
        this.setState({
            ...getAuthorById(id)
        });
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={false} className="mt-7 mb-5">
                            <Row>
                                <Col sm={3}>
                                    <Card>
                                        <Card.img src={this.state.photo === "" ? "https://www.lycatv.tv/img/web/avatar_1.png" : require('../../../Assets/Authors/' + this.state.photo)} alt="Auhtor Picture" />
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <Card>
                                        <Card.Title>{`${this.state['first-name']} ${this.state['last-name']}`}</Card.Title>
                                        <Card.Subtitle>{`Date of Birth: ${this.state.birthdate === "" ? "unknown" : this.state.birthdate}`}</Card.Subtitle>
                                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xm={12}>
                                    <ListGroup>

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