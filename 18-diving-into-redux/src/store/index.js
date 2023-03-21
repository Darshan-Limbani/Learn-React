import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./counter";
import {authReducer} from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;

/*
const counterReducer = (state = initialState, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'INCREASE') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'TOGGLE') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
}

const store = createStore(counterReducer);

export default store

*/