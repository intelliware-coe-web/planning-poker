import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createHashHistory} from 'history';
import createRootReducer from './RootReducer';
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createHashHistory();
export default function store() {
    return createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                sagaMiddleware
        ))
    );
};