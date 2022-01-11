import { React, useContext } from 'react';
import styles from "./Synopsis.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import { SectionContext } from '../../contexts/sectionContext';

import gasMaskImg from "../../assets/img/Synopsis/gasMask.png"
import gasMaskImgx2 from "../../assets/img/Synopsis/gasMask@2x.png";
import gasMaskImgx3 from "../../assets/img/Synopsis/gasMask@3x.png";


const Synopsis = () => {
    const [section, setSection] = useContext(SectionContext);
    const textSection = section[1].textContent;

    return (
        <section id="synopsis" className={styles.synopsisBg}>
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="text-center">
                        <img src={gasMaskImg}
                            srcSet={`${gasMaskImgx2} 2x, ${gasMaskImgx3} 3x`}
                            alt="masque à gaz"
                            className="img-fluid"
                            id={styles.gasMask}
                        />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                        <Row>
                            <h1 className={`${styles.synopsisH1} mb-3`}>Synopsis</h1>
                        </Row>
                        <Row>
                        {textSection.map((textParagraph, id) => <p key={id}>{textParagraph}</p>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Synopsis;