import { createSlice } from '@reduxjs/toolkit';

const DisplayTemp = {
    active: "TEMP"
}

const TempDisplay = createSlice({
    name: 'Temp',
    initialState: DisplayTemp,
    reducers: {
        Temp: (state = [], action) => {
            state.active = (Math.round(action.payload));
            console.log(action.payload)
        },
    }
});


export const { Temp } = TempDisplay.actions;
export default TempDisplay.reducer;