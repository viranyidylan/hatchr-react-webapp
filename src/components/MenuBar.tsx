import { Container, Nav, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../@types/assets/hatchr-logo-white.svg';
import React, { useEffect, useState } from 'react';

var navButtonText = "companies";
var navButtonPath = "companies";

if (window.location.pathname === '/companies') {
    navButtonText = "developers";
    navButtonPath = "/";
} else {
    navButtonText = "companies";
    navButtonPath = "/companies";
}

function MenuBar() {
    const [hidden, setHidden] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const navControl = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY < 70) { 
                setHidden(false); 
            } else {
                setHidden(true);
                setExpanded(false);
            }
        }
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', navControl);
    
            // cleanup function
            return () => {
            window.removeEventListener('scroll', navControl);
            };
        }
    }, []);

    const expansionControl = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar className="menu-bar" onToggle={expansionControl} expand="md" variant='dark' fixed="top" hidden={hidden} expanded={expanded} >
            <Container fluid>
                <Navbar.Brand>
                    <Nav.Link href='/'>
                        <Logo height='40px'/> 
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="menu-links">
                        <Nav.Link className='nav-link' href={navButtonPath}><h3>{"For " + navButtonText}</h3></Nav.Link>
                        <Nav.Link className='nav-link' href="/assessments"><h3>Coding tasks</h3></Nav.Link>
                    </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    );
}

export default MenuBar;