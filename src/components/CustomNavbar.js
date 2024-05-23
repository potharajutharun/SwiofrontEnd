import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsCaretLeftFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import '../Styles/customNavbar.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-white-tertiary mt-5 custom-navbar">
      <Container fluid>
        <Nav className="me-auto first__linkig">
          <Nav.Link href="/" className='icon' style={{ color: 'blue' }}>
            <span style={{ fontWeight: 'bolder' }}>REPL</span>
            <BsCaretLeftFill style={{ fontWeight: 'bolder',position:'relative',bottom:'0.1rem' }} className='icon' />
            <span style={{ fontWeight: 'bolder' }}>Y</span>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto center-nav">
            <Nav.Link as={Link} to="sleeve" className="nav-item-centered"> 
              <span className='lining border p-2 shadow-sm rounded-5 bg-light'>
                <img src='./images/sleev.png' height="20px" alt="Sleeve" /> Sleeve
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="umbra" className="nav-item-centered">
              <img src='./images/umbra.jfif' height="20px" alt="Umbra" /> Umbra
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto last__linkig">
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="help">Help</Nav.Link>
            <Nav.Link href="https://x.com/softwarereplay">
              <RiTwitterXFill className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
