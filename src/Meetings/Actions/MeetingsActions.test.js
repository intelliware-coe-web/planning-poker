import {getMeetingsAsync, MEETINGS_ERROR, MEETINGS_SUCCESS, postMeetingAsync, deleteMeetingAsync} from "./MeetingsActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, put} from 'redux-saga/effects';
import { viewMeetings } from '../../Navigation/route-actions';

describe('Meetings Actions', () => {
    let fixture;

    describe('GetMeetings', () => {

        beforeEach(() => {
            fixture = getMeetingsAsync();
        });

        it('should dispatch action', () => {
            const ApiResponse = [];
            expect(fixture.next().value).toEqual(call(MeetingAPI.all));
            expect(fixture.next(ApiResponse).value).toEqual(put({
                type: MEETINGS_SUCCESS,
                payload: {meetings: ApiResponse}
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: MEETINGS_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('PostMeeting', () => {
        const meetingName = 'Test Meeting Action';
        beforeEach(() => {
            fixture = postMeetingAsync({payload: meetingName});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(MeetingAPI.create, {name: meetingName}));
            expect(fixture.next().value).toEqual(put(viewMeetings()));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: MEETINGS_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('DeleteMeeting', () => {
        const meetingId = 'meeting12334';
        beforeEach(() => {
            fixture = deleteMeetingAsync({payload: meetingId});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(MeetingAPI.delete, meetingId));
            expect(fixture.next().value).toEqual(put(viewMeetings()));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: MEETINGS_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });
});
