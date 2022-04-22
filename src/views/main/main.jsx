import React from "react";
import "./main.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



  class MainView extends React.Component  {
        
    constructor() {
		super();
		this.state = {
		  fields: {},
		  errors: {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.loginform = this.loginform.bind(this);
	}

    handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
		  fields
		});
  
	}

    loginform(e) {
        e.preventDefault();
        let obj = this.state.fields;
        obj.token = (Math.random() * (100 - 1));
        localStorage.setItem('user', JSON.stringify(obj));
        console.log(obj);
        if (this.validateForm()) {
            let fields = {};
            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
    }
    

    validateForm() {

		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;
  
  
		if (!fields["emailid"]) {
		  formIsValid = false;
		  errors["emailid"] = "*Please enter your email-ID.";
		}
  
		if (typeof fields["emailid"] !== "undefined") {
		  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		  if (!pattern.test(fields["emailid"])) {
			formIsValid = false;
			errors["emailid"] = "*Please enter valid email-ID.";
		  }
		}
  
		if (!fields["password"]) {
		  formIsValid = false;
		  errors["password"] = "*Please enter valid password.";
		}
  
		if (typeof fields["password"] !== "undefined") {
		  if (!fields["password"].match(/^[0-9]{10}$/)) {
			formIsValid = false;
			errors["password"] = "*Please enter valid password.";
		  }
		}
  
		this.setState({
		  errors: errors
		});
		return formIsValid;
	  }
    render() {
		return(
            <div>
                <div className="stretch">
                    <Navbar className="main-nav" collapseOnSelect expand="lg" >
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650614723/logo_uxsjoc.png" alt="logo"/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto"></Nav>
                                <Nav>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <Nav.Link href="#product">Product</Nav.Link>
                                    <Button variant="primary">Search</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container>
                        <div className="login-container">
                            <Row>
                                <Col>
                                    <h2>Login</h2>
                                    <p>Please enter your details</p>
                                    <div className="errorMsg">{this.state.errors.emailid}</div>
                                </Col>
                            </Row>
                            <Form className="loginform">
                                <Form.Group className="formdiv">
                                    <Form.Label className="formlabel">Email</Form.Label>
                                    <Form.Control className="forminput" type="email" placeholder="john.smith@gmail.com" />
                                </Form.Group>
                                <Form.Group className="formdiv">
                                    <Form.Label className="formlabel">Password</Form.Label>
                                    <Form.Control type="password" className="forminput"/>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember Me" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <a href="/#">Forget Password</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={()=> window.location.href='/start'} className="btn-grad"> LOG IN</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Log in with:</p>
                                    </Col>
                                </Row>
                                <Row className="social-icons">
                                    <Col>
                                        <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650618040/Icon_awesome-google_i7c664.svg" alt="google"/>
                                        <span>Google</span>
                                    </Col>
                                    <Col>
                                        <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650618040/Icon_awesome-linkedin-in_jvqs9k.svg" alt="google"/>
                                        <span>LinkedIn</span>
                                    </Col>
                                    <Col>
                                        <img src="https://res.cloudinary.com/djpepozcx/image/upload/v1650618040/Icon_awesome-apple_kcp13i.svg" alt="google"/>
                                        <span>Apple</span>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <p>REIMAGINING DRUG DISCOVERY & DEVELOPMENT</p>
                    </Container>
                </div>
            </div>
		);
    }
}

export default MainView;