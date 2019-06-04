import MeetingsReducer from './MeetingsReducer';
import {MEETINGS_SUCCESS} from "../Actions/MeetingsActions";

describe('Meetings Reducer ', () => {
    it('should set the GetMeeting to a meetings array when it is a success', () => {
        const initialState = [];
        const meetings = [{ name: 'Meeting A', id: '123456789' }];
        const action = { type: MEETINGS_SUCCESS, payload: { meetings: meetings } };

        const actualNextState = MeetingsReducer(initialState, action);
        expect(actualNextState).toEqual(meetings);
    });
});
