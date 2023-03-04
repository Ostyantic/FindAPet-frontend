import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LoginButton from './login';
import LogoutButton from './logout';
import { withAuth0 } from "@auth0/auth0-react";


class Header extends React.Component {
  render() {
    return(
      <Navbar sticky="top" expand='lg' bg="dark" variant="dark">
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
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Container>
      </Navbar>
    )
  }
}

export default withAuth0(Header);