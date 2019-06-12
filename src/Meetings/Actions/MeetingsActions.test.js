import {
    deleteMeetingAsync,
    getMeetingsAsync,
    MEETING_DELETE_REQUESTED,
    MEETING_POST_REQUESTED,
    MEETINGS_ERROR,
    MEETINGS_GET_REQUESTED,
    MEETINGS_SUCCESS,
    postMeetingAsync,
    watchMeetingsAsync,
    GetMeetings,
    PostMeeting,
    DeleteMeeting
} from "./MeetingsActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, put, takeLatest} from 'redux-saga/effects';
import {viewMeetings} from '../../Navigation/route-actions';

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

    describe('Watch Meeetings', () => {
        it('should watch for meetings requests', () => {
            fixture = watchMeetingsAsync();

            expect(fixture.next().value).toEqual(takeLatest(MEETINGS_GET_REQUESTED, getMeetingsAsync));
            expect(fixture.next().value).toEqual(takeLatest(MEETING_POST_REQUESTED, postMeetingAsync));
            expect(fixture.next().value).toEqual(takeLatest(MEETING_DELETE_REQUESTED, deleteMeetingAsync));
        });
    });

    describe('Public methods', () => {
        let actualResponse, expectedResponse;

        it('should return proper JSON response for GetMeetings', () => {
            expectedResponse = { type: MEETINGS_GET_REQUESTED };
            actualResponse = GetMeetings();
            expect(expectedResponse).toEqual(actualResponse);
        });

        it('should return proper JSON response for PostMeetings', () => {
            expectedResponse = { type: MEETING_POST_REQUESTED };
            actualResponse = PostMeeting();
            expect(expectedResponse).toEqual(actualResponse);
        });

        it('should return proper JSON response for DeleteMeetings', () => {
            expectedResponse = { type: MEETING_DELETE_REQUESTED };
            actualResponse = DeleteMeeting();
            expect(expectedResponse).toEqual(actualResponse);
        });
    });
});
