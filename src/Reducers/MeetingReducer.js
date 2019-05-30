import {
    TICKETS_FETCH_ALL
} from "../Actions/MeetingActions";

const initialState = {
    tickets: []
};

export default function MeetingReducer(state = initialState, action) {
    switch(action.type) {
        case TICKETS_FETCH_ALL:
            console.log('reducer action ',action);
            return {
                ...state,
                tickets: action.payload.tickets
            };
        default:
            return state;
    }
}