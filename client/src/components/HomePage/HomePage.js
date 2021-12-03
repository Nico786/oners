import React from 'react';
import { Container} from 'react-bootstrap';

import NavBar from '../NavBar/NavBar';

import styles from "./HomePage.module.css";

const HomePage = (props) => {
    return (
        <section className={styles.homepageBG} >
            <header>
                <NavBar />
            </header>
        </section>
    )
}

export default HomePage;