import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "./LoginForm.module.css";

const dotenv = require("dotenv");
dotenv.config();

const LoginAdmin = (props) => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });

    const handleOnChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.email === "" && userData.password === "") {
            setErrorMessage((prevState) => ({
                value: "Veuillez remplir les 2 champs"
            }))
        } else if (userData.email.toLowerCase() === process.env.REACT_APP_ADMIN_ADRESS && userData.password.toLowerCase() === process.env.REACT_APP_ADMIN_PWD) {
            //success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = '/admin'
        } else {
            //invalid credentials
            setErrorMessage((prevState) => ({ value: "Email ou mot de passe incorrect. Veuillez réessayer." }));
            return;
        }
    }

    return (
        <Row>
            <Col md={6} className="mx-auto mt-4">
                <form id={styles.adminLoginForm}>
                    <h2>Se connecter</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Adresse mail:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={userData.email}
                            required
                            onChange={handleOnChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Mot de passe:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                            value={userData.password}
                            onChange={handleOnChange} />
                    </div>
                    <button
                        type="submit"
                        className='btn btn-success'
                        onClick={handleSubmit}>
                        Valider
                    </button><br/>
                    <span id={styles.adminLoginErrorMsg}>{errorMessage.value}</span>
                </form>
            </Col>
        </Row>
    )
}

export default LoginAdmin;