import {LOCATION_CHANGE, push, replace} from 'connected-react-router';
import {delay, put, select, takeLatest} from 'redux-saga/effects';
import {GetCurrentMeeting} from '../Meetings/Actions/CurrentMeetingActions';
import {CurrentMeetingId, CurrentUserId} from "../Common/selectors";

export const viewCreateMeeting = () => push('/meeting/create/');
export const viewCreateStory = () => push('/story/create/');
export const viewMeeting = (meetingId) => push(`/meeting/${ meetingId }/estimate/`);
export const viewStory = (meetingId, storyId) => push(`/meeting/${ meetingId }/story/${ storyId }/summary/`);
export const viewStories = (meetingId) => push(`/meeting/${ meetingId }/stories/`);
export const refreshStories = (meetingId) => replace(`/meeting/${ meetingId }/stories/`);
export const viewMeetings = () => push('/meetings/');
export const refreshMeetings = () => replace('/meetings/');

export function* routerActions(action) {
    const currentUserId = yield select(CurrentUserId);
    const pathname = action.payload.location.pathname;
    if (currentUserId === null && pathname !== '/') {
        yield delay(1);
        yield put(replace({pathname: '/', state: {'nextPathname': pathname}}));
    }

    if (pathname.startsWith("/meeting/") && !pathname.endsWith('create/')) {
        const meetingId = pathname.split('/')[2];
        yield put(GetCurrentMeeting(meetingId));
    }

    if (pathname.startsWith("/story/create/")) {
        const currentMeetingId = yield select(CurrentMeetingId);
        if (!currentMeetingId) {
            yield delay(1);
            yield put(refreshMeetings());
        }
    }
}

export function* watchRouterAsync() {
    yield takeLatest(LOCATION_CHANGE, routerActions);
}
