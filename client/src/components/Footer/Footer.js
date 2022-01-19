import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logoInstagram from "../../assets/icons/instagram.png";
import logoFacebook from "../../assets/icons/facebook.png";
import logoTikTok from "../../assets/icons/tiktok.png"
/* import logoYoutube from "../../assets/icons/youtube.png"; */
import logoTwitter from "../../assets/icons/twitter.png";


import styles from "./Footer.module.css"

const Footer = (props) => {
    return (
        <Container>
            <Row id={styles.footerPage} className='align-items-center'>
                <Col xs={12} sm={6} className="text-center text-md-start my-2">
                    <span> &copy; Copyright 2022 | oners-bd.fr</span>
                </Col>
                <Col>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/onersbd/" target="_blank" rel="noreferrer">
                                <img src={logoFacebook}
                                    alt="logo facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@oners_bd/" target="_blank" rel="noreferrer">
                                <img src={logoTikTok}
                                    alt="logo tiktok"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/oners.bd/" target="_blank" rel="noreferrer">
                                <img src={logoInstagram}
                                    alt="logo instagram" />
                            </a>
                        </li>
                    {/*     <li>
                            <a href="#">
                                <img src={logoYoutube}
                                    alt="logo youtube" />
                            </a>
                        </li> */}
                        <li>
                            <a href="https://twitter.com/Oners_BD" target="_blank" rel="noreferrer">
                                <img src={logoTwitter}
                                    alt="logo twitter" />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;