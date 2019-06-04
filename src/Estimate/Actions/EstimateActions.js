import {EstimateAPI} from "../API/Estimate.api";
import {call, put, takeLatest} from 'redux-saga/effects';

export const ESTIMATE_STORY_REQUESTED = 'ESTIMATE_STORY_REQUESTED';
export const ESTIMATE_SUCCESS = 'ESTIMATE_SUCCESS';
export const ESTIMATE_ERROR = 'ESTIMATE_ERROR';


export function* watchEstimateAsync() {
    yield takeLatest(ESTIMATE_STORY_REQUESTED, putEstimateAsync)
}

export function estimateStory(userId, storyId, estimate){
    return {
        type: ESTIMATE_STORY_REQUESTED,
        payload: { userId, storyId, estimate }
    }
}

export function* putEstimateAsync({payload: { userId, storyId, estimate } }){
    try {
        yield call(EstimateAPI.update, GenerateBody(userId, storyId, estimate));
        yield put(estimateSuccess(estimate));
    }
    catch (e) {
        yield put(estimateError(e));
    }
}

function GenerateBody(userId, storyId, estimate) {
    return  {
        userId: userId,
        storyId: storyId,
        estimate: estimate
    };
}

function estimateSuccess(estimate) {
    return {
        type: ESTIMATE_SUCCESS,
        payload: {estimate}
    };
}

function estimateError(error) {
    return {
        type: ESTIMATE_ERROR,
        payload: {error}
    };
}