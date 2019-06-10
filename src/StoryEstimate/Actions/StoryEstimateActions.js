import {StoryEstimateAPI} from "../API/StoryEstimate.api";
import {call, put, takeLatest} from 'redux-saga/effects';

export const STORY_ESTIMATE_REQUESTED = 'STORY_ESTIMATE_REQUESTED';
export const STORY_ESTIMATE_SUCCESS = 'STORY_ESTIMATE_SUCCESS';
export const STORY_ESTIMATE_ERROR = 'STORY_ESTIMATE_ERROR';


export function* watchStoryEstimateAsync() {
    yield takeLatest(STORY_ESTIMATE_REQUESTED, putStoryEstimateAsync)
}

export function putStoryEstimate(userId, storyId, storyEstimate){
    return {
        type: STORY_ESTIMATE_REQUESTED,
        payload: { userId, storyId, storyEstimate }
    }
}

export function* putStoryEstimateAsync({payload: { userId, storyId, storyEstimate } }){
    try {
        yield call(StoryEstimateAPI.update, storyId, GenerateBody(userId, storyEstimate));
        yield put(storyEstimateSuccess(storyEstimate));
    }
    catch (e) {
        yield put(storyEstimateError(e));
    }
}

function GenerateBody(userId, storyEstimate) {
    return  {
        user: userId,
        storyEstimate: storyEstimate
    };
}

function storyEstimateSuccess(storyEstimate) {
    return {
        type: STORY_ESTIMATE_SUCCESS,
        payload: {storyEstimate}
    };
}

function storyEstimateError(error) {
    return {
        type: STORY_ESTIMATE_ERROR,
        payload: {error}
    };
}