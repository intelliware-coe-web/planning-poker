import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducers/RootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function store() {
    return createStore(
        RootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
};