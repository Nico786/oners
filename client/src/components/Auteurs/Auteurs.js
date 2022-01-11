import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuteurContext } from "../../contexts/auteurContext";
import FicheAuteur from "./FicheAuteur/FicheAuteur";

import styles from "./Auteurs.module.css";

const Auteurs = (props) => {
    const [auteur, setAuteur] = useContext(AuteurContext);
    const textAuteur = auteur;
    console.log(textAuteur);
    
    return (
        <section id="biographie" className={styles.auteursBg}>
            <Container className="py-5">
                <Row>
                    <h1 style={{ 'color': 'white' }}>Les auteurs</h1>
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