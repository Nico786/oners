import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import logoOnersColor2x from "../../assets/img/Homepage/logos/logo_oners_color@2x.png";
import logoOnersColor3x from "../../assets/img/Homepage/logos/logo_oners_color@3x.png";
import persosImg2x from "../../assets/img/Homepage/persos/homepage_group_perso_desktop/homepage_group_perso_desktop@2x.png"
import persosImg3x from "../../assets/img/Homepage/persos/homepage_group_perso_desktop/homepage_group_perso_desktop@3x.png"
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <section className={styles.homepage} id="accueil">
            <Container className="pt-5">
                <Row className="pt-5 align-items-center">
                    <Col xs={{span: 12, order: 2}} lg={{span:5, order:1}}>
                        <img src={logoOnersColor2x} alt="logo Oners" className={`img-fluid ${styles.logoOnersColor2x}`} />
                        <img src={logoOnersColor3x} alt="logo Oners" className={`img-fluid ${styles.logoOnersColor3x}`} />
                        <Row className="mt-4">
                            <Col xs={12} xl={6} >
                                <Button href="#synopsis" className={`${styles.btnHomePage} mb-4`} id={styles.btnSynopsis}><span>Synopsis</span></Button>
                            </Col>
                            <Col xs={12} xl={6}>
                                <Button href="#personnages" className={`${styles.btnHomePage} mb-4`} id={styles.btnPersos}><span>Les personnages</span></Button>
                            </Col>
                        </Row>
                        <Row >
                            <p>Quand des lycéens découvrent l’existence de personnes aux pouvoirs extraordinaires, ils se lancent tête baissée dans une vie secrète d’aventures nocturnes à travers Paris.</p>
                            <p>Face à la puissante société I-CARE, entre guerres de territoires et soif de pouvoirs, peuvent-ils s’impliquer davantage dans un monde qui les dépasse ?</p>
                        </Row>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span:7, order:2}}>
                        <img src={persosImg2x} alt="personnages principaux oners" className={`img-fluid ${styles.persosImg2x}`} />
                        <img src={persosImg3x} alt="personnages principaux oners" className={`img-fluid ${styles.persosImg3x}`} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomePage;