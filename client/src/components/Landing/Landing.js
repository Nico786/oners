import { React, useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { SectionContext } from '../../contexts/sectionContext';

import logoOnersColor2x from "../../assets/img/Landing/logos/logo_oners_color@2x.png";
import logoOnersColor3x from "../../assets/img/Landing/logos/logo_oners_color@3x.png";
import persosImg2x from "../../assets/img/Landing/Persos/landing_group_perso_desktop/landing_group_perso_desktop@2x.png"
import persosImg3x from "../../assets/img/Landing/Persos/landing_group_perso_desktop/landing_group_perso_desktop@3x.png"
import styles from "./Landing.module.css";

const Landing = () => {
    const [section, setSection] = useContext(SectionContext);
    const textSection = section[0].textContent;

    return (
        <section className={styles.landing} id="accueil">
            <Container className="pt-5">
                <Row className="pt-5 align-items-center">
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 1 }}>
                        <img src={logoOnersColor2x}
                            alt="logo Oners"
                            className={`img-fluid ${styles.logoOnersColor2x}`} />
                        <img src={logoOnersColor3x}
                            alt="logo Oners"
                            className={`img-fluid ${styles.logoOnersColor3x}`} />
                        <Row className="mt-4">
                            <Col xs={12} xl={6} >
                                <Button href="#synopsis"
                                    className={`${styles.btnLanding} mb-4`}
                                    id={styles.btnSynopsis}>
                                    <span>Synopsis</span>
                                </Button>
                            </Col>
                            <Col xs={12} xl={6}>
                                <Button href="#personnages"
                                    className={`${styles.btnLanding} mb-4`}
                                    id={styles.btnPersos}>
                                    <span>Les personnages</span>
                                </Button>
                            </Col>
                        </Row>
                        <Row >
                        {textSection.map((textParagraph, id) => <p key={id}>{textParagraph}</p>)}
                        </Row>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 2 }}>
                        <img src={persosImg2x}
                            alt="personnages principaux oners"
                            className={`img-fluid ${styles.persosImg2x}`} />
                        <img src={persosImg3x}
                            alt="personnages principaux oners"
                            className={`img-fluid ${styles.persosImg3x}`} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Landing;