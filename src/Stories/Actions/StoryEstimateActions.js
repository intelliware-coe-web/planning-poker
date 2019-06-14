import {call, put, takeLatest} from 'redux-saga/effects';
import { StoriesAPI } from '../API/Stories.api';

export const STORY_ESTIMATE_REQUESTED = 'STORY_ESTIMATE_REQUESTED';
export const RESET_STORY_ESTIMATE_REQUESTED = 'RESET_STORY_ESTIMATE_REQUESTED';
export const STORY_ESTIMATE_SUCCESS = 'STORY_ESTIMATE_SUCCESS';
export const STORY_ESTIMATE_ERROR = 'STORY_ESTIMATE_ERROR';


export function* watchStoryEstimateAsync() {
    yield takeLatest(STORY_ESTIMATE_REQUESTED, putStoryEstimateAsync);
    yield takeLatest(RESET_STORY_ESTIMATE_REQUESTED, resetStoryEstimateAsync);
}

export function PutStoryEstimate(userId, storyId, estimate){
    return {
        type: STORY_ESTIMATE_REQUESTED,
        payload: { userId, storyId, estimate }
    }
}

export function* putStoryEstimateAsync({payload: { userId, storyId, estimate } }){
    try {
        yield call(StoriesAPI.updateStoryEstimate, storyId, generateBody(userId, estimate));
        yield put(storyEstimateSuccess(estimate));
    }
    catch (e) {
        yield put(storyEstimateError(e));
    }
}

export function ResetStoryEstimate(){
    return {
        type: RESET_STORY_ESTIMATE_REQUESTED
    }
}

export function* resetStoryEstimateAsync(){
    yield put(storyEstimateSuccess(0));
}

function generateBody(userId, estimate) {
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