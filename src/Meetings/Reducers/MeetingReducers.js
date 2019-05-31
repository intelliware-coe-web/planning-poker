import { UPDATE_MEETINGS, MEETINGS_ERROR } from "../Actions/MeetingsActions";

const defaultState = {
    list: [],
    loading: false,
    error: null
};

export default function MeetingsReducer(state = defaultState, action) {
    switch(action.type) {
        case UPDATE_MEETINGS:
            return {
                ...state,
                loading: false,
                list: action.payload.meetings
            };
        case MEETINGS_ERROR:
            return {
                ...state,
                loading: false,
                list: action.payload.error
            };
        default:
            return state;
    }
}
