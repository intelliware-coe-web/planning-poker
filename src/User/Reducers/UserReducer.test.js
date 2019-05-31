import UserReducer from './UserReducer';
import {USER_ERROR, USER_SUCCESS} from "../Actions/UserActions";

describe('User Reducer ', () => {

    it('should set error to true when there is an error', () => {
        const initialState = { user: null, error: null };
        const error = "Page Not Found";
        const action = { type: USER_ERROR, payload: { error: error } };
        const expectedNextState = { user: null, error: error };

        const actualNextState = UserReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });

    it('should set the GetUser into the user when it is a success', () => {
        const initialState = { user: null, error: null };
        const user = { name: 'Username', id: '123456789' };
        const action = { type: USER_SUCCESS, payload: { user: user } };
        const expectedNextState = { user: user, error: null };

        const actualNextState = UserReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });

});