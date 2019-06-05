import { StoriesAPI } from '../API/Stories.api'
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getCurrentMeetingId } from '../../Common/selectors';
import { viewHost } from '../../Navigation/route-actions';

export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const STORIES_ERROR = 'STORIES_ERROR';
export const STORIES_GET_REQUESTED = 'STORIES_GET_REQUESTED';
export const STORIES_POST_REQUESTED = 'STORIES_POST_REQUESTED';

export function* watchStoriesAsync() {
    yield takeLatest(STORIES_GET_REQUESTED, getStoriesAsync);
    yield takeLatest(STORIES_POST_REQUESTED, createStoryAsync);
}

export function GetStories() {
    return {
        type: STORIES_GET_REQUESTED
    }
}

export function* getStoriesAsync() {
    try {
        const currentMeetingId = yield select(getCurrentMeetingId);
        const stories = yield call(StoriesAPI.all, currentMeetingId);
        yield put(StoriesSuccess(stories));
    } catch (error) {
        yield put(StoriesError(error));
    }
}

export function CreateStory(storyName) {
    return {
        type: STORIES_POST_REQUESTED,
        payload: {
            name: storyName
        }
    }
}

export function* createStoryAsync({payload}){
    try {
        const currentMeetingId = yield select(getCurrentMeetingId);
        yield call(StoriesAPI.post, currentMeetingId, payload);
        yield put(viewHost());
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