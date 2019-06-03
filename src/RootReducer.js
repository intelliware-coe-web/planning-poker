import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import estimateStory from './Estimate/Reducers/EstimateStoryReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    meetings,
    estimateStory
});