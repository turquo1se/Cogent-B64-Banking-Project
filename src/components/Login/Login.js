import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

import React, {Component} from "react"

class Login extends Component {

    render() {
        return (     
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Cogent Bank</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Employee</Nav.Link>
                  <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Contact US
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }

}


export default Login