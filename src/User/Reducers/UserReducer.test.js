import UserReducer from './UserReducer';
import { USER_SUCCESS } from '../Actions/UserActions';

describe('User Reducer ', () => {
    it('should set the GetUser into the user when it is a success', () => {
        const initialState = null;
        const user = { name: 'Username', id: '123456789' };
        const action = { type: USER_SUCCESS, payload: { user: user } };

        const actualNextState = UserReducer(initialState, action);
        expect(actualNextState).toEqual(user);
    });

});
