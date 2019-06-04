import CurrentMeetingReducer from './CurrentMeetingReducer';
import { CURRENT_MEETING_SUCCESS } from "../Actions/CurrentMeetingActions";

describe('Current Meeting Reducer ', () => {
    it('should set the GetMeeting to currentMeeting when it is a success', () => {
        const initialState = [];
        const currentMeeting = {
            name: 'Meeting A', 
            id: '123456789'
        };
        const action = { type: CURRENT_MEETING_SUCCESS, payload: { currentMeeting } };

        const actualNextState = CurrentMeetingReducer(initialState, action);
        expect(actualNextState).toEqual(currentMeeting);
    });

    it('should keep state on other messages', () => {
        const initialState = [];
        const currentMeeting = [{ name: 'Meeting A', id: '123456789' }];
        const action = { type: 'FOO_MESSAGE', payload: { currentMeeting} };

        const actualNextState = CurrentMeetingReducer(initialState, action);
        expect(actualNextState).toBe(initialState);
    });
});
