import React from 'react';
import MapChart from "../komponente/MapChart";
import {Col, Container, Image, Row} from "react-bootstrap";
import ja from "../slike/ja.jpeg";

const Onama = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <h1>O nama</h1>
                        <p>
                            Aplikaciju je kreirala Ema Radak. Ema je student Fakulteta organizacionih nauka.
                            Rođena je i odrasla u Beogradu na Karaburmi. Pored studija njena interesovanja obuhvataju muziku,
                            filmove, serije, društvene igre i šetnje u prirodi. Svoje slobodno vreme najradije provodi sa porodicom
                            i prijateljima.

                        </p>
                        <p>
                            Ovaj zadatak je uradjen u sklopu predmeta <strong>Internet tehnologije</strong> na <strong>Fakultetu organizacionih nauka</strong>.
                            Aplikacija je uradjena u <strong>React</strong> biblioteci.
                            Prikazuje radnika, njegove podatke i projekte na kojima radi.
                            Moguce je dodati radnika u projekat i izbaciti radnika iz projekta.
                        </p>
                    </Col>
                    <Col>
                        <Image src={ja} rounded />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Mapa naseg poslovanja</h1>
                        <MapChart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Onama;