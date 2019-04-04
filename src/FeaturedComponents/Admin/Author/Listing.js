import React from 'react';
import { Container, Row, Col,/* ListGroup,*/ Button, Table } from 'react-bootstrap';
import { context } from '../../../App';

import AuthorAdminCard from './Card';
import AddAuthorForm from './AddEdit';
export default class AuthorsAdminListing extends React.Component {
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
                            {this.state.showAddModal && <AddAuthorForm show={this.state.showAddModal} onHide={this.handleClose} editmode={false} />}
                            <Row className="no-gutters m-1 d-flex flex-row-reverse">
                                <Button className="align-self-end border-0 bg-darkgrey" onClick={this.handleShow}><i className="fas fa-user-plus"></i></Button>
                            </Row>
                            <Row className="no-gutters m-1">
                                <Col sm={12}>
                                    {/* <ListGroup>
                                        <ListGroup.Item as="li" >
                                            <Row className="no-gutters">
                                                <Col sm={1}><h4>ID</h4></Col>
                                                <Col sm={3}><h4>Photo URL</h4></Col>
                                                <Col sm={2}><h4>First Name</h4></Col>
                                                <Col sm={2}><h4>Last Name</h4></Col>
                                                <Col sm={2}><h4>Birth Date</h4></Col>
                                                <Col sm={2}><h4>Actions</h4></Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {value.authors.filter(a => a.deleted === false).map(a => <AuthorAdminCard {...a} key={a.id} />)}
                                    </ListGroup> */}
                                    <Table bordered hover responsive className="text-center">
                                        <thead className="text-white bg-darkgrey">
                                            <tr>
                                                <th>ID</th>
                                                <th>Photo URL</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Birth Date</th>
                                                <th colSpan="2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {value.authors.filter(a => a.deleted === false).map(a => <AuthorAdminCard {...a} key={a.id} />)}
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