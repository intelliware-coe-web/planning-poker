import { MeetingAPI } from '../API/Meeting.api';
import { takeLatest, call, put } from 'redux-saga/effects';
import { viewMeetings } from '../../Navigation/route-actions';

export const MEETINGS_SUCCESS = 'MEETINGS_SUCCESS';
export const MEETINGS_ERROR = 'MEETINGS_ERROR';
export const MEETINGS_GET_REQUESTED = 'MEETINGS_GET_REQUESTED';
export const MEETING_POST_REQUESTED = 'MEETING_POST_REQUESTED';

export function* watchMeetingsAsync() {
    yield takeLatest(MEETINGS_GET_REQUESTED, getMeetingsAsync);
    yield takeLatest(MEETING_POST_REQUESTED, postMeetingAsync);
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

export function PostMeeting(meetingName) {
    return {
        type: MEETING_POST_REQUESTED,
        payload: meetingName
    }
}

export function* postMeetingAsync({payload: meetingName}){
    try {
        yield call(MeetingAPI.create, GenerateBody(meetingName));
        yield put(viewMeetings())
    }
    catch (e) {
        yield put(MeetingsError(e));
    }
}

function GenerateBody(meetingName) {
    return  {
        name: meetingName
    };
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
