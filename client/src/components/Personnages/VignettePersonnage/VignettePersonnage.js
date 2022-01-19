import React from 'react';
import { Modal } from 'react-responsive-modal';
import { Row, Col } from "react-bootstrap";
import 'react-responsive-modal/styles.css';
import styles from './custom-modal.module.css';

const VignettePersonnage = ({ name, description, backgroundColorModal }) => {
    const [open, setOpen] = React.useState(false);
    const vignette = React.useRef(null);

    const styleModal = {
        modal: {
            background: backgroundColorModal,
            padding: "2rem",
            zIndex: "10",
            position: "relative",
            overflow: "visible",
            maxHeight: "fit-content",
            borderRadius: "30px",
            boxShadow: "0px 0px 94px rgba(0, 0, 0, 0.25)"
        },
        closeButton: {
            outline: "none"
        }
    };

    return (
        <>
            <div ref={vignette} />
            <img
                src={require(`../../../assets/img/Personnages/vignettes/${name}.png`).default}
                alt={name}
                className='img-fluid'
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
            />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                container={vignette.current}
                aria-labelledby={name}
                aria-describedby={description}
                styles={styleModal}
                modalId="modalPersonnage"
            >
                <Row className="align-items-center">
                    <Col xs={12} sm={8} className={styles.customModal}>
                        <span id={name}>{name}</span>
                        <p id={description}  className="my-md-5">
                            {description}
                        </p>
                        <img
                            src={require(`../../../assets/img/Personnages/graf/${name}.png`).default}
                            className="img-fluid mx-auto"
                            id={styles.grafName}
                            alt={name} />
                    </Col>
                    <Col className="customModal px-auto">
                        <img
                            src={require(`../../../assets/img/Personnages/${name}.png`).default}
                            className="img-fluid px-auto"
                            id={styles.imgPersonnage}
                            alt={name}
                        />
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default VignettePersonnage;
