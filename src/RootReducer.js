import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';
import story from './Estimate/estimate.flux';
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
      story
    }),
    user,
    meetings
  );
