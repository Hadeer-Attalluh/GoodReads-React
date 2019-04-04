import React from 'react';
import { CardDeck, Container, Col, Row, Card } from 'react-bootstrap';
import { context } from '../../../App';
import Paging from '../../User/Pagination';
import AuthorDisplayCard from './Card';
export default class AuthorDisplayListing extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container className="mb-5 mt-5 bg-grey">
                            <Row className="my-3 no-gutters">
                                <Col xs={12}>
                                    <Card>
                                        <Card.Header className="text-center bg-dark text-light">People Who Inspire Us</Card.Header>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <CardDeck>
                                    {value.authors.filter(a => !a.deleted).map(a => <Col sm={4} md={3} className="my-3" key={a.id}><AuthorDisplayCard {...a} /></Col>)}
                                </CardDeck>
                            </Row>
                            <Row className="text-center">
                                <Paging xs="auto" />
                            </Row>
                        </Container>
                    )
                }
            </context.Consumer>
        );
    }
}