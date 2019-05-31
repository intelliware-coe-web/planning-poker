import MeetingsReducer from './MeetingsReducer';
import {MEETINGS_ERROR, MEETINGS_SUCCESS} from "../Actions/MeetingsActions";

describe('Meetings Reducer ', () => {

    it('should set error to true when there is an error', () => {
        const initialState = { list: null, error: null };
        const error = "Page Not Found";
        const action = { type: MEETINGS_ERROR, payload: { error: error } };
        const expectedNextState = { list: null, error: error };

        const actualNextState = MeetingsReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });

    it('should set the GetMeeting to a meetings array when it is a success', () => {
        const initialState = { list: null, error: null };
        const meetings = [{ name: 'Meeting A', id: '123456789' }];
        const action = { type: MEETINGS_SUCCESS, payload: { meetings: meetings } };
        const expectedNextState = { list: meetings, error: null };

        const actualNextState = MeetingsReducer(initialState, action);
        expect(actualNextState).toEqual(expectedNextState);
    });

});