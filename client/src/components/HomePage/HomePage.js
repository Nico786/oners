import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import NavBar from '../NavBar/NavBar';

import styles from "./HomePage.module.css";

const HomePage = (props) => {
    return (
        <Container fluid className={styles.homepageBG} >
            <header>
                <Row>
                    <NavBar />
                </Row>
            </header>
        </Container>
    )
}

export default HomePage;