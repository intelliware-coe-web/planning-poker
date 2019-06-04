import { MeetingAPI } from '../API/Meeting.api'
import { takeLatest, call, put } from '@redux-saga/core/effects';

export const CURRENT_MEETING_SUCCESS = 'CURRENT_MEETING_SUCCESS';
export const CURRENT_MEETING_ERROR = 'CURRENT_MEETING_ERROR';
export const CURRENT_MEETING_GET_REQUESTED = 'CURRENT_MEETING_GET_REQUESTED';

export function* watchCurrentMeetingAsync() {
    yield takeLatest(CURRENT_MEETING_GET_REQUESTED, getCurrentMeetingAsync);
}

export function GetCurrentMeeting(meetingId) {
    return {
        type: CURRENT_MEETING_GET_REQUESTED,
        payload: meetingId
    }
}

export function* getCurrentMeetingAsync({payload: meetingId}){
    try {
        const meeting = yield call(MeetingAPI.byId, meetingId);
        yield put(CurrentMeetingSuccess(meeting));
    }
    catch (e) {
        yield put(CurrentMeetingError(e));
    }
}

export function CurrentMeetingSuccess(currentMeeting) {
    return {
        type: CURRENT_MEETING_SUCCESS,
        payload: {currentMeeting}
    };
}

export function CurrentMeetingError(error) {
    return {
        type: CURRENT_MEETING_ERROR,
        payload: {error}
    };
}