import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TopCustomNavBar() {
    const [language, setLanguage] = useState("English")
    return (
        <>

            <Navbar style={{ position: 'fixed', width: '100%', zIndex:99}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={{ width: '50px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg" alt='logo'/>
                        {' '}
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>

                    <Nav className="me-right">
                        <NavDropdown title={language} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => setLanguage('English')}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setLanguage('Sinhala')}>Sinhala</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
