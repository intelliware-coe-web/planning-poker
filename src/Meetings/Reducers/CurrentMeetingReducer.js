import { CURRENT_MEETING_SUCCESS } from "../Actions/CurrentMeetingAction";

export default function CurrentMeetingReducer(state = null, action) {
    if (action.type === CURRENT_MEETING_SUCCESS ) {
        return action.payload.currentMeeting;
    } else {
        return state;
    }
}
