import { configureStore } from '@reduxjs/toolkit';
import switchSlice from './Reducer';
import TempDisplay from './TempReducer';

export default configureStore({
    reducer: {
        City: switchSlice,
        Temp: TempDisplay
    }
})