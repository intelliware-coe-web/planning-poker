import { push, LOCATION_CHANGE } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';
import { GetStories } from '../Stories/Actions/StoriesActions';
import { GetCurrentMeeting } from '../CurrentMeeting/Actions/CurrentMeetingActions';
import { GetCurrentStory, StopCurrentStoryPolling } from "../CurrentStory/Actions/CurrentStoryActions";
import { GetStoryEstimates, StopStoryEstimatesPolling } from "../CurrentStory/Actions/StoryEstimatesActions"

export const viewCreateMeeting = () => push('/meeting/create/');
export const viewCreateStory = () => push('/story/create/');

const VIEW_MEETING = 'VIEW_MEETING';

export function viewMeeting(meetingId) {
  return {
    type: VIEW_MEETING,
    payload: meetingId
  }
}

export function* viewMeetingSaga(action) {
  yield put(GetCurrentMeeting(action.payload));
  yield put(push(`/estimate/${ action.payload }`));
}

const VIEW_MEETINGS = 'VIEW_MEETINGS';

export function viewMeetings() {
  return {
    type: VIEW_MEETINGS
  }
}

export function* viewMeetingsSaga() {
  yield put(GetMeetings());
  yield put(push('/meetings/'));
}

const VIEW_STORIES = 'VIEW_STORIES';

export function viewStories() {
  return {
    type: VIEW_STORIES
  }
}

export function* viewStoriesSaga() {
  yield put(GetStories());
  yield put(push('/stories/'));
}

const VIEW_STORY = 'VIEW_STORY';

export function viewStory(storyId) {
  return {
    type: VIEW_STORY,
    payload: storyId
  }
}

export function* viewStorySaga(action) {
  yield put(push(`/story/summary/${ action.payload }`));
}

export function* routerActions(action){
  if(action.payload.location.pathname.startsWith("/estimate/")) {
    yield put(GetCurrentStory(action.payload.location.pathname.split('/estimate/')[1]));
  } else {
    yield put(StopCurrentStoryPolling());
  }
  
  if (action.payload.location.pathname.startsWith("/story/summary/")) {
    yield put(GetStoryEstimates(action.payload.location.pathname.split('/story/summary/')[1]));
  } else {    
    yield put(StopStoryEstimatesPolling());
  }
}

export function* watchRouterAsync() {
  yield takeLatest(VIEW_MEETINGS, viewMeetingsSaga);
  yield takeLatest(VIEW_MEETING, viewMeetingSaga);
  yield takeLatest(VIEW_STORIES, viewStoriesSaga);
  yield takeLatest(VIEW_STORY, viewStorySaga);
  yield takeLatest(LOCATION_CHANGE, routerActions);
}
