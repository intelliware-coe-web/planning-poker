import { MEETINGS_SUCCESS, MEETINGS_ERROR } from "../Actions/MeetingsActions";

const defaultState = {
    list: [],
    error: null
};

export default function MeetingsReducer(state = defaultState, action) {
    switch(action.type) {
        case MEETINGS_SUCCESS:
            return {
                ...state,
                list: action.payload.meetings
            };
        case MEETINGS_ERROR:
            return {
                ...state,
                list: action.payload.error
            };
        default:
            return state;
    }
}
