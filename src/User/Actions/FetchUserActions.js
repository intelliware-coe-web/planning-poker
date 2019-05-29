import {UserAPI} from '../API/User.api'

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export function FetchUser(userID){
    return dispatch => {
        dispatch(FetchUserLoading());
        return UserAPI.byId(userID)
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
