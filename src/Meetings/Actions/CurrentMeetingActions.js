import {MeetingAPI} from '../API/Meeting.api';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {CurrentMeetingId} from '../../Common/selectors';

export const CURRENT_MEETING_SUCCESS = 'CURRENT_MEETING_SUCCESS';
export const CURRENT_MEETING_ERROR = 'CURRENT_MEETING_ERROR';
export const CURRENT_MEETING_GET_REQUESTED = 'CURRENT_MEETING_GET_REQUESTED';
export const UPDATE_CURRENT_STORY_REQUESTED = 'UPDATE_CURRENT_STORY_REQUESTED';

export function* watchCurrentMeetingAsync() {
    yield takeLatest(CURRENT_MEETING_GET_REQUESTED, getCurrentMeetingAsync);
    yield takeLatest(UPDATE_CURRENT_STORY_REQUESTED, updateCurrentStoryAsync);
}

export function GetCurrentMeeting(meetingId) {
    return {
        type: CURRENT_MEETING_GET_REQUESTED,
        payload: meetingId
    }
}

export function* getCurrentMeetingAsync({payload: meetingId}) {
    try {
        let currentMeetingId = yield select(CurrentMeetingId);
        if (currentMeetingId === null || currentMeetingId !== meetingId) {
            const meeting = yield call(MeetingAPI.byId, meetingId);
            yield put(CurrentMeetingSuccess(meeting));
        }
    }
    catch (e) {
        yield put(CurrentMeetingError(e));
    }
}

export function UpdateCurrentStory(meetingId, storyId) {
    return {
        type: UPDATE_CURRENT_STORY_REQUESTED,
        payload: {meetingId, storyId}
    }
}

export function* updateCurrentStoryAsync({payload: {meetingId, storyId}}) {
    try {
        yield call(MeetingAPI.updateCurrentStory, meetingId, GenerateBody(storyId));
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

function GenerateBody(storyId) {
    return {
        storyId: storyId
    }
}