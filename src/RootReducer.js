import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import story from './Estimate/estimate.flux';
import meeting from './Meetings/Reducers/MeetingReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    story,
    meeting
});