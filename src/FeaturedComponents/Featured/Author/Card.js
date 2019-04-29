import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class AuthorDisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (

            <Card className="text-center text-capitalize border-0">
                <Card.Img variant="top" className="img-fluid rounded-circle" src="https://www.lycatv.tv/img/web/avatar_1.png" alt="Auhtor Picture" />
                <Card.Body>
                    <Card.Title>
                        {console.log(this.props)}
                        <Link className="link-mint" to={`/authors/${this.props._id}`}>{`${this.props['firstname']} ${this.props['lastname']}`}</Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        );
    }
}