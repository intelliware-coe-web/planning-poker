import {getData} from '../Fetch.api';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const FETCH_USER_ENDPOINT = 'https://planning-poker-241613.appspot.com/users/';

export function FetchUser(userID){
    return dispatch => {
        dispatch(FetchUserLoading());
        return getData(FETCH_USER_ENDPOINT+userID)
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
