import React from 'react';
import { CardDeck, Container,Col } from 'react-bootstrap';
import { context } from '../../../App';

import BookDisplayCard from './Card';
export default class BookDisplayListing extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={true}>
                            <CardDeck>
                                {value.books.map(b => <Col sm={3}><BookDisplayCard {...b} /></Col>)}
                            </CardDeck>
                        </Container>
                    )
                }
            </context.Consumer>
        );
    }
}