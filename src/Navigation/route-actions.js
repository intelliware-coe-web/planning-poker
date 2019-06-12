import {LOCATION_CHANGE, push, replace} from 'connected-react-router';
import {delay, put, select, takeLatest} from 'redux-saga/effects';
import {GetMeetings} from '../Meetings/Actions/MeetingsActions';
import {GetCurrentMeeting} from '../CurrentMeeting/Actions/CurrentMeetingActions';
import {getCurrentUserId} from "../Common/selectors";

export const viewCreateMeeting = () => push('/meeting/create/');
export const viewCreateStory = () => push('/story/create/');
export const viewMeeting = (meetingId) => push(`/meeting/${ meetingId }/estimate/`);
export const viewStory = (meetingId, storyId) => push(`/meeting/${ meetingId }/story/${ storyId }/summary/`);
export const viewStories = (meetingId) => push(`/meeting/${ meetingId }/stories/`);

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

export function* routerActions(action) {
    const currentUserId = yield select(getCurrentUserId);
    const pathname = action.payload.location.pathname;
    if (currentUserId === null && pathname !== '/') {
        yield delay(1);
        yield put(replace({pathname: '/', state: {'nextPathname': pathname}}));
    }

    if (pathname.startsWith("/meeting/")) {
        const meetingId = pathname.split('/')[2];
        yield put(GetCurrentMeeting(meetingId));
    }
}

export function* watchRouterAsync() {
    yield takeLatest(VIEW_MEETINGS, viewMeetingsSaga);
    yield takeLatest(LOCATION_CHANGE, routerActions);
}
