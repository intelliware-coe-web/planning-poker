import {StoryEstimateAPI} from "../API/StoryEstimate.api";
import {call, put, takeLatest} from 'redux-saga/effects';

export const STORY_ESTIMATE_REQUESTED = 'STORY_ESTIMATE_REQUESTED';
export const STORY_ESTIMATE_SUCCESS = 'STORY_ESTIMATE_SUCCESS';
export const STORY_ESTIMATE_ERROR = 'STORY_ESTIMATE_ERROR';


export function* watchStoryEstimateAsync() {
    yield takeLatest(STORY_ESTIMATE_REQUESTED, putStoryEstimateAsync)
}

export function putStoryEstimate(userId, storyId, estimate){
    return {
        type: STORY_ESTIMATE_REQUESTED,
        payload: { userId, storyId, estimate }
    }
}

export function* putStoryEstimateAsync({payload: { userId, storyId, estimate } }){
    try {
        yield call(StoryEstimateAPI.update, storyId, GenerateBody(userId, estimate));
        yield put(storyEstimateSuccess(estimate));
    }
    catch (e) {
        yield put(storyEstimateError(e));
    }
}

function GenerateBody(userId, estimate) {
    return  {
        user: userId,
        estimate: estimate
    };
}

function storyEstimateSuccess(estimate) {
    return {
        type: STORY_ESTIMATE_SUCCESS,
        payload: {estimate}
    };
}

function storyEstimateError(error) {
    return {
        type: STORY_ESTIMATE_ERROR,
        payload: {error}
    };
}