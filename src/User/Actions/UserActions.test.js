import {getUserAsync, postUserAsync, USER_ERROR, USER_SUCCESS} from "./UserActions";
import {UserAPI} from "../API/User.api";
import {call, put, select} from 'redux-saga/effects';
import { viewMeetings } from '../../Navigation/route-actions';
import {getLocationState} from "../../Common/selectors";
import {push} from "connected-react-router";


describe('Test action creators', () => {
    let fixture;

    describe('Post action', () => {

        beforeEach(() => {
            fixture = postUserAsync({payload: 'Fred'});
        });

        it('should dispatch view meetings action when location state undefined', () => {
            expect(fixture.next().value).toEqual(call(UserAPI.create, { name: 'Fred' }));
            expect(fixture.next('Fred').value).toEqual(put({
                type: USER_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().value).toEqual(select(getLocationState));
            expect(fixture.next(undefined).value).toEqual(put(viewMeetings()));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should dispatch push to next path when state is defined', () => {
            const locationState = {nextPathname: '/nextpath/'};

            expect(fixture.next().value).toEqual(call(UserAPI.create, { name: 'Fred' }));
            expect(fixture.next('Fred').value).toEqual(put({
                type: USER_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().value).toEqual(select(getLocationState));
            expect(fixture.next(locationState).value).toEqual(put(push(locationState.nextPathname)));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Fred you\'re no good!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: USER_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Get action', () => {
        const userId = '123456789';

        beforeEach(() => {
            fixture = getUserAsync({payload: userId});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(UserAPI.byId, userId));
            expect(fixture.next('Fred').value).toEqual(put({
                type: USER_SUCCESS,
                payload: {
                    user: 'Fred'
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Fred you\'re no good!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: USER_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

});
