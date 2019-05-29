import {combineReducers} from 'redux';
import user from './User/Reducers/UserReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';

export default combineReducers({
    user,
    meetings
});