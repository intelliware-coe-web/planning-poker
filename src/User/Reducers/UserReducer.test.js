import UserReducer from './UserReducer';
import {
    GET_USER_ERROR,
    GET_USER_LOADING,
    GET_USER_SUCCESS
} from "../Actions/UserActions";

describe('User Reducer ', () => {

   it('should set loading to true when it is loading', () => {
       const initialState = {
           items: null,
           loading: false,
           error: null
       };

       const action = {
           type: GET_USER_LOADING
       };

       const expectedNextState = {
           items: null,
           loading: true,
           error: null
       };

       const actualNextState = UserReducer(initialState, action);
       expect(expectedNextState).toEqual(actualNextState);
   });

    it('should set error to true, and loading to false when there is an error', () => {
        const initialState = {
            items: null,
            loading: true,
            error: null
        };

        const error = "Page Not Found";

        const action = {
            type: GET_USER_ERROR,
            payload: {
                error: error
            }
        };

        const expectedNextState = {
            items: null,
            loading: false,
            error: error
        };

        const actualNextState = UserReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });

    it('should set the GetUser into the items, and loading to false when it is a success', () => {
        const initialState = {
            items: null,
            loading: true,
            error: null
        };

        const user = {
            name: 'Username',
            id: '123456789'
        };

        const action = {
            type: GET_USER_SUCCESS,
            payload: {
                user: user
            }
        };

        const expectedNextState = {
            items: user,
            loading: false,
            error: null
        };

        const actualNextState = UserReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });

});