import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {


const izloguj = (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("user");
    window.location.href = "/";
}

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">HR HOME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            {
                                window.sessionStorage.getItem("auth_token") === null ?
                                    (
                                    <>
                                        <Nav.Link href="/">Login</Nav.Link>
                                        <Nav.Link href="/onama">O nama</Nav.Link>
                                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link href="/pocetna">Pocetna</Nav.Link>
                                        <Nav.Link href="/onama">O nama</Nav.Link>
                                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                                        <Nav.Link onClick={izloguj} href="/">Logout</Nav.Link>
                                    </>
                                    )
                            }
                        </Nav>
                        {
                            window.sessionStorage.getItem("auth_token") !== null ?
                                (
                                    <>
                                        <Navbar.Text>
                                            Ulogovani korisnik: <a href="#">{JSON.parse(window.sessionStorage.getItem('user')).name}</a>
                                        </Navbar.Text>
                                    </>
                                ) :
                                (
                                    <>
                                        <Navbar.Text>
                                            Niste ulogovani
                                        </Navbar.Text>
                                    </>
                                )
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;