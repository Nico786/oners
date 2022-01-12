import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonnagesContext } from "../../contexts/personnagesContext";
import VignettePersonnage from "./VignettePersonnage/VignettePersonnage";

import styles from "./Personnages.module.css";

const Personnages = () => {
    const [personnages, setPersonnages] = useContext(PersonnagesContext);
    const textPersonnages = personnages;
    console.log(textPersonnages);

    return (
        <section id="personnages" className={styles.personnagesBg}>
            <Container className="py-5">
                <Row>
                    <h1 className={styles.personnagesH1}>Personnages</h1>
                </Row>
                <Row>
                    {
                        personnages.map((personnage) => {
                            return (
                                <Col key={personnage._id} sm={12} lg={4} className="my-2">
                                    <VignettePersonnage
                                        name={personnage.name}
                                        description={personnage.description}
                                    />
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    );
};

export default Personnages;
