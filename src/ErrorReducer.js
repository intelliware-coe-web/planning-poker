import { MEETINGS_ERROR } from './Meetings/Actions/MeetingsActions';
import { STORY_ESTIMATE_ERROR } from './StoryEstimate/Actions/StoryEstimateActions';
import { CURRENT_MEETING_ERROR } from './Meetings/Actions/CurrentMeetingActions';
import { STORIES_ERROR } from './Stories/Actions/StoriesActions';
import { USER_ERROR } from './User/Actions/UserActions';
import { CURRENT_STORY_ERROR } from './CurrentStory/Actions/CurrentStoryActions';
import { STORY_ESTIMATES_ERROR } from './CurrentStory/Actions/StoryEstimatesActions';

const errorActions = [
  MEETINGS_ERROR,
  USER_ERROR,
  CURRENT_MEETING_ERROR,
  CURRENT_STORY_ERROR,
  STORY_ESTIMATE_ERROR,
  STORIES_ERROR,
  STORY_ESTIMATES_ERROR
];

export default function errorReducer(state = null, action) {
  if (errorActions.some(type => type === action.type)) {
    return action.payload;
  }
  return null;
}
