import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState("");

    const handleImputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategorias(categorias => [setCategorias([inputValue, ...categorias])]);
            setinputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Escriba una categoría a buscar...'
                value={inputValue}
                onChange={handleImputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}