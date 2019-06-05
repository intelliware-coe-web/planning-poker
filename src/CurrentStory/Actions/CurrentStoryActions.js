import { CurrentStoryAPI } from '../API/CurrentStory.api'
import { takeLatest, call, put } from 'redux-saga/effects';

export const CURRENT_STORY_SUCCESS = 'CURRENT_STORY_SUCCESS';
export const CURRENT_STORY_ERROR = 'CURRENT_STORY_ERROR';
export const CURRENT_STORY_GET_REQUESTED = 'CURRENT_MEETING_GET_REQUESTED';

export function* watchCurrentStoryAsync() {
    yield takeLatest(CURRENT_STORY_GET_REQUESTED, getCurrentStoryAsync);
}

export function GetCurrentStory(meetingId) {
    return {
        type: CURRENT_STORY_GET_REQUESTED,
        payload: meetingId
    }
}

export function* getCurrentStoryAsync({payload: meetingId}){
    try {
        const story = yield call(CurrentStoryAPI.byId, meetingId);
        yield put(CurrentStorySuccess(story));
    }
    catch (e) {
        yield put(CurrentStoryError(e));
    }
}

export function CurrentStorySuccess(currentStory) {
    return {
        type: CURRENT_STORY_SUCCESS,
        payload: {currentStory}
    };
}

export function CurrentStoryError(error) {
    return {
        type: CURRENT_STORY_ERROR,
        payload: {error}
    };
}
