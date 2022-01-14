import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logoInstagram from "../../assets/icons/instagram.png";
import logoFacebook from "../../assets/icons/facebook.png";
import logoYoutube from "../../assets/icons/youtube.png";
import logoTwitter from "../../assets/icons/twitter.png";


import styles from "./Footer.module.css"

const Footer = (props) => {
    return (
        <Container>
            <Row id={styles.footerPage} className='text-center align-items-center'>
                <Col sm={12} lg={6}>
                    <span> &copy; Copyright 2022 | oners-bd.fr</span>
                </Col>
                <Col>
                    <ul className='d-flex justify-content-evenly'>
                        <li>
                            <a href="#">
                                <img src={logoFacebook}
                                    alt="logo"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={logoInstagram}
                                    alt="logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={logoYoutube}
                                    alt="logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={logoTwitter}
                                    alt="logo" />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;