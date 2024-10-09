import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SET_QUERY } from '../reducer/MainReduces';

interface InputSelectProps {
    index: number;
    name: string;
    label: string;
    value: string;
    options: { title: string; value: string }[];
}

const InputSelect: FC<InputSelectProps> = ({ name, label, value, options, index }) => {
    const dispatch = useDispatch();


    const handleChange = (event: SelectChangeEvent, val: any) => {
        dispatch(SET_QUERY({ id: index, key: event.target.name, value: event.target.value }))
    };

    return (
        <div className='width-100'>
            <FormControl fullWidth>
                <InputLabel id="select-label" className="select-label">{label}</InputLabel>
                <Select
                    id="select"
                    className="input-select"
                    value={value}
                    name={name}
                    onChange={handleChange}
                >
                    {
                        options.map((option) => <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default InputSelect;