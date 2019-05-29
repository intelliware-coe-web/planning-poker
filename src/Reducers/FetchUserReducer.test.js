import UserReducer from './FetchUserReducer';
import {
    FETCH_USER_ERROR,
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS
} from "../Actions/FetchUserActions";

describe('User Reducer ', () => {

   it('should set loading to true when it is loading', () => {
       const initialState = {
           items: null,
           loading: false,
           error: null
       };

       const action = {
           type: FETCH_USER_LOADING
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
            type: FETCH_USER_ERROR,
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

    it('should set the user into the items, and loading to false when it is a success', () => {
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
            type: FETCH_USER_SUCCESS,
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