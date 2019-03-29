import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export default class AdminPanel extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-2">
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Categories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="" >Authors</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Router>
                    <Switch>
                        <Route exact path=""/>
                    </Switch>
                </Router>
            </Container>

        );
    }
}