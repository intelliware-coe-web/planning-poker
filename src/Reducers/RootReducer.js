import {combineReducers} from 'redux';
import user from './FetchUserReducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    user
});