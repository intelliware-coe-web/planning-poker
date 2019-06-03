import { MEETINGS_SUCCESS } from "../Actions/MeetingsActions";

export default function MeetingsReducer(state = [], action) {
    if (action.type === MEETINGS_SUCCESS) {
        return action.payload.meetings;
    } else {
        return state;
    }
}
