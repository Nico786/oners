import { React, useRef } from 'react';
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import styles from "./ContactForm.module.css"

const dotenv = require("dotenv");
dotenv.config();

const ContactForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const form = useRef();

    const toastifySuccess = () => {
        toast.success('Message envoyé !', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    function sendEmail(e) {
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
                            className={styles.formRowContent}
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
                            className={styles.formRowContent}
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
                            className={styles.formRowContent}
                            type="text"
                            name="message"
                            placeholder="Votre message"
                            {...register("message", {
                                required: 'Veuillez écrire votre message',
                                minLength: {
                                    value: 20,
                                    message: 'Votre message doit contenir 20 caractères minimum'
                                }
                            })}
                            rows={5}
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
                <Row className="text-end">
                    <Col>
                        {/*    <ReCAPTCHA
                            sitekey={process.env.REACT_APP_CAPTCHA}
                        /> */}
                    </Col>
                    <Col>
                        <button
                            type="submit"
                            value="Envoyer"
                            id={styles.btnSubmit}>
                            Envoyer
                        </button>
                    </Col>
                </Row>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
        </Col>
    )
}

export default ContactForm;