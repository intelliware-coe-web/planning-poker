import {push, LOCATION_CHANGE} from 'connected-react-router';
import { takeLatest, put } from 'redux-saga/effects';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';

export const viewHost = () => push('/host/');
export const viewMeetings = () => push('/meetings/');
export const viewMeeting = (meetingId) => push(`/estimate?meetingId=${meetingId}`);
export const viewCreateMeeting = () => push('/meeting/create/');
export const viewAddStory = () => push('/stories/add');

export function* watchLocationAsync() {
  yield takeLatest(LOCATION_CHANGE, loadStoreState);
}

export function* loadStoreState(action) {
  if (action.payload.location.pathname === '/meetings/') {
    yield put(GetMeetings());
  }
}
