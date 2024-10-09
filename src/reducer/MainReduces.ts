import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import { DEFAULT_CONJUNCTION } from '../utils/Constants';

const defaultData = { 
    field: '',
    condition: '',
    criteria: '',
}

const INITIAL_STATE = {
    data: [defaultData],
    conjunction: DEFAULT_CONJUNCTION,
    toast: false,
    toastMsg: ''
}

type IMainSlice = typeof INITIAL_STATE;

export const MainSlice = createSlice({
  name: 'mainData',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_FILTER: (state) => {
      state.data = [...state.data, { ...defaultData }]
    },
    RESET: (state) => {
        state.data = [defaultData];
    },
    SET_QUERY: (state, action) => {
        const { id: indexToUpdate, key, value } = action.payload;
        const prevValue = state.data[indexToUpdate];
        state.data[indexToUpdate] = { ...prevValue, [key]: value }
    },
    DELETE_FILTER: (state, action) => {
        const copyArr = [...state.data];
        copyArr.splice(action.payload, 1);
        state.data = copyArr;
    },
    SET_CONJUNCTION: (state, action) => {
        state.conjunction = action.payload;
    },
    SET_TOAST: (state, action) => {
        state.toast = action.payload;
    },
    SET_TOAST_MSG: (state, action) => {
        state.toastMsg = action.payload;
    },
  },
})

interface SampleState {
    [MainSlice.name]: ReturnType<typeof MainSlice.reducer>;
}

export const { ADD_FILTER, RESET, DELETE_FILTER, SET_QUERY, SET_CONJUNCTION, SET_TOAST,SET_TOAST_MSG } = MainSlice.actions;
 
export const useMainData = (): IMainSlice => useSelector((state: SampleState) => state[MainSlice.name]);

export default MainSlice;