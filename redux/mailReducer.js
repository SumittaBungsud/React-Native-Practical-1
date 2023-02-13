import { createSlice } from "@reduxjs/toolkit";
// import uuid from 'uuid-random';

const initialState = {
    to: '',
    subject: '',
    msg: '',
    cc: '',
    bcc: '',
};

export const mailReducer = createSlice({
    name: 'mailbody',
    initialState,
    reducers: { 
        setTo: (state, action) => {
            state.to = action.payload
        },
        setSub: (state, action) => {
            state.subject = action.payload
        },
        setMsg: (state, action) => {
            state.msg = action.payload
        },
        setCc: (state, action) => {
            state.cc = action.payload
        },
        setBcc: (state, action) => {
            state.bcc = action.payload
        },
    },
});

export const { setTo, setSub,setMsg, setCc, setBcc } = mailReducer.actions;
export default mailReducer.reducer;