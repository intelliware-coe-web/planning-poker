import { StoriesAPI } from '../API/Stories.api'
import { takeLatest, call, put } from '@redux-saga/core/effects';

export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const STORIES_ERROR = 'STORIES_ERROR';
export const STORIES_GET_REQUESTED = 'STORIES_GET_REQUESTED';
export const STORIES_POST_REQUESTED = 'STORIES_POST_REQUESTED';

export function* watchStoriesAsync() {
    yield takeLatest(STORIES_GET_REQUESTED, getStoriesAsync);
    yield takeLatest(STORIES_POST_REQUESTED, addStoryAsync);
}

export function GetStories() {
    return {
        type: STORIES_GET_REQUESTED
    }
}

export function* getStoriesAsync() {
    try {
        const stories = yield call(StoriesAPI.all, '123');
        yield put(StoriesSuccess(stories));
    } catch (error) {
        yield put(StoriesError(error));
    }
}

export function AddStory(storyName) {
    return {
        type: STORIES_POST_REQUESTED,
        payload: {
            name: storyName
        }
    }
}

export function* addStoryAsync({payload}){
    try {
        yield call(StoriesAPI.add, payload);
    }
    catch (e) {
        yield put(StoriesError(e));
    }
}

export function StoriesSuccess(stories) {
    return {
        type: STORIES_SUCCESS,
        payload: {stories: stories}
    };
}

export function StoriesError(error) {
    return {
        type: STORIES_ERROR,
        payload: {error}
    };
}