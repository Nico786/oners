import React from 'react';
import { Row, Col } from "react-bootstrap";

const FicheAuteur = ({ name, job, description }) => {

    return (
        <Col>
            <Row className="my-3">
                <Col xs={12} md={6}>
                    <img src={require(`../../../assets/img/Auteurs/${name}.png`).default}
                        alt={name}
                        className='img-fluid' />
                </Col>
                <Col>
                    <img src={require(`../../../assets/img/Auteurs/graf_${name}.png`).default}
                        alt={name}
                        className='img-fluid py-sm-3 py-md-0' />
                    <p>{job}</p>
                    {description.map((textParagraph, id) => {
                        return (
                            <p key={id}>{textParagraph}</p>
                        )
                    })}
                </Col>
            </Row>
        </Col>
    )
}

export default FicheAuteur;