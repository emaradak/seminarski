import React, {useEffect, useState} from 'react';
import axios from '../axios/axiosInstanca';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "react-bootstrap";
import DataTabelaRadnici from "../komponente/DataTabelaRadnici";
import TimskaKartica from "../komponente/TimskaKartica";

const Pocetna = props => {

    const token = window.sessionStorage.getItem("auth_token");
    const [timovi, setTimovi] = useState([]);
    const [nivoi, setNivoi] = useState([]);
    const [radnici, setRadnici] = useState([]);
    const [radniciPoTimu, setRadniciPoTimu] = useState([]);

    const ucitajTimove = () => {

        axios.get('timovi', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setTimovi(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const ucitajNivoe = () => {

            axios.get('nivoi', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setNivoi(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const ucitajRadnike = () => {

                axios.get('radnici', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    setRadnici(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
    }

    const vratiRadnikePoTimu = () => {
        axios.get('radniciPoTimu', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                let radniciPoTimuArray = Object.entries(response.data);
                let radniciPoTimu = [];
                let key;
                let value;
                let brojac = 1;

                for ([key, value] of radniciPoTimuArray){
                    radniciPoTimu.push({
                        id : brojac,
                        tim: key,
                        broj: value
                    })
                    brojac++;
                }

                setRadniciPoTimu(radniciPoTimu);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (timovi.length === 0) {
            ucitajTimove();
        }
    })

    useEffect(() => {
        if (nivoi.length === 0) {
            ucitajNivoe();
        }
    })

    useEffect(() => {
        if (radnici.length === 0) {
            ucitajRadnike();
        }
    })

    useEffect(() => {
        if (radniciPoTimu.length === 0) {
            vratiRadnikePoTimu();
        }
    })


    return (
        <div>
            <Container>
                <Row>
                    {
                        radniciPoTimu.map(radnik => (
                            <Col key={radnik.id}>
                                <TimskaKartica tim={radnik.tim} broj={radnik.broj} />
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center">Svi nasi radnici</h1>
                        <DataTabelaRadnici  radnici={radnici}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Pocetna.propTypes = {

};

export default Pocetna;