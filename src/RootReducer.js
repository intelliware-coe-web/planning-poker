import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './User/Reducers/UserReducer';
import storyEstimate from './Stories/Reducers/StoryEstimateReducer';
import meetings from './Meetings/Reducers/MeetingsReducer';
import stories from './Stories/Reducers/StoriesReducer';
import error from './ErrorReducer';
import currentMeeting from './Meetings/Reducers/CurrentMeetingReducer';
import currentStory from './CurrentStory/Reducers/CurrentStoryReducer'
import storyEstimates from './Stories/Reducers/StoryEstimatesReducer';

export default (history) =>
  combineReducers({
      router: connectRouter(history),
      storyEstimate,
      user,
      meetings,
      stories,
      currentMeeting,
      currentStory,
      storyEstimates,
      error
    }
  );
