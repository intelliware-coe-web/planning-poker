import { CURRENT_MEETING_SUCCESS } from "../Actions/CurrentMeetingActions";

const initialState = {
    "_id": null,
    "name": "Loading Meeting...",
    "current_story": null
};

export default function CurrentMeetingReducer(state = initialState, action) {
    if (action.type === CURRENT_MEETING_SUCCESS ) {
        return action.payload.currentMeeting;
    } else {
        return state;
    }
}
