import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Container, CardDeck, Col } from 'react-bootstrap';
import CategoryCard from './Card';
import { context } from '../../../App';

export default class CategoriesListing extends Component {
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <>
                            <Container className="mt-5">
                                <CardDeck>
                                    {value.Categories.map(c => <Col sm={4} key={c.id}><CategoryCard {...c} /></Col>)}
                                </CardDeck>
                            </Container>
                        </>
                    )
                }
            </context.Consumer>
        )
    }
}

