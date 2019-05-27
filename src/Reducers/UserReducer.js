import {
    USER_HAS_ERRORED,
    USER_IS_LOADING,
    USER_FETCH_DATA_SUCCESS
} from "../Actions/UserActions";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case USER_IS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };

        case USER_FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.user
            };

        case USER_HAS_ERRORED:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}