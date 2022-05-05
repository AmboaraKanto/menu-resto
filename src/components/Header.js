import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Menu en ligne</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Liste des restaurants</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
