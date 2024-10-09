import React, { useCallback, useState } from 'react';
import './App.css';

import Button from '@mui/material/Button';

import { ADD_FILTER, RESET, SET_TOAST, SET_TOAST_MSG } from './reducer/MainReduces';
import { useDispatch } from 'react-redux';
import ToggleConjunction from './components/ToggleButton';
import Modal from './components/Modal';
import Toasty from './components/Toasty';
import QueryInputs from './components/QueryInputs';
import useSanity from './hooks/useSanity';
import QueryOutput from './components/QueryOutput';

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { isQueryNotComplete } = useSanity();

  const handleFinish = useCallback(() => {
    if (isQueryNotComplete) {
      dispatch(SET_TOAST_MSG('Finish the query !'))
      dispatch(SET_TOAST(true));
      return;
    }

    setOpen(true);
  }, [dispatch, isQueryNotComplete])

  const handleAddQuery = useCallback(() => {
    if (isQueryNotComplete) {
      dispatch(SET_TOAST_MSG('Finish the query !'))
      dispatch(SET_TOAST(true));
      return;
    }

    dispatch(ADD_FILTER());
  }, [dispatch, isQueryNotComplete])

  return (
      <div className="width-100 height-100 flex flex-column flex-center">
        <QueryOutput />
        <div className='width-75 query-builer-section flex flex-column flex-justify-center gap-12 mt20 bg-grey'>
          <ToggleConjunction />
          <QueryInputs />
          <Button variant="contained" className="fit-content bg-purple" onClick={handleAddQuery}>+ Add Filter</Button>
        </div>
        <div className="width-75 flex flex-justify mt20 mb20">
          <Button variant="contained" color="inherit" className="fit-content" onClick={() => {
            dispatch(RESET());
          }}>Reset</Button>
          <Button variant="contained" className="fit-content bg-purple" onClick={handleFinish}>Finish</Button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} />
        <Toasty />
      </div>
  );
}

export default App;
