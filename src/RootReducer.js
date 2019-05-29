import {combineReducers} from 'redux';
import FetchUser from './User/Reducers/UserReducer';

export default combineReducers({
    user: FetchUser
});