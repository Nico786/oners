import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuteursContext } from "../../contexts/auteursContext";
import FicheAuteur from "./FicheAuteur/FicheAuteur";

import styles from "./Auteurs.module.css";

const Auteurs = (props) => {
    // eslint-disable-next-line
    const [auteurs, setAuteurs] = useContext(AuteursContext);
    const textAuteur = auteurs;

    return (
        <section className={styles.auteursBg} id="auteurs">
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ 'color': 'white' }}>Auteurs</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        textAuteur.map((auteur) => {
                            return (
                                <Col lg={6} key={auteur._id}>
                                    <FicheAuteur
                                        name={auteur.name}
                                        job={auteur.job}
                                        description={auteur.description} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Auteurs;