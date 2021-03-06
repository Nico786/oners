import { React, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';

import styles from "./Synopsis.module.css";

import { SectionsContext } from '../../contexts/sectionsContext';

import gasMaskImg from "../../assets/img/Synopsis/gasMask.png"
import gasMaskImgx2 from "../../assets/img/Synopsis/gasMask@2x.png";
import gasMaskImgx3 from "../../assets/img/Synopsis/gasMask@3x.png";


const Synopsis = () => {
    // eslint-disable-next-line
    const [sections, setSections] = useContext(SectionsContext);
    const textSection = sections[1].textContent;

    return (
        <section id="synopsis" className={styles.synopsisBg}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={{ span: 6, order: 2 }}>
                        <h1 className={`${styles.synopsisH1} mb-3`}>Synopsis</h1>
                        <Row>
                            <Col>
                                {
                                    parse(`${textSection}`)
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-center">
                        <img
                            src={gasMaskImg}
                            srcSet={`${gasMaskImgx2} 2x, ${gasMaskImgx3} 3x`}
                            alt="masque à gaz"
                            className="img-fluid"
                            id={styles.gasMask}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Synopsis;