import { CurrentMeetingAPI } from '../API/CurrentMeeting.api'
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {getCurrentMeetingId} from "../../Common/selectors";

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
        let currentMeetingId = yield select(getCurrentMeetingId);
        if(currentMeetingId === null){
            const meeting = yield call(CurrentMeetingAPI.byId, meetingId);
            yield put(CurrentMeetingSuccess(meeting));
        }
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
