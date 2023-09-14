import React, {useRef, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axiosInstanca from "../axios/axiosInstanca";

const Login = () => {

    const [poruka, setPoruka] = useState({
        tekstPoruke: "",
        uspesno: false,
        prikazati: false
    });

    const loginEmail = useRef();
    const loginPassword = useRef();

    const registerName = useRef();
    const registerEmail = useRef();
    const registerPassword = useRef();

    const login = () => {
        const email = loginEmail.current.value;
        const password = loginPassword.current.value;

        axiosInstanca.post('login', {
            email: email,
            password: password
        }
        ).then(res => {
            alert("Uspesno ste se ulogovali");
            console.log(res);
            console.log(res.data);

            const token = res.data.token;
            const user = res.data.user;
            user.password = '';

            console.log(user);

            window.sessionStorage.setItem("auth_token", token);
            window.sessionStorage.setItem("user", JSON.stringify(user));
            window.sessionStorage.setItem('admin', user.is_admin);
            window.location.href = "/pocetna";
        }
        ).catch(err => {
            setPoruka({
                tekstPoruke: "Korisnik sa datim emailom i lozinkom ne postoji",
                uspesno: false,
                prikazati: true
            });
        }
        );
    }

    const register = () => {
        const name = registerName.current.value;
        const email = registerEmail.current.value;
        const password = registerPassword.current.value;

        axiosInstanca.post('register', {
            name: name,
            email: email,
            password: password
        }
        ).then(res => {
            console.log(res);
            console.log(res.data);

            setPoruka({
                tekstPoruke: "Uspesno ste se registrovali",
                uspesno: true,
                prikazati: true
            });
        }
        ).catch(err => {

            setPoruka({
                tekstPoruke: "Greska pri registraciji",
                uspesno: false,
                prikazati: true
            });
        }
        );
    }


    return (
        <>
            <Container>
                <Row>
                    {
                        poruka.prikazati ?
                            (
                                <h1 className={poruka.uspesno ? 'text-success text-center' : 'text-danger text-center'}>{poruka.tekstPoruke}</h1>
                            ) : (<> </>)
                    }
                    <Col>
                        <h1 className="text-center m-3">Login</h1>
                        <label htmlFor="email">Email</label>
                        <input ref={loginEmail} type="email" id="email" className="form-control" />
                        <label htmlFor="password">Password</label>
                        <input ref={loginPassword} type="password" id="password" className="form-control" />
                        <button onClick={login} className="btn btn-primary mt-3">Login</button>
                    </Col>
                    <Col>
                        <h1 className="text-center m-3">Nemate nalog? Registrujte se</h1>
                        <label htmlFor="name">Ime i prezime</label>
                        <input ref={registerName} type="text" id="name" className="form-control" />
                        <label htmlFor="email">Email</label>
                        <input ref={registerEmail} type="email" id="email" className="form-control" />
                        <label htmlFor="password">Password</label>
                        <input ref={registerPassword} type="password" id="password" className="form-control" />
                        <button onClick={register} className="btn btn-primary mt-3">Registruj se</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;