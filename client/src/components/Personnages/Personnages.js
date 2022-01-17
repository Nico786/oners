import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonnagesContext } from "../../contexts/personnagesContext";
import VignettePersonnage from "./VignettePersonnage/VignettePersonnage";

import marqueursImg from '../../assets/img/Personnages/marqueurs.png';
import marqueursImg2x from '../../assets/img/Personnages/marqueurs.png';
import marqueursImg3x from '../../assets/img/Personnages/marqueurs.png';


import styles from "./Personnages.module.css";

const Personnages = () => {
    const [personnages, setPersonnages] = useContext(PersonnagesContext);
    const textPersonnages = personnages;

    return (
        <section id="personnages" className={styles.personnagesBg}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.personnagesH1}>Personnages</h1>
                    </Col>
                    <Col>
                        <img src={marqueursImg}
                        srcSet={`${marqueursImg2x} 2x`, `${marqueursImg3x} 3x`}
                        alt="marqueurs dessins" 
                        width="150"
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        personnages.map((personnage) => {
                            return (
                                <Col key={personnage._id} sm={12} lg={4} className="my-2">
                                    <VignettePersonnage
                                        name={personnage.name}
                                        description={personnage.description}
                                        backgroundColorModal={personnage.backgroundColorModal}
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
