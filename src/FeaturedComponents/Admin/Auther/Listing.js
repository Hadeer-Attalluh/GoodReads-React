import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { context } from '../../../App';

import AuthorAdminCard from './Card';
import AddAuthorForm from './Add';
export default class AuthorsAdminListing extends React.Component {
    constructor() {
        super();
        this.state = {
            showAddModal: false,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose = ()=>{
        this.setState({showAddModal:false});
    }
    handleShow = ()=>
    {
        this.setState({showAddModal:true})
    }
    render() {
        return (
            <context.Consumer>
                {
                    value => (
                        <Container fluid={true} className="p-2">
                            <Row className="no-gutters m-1 d-flex flex-row-reverse">
                                <Button className="align-self-end" onClick={this.handleShow}><i className="fas fa-user-plus"></i></Button>
                            </Row>
                            <AddAuthorForm show={this.state.showAddModal} onHide={this.handleClose} />
                            <Row className="no-gutters m-1">
                                <Col sm={12}>
                                    <ListGroup>
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
                                        {value.authors.filter(a => a.deleted === false).map(a => <AuthorAdminCard {...a} />)}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </context.Consumer>
        );
    }
}