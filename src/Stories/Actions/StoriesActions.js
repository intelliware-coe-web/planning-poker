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

export function GetStories(meetingId) {
    return {
        type: STORIES_GET_REQUESTED,
        payload: {
            id: meetingId
        }
    }
}

export function* getStoriesAsync({payload}) {
    try {
        const stories = yield call(StoriesAPI.all, payload.id);
        yield put(StoriesSuccess(stories));
    } catch (error) {
        yield put(StoriesError(error));
    }
}

export function AddStory(meetingId, storyName) {
    return {
        type: STORIES_POST_REQUESTED,
        payload: {
            id: meetingId, 
            body: {
                name: storyName
            }
        }
    }
}

export function* addStoryAsync({payload}){
    try {
        yield call(StoriesAPI.add, payload.id, payload.body);
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