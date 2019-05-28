import {simpleFetch} from '../Fetch.api';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export function FetchUser(){
    return dispatch => {
        dispatch(FetchUserLoading());
        return simpleFetch('https://planning-poker-241613.appspot.com/users/5cec4362c9606d0ac3fe402f')
            .then(responseJSON => {
                dispatch(FetchUserSuccess(responseJSON));
                return responseJSON;
            })
            .catch(error => dispatch(FetchUserError(error)))
    }
}

export function FetchUserLoading() {
    return {
        type: FETCH_USER_LOADING
    };
}

export function FetchUserSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {user}
    };
}

export function FetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        payload: {error}
    };
}
