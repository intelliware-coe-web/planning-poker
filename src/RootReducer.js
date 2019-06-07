import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import estimateStory from './Estimate/Reducers/EstimateStoryReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';
import error from './ErrorReducer';
import currentMeeting from './CurrentMeeting/Reducers/CurrentMeetingReducer';
import currentStory from './CurrentStory/Reducers/CurrentStoryReducer'

export default (history) =>
  combineReducers({
      router: connectRouter(history),
      estimateStory,
      user,
      meetings,
      currentMeeting,
      currentStory,
      error
    }
  );
