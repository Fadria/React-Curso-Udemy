import React from 'react';
import PropTypes from 'prop-types';

//import React, { Fragment } from 'react';

const PrimeraApp = ({saludo, otra}) => {
   
    //if(!saludo) throw new Error("El saludo es necesario");

    //  Los objetos no se pueden imprimir directamente
    const saludo2 = {
        nombre: 'Federico',
        edad: 25
    }
    const string = "Buenas tardes";
    const numeros = 123.45;
    const arreglo = [1,2,3,4,5,6]

    // Forma corta de devolver un Fragment, no sería necesario importar
    return (
        <>
            <h1>{saludo}</h1>
            <h2>{string}</h2>
            <h2>{numeros}</h2>
            <h2>{otra}</h2>
            <p>Mi primera aplicación</p>
            <p>Los booleanos no se imprimen: {true}</p>
            <p>{arreglo}</p>
            <pre>{JSON.stringify(saludo2, null, 3)}</pre>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}

export default PrimeraApp;