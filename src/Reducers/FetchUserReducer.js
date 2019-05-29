import {
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from "../Actions/FetchUserActions";

const initialState = {
    items: null,
    loading: false,
    error: null
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.user
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}