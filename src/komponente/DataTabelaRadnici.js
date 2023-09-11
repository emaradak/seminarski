import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const DataTabelaRadnici = props => {
    const columns = [
        {
            name: 'Ime',
            selector: row => row.ime,
            sortable: true,
        },
        {
            name: 'Prezime',
            selector: row => row.prezime,
            sortable: true,
        },
        {
            name: 'Adresa',
            selector: row => row.adresa,
            sortable: true,
        },
        {
            name: 'Broj telefona',
            selector: row => row.broj_telefona,
            sortable: true,
        },
        {
            name: 'Tim',
            selector: row => row.tim.naziv_tima,
            sortable: true,
        },
        {
            name: 'Nivo',
            selector: row => row.nivo.naziv_nivoa,
            sortable: true,
        }
    ];

    const myNewTheme= {
        header: {
            fontWeight: "bold",
        }
    }

    return (
        <>
            <DataTable
                columns={columns}
                data={props.radnici}
                pagination
                highlightOnHover
                striped
                responsive
                customTheme={myNewTheme}
            />
        </>
    );
};

DataTabelaRadnici.propTypes = {
    radnici: PropTypes.array.isRequired
};

export default DataTabelaRadnici;