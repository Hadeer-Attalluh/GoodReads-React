import React from 'react';
import { Container, Row, Col, /*ListGroup,*/ Button, Table } from 'react-bootstrap';
import { context } from '../../../App';

import BookAdminCard from './Card';
import AddBookForm from './AddEdit';
export default class BooksAdminListing extends React.Component {
    constructor() {
        super();
        this.state = {
            showAddModal: false,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose = () => {
        this.setState({ showAddModal: false });
    }
    handleShow = () => {
        this.setState({ showAddModal: true })
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={true} className="p-2">
                            {this.state.showAddModal && <AddBookForm show={this.state.showAddModal} onHide={this.handleClose} editmode={false} />}
                            <Row className="no-gutters m-1 d-flex flex-row-reverse">
                                <Button className="align-self-end border-0 bg-darkgrey" onClick={this.handleShow}><i className="fas fa-book"></i> <i className="fas fa-plus"></i></Button>
                            </Row>
                            <Row className="no-gutters m-1">
                                <Col sm={12}>
                                    {/* <ListGroup>
                                        <ListGroup.Item as="li" >
                                            <Row className="no-gutters text-center">
                                                <Col sm={1}><h4>ID</h4></Col>
                                                <Col sm={3}><h4>Cover</h4></Col>
                                                <Col sm={2}><h4>Title</h4></Col>
                                                <Col sm={2}><h4>Category ID</h4></Col>
                                                <Col sm={2}><h4>Author ID</h4></Col>
                                                <Col sm={2}><h4>Actions</h4></Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {value.books.filter(b => b.deleted === false).map(b => <BookAdminCard {...b} key={b.id} />)}
                                    </ListGroup> */}
                                    <Table bordered hover responsive className="text-center">
                                        <thead className="text-white bg-darkgrey">
                                            <tr>
                                                <th>ID</th>
                                                <th>Cover</th>
                                                <th>Title</th>
                                                <th>Category ID</th>
                                                <th>Author ID</th>
                                                <th colSpan="2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {value.books.filter(b => b.deleted === false).map(b => <BookAdminCard {...b} key={b.id} />)}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </context.Consumer>
        );
    }
}