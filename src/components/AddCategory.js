import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const msg = e.target.value;
        setInputValue(msg);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){

        setCategories(cats => [inputValue, ...cats ]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Busca</h1>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

