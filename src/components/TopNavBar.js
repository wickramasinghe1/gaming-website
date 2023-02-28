import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TopNavBar({name='Alex'}) {
    return (
        <>

            <Navbar style={{ position: 'fixed', width: '100%', zIndex:99}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={{ width: '50px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg" alt='logo'/>
                        {' '}
                        Hi! {name}, Welcome to Admin Panel.
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
