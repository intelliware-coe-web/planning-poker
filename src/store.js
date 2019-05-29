import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from './Reducers/RootReducer'
import {routerMiddleware} from "connected-react-router";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory();
export default function store() {
    return createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(
            routerMiddleware(history),
            thunk))
    );
};