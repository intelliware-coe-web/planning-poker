import { CURRENT_MEETING_SUCCESS, CURRENT_MEETING_ERROR } from "../Actions/CurrentMeetingAction";

const defaultState = {
    currentMeeting: null,
    error: null
};

export default function CurrentMeetingReducer(state = defaultState, action) {
    switch(action.type) {
        case CURRENT_MEETING_SUCCESS:
            return {
                ...state,
                currentMeeting: action.payload.meeting
            };
        case CURRENT_MEETING_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}
