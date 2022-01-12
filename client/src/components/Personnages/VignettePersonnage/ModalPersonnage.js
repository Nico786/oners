import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";

import styles from './ModalPersonnage.module.css'

const ModalPersonnage = ({ isShowing, hide, name, description }) =>
    isShowing
        ? ReactDOM.createPortal(

            <div className={styles.modalOverlay}>
                <div className={styles.modalWrapper}>
                    <div className={styles.modal}>
                        <Row className={styles.modalHeader}>
                            <Col>
                                <button
                                    type="button"
                                    className={styles.modalClose}
                                    onClick={hide}
                                >
                                    <span id={styles.closeBtn}>&times;</span>
                                    <span id={styles.previous}> &nbsp;Retour aux personnages</span>
                                </button>

                            </Col>
                        </Row>

                        <Row className={styles.modalBody}>
                            <Col md={6}>
                                <p className={styles.nomPersonnage}>{name}</p>
                                <p>{description}</p>
                                <img
                                    src={require(`../../../assets/img/Personnages/graf/${name}.png`).default}
                                    className="img-fluid"
                                    alt={name} />
                            </Col>
                            <Col md={6}>
                                <img
                                    src={require(`../../../assets/img/Personnages/${name}.png`).default}
                                    className={`${styles.imagePersonnage} img-fluid`}
                                    alt={name} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            ,
            document.body
        )
        : null;

export default ModalPersonnage;