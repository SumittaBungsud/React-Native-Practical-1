import { createSlice } from "@reduxjs/toolkit";
// import uuid from 'uuid-random';

const initialState = {
    value2: 0,
    loading: false,
};

export const processReducer = createSlice({
    name: 'process',
    initialState,
    reducers: {
        addValue2: (state, action) => {
            state.value2 = action.payload
        }, 
        isLoading: (state, action) => {
            state.loading = action.payload
        },
    },
});

export const { addValue2, isLoading } = processReducer.actions;
export default processReducer.reducer;