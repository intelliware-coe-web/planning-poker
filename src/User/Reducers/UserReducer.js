import {USER_ERROR, USER_SUCCESS} from "../Actions/UserActions";

const initialState = {
    user: null,
    error: null
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            };

        case USER_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}