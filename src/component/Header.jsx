import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark"   sticky="top" >
      <Container >
        <Navbar.Brand as={NavLink} to='/'>Main</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto"  variant="tabs">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/About'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/Contact'>Contact</Nav.Link>
            <Nav.Link as={NavLink} to='/Service'>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
