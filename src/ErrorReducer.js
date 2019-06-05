import {MEETINGS_ERROR} from './Meetings/Actions/MeetingsActions';
import {USER_ERROR} from './User/Actions/UserActions';
import {CURRENT_MEETING_ERROR} from './CurrentMeeting/Actions/CurrentMeetingActions';
import {ESTIMATE_ERROR} from "./Estimate/Actions/EstimateActions";
import {STORIES_ERROR} from './Stories/Actions/StoriesActions';
import {CURRENT_STORY_ERROR} from "./CurrentStory/Actions/CurrentStoryActions";

const errorActions = [
  MEETINGS_ERROR,
  USER_ERROR,
  CURRENT_MEETING_ERROR,
  CURRENT_STORY_ERROR,
  ESTIMATE_ERROR,
  STORIES_ERROR
];

export default function errorReducer(state = null, action) {
  if (errorActions.some(type => type === action.type)) {
    return action.payload;
  }
  return null;
}
