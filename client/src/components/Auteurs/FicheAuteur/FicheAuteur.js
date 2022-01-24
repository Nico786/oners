import React from 'react';
import { Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

import styles from './FicheAuteur.module.css'

const FicheAuteur = ({ name, job, description }) => {

    return (
        <Col>
            <Row className={`my-3 ${styles.ficheAuteur}`}>
                <Col sm={12} md={6}>
                    <img
                        src={require(`../../../assets/img/Auteurs/${name}.png`).default}
                        alt={name}
                        className='img-fluid'
                    />
                </Col>
                <Col>
                    <img
                        src={require(`../../../assets/img/Auteurs/graf_${name}.png`).default}
                        alt={name}
                        className='img-fluid py-sm-3 py-md-1 mx-md-0'
                    />
                    <p className={styles.jobAuteur}>
                        {job}
                    </p>
                    {
                        parse(description)
                    }
                </Col>
            </Row>
        </Col>
    )
}

export default FicheAuteur;