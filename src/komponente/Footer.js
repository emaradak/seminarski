import React, {useState} from 'react';
import axios from "../axios/axiosInstanca";

const Footer = () => {

    const [poruka, setPoruka] = useState('');

    const generisiPoruku = () => {

        if (poruka === '') {
            axios.get('/qod').then(res => {
                console.log(res.data);
                setPoruka(res.data.insult);
            }).catch(err => {
                console.log(err);
            });
        }else{
            console.log("Poruka nije prazna");
        }
    }

    generisiPoruku();

    return (
        <>
            <footer>
                <span>Kreirano sa ljubavlju &hearts;</span>
                <p>Poruka od radnika: {poruka}</p>
            </footer>
        </>
    );
};

export default Footer;