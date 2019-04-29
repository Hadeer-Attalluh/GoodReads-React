import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { getAuthorById, getBooksByAuthorId } from '../../../helper';
import { getauthorDetails, getauthorbooks } from '../../../API/Authors';
import AuthorBookItem from './BookItem';

export default class AuthorDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            author: {}
        }
    }
    // componentWillMount() {
    //     const id = this.props.match.params.authorId;
    //     this.setState({
    //         ...getAuthorById(id), books: [...getBooksByAuthorId(id)]
    //     });
    // }
    componentDidMount() {
        const id = this.props.match.params.authorId;
        getauthorDetails(id)
            .then((res) => {
                debugger;
                const data = res;
                this.setState({ author: data });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });

        getauthorbooks(id)
            .then((res) => {
                const data = res;
                this.setState({ books: data });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        console.log(this.state.author)
        console.log(this.props.match.params)


        return (

            <Container fluid={false} className="mt-7 mb-5">
                <Row className="no-gutters my-3">
                    <Col sm={3} className="px-3">
                        <Card className="border-0">
                            <Card.Img
                                className="img-fluid rounded-circle"
                                variant="top"
                                src="https://www.lycatv.tv/img/web/avatar_1.png" alt="Auhtor Picture" />
                        </Card>
                    </Col>
                    <Col className="border-0">
                        <Card className="border-0">
                            <Card.Title className="text-capitalize text-mint">{`${this.state.author['firstname']} ${this.state.author['lastname']}`}</Card.Title>
                            <Card.Subtitle>{`Date of Birth: ${this.state.author.birthdate === "" ? "unknown" : this.state.author.birthdate}`}</Card.Subtitle>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xm={12}>
                        <ListGroup>
                            {
                                // this.state.author.books.length === 0
                                //     ? "autherBooks not added yet":
                                this.state.books.map(
                                    b => <ListGroup.Item key={b._id}>
                                        <AuthorBookItem {...b} />
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>

                    </Col>
                </Row>
            </Container >

        );
    }
}