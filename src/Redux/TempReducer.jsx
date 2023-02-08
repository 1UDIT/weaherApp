import { createSlice } from '@reduxjs/toolkit';

const DisplayTemp = {
    active: "ss"
}

const TempDisplay = createSlice({
    name: 'Temp',
    initialState: DisplayTemp,
    reducers: {
        Temp: (state = [], action) => {
            state.active = (Math.round(action.payload));
        },
    }
});


export const { Temp } = TempDisplay.actions;
export default TempDisplay.reducer;