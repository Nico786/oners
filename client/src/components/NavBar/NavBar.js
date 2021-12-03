import React, { useState } from 'react';
import { Navbar, Nav, Col, Row, Container } from 'react-bootstrap';
import logoHeader from '../../assets/img/Homepage/logo_header@3x.png';

import styles from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <Row>
                <Navbar collapseOnSelect fixed="top" expand="lg" className={styles.navBar}>
                    <Col xs={12} lg={4} xl={6} className="d-flex justify-content-center">
                        <Navbar.Brand href="#homepage">
                            <img src={logoHeader} alt="logo Oners" width="160px" height="65px" className="img-fluid" />
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen ?
                            <i className={`fas fa-bars ${styles.togglerIcon}`} ></i>
                            : <i className={`fas fa-times ${styles.togglerIcon}`}></i>
                        }
                    </Navbar.Toggle>

                    <Col xs={12} lg={8} xl={6}>
                        <Navbar.Collapse id='responsive-navbar-nav' className={styles.toggler}>
                            <Nav>
                                <Nav.Link href="#homepage" className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>Accueil</Nav.Link>
                                <Nav.Link href="#synopsis" className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>Synopsis</Nav.Link>
                                <Nav.Link href="#personnages" className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>Personnages</Nav.Link>
                                <Nav.Link href="#biographie" className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>Biographie</Nav.Link>
                                <Nav.Link href="#contact" className={styles.navLink} onClick={() => setIsOpen(!isOpen)}>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Row>
        </Container>



    )
}

export default NavBar;