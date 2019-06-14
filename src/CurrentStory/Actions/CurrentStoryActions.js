import { CurrentStoryAPI } from '../API/CurrentStory.api'
import { take, call, put, race, delay, select } from 'redux-saga/effects';
import {ResetStoryEstimate} from "../../StoryEstimate/Actions/StoryEstimateActions";
import {CurrentStory} from "../../Common/selectors";

export const CURRENT_STORY_SUCCESS = 'CURRENT_STORY_SUCCESS';
export const CURRENT_STORY_ERROR = 'CURRENT_STORY_ERROR';
export const CURRENT_STORY_GET_REQUESTED = 'CURRENT_STORY_GET_REQUESTED';
export const CURRENT_STORY_STOP_POLLING_REQUESTED = 'CURRENT_STORY_STOP_POLLING_REQUESTED';

export const POLLING_DELAY = 4000;

export function* watchCurrentStoryAsync() {
    while (true) {
        let payload = yield take(CURRENT_STORY_GET_REQUESTED);
        yield race({
            task: call(getCurrentStoryAsync, payload),
            cancel: take(CURRENT_STORY_STOP_POLLING_REQUESTED)
        });
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
            const currentStory = yield select(CurrentStory);
            const story = yield call(CurrentStoryAPI.byMeetingId, meetingId);

            if(story) { yield currentStory._id !== story._id ? put(ResetStoryEstimate()) : ''; }
            else      { yield currentStory._id !== null      ? put(ResetStoryEstimate()) : ''; }

            yield put(CurrentStorySuccess(story));
        }
        catch (e) {
            yield put(CurrentStoryError(e));
        }
        yield delay(POLLING_DELAY);
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
