import {UserAPI} from '../API/User.api';

export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export function GetUser(userID) {
    return dispatch => {
        return UserAPI.byId(userID)
            .then(
                response => UserSuccess(response),
                error => UserError(error)
            )
            .then(dispatch)
    }
}

export function PostUser(username) {
    return dispatch => {
        return UserAPI.create(GenerateBody(username))
            .then(
                response => UserSuccess(response),
                error => UserError(error)
            )
            .then(dispatch)
    }
}

function GenerateBody(username) {
    return  {
        name: username
    };
}

export function UserSuccess(user) {
    return {
        type: USER_SUCCESS,
        payload: {user}
    };
}

export function UserError(error) {
    return {
        type: USER_ERROR,
        payload: {error}
    };
}