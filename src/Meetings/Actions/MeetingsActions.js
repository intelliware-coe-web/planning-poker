import { MeetingAPI } from '../API/Meeting.api'
import { takeLatest, call, put } from '@redux-saga/core/effects';

export const MEETINGS_SUCCESS = 'MEETINGS_SUCCESS';
export const MEETINGS_ERROR = 'MEETINGS_ERROR';
export const MEETINGS_GET_REQUESTED = 'MEETINGS_GET_REQUESTED';

export function* watchMeetingsAsync() {
    yield takeLatest(MEETINGS_GET_REQUESTED, getMeetingsAsync);
}

export function GetMeetings() {
    return {
        type: MEETINGS_GET_REQUESTED
    }
}

export function* getMeetingsAsync() {
    try {
        const meetings = yield call(MeetingAPI.all);
        yield put(MeetingsSuccess(meetings));
    } catch (error) {
        yield put(MeetingsError(error));
    }
}

export function MeetingsSuccess(meetings) {
    return {
        type: MEETINGS_SUCCESS,
        payload: {meetings}
    };
}

export function MeetingsError(error) {
    return {
        type: MEETINGS_ERROR,
        payload: {error}
    };
}