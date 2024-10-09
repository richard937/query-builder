import React, { FC } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import CloseIcon from '../assets/close.svg';
import OutPutTab from './OutPutTab';

const Modal: FC<{ open: boolean; onClose: () => void }> = ({ onClose, open }) => {

  return (
      <Dialog
        sx={{
          '& .MuiDialogContent-root': {
            padding: '10px',
          }
        }}
        onClose={onClose}
        open={open}
      >
        <DialogTitle className="bg-purple white">
            Query Output
        </DialogTitle>
        <img src={CloseIcon} alt="close-icon" className="absolute close-icon cursor-pointer" onClick={onClose} height={20} width={20} />
        <DialogContent dividers className="bg-grey">
          <OutPutTab />
        </DialogContent>
      </Dialog>
  );
}

export default Modal;