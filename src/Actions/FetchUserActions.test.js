import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    FetchUser,
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from "./FetchUserActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test thunk action creator', () => {
    it('expected actions should be dispatched on successful request', () => {
          const store = mockStore({});
          const expectedActions = [
              FETCH_USER_LOADING,
              FETCH_USER_SUCCESS
          ];

           const mockSuccessResponse = {
               'name': 'Username',
               'id': '123456789'
           };
           const mockJsonPromise = Promise.resolve(mockSuccessResponse);
           const mockFetchPromise = Promise.resolve({
               ok: true,
               json: () => mockJsonPromise,
           });
           jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

           return store.dispatch(FetchUser()).then(() => {
               let actualActions = store.getActions().map(action => action.type);
               expect(actualActions).toEqual(expectedActions);
               global.fetch.mockClear();
           });
   });


    it('expected actions should be dispatched on failed request', () => {
        const store = mockStore({});
        const expectedActions = [
            FETCH_USER_LOADING,
            FETCH_USER_ERROR
        ];
        const mockFailureResponse = {
            'errorMessage': 'Not Found'
        };
        const mockJsonPromise = Promise.reject(mockFailureResponse);
        const mockFetchPromise = Promise.reject({
            ok: false,
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        return store.dispatch(FetchUser()).then(() => {
            let actualActions = store.getActions().map(action => action.type);
            expect(actualActions).toEqual(expectedActions);
            global.fetch.mockClear();
        });
    });


});