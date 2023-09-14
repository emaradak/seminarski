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
    const [dodajRadnikaForma, setDodajRadnikaForma] = useState({
        ime: "",
        prezime: "",
        adresa: "",
        broj_telefona: "",
        tim_id: 1,
        nivo_id: 1
    });

    const [izmenaRadnikaForma, setIzmenaRadnikaForma] = useState({
        radnik: 1,
        adresa: '',
        broj_telefona: ''
    });

    const onChangeIzmenaRadnika = (e) => {
        setIzmenaRadnikaForma({
            ...izmenaRadnikaForma,
            [e.target.name]: e.target.value
        });
    }

    const onChangeRadnika = (e) => {
        setDodajRadnikaForma({
            ...dodajRadnikaForma,
            [e.target.name]: e.target.value
        });
    }

    const dodajRadnika = () => {
        console.log(dodajRadnikaForma);

        axios({
            method: 'post',
            url: 'radnici',
            data: dodajRadnikaForma,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data);
            alert("Uspesno ste dodali radnika");
            ucitajRadnike();
        }).catch(error => {
            console.log(error);
        });
    }

    const izmeniRadnika = () => {
        console.log(izmenaRadnikaForma);

        axios({
            method: 'put',
            url: `radnici/${izmenaRadnikaForma.radnik}`,
            data: izmenaRadnikaForma,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data);
            alert("Uspesno ste izmenili radnika");
            ucitajRadnike();
        }).catch(error => {
            console.log(error);
        });
    }

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

    function obrisiRadnika() {
        axios.delete(`radnici/${izmenaRadnikaForma.radnik}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                alert("Uspesno ste obrisali radnika");
                ucitajRadnike();
                //window.location.href = "/pocetna";
            })
            .catch(error => {
                console.log(error);
            });
    }


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

                {
                    window.sessionStorage.getItem('admin') === '1' &&

                        (
                            <>
                                <Row>
                                    <Col>
                                        <h1 className="text-center">Novi radnik</h1>
                                        <label htmlFor="ime">Ime</label>
                                        <input onChange={onChangeRadnika} className="form-control" type="text" id="ime" name="ime" />
                                        <label htmlFor="prezime">Prezime</label>
                                        <input onChange={onChangeRadnika} className="form-control" type="text" id="prezime" name="prezime" />
                                        <label htmlFor="adresa">Adresa</label>
                                        <input onChange={onChangeRadnika} className="form-control" type="text" id="adresa" name="adresa" />
                                        <label htmlFor="broj_telefona">Telefon</label>
                                        <input onChange={onChangeRadnika} className="form-control" type="text" id="broj_telefona" name="broj_telefona" />
                                        <label htmlFor="tim">Tim</label>
                                        <select onChange={onChangeRadnika} className="form-control" id="tim" name="tim_id">
                                            {
                                                timovi.map(tim => (
                                                    <option key={tim.id} value={tim.id}>{tim.naziv_tima}</option>
                                                ))
                                            }
                                        </select>
                                        <label htmlFor="nivo">Nivo</label>
                                        <select onChange={onChangeRadnika} className="form-control" id="nivo" name="nivo_id">
                                            {
                                                nivoi.map(nivo => (
                                                    <option key={nivo.id} value={nivo.id}>{nivo.naziv_nivoa}</option>
                                                ))
                                            }
                                        </select>
                                        <hr/>
                                        <button onClick={dodajRadnika} className="btn btn-primary">Dodaj radnika</button>

                                    </Col>

                                    <Col>
                                        <h1 className="text-center">Izmena podataka radnika</h1>
                                        <label htmlFor="radnik">Izaberi radnika</label>
                                        <select onChange={onChangeIzmenaRadnika} className="form-control" id="radnik" name="radnik">
                                            {
                                                radnici.map(radnik => (
                                                    <option key={radnik.id} value={radnik.id}>{radnik.ime} {radnik.prezime}</option>
                                                ))
                                            }
                                        </select>
                                        <label htmlFor="adresa">Adresa</label>
                                        <input onChange={onChangeIzmenaRadnika} className="form-control" type="text" id="adresa" name="adresa" />
                                        <label htmlFor="broj_telefona">Telefon</label>
                                        <input onChange={onChangeIzmenaRadnika} className="form-control" type="text" id="broj_telefona" name="broj_telefona" />
                                        <hr/>
                                        <button onClick={izmeniRadnika} className="btn btn-info m-2">Izmeni podatke</button>
                                        <button onClick={obrisiRadnika} className="btn btn-danger m-2">Obrisi radnika</button>
                                    </Col>


                                </Row>
                            </>
                        )
                }


            </Container>
        </div>
    );
};

Pocetna.propTypes = {

};

export default Pocetna;