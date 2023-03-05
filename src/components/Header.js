import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../style/App.css'

class Header extends React.Component {
  render() {
    return(
      <Navbar className="header" expand='lg' variant="light">
        <Container>
          <Navbar.Brand href=''>Find A Pet!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="headerNav">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/profile'>Profile</Nav.Link>
              <Nav.Link href='/aboutus'>AboutUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant='success'>Log In</Button>
        </Container>
      </Navbar>
    )
  }
}

export default Header;