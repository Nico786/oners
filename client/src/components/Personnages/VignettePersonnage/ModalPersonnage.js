import React from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";

import styles from './ModalPersonnage.module.css'

const ModalPersonnage = ({ isShowing, hide, name, description, backgroundColorModal }) =>

    isShowing
        ? ReactDOM.createPortal(

            <div className={styles.modalOverlay} onClick={hide}>
                <div className={styles.modalWrapper}>
                    <div className={styles.modal} style={{ backgroundColor: backgroundColorModal }}>
                        <Row className={styles.modalHeader}>
                            <Col>
                                <button
                                    type="button"
                                    className={styles.modalClose}
                                    onClick={hide}
                                >
                                    <span id={styles.closeBtn}>&times;</span>
                                </button>

                            </Col>
                        </Row>

                        <Row className={styles.modalBody}>
                            <Col md={7}>
                                <h4 className={`${styles.nomPersonnage} mb-4`}>{name}</h4>
                                <p className="mb-0">{description}</p>
                                <img
                                    src={require(`../../../assets/img/Personnages/graf/${name}.png`).default}
                                    className={`${styles.grafModal} img-fluid`}
                                    alt={name} />
                            </Col>
                            <Col md={5}>
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