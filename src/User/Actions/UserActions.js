import {UserAPI} from '../API/User.api';
import {call, put, takeLatest} from 'redux-saga/effects';
import { viewMeetings } from '../../Navigation/route-actions';

export const USER_GET_REQUESTED = 'USER_GET_REQUESTED';
export const USER_POST_REQUESTED = 'USER_POST_REQUESTED';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export function* watchUserAsync() {
    yield takeLatest(USER_GET_REQUESTED, getUserAsync);
    yield takeLatest(USER_POST_REQUESTED, postUserAsync);
}

export function* getUserAsync({payload: userId}) {
    try {
        const user = yield call(UserAPI.byId, userId);
        yield put(UserSuccess(user));
    } catch (e) {
        yield put(UserError(e));
    }
}

export function PostUser(username) {
    return {
        type: USER_POST_REQUESTED,
        payload: username
    }
}

export function* postUserAsync({payload: username}){
    try {
        const user = yield call(UserAPI.create, GenerateBody(username));
        yield put(UserSuccess(user));
        yield put(viewMeetings());
    }
    catch (e) {
        yield put(UserError(e));
    }
}

function GenerateBody(username) {
    return  {
        name: username
    };
}

function UserSuccess(user) {
    return {
        type: USER_SUCCESS,
        payload: {user}
    };
}

function UserError(error) {
    return {
        type: USER_ERROR,
        payload: {error}
    };
}
