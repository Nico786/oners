import { React, useRef } from 'react';
import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { init } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import styles from "./ContactForm.module.css"

const dotenv = require("dotenv");
dotenv.config();

init(process.env.REACT_APP_USER_ID);

const ContactForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [disabled, setDisabled] = useState(true);
    const form = useRef();
    const reCaptchaRef = useRef();

    const handleDisabled = () => {
        setDisabled(!disabled)
    }

    const reCaptchaLoaded = () =>{
        console.log("recaptcha loaded")
    }
    window.reCaptchaLoaded = reCaptchaLoaded();

    const toastifySuccess = () => {
        toast.success('Message envoyé !', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }

    const sendEmail = () => {
        emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_USER_ID}`)
            .then((result) => {
                console.log(result.text);
                toastifySuccess();
            }, (error) => {
                console.log(error.text);
            });
        reset();
    }

    return (
        <Col>
            <form ref={form} onSubmit={handleSubmit(sendEmail)} id='contact-form'>
                <Row>
                    <Col>
                        <input
                            className={styles.formRow}
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: 'Email invalide',
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                        />
                        {
                            errors.email &&
                            <span className={styles.errorMessage}>
                                {errors.email.message}
                            </span>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input
                            className={styles.formRow}
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            {...register("subject", {
                                required: 'Veuillez indiquer le sujet de votre message',
                            })}
                        />
                        {
                            errors.subject &&
                            <span className={styles.errorMessage}>
                                {errors.subject.message}
                            </span>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea
                            className={styles.formRow}
                            type="text"
                            name="message"
                            placeholder="Votre message"
                            rows={5}
                            {...register("message", {
                                required: 'Veuillez écrire votre message',
                                minLength: {
                                    value: 20,
                                    message: 'Votre message doit contenir 20 caractères minimum'
                                }
                            })}
                        >
                        </textarea>
                        {
                            errors.message &&
                            <span className={styles.errorMessage}>
                                {errors.message.message}
                            </span>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            ref={reCaptchaRef}
                            onChange={handleDisabled}
                            asyncScriptOnLoad={reCaptchaLoaded}
                        />
                    </Col>
                    <Col md={3}>
                        <button
                            type="submit"
                            value="Envoyer"
                            disabled={disabled}
                            className={styles.formRow}>
                            Envoyer
                        </button>
                    </Col>
                </Row>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </Col>
    )
}

export default ContactForm;