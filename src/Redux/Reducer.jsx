import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    active: "Delhi"
}

const switchSlice = createSlice({
    name: 'City',
    initialState: initialStateValue,
    reducers: {
        CityName: (state = [], action) => {
            state.active = action.payload;
            // console.log(action.payload);
        }
    }
});

export const { CityName } = switchSlice.actions;
export default switchSlice.reducer;