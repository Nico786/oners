import React, { useState } from 'react';
import { Navbar, Nav, Col, Row, Container } from 'react-bootstrap';
import logoHeader from '../../assets/img/Landing/logos/logo_header.png';

import styles from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" className={styles.navBar}>
            <Container>
                <Row className={styles.rowLogos}>
                    <Col sm={12} lg={4} xl={6}>
                        <Navbar.Brand href="#landing" className="me-0">
                            <img
                                src={logoHeader}
                                alt="logo Oners"
                                width="160px" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsOpen(!isOpen)}>
                            {
                                !isOpen ?
                                    <i className={`fas fa-bars ${styles.togglerIcon}`} ></i>
                                    : <i className={`fas fa-times ${styles.togglerIcon}`}></i>
                            }
                        </Navbar.Toggle>
                    </Col>
                    <Col sm={12} lg={8} xl={6}>
                        <Navbar.Collapse className={styles.toggler}>
                            <Nav data-bs-spy="scroll"
                                data-bs-target="responsive-navbar-nav"
                                data-bs-offset="0"
                                id='responsive-navbar-nav'
                                as="ul"
                            >
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#landing"
                                        className={styles.navLink}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Accueil
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#synopsis"
                                        className={styles.navLink}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Synopsis
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#personnages"
                                        className={styles.navLink}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Personnages
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#auteurs"
                                        className={styles.navLink}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Auteurs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#contact"
                                        className={styles.navLink}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default NavBar;