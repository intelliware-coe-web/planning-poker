import CurrentMeetingReducer from './CurrentMeetingReducer';
import { CURRENT_MEETING_SUCCESS } from "../Actions/CurrentMeetingActions";

describe('Current Meeting Reducer ', () => {
    it('should set the GetMeeting to currentMeeting when it is a success', () => {
        const initialState = [];
        const meeting = { 
            name: 'Meeting A', 
            id: '123456789'
        };
        const action = { type: CURRENT_MEETING_SUCCESS, payload: { currentMeeting: meeting } };

        const actualNextState = CurrentMeetingReducer(initialState, action);
        expect(actualNextState).toEqual(meeting);
    });
});
