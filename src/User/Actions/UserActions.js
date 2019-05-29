import {UserAPI} from '../API/User.api'

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export function GetUser(userID){
    return dispatch => {
        dispatch(GetUserLoading());
        return UserAPI.byId(userID)
            .then(responseJSON => {
                dispatch(GetUserSuccess(responseJSON));
                return responseJSON;
            })
            .catch(error => dispatch(GetUserError(error)))
    }
}

export function GetUserLoading() {
    return {
        type: GET_USER_LOADING
    };
}

export function GetUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        payload: {user}
    };
}

export function GetUserError(error) {
    return {
        type: GET_USER_ERROR,
        payload: {error}
    };
}
