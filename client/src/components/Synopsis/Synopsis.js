import React from 'react';
import styles from "./Synospis.module.css";
import { Container, Row, Col } from 'react-bootstrap';

import gasMaskImg from "../../assets/img/Synopsis/gasMask.png"
import gasMaskImgx2 from "../../assets/img/Synopsis/gasMask@2x.png";
import gasMaskImgx3 from "../../assets/img/Synopsis/gasMask@3x.png";


const Synopsis = () => {
    return (
        <section id="synopsis" className={styles.synopsisBg}>
            <Container className="pt-5">
                <Row className="align-items-center">
                    <Col xs={{span:12, order:2}} lg={{span:6, order:1}}>
                        <img src={gasMaskImg}
                            srcset={`${gasMaskImgx2} 2x", ${gasMaskImgx3} 3x`}
                            alt="masque à gaz"
                            className="img-fluid"
                            id={styles.gasMask}
                            />
                    </Col>
                    <Col xs={{span:12, order:1}} lg={{span:6, order:2}}>
                        <Row>
                            <h1 className={`${styles.synopsisH1} mb-3`}>Synopsis</h1>
                        </Row>
                        <Row>
                            <p>
                                Kaval et Jonps sont deux lycéens en quête de sens. Kaval se débrouille, deale un peu et sort parfois la nuit pour graffer. Jonps, plutôt geek, peint surtout dans ses cahiers.
                            </p>
                            <p>
                                Lors d'une techno-parade qui finit en émeute, ils se retrouvent impliqués dans un conflit entre l-CARE, une multinationale high-tech spécialisée dans les humains augmentés, et un groupe de graffeurs souhaitant libérer 412-L, une adolescente conçue dans leurs laboratoires.
                            </p>
                            <p>
                                Ces graffeurs, d'abord méfiants, embarquent Kaval et Jonps. Ils remarquent ensuite le potentiel de nos héros et décident de leur dévoiler l'existence d'un monde dans lequel se trouvent des entités (les Reflets) capables de transmettre leurs capacités à certains humains (les Porteurs).
                            </p>
                            <p>
                                Quelques jours plus tard, alors qu'il est agressé par un groupe d’inconnus, Jonps développe une vitesse et une puissance hors du commun. On devine qu'un Reflet de nature obscure l'a choisi comme Porteur.
                            </p>
                            <p>
                                Contacté par Nicolas Suez, ingénieur en chef d'I-CARE, Kaval apprend qu'il possède le pouvoir unique du Passeur. Entraîné par un Porteur travaillant pour Suez, il risque à son insu de servir les intérêts de ce puissant mégalomane en lui ouvrant un passage vers le monde des Reflets.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Synopsis;