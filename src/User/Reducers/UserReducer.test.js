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

    it('should keep state on other messages', () =>{
        const inititalState = [];
        const stories = [{
            name: 'Test Story',
            id: '12345'
        }];
        const action = {
            type: 'FOO_STORIES',
            payload: {
                stories: stories
            }
        };

        const actualNextState = UserReducer(inititalState, action);
        expect(actualNextState).toBe(inititalState);
    });
});
