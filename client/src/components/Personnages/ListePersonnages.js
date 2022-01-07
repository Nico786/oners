import { React, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonnageContext } from "../../contexts/personnageContext";

import styles from "./ListePersonnages.module.css";

const ListePersonnages = () => {
  const [personnage, setPersonnage] = useContext(PersonnageContext);
  const textPersonnage = personnage;
  console.log(textPersonnage);
  return (
    <section id="personnages" className={styles.personnagesBg}>
      <Container className="py-5">
        <Row>
          <h1 className={styles.personnagesH1}>Personnages</h1>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ListePersonnages;
