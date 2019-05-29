import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

export default function store() {
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
};