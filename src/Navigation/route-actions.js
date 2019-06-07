import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';
import { GetCurrentMeeting } from '../Meetings/Actions/CurrentMeetingActions';

export const viewHost = () => push('/host/');
export const viewCreateMeeting = () => push('/meeting/create/');
export const viewCreateStory = () => push('/stories/create/');

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

export function* watchRouterAsync() {
  yield takeLatest(VIEW_MEETINGS, viewMeetingsSaga);
  yield takeLatest(VIEW_MEETING, viewMeetingSaga);
}
