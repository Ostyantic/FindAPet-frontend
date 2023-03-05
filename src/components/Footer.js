import React from "react";
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={{margin:'auto'}}>Anthony Lopez, Araceli Garcia &amp; Casey Glidewell 301 Final Project 2023 &copy;</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default Footer;