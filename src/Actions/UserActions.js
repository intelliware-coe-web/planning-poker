export const USER_HAS_ERRORED = 'USER_HAS_ERRORED';
export const USER_IS_LOADING = 'USER_IS_LOADING';
export const USER_FETCH_DATA_SUCCESS = 'USER_FETCH_DATA_SUCCESS';

export function FetchUser(){
    return dispatch => {
        dispatch(UserIsLoading());
        // TODO: Use fetch api to get endpoint
        return fetch("https://13e1bbdc-3f49-4fc3-8ddf-da248d1ac67e.mock.pstmn.io/users")
            .then(HandleErrors)
            .then(response => response.json)
            .then(responseJSON => {
                dispatch(UserFetchDataSuccess(responseJSON.user));
                return responseJSON.user;
            })
            .catch(error => dispatch(UserHasErrored(error)))
    }
}

function HandleErrors(response) {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}


export function UserHasErrored(error) {
    return {
        type: 'USER_HAS_ERRORED',
        payload: {error}
    };
}
export function UserIsLoading() {
    return {
        type: 'USER_IS_LOADING'
    };
}

export function UserFetchDataSuccess(user) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        payload: {user}
    };
}