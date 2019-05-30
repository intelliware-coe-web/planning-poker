import {combineReducers} from 'redux';
import user from './FetchUserReducer';
import meeting from './MeetingReducer';

export default combineReducers({
    user, meeting
});