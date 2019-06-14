import { MEETINGS_ERROR } from './Meetings/Actions/MeetingsActions';
import { STORY_ESTIMATE_ERROR } from './Stories/Actions/StoryEstimateActions';
import { CURRENT_MEETING_ERROR } from './Meetings/Actions/CurrentMeetingActions';
import { STORIES_ERROR } from './Stories/Actions/StoriesActions';
import { USER_ERROR } from './User/Actions/UserActions';
import { CURRENT_STORY_ERROR } from './Meetings/Actions/CurrentStoryActions';
import { STORY_ESTIMATES_ERROR } from './Stories/Actions/StoryEstimatesActions';
import uikit from "uikit";

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
      uikit.notification({message: '¯\\_(ツ)_/¯ Something went wrong...', status: 'danger', timeout: 4000});
      return action.payload;
  }
  return null;
}
