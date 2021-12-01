import React, {useState} from 'react';
import { Navbar, Nav, Col} from 'react-bootstrap';
import logoHeader from '../../assets/img/Homepage/logo_header@3x.png';

import styles from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" className={styles.navBar}>
            <Col xs={{ span: 5, offset: 3 }} md={{ span: 4, offset: 1 }} lg={5}>
                <Navbar.Brand href="#home">
                    <img src={logoHeader} alt="logo Oners" with="160px" height="65px" className={styles.logoHeader} />
                </Navbar.Brand>
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ?
                <i className={`fas fa-bars ${styles.togglerIcon}`} ></i>
                : <i className={`fas fa-times ${styles.togglerIcon}`}></i>
            }
                
            </Navbar.Toggle>

            <Navbar.Collapse id='responsive-navbar-nav' className={styles.toggler}>
                <Col lg={7}>
                    <Nav>
                        <Nav.Link href="#accueil" className={styles.navLink}>Accueil</Nav.Link>
                        <Nav.Link href="#synopsis" className={styles.navLink}>Synopsis</Nav.Link>
                        <Nav.Link href="#personnages" className={styles.navLink}>Personnages</Nav.Link>
                        <Nav.Link href="#biographie" className={styles.navLink}>Biographie</Nav.Link>
                        <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
                    </Nav>
                </Col>
            </Navbar.Collapse>
        </Navbar>



    )
}

export default NavBar;