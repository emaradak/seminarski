import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import emailjs from "emailjs-com";

const Kontakt = () => {

    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const posalji = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const podaci = {
            name: "Name: " + name,
            email: "Email: " + email,
            message: "Message: " + message,
        };


        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs
            .send(serviceID, templateID, podaci, userID)
            .then((response) => {
                alert("Uspesno ste postali email poruku!");
                setFormData(initialState);
            })
            .catch((error) => {
                alert("Doslo je do greske prilikom slanja email poruke!");
            });
    }

    return (
        <div>
            <Container>
                <h1>Kontakt</h1>
                <Row className="login">
                    <Col>
                        <form>
                            <label htmlFor="name">Ime</label>
                            <input onChange={handleChange} type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="email">Email</label>
                            <input onChange={handleChange} type="email" name="email" id="email" className="form-control" />
                            <label htmlFor="message">Poruka</label>
                            <textarea onChange={handleChange} id="message" name="message" className="form-control" />
                            <hr/>
                            <button onClick={posalji} className="btn btn-primary mt-3">Posalji</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Kontakt;