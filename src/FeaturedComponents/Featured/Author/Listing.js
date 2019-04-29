import React from 'react';
import { CardDeck, Container, Col, Row, Card } from 'react-bootstrap';
import Paging from '../../User/Pagination';
import AuthorDisplayCard from './Card';
import { getauthorsList } from '../../../API/Authors';

export default class AuthorDisplayListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        getauthorsList()
            .then((res) => {
                const data = res;
                this.setState({ authors: data });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        return (
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
                        {
                            this.state.authors.filter(a => !a.deleted).map(a => <Col sm={4} md={3} className="my-3" key={a._id}><AuthorDisplayCard {...a} /></Col>)
                        }
                    </CardDeck>
                </Row>
                <Row className="text-center">
                    <Paging xs="auto" />
                </Row>
            </Container>
        );
    }
}