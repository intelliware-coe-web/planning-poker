import CurrentMeetingReducer from './CurrentMeetingReducer';
import {CURRENT_MEETING_SUCCESS, CURRENT_MEETING_ERROR} from "../Actions/CurrentMeetingAction";

describe('Current Meeting Reducer ', () => {

    it('should set the current meeting when it is a success', () => {
        const initialState = { currentMeeting: null, error: null };
        const meeting = { 
            name: 'Meeting A', 
            id: '123456789'
        };
        const action = { type: CURRENT_MEETING_SUCCESS, payload: { currentMeeting: meeting } };
        const expectedNextState = { currentMeeting: meeting, error: null };

        const actualNextState = CurrentMeetingReducer(initialState, action);
        expect(actualNextState).toEqual(expectedNextState);
    });

    it('should set error to true when there is an error', () => {
        const initialState = { currentMeeting: null, error: null };
        const error = "Page Not Found";
        const action = { type: CURRENT_MEETING_ERROR, payload: { error: error } };
        const expectedNextState = { currentMeeting: null, error: error };

        const actualNextState = CurrentMeetingReducer(initialState, action);
        expect(actualNextState).toEqual(expectedNextState);
    });

});
