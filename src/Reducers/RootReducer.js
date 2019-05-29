import {combineReducers} from 'redux';
import user from './FetchUserReducer';
import { connectRouter } from 'connected-react-router'
import story from "../Estimate/estimate.flux";

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    story
});