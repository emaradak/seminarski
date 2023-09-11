import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from "react-bootstrap";

const TimskaKartica = props => {

    const vratiVariantAlerta = () => {
        if (props.broj < 13) {
            return "danger";
        } else if (props.broj < 16) {
            return "warning";
        } else {
            return "success";
        }
    }

    return (
        <>
            <Alert variant={vratiVariantAlerta()}>
                <Alert.Heading>{props.tim}</Alert.Heading>
                <p>
                    Broj radnika: {props.broj}
                </p>
            </Alert>
        </>
    );
};

TimskaKartica.propTypes = {
    tim: PropTypes.string.isRequired,
    broj: PropTypes.number.isRequired,
};

export default TimskaKartica;