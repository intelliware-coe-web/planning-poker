import {
    GET_USER_LOADING,
    GET_USER_SUCCESS,
    GET_USER_ERROR
} from "../Actions/UserActions";

const initialState = {
    items: null,
    loading: false,
    error: null
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.user
            };

        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}