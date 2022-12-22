import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import productLogo from '../images/productLogo.jpg'

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark" className='navbarColor'>
            <Navbar.Brand className='navContainer'>
                <Link to="/home">
                    <img
                        src={productLogo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top logoImg"
                        alt="React Bootstrap logo"
                        style={{marginRight:'10px'}}
                    />
                </Link>
                TOP JOBS
            </Navbar.Brand>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        <Nav.Link>
                            <Link to="/home" className='navLinks'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/jobs" className='navLinks'>Jobs</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact" className='navLinks'>Contact Us</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;