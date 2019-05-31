import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import meetings from './Meetings/Reducers/MeetingReducers';
import estimateStory from './Estimate/Reducers/EstimateStoryReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    meetings,
    estimateStory
});