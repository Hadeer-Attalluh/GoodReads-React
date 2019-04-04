import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { context } from '../../../App';

export default class CategoryCard extends React.Component {
    render() {
        return (
            <context.Consumer>
                {
                    value =>
                        (
                            <Card className="mt-4 bg-mint text-center">
                                <Card.Body>
                                    <Card.Title>
                                        <Link className="l-white" to={`/categories/${this.props.id}`}>{this.props.name}</Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )
                }
            </context.Consumer>

        );
    }
}
