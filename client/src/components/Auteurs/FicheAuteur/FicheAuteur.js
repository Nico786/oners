import React from 'react';
import { Row, Col } from "react-bootstrap";


import Morgan from "../../../assets/img/Auteurs/morgan/morgan.png";
import Justin from "../../../assets/img/Auteurs/justin/justin.png";


const FicheAuteur = ({name, job, description}) => {
    return (
        <Col>
            <Row>
                <Col>
                    <img src={Morgan} alt={name}/>
                </Col>
                <Col>
                    <p>{job}</p>
                    <p>{description}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default FicheAuteur;