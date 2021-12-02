import React from 'react';
import { Container} from 'react-bootstrap';

import NavBar from '../NavBar/NavBar';

import styles from "./HomePage.module.css";

const HomePage = (props) => {
    return (
        <Container fluid className={styles.homepageBG} >
            <header>
                <NavBar />
            </header>
        </Container>
    )
}

export default HomePage;