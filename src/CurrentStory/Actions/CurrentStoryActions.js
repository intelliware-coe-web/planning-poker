import { CurrentStoryAPI } from '../API/CurrentStory.api'
import { take, call, put, race, delay } from 'redux-saga/effects';

export const CURRENT_STORY_SUCCESS = 'CURRENT_STORY_SUCCESS';
export const CURRENT_STORY_ERROR = 'CURRENT_STORY_ERROR';
export const CURRENT_STORY_GET_REQUESTED = 'CURRENT_MEETING_GET_REQUESTED';
export const CURRENT_STORY_STOP_POLLING_REQUESTED = 'CURRENT_STORY_STOP_POLLING_REQUESTED';

export const CURRENT_STORY_GET_DELAY = 4000;

export function* watchCurrentStoryAsync() {
    while (true) {
        let payload = yield take(CURRENT_STORY_GET_REQUESTED);
        yield race([
            call(getCurrentStoryAsync, payload),
            take(CURRENT_STORY_STOP_POLLING_REQUESTED)
        ]);
    }
}

export function GetCurrentStory(meetingId) {
    return {
        type: CURRENT_STORY_GET_REQUESTED,
        payload: meetingId
    }
}

export function StopCurrentStoryPolling() {
    return {
        type: CURRENT_STORY_STOP_POLLING_REQUESTED
    }
}

export function* getCurrentStoryAsync({payload: meetingId}){
    while(true) {
        try {
            const story = yield call(CurrentStoryAPI.byId, meetingId);
            yield put(CurrentStorySuccess(story));
            yield delay(CURRENT_STORY_GET_DELAY);
        }
        catch (e) {
            yield put(CurrentStoryError(e));
        }
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
