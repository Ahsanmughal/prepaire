import React from "react";
import './view.css'
import Dashheader from "./header/header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import Table from 'react-bootstrap/Table'

export default function Dashmain() {
    const molecule_options = [
        { value: 'Cetuximab', label: 'Cetuximab' },
        { value: 'Leuprolide', label: 'Leuprolide' },
        { value: 'Etanercept', label: 'Etanercept' },
        { value: 'Ropinirole', label: 'Ropinirole' },
        { value: 'Ritonavir', label: 'Ritonavir' },
        { value: 'Tamoxifen', label: 'Tamoxifen' },
    ];

    const toggle_options = [
        { value: 'Water Solubility', label: 'Water Solubility' },
        { value: 'Melting Point', label: 'Melting Point' },
        { value: 'LogP', label: 'LogP' },
        { value: 'LogS', label: 'LogS' },
    ];
    return (
        <div className="dashboard-main">
            <Dashheader/>
            <div className="dashboard-page">
                <div className="flex-child">
                    <div className="sideNav align-vertical">
                        <ul>
                            <li>
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577774/dashboard_uobogv.png" alt="dashboard"/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/option_xklhzl.svg" alt="option"/>
                                </a>
                            </li>
                            <li className="active">
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/worldmap_jqr7ux.png" alt="world"/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/payment_eex6pw.png" alt="payment"/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650577773/settings_ra4if2.png" alt="setting"/>
                                </a>
                            </li>
                        </ul>
                        <ul className="bottom-menu">
                            <li>
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650579788/Avatar_nf5cku.png" alt="profile"/>
                                </a>
                            </li>
                            <li className="bell-icon">
                                <a href="/#">
                                    <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650579788/bell_srns67.svg" alt="bell"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <Container fluid>
                        <Row className="mainheading">
                            <Col className="text-center">
                                <h4>Drug Combinations</h4>
                            </Col>
                        </Row>
                        <Row className="molecule-block">
                            <Col>
                                <Row>
                                    <Col>
                                        <h6 className="molecule-label">Target Disease</h6>
                                        <p className="molecule-value">COVID-19</p>
                                    </Col>
                                    <Col>
                                        <h6 className="molecule-label">Drugs</h6>
                                        <p className="molecule-value">Favipiravir</p>
                                    </Col>
                                </Row>

                                <Row className="molecule-dropdown">
                                    <Col>
                                        <Select options={molecule_options} placeholder="Add a molecule"/>
                                    </Col>
                                </Row>
                                <Row className="molecule-list">
                                    <Col sm={6} md={6} className="left">
                                        <div className="molecule-item">Cetuximab</div>
                                    </Col>
                                    <Col sm={6} md={6} className="right">
                                        <div className="molecule-item">Leuprolide</div>
                                    </Col>
                                    <Col sm={6} md={6} className="left">
                                        <div className="molecule-item">Etanercept</div>
                                    </Col>
                                    <Col sm={6} md={6} className="right">
                                        <div className="molecule-item">Ropinirole</div>
                                    </Col>
                                    <Col sm={6} md={6} className="left">
                                        <div className="molecule-item">Ritonavir</div>
                                    </Col>
                                    <Col sm={6} md={6} className="right">
                                        <div className="molecule-item">Tamoxifen</div>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col>
                                        <div className="eyebtn">
                                            <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650604809/eye_ldudyx.svg" alt="see"/>
                                        </div>
                                        <a className="seebtn" href="#/seeall">See all</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="position-relative">
                                <div className="drug-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" height="100%" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradient-drug">
                                                <stop offset="0" id="a" />
                                                <stop offset="0.5" id="b"/>
                                                <stop offset="1" id="c"/>
                                            </linearGradient>
                                        </defs>
                                        <ellipse ry="80" rx="80" cy="110" cx="110" id="ellipse-drug"/>
                                    </svg>
                                </div>
                                <p className="drug-circle-text"> <span className="textt"> Drug <br/> Interaction </span> <br/> <span className="number">51%</span> </p>
                            </Col>
                            <Col>
                                <Row className="toggle-select-dropdown">
                                    <Col>
                                        <Select options={toggle_options} isRtl='false' placeholder="Add a toggle"/>
                                    </Col>
                                </Row>
                                <Row className="toggle-select-dropdown-list">
                                    <Col sm={6} md={6} className="left">
                                        <div className="toggle-select-dropdown-list-item">
                                            <div className="toggle-block-indigo">
                                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650612074/Icon_c0aach.svg" alt="usa"/>
                                            </div>
                                            <span>Water Solubility</span>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6} className="right">
                                        <div className="toggle-select-dropdown-list-item">
                                            <div className="toggle-block-magento">
                                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650612074/Icon_c0aach.svg" alt="usa"/>
                                            </div>
                                            <span>Melting Point</span>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6} className="left">
                                        <div className="toggle-select-dropdown-list-item">
                                            <div className="toggle-block-purple">
                                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650612074/Icon_c0aach.svg" alt="usa"/>
                                            </div>
                                            <span>LogP</span>
                                        </div>
                                    </Col>
                                    <Col sm={6} md={6} className="right">
                                        <div className="toggle-select-dropdown-list-item">
                                           <div className="toggle-block-indigo">
                                               <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650612074/Icon_c0aach.svg" alt="usa"/>
                                           </div>
                                            <span>LogS</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col>
                                        <div className="eyebtn">
                                            <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650604809/eye_ldudyx.svg" alt="see"/>
                                        </div>
                                        <a className="seebtn" href="#/seeall">See all</a>
                                    </Col>
                                </Row>
                                {/* <Row className="interaction">
                                    <Col>
                                        <p>Previous drug interaction %</p>    
                                        <h1>64.3 <span>%</span></h1>
                                        <p>Compared to last experiment</p>
                                        <h5>efficacy Rate </h5>
                                    </Col>
                                </Row> */}
                            </Col>
                        </Row>
                        <Row className="bottom-row">
                            <Col sm={12} md={3}>
                                <div className="drug-prop">
                                    <h6>Drug Properties</h6>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td><div className="greendot"></div>Moleculer Mass</td>
                                                <td className="middle">324</td>
                                                <td className="right">50%</td>
                                            </tr>
                                            <tr>
                                                <td><div className="purpledot"></div>LogP</td>
                                                <td className="middle">300</td>
                                                <td className="right">20%</td>
                                            </tr>
                                            <tr>
                                                <td><div className="bluedot"></div>LogS</td>
                                                <td className="middle">184</td>
                                                <td className="right">70%</td>
                                            </tr>
                                            <tr>
                                                <td><div className="blackdot"></div>AMES tox</td>
                                                <td className="middle">156</td>
                                                <td className="right">10</td>
                                            </tr>
                                            <tr>
                                                <td><div className="creamdot"></div>Rule of 5</td>
                                                <td className="middle">123</td>
                                                <td className="right">45%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}
