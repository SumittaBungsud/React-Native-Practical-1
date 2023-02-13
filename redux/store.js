import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './mailReducer';
import navbarReducer from './navbarReducer';
import processReducer from './processReducer';
// import { addValue } from './redux/mainReducer'
// import { useSelector, useDispatch } from 'react-redux';

// const { value } = useSelector(state => state.stateTarget);
// const dispatch = useDispatch();

export const store = configureStore({
    reducer: {
        navbarMarket: navbarReducer,
        process: processReducer,
        mailbody: mailReducer,
    },
});