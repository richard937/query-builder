import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MainSlice from './reducer/MainReduces';

const reducers = combineReducers({
    [MainSlice.name]: MainSlice.reducer
});
const store = configureStore({
    reducer: reducers,
})

export default store;