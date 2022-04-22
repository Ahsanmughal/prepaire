import React from "react";
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dashheader() {
    return (
        <div className="dashboard-header">
            <Container fluid>
                <Row>
                    <Col sm={2} md={2} className="no-padd">
                        <h4>PREPAiRE</h4>
                    </Col>
                    <Col sm={4} md={4} className="no-padd">
                        <input type="text" name="parameters" className="header-search form-control" placeholder="select your target parameters"/>
                    </Col>
                    <Col sm={4} md={4} className="no-padd">
                        <Nav variant="tabs" defaultActiveKey="/overview">
                            <Nav.Item>
                                <Nav.Link href="#1">Statistics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/overview">Overview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#2">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#3">Analytics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={2} md={2} className="no-padd">
                        <Dropdown className="profile-dropdown" key='start' drop='start'>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/option_xklhzl.svg" alt="user"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/logout">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="profile-dropdown">
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/profile_txkuaj.svg" alt="user"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/logout">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
