import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from './ContactForm/ContactForm';

import CrokFullImage from "../../assets/img/Personnages/Crok.png"
import crokSectionContact from "../../assets/img/Contact/Section_contact_personnage_crok.png"
import crokSectionContact2x from "../../assets/img/Contact/Section_contact_personnage_crok@2x.png"
import crokSectionContact3x from "../../assets/img/Contact/Section_contact_personnage_crok@3x.png";
import panneau from "../../assets/img/Contact/panneau.png"


import styles from "./Contact.module.css"

const Contact = (props) => {
    return (
        <section id="contact" className={styles.contactBg}>
            <Container>
                <Row className={styles.contentSectionContact}>
                    <Col sm={12} lg={{ span: 6, order: 2 }}>
                        <Row className={styles.titrePanneau}>
                            <Col sm={{ span: 12, order: 1 }} lg={{ span: 3, order: 2 }}>
                                <img src={panneau}
                                    alt="panneau boulevard barbès"
                                    className="img-fluid"
                                    id={styles.panneau}
                                />
                            </Col>
                            <Col sm={{ span: 12, order: 2 }} lg={{ span: 9, order: 1 }} >
                                <h1 className={styles.contactH1}>Contact</h1>
                            </Col>

                        </Row>
                        <Row>
                            <ContactForm/>
                        </Row>
                    </Col>
                    <Col sm={12} lg={{ span: 6, order: 1 }}>
                        <img src={crokSectionContact}
                            srcSet={`${crokSectionContact2x} 2x, ${crokSectionContact3x} 3x`}
                            alt="personnage Crok"
                            className="img-fluid"
                            id={styles.crokSectionContact}
                        />
                        <img src={CrokFullImage}
                        alt="personnage Crok"
                        className="img-fluid"
                        id={styles.crokFullBodyImg}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;