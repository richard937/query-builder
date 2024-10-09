import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { CONJUNCTIONS } from '../utils/Constants';
import { SET_CONJUNCTION, useMainData } from '../reducer/MainReduces';

const ToggleConjunction: FC = () => {
    const dispatch = useDispatch();
    const { conjunction } = useMainData();

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        value: string,
    ) => {
        dispatch(SET_CONJUNCTION(value));
    };

    return (
        <ToggleButtonGroup
            color="primary"
            className="toggle-button"
            value={conjunction}
            exclusive
            onChange={handleChange}
        >
            {
                Object.keys(CONJUNCTIONS).map(key => <ToggleButton key={key} value={CONJUNCTIONS[key]} className={conjunction === CONJUNCTIONS[key] ? 'active' : 'inactive'}>{key}</ToggleButton>)
            }
        </ToggleButtonGroup>
    );
};

export default ToggleConjunction;
