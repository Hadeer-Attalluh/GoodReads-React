import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { context } from '../../../App';

export default class AuthorDisplayCard extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value =>
                        (
                            <Card className="text-center text-capitalize border-0">
                                <Card.Img variant="top" className="img-fluid rounded-circle" src={this.props.photo === "" ? "https://www.lycatv.tv/img/web/avatar_1.png" : require('../../../Assets/Authors/' + this.props.photo)} alt="Auhtor Picture" />
                                <Card.Body>
                                    <Card.Title>
                                        <Link className="link-mint" to={`/authors/${this.props.id}`}>{`${this.props['first-name']} ${this.props['last-name']}`}</Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )
                }
            </context.Consumer>

        );
    }
}