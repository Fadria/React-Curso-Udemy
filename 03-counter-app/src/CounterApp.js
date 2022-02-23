import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    // Empezamos el contador con el valor 0
    const [counter, setCounter] = useState(0); // Nos devuelve []

    // Aumentar contador
    const handleAdd = (e) => {
        setCounter(counter+1);
        //setCounter( (c) => c+1);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;