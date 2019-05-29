import {combineReducers} from 'redux';
import user from './Reducers/FetchUserReducer';
import meetings from './Meetings/Reducers/MeetingsReducer'

export default combineReducers({
    user,
    meetings
});