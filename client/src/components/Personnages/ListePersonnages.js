import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ListePersonnages.module.css';

const Personnages = (props) => {
    return (
        <section id="personnages" className={styles.personnagesBg}>
            <Container className='py-5'>
                <Row>
                    <h1 className={styles.personnagesH1}>Personnages</h1>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Personnages;