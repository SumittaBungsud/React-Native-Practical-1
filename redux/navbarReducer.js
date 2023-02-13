import { createSlice } from "@reduxjs/toolkit";
// import uuid from 'uuid-random';

const initialState = {
    value: 'Scroll To Top',
    first: true,
    second: false,
    third: false,
};

export const navbarReducer = createSlice({
    name: 'navbarMarket',
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.value = action.payload
        },
        firstOn: (state, action) => {
            state.first = true
        },
        firstOff: (state, action) => {
            state.first = false
        },
        secondOn: (state, action) => {
            state.second = true
        },
        secondOff: (state, action) => {
            state.second = false
        },
        thirdOn: (state, action) => {
            state.third = true
        },
        thirdOff: (state, action) => {
            state.third = false
        },
    },
});

export const { addValue, firstOn, firstOff, secondOn, secondOff, thirdOn, thirdOff } = navbarReducer.actions;
export default navbarReducer.reducer;