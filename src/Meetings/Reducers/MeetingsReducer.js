import { UPDATE_MEETINGS, MEETINGS_ERROR } from "../Actions/MeetingsActions";

const defaultState = {
    meetings: [],
    loading: false,
    error: null
};

export default function MeetingsReducer(state = defaultState, action) {
    switch(action.type) {
        case UPDATE_MEETINGS:
            return {
                ...state,
                loading: false,
                meetings: action.payload.meetings
            };
        case MEETINGS_ERROR:
            return {
                ...state,
                loading: false,
                meetings: action.payload.error
            };
        default:
            return state;
    }
}