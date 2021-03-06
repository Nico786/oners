import { React, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Row, Col, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { init } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const dotenv = require("dotenv");
dotenv.config();

init(process.env.REACT_APP_USER_ID);

const ContactForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const form = useRef();

    const handleDisabled = () => {
        setDisabled(!disabled);
        if(!errors) setDisabled(false);
    }
    const handleIsLoading = () =>{
        setIsLoading(!isLoading);
        if(errors) setIsLoading(false);
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js";
        window.onsubmit = () => { handleDisabled() }
        document.body.appendChild(script)
    })

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
                handleIsLoading();
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
                            className="formRow"
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
                            <span>
                                {errors.email.message}
                            </span>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input
                            className="formRow"
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            {...register("subject", {
                                required: 'Veuillez indiquer le sujet de votre message',
                            })}
                        />
                        {
                            errors.subject &&
                            <span>
                                {errors.subject.message}
                            </span>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea
                            className="formRow"
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
                            <span>
                                {errors.message.message}
                            </span>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='g-recaptcha'
                            data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            data-callback="onsubmit">
                        </div>
                    </Col>
                    <Col md={3}>
                        <button
                            type="submit"
                            value="Envoyer"
                            disabled={disabled}
                            className="formRow"
                            onClick={handleIsLoading}>
                            {isLoading ?
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Envoi...</span>
                                </Spinner>
                                : "Envoyer"
                            }
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