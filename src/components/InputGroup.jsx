'use client';

import { Skeleton, TextField } from '@mui/material';
import { useState } from 'react';

const InputGroup = ({ label, type, defaultValue, editMode, loading, disabled, error, resetErrors, customType, className, ...rest}) => {
    // const [newValue, setNewValue] = useState(value || '');

    const handleChange = (e) => {
        resetErrors();

        const regex = /^[0-9]*$/;
        if (customType && regex.test(e.target.value)) {
            setNewValue(e.target.value);
        } else if (!customType) {
            setNewValue(e.target.value);
        }
    }

    return (
        <div className={`flex items-center w-full my-4 ${className || ''}`}>
            {
                loading ?
                    <div className="flex items-center w-full my-4">
                        <label className="py-3 px-4 text-(var--(titles-foreground))">{label}:</label>
                        <div>
                            <Skeleton variant="text" width={300} height={30} className="bg-[#4e4e4e]" />
                        </div>
                    </div>
                    : editMode ?
                        <TextField
                            label={label}
                            name={label}
                            onChange={handleChange}
                            variant="standard"
                            color="primary"
                            type={type}
                            // value={newValue}
                            defaultValue={defaultValue}
                            disabled={disabled}
                            error={error}
                            {...rest}
                            fullWidth />
                        :
                        <>
                            <label className="text-(var(--titles-foreground)) py-3 px-4">{label}:</label>
                            <span className="py-3 px-4 text-[#ccc] flex-[1]">{value}</span>
                        </>
            }
        </div>
    )
}

export default InputGroup;