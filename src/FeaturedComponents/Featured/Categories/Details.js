import React, { Component } from 'react';
import { CardDeck, Container, Col, Row } from 'react-bootstrap';
import { getBooksByCategoryId } from '../../../helper';
import BookCard from '../Book/Card';
import { context } from '../../../App';

export default class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FilteredBooks: [],
        }
    }
    componentWillMount() {
        // debugger;
        const id = this.props.match.params.categoryId;
        this.setState({
            FilteredBooks: [...getBooksByCategoryId(id)]
        });
    }

    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={true}>
                            <Row className="no-gutters p-3 mt-7">
                                <Col xs={12}>
                                    <CardDeck>
                                        {
                                            this.state.FilteredBooks.map(b => <Col sm={4} md={3} key={b.id} className="m-2"><BookCard style={{ marginTop: '5rem' }}{...b} /></Col>)
                                        }
                                    </CardDeck>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </context.Consumer>
        )
    }
}
