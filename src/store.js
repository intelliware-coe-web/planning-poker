import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/CreateReducer'

export default function store() {
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
};