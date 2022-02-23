import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

    // Empezamos el contador con el valor 0
    const [counter, setCounter] = useState(value); // Nos devuelve []

    // Aumentar contador
    const handleAdd = (e) => {
        setCounter( (c) => c+1);
    }

    // Resetear contador
    const handleReset = (e) => setCounter(0);

    // Disminuir contador
    const handleSubstract = () => {
        if (counter != 0){
            setCounter(counter - 1);
        }
    }
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;