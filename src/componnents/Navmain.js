import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navmain = () => {
  const link  = "linkedin.com/in/farai-matyukira-30a3491a3"
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Xtracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Lauches</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Crew</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rocket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mission</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <a href={link}>Contact Me</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default Navmain