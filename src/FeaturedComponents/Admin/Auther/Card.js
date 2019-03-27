import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

import { context } from '../../../App';
export default class AuthorAdminCard extends React.Component {
    handleDelete = (deleteHandler) => () => {
        deleteHandler(this.props.id);
    }
    handleEdit = (editHandler) => () => {
    }
    render() {
        console.log(this.props);
        return (
            <context.Consumer>
                {
                    value => (
                        <ListGroup.Item as="li" key={this.props.id}>
                            <Row className="no-gutters">
                                <Col sm={1} className="d-inline"><h4 className="text-truncate">{this.props.id}</h4></Col>
                                <Col sm={3} className="d-inline"><h4 className="text-truncate">{this.props.photo}</h4></Col>
                                <Col sm={2} className="d-inline"><h4 className="text-truncate">{this.props["first-name"]}</h4></Col>
                                <Col sm={2} className="d-inline"><h4 className="text-truncate">{this.props["last-name"]}</h4></Col>
                                <Col sm={2} className="d-inline"><h4 className="text-truncate">{this.props.birthdate}</h4></Col>
                                <Col sm={1}><i className="fas fa-edit" ></i></Col>
                                <Col sm={1}><i className="fas fa-trash-alt" onClick={this.handleDelete(value.deleteAuthor)}></i></Col>
                            </Row>
                        </ListGroup.Item>
                    )
                }
            </context.Consumer>
        )
    }
}