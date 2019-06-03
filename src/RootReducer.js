import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import estimateStory from './Estimate/Reducers/EstimateStoryReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';
import reduceReducers from 'reduce-reducers';

export const INITIAL_STATE = {
  meetings: [],
  user: {},
  error: null
};

export default (history) =>
  reduceReducers(INITIAL_STATE,
    combineReducers({
      router: connectRouter(history),
      estimateStory
    }),
    user,
    meetings
  );
