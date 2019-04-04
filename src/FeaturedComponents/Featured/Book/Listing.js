import React from 'react';
import { CardDeck, Container, Col, Row, Card } from 'react-bootstrap';
import { context } from '../../../App';
import Paging from '../../User/Pagination';
import BookDisplayCard from './Card';
export default class BookDisplayListing extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container className="mb-5 mt-5">
                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <Card.Img variant="Top" src={require('../../../Assets/banner22.jpg')} />
                                        <Card.Header className="text-center bg-dark text-light">Books Colloections</Card.Header>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <CardDeck>
                                    {value.books.filter(b => !b.deleted).map(b => <Col sm={4} md={3} className="my-3" key={b.id}><BookDisplayCard {...b} /></Col>)}
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