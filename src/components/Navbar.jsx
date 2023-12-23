import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';
import '../css/NavbarStyles.css';
//assests
import ButtonSearch from './ButtonSearch';

function DualNavbar() { 
  return (
    <>
    

    <Navbar fixed="top" expand="lg" className="bg-body-tertiary firstNavbar">
      <Container>
        <Navbar.Brand href="#home">ByteWorks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex align-items-center">
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">CPU Cooler</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Memory</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SSD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">PSU</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">GPU</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Chassis</NavDropdown.Item>
              </NavDropdown>

              <span className="mx-3">|</span>

              <Form.Control type="text" placeholder="Search Product" className="mr-2" />
              <ButtonSearch />
            </Form>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#login">
                Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        <Navbar fixed="top" expand="lg" className="bg-body-tertiary secondNavbar">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#link">Product</Nav.Link>

            <Nav.Link href="#link">About Us</Nav.Link>

            <Nav.Link href="#link">Product</Nav.Link>

            <Nav.Link href="#link">Product</Nav.Link>

            <Nav.Link href="#link">Product</Nav.Link>

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </>    
  );
}

export default DualNavbar;