import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
class Header extends React.Component {
  render() {
    return(
      <Navbar sticky="top" expand='lg' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href=''>Find A Pet!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="headerNav">
              <Nav.Link href=''>Home</Nav.Link>
              <Nav.Link href=''>Profile</Nav.Link>
              <Nav.Link href=''>AboutUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant='success'>Log In</Button>
        </Container>
      </Navbar>
    )
  }
}

export default Header;