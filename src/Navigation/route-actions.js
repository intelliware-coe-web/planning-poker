import {LOCATION_CHANGE, push, replace} from 'connected-react-router';
import {delay, put, select, takeLatest} from 'redux-saga/effects';
import {GetMeetings} from '../Meetings/Actions/MeetingsActions';
import {GetStories} from '../Stories/Actions/StoriesActions';
import {GetCurrentMeeting} from '../CurrentMeeting/Actions/CurrentMeetingActions';
import {GetCurrentStory, StopCurrentStoryPolling} from "../CurrentStory/Actions/CurrentStoryActions";
import {getCurrentMeetingId, getCurrentUserId} from "../Common/selectors";

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

export function* routerActions(action){
  const currentUserId = yield select(getCurrentUserId);
  const pathname = action.payload.location.pathname;

  if(currentUserId === null && pathname !== '/') {
    yield delay(1);
    yield put(replace({pathname: '/', state: { 'nextPathname': pathname}}));
  }

  // Logic when landing on the estimate page
  if(pathname.startsWith("/estimate/")) {
    const currentMeeting = yield select(getCurrentMeetingId);
    const meetingId = pathname.split('/estimate/')[1];
    yield currentMeeting === null ? put(GetCurrentMeeting(meetingId)) : null;
    yield put(GetCurrentStory(meetingId));
  } else {
    yield put(StopCurrentStoryPolling());
  }
}

export function* watchRouterAsync() {
  yield takeLatest(VIEW_MEETINGS, viewMeetingsSaga);
  yield takeLatest(VIEW_MEETING, viewMeetingSaga);
  yield takeLatest(VIEW_STORIES, viewStoriesSaga);
  yield takeLatest(LOCATION_CHANGE, routerActions);
}
