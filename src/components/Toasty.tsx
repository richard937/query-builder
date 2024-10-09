import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

import { SET_TOAST, useMainData } from '../reducer/MainReduces';

import CloseIcon from '../assets/close.png';

const Toasty: FC = () => {
    const dispatch = useDispatch();
    const { toast, toastMsg } = useMainData();

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(SET_TOAST(false));
    };

    return (
        <Snackbar
            open={toast}
            autoHideDuration={3000}
            onClose={handleClose}
            message={toastMsg}
            action={<img src={CloseIcon} alt="close-icon" className="close-icon" onClick={handleClose} height={20} width={20} />}
        />
    );
};

export default Toasty;
