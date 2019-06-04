import {GetCurrentMeeting, CURRENT_MEETING_ERROR, CURRENT_MEETING_SUCCESS} from "./CurrentMeetingActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, put} from 'redux-saga/effects';
import { getCurrentMeetingAsync } from "./CurrentMeetingActions";

describe('CurrentMeeting Actions', () => {
    let fixture;

    describe('GetCurrentMeeting', () => {
        const meetingId = '2342nioewro2342';

        beforeEach(() => {
            fixture = getCurrentMeetingAsync({payload: meetingId});
        });

        it('should dispatch action', () => {
            const ApiResponse = [];
            expect(fixture.next().value).toEqual(call(MeetingAPI.byId, meetingId));
            expect(fixture.next(ApiResponse).value).toEqual(put({
                type: CURRENT_MEETING_SUCCESS,
                payload: {currentMeeting: ApiResponse}
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put({
                type: CURRENT_MEETING_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

});