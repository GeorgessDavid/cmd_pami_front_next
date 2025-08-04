'use client';

import { Button, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

const SearchInput = ({ placeholder, submitFunction, option, options, onchange, customType, loading }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    if (options?.length > 0 && !selectedOption) setSelectedOption(options[0]);

    const onlyNumbers = (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (allowedKeys.includes(e.key)) {
            return;
        }

        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <form onSubmit={submitFunction} className="w-full flex items-center justify-center">
            {
                option &&
                <TextField select label="Buscar por" value={selectedOption} onChange={handleChange} variant="standard" color='primary' size='small' sx={{
                    width: '9.5rem'
                }}>
                    {options.map((option) => (
                        <MenuItem key={option} value={option} selected={option === selectedOption} sx={{
                            textTransform: 'capitalize'
                        }}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </MenuItem>
                    ))}
                </TextField>
            }
            <input type="text" placeholder={`${placeholder}${selectedOption ? selectedOption.toLowerCase() : ''} `} onChange={onchange} onKeyDown={customType === 'numbers' ? onlyNumbers : null} className="flex-[10] p-2 m-2 border-[1px] border-[#ccc] bg-white transition-all duration-300 focus:border-[2px_solid_(var(--titles-foreground))] focus:shadow-[0_0_3px_#133c75] focus:rounded-[0] focus:outline-0" />
            <Button variant="outlined" color='primary' type="submit" loading={loading} sx={
                {
                    borderRadius: '0',
                    transition: 'all 300ms ease-in-out',
                    flex: '1',
                    '&:hover':{
                        backgroundColor: 'var(--titles-foreground)',
                        color: 'white'
                    }

            }} >Buscar</Button>
        </form>
    )
}

export default SearchInput;

SearchInput.defaultProps = {
    placeholder: 'Ingrese el ',
    submitFunction: (e) => e.preventDefault(),
    option: false,
    options: [],
    onchange: () => {},
    customType: null,
    loading: false
};