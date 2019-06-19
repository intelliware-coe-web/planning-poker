import {
    CURRENT_MEETING_ERROR,
    CURRENT_MEETING_GET_REQUESTED,
    CURRENT_MEETING_SUCCESS,
    getCurrentMeetingAsync,
    UPDATE_CURRENT_STORY_REQUESTED,
    UpdateCurrentStory,
    updateCurrentStoryAsync,
    watchCurrentMeetingAsync
} from "./CurrentMeetingActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {CurrentMeetingId} from '../../Common/selectors';

describe('CurrentMeeting Actions', () => {
    let fixture;

    describe('GetCurrentMeeting', () => {
        const meetingId = '2342nioewro2342';

        beforeEach(() => {
            fixture = getCurrentMeetingAsync({payload: meetingId});
        });

        it('should dispatch action when meeting not in store', () => {
            const ApiResponse = [];
            expect(fixture.next().value).toEqual(select(CurrentMeetingId));
            expect(fixture.next(null).value).toEqual(call(MeetingAPI.byId, meetingId));
            expect(fixture.next(ApiResponse).value).toEqual(put({
                type: CURRENT_MEETING_SUCCESS,
                payload: {currentMeeting: ApiResponse}
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should not dispatch action when meeting is in store', () => {
            expect(fixture.next().value).toEqual(select(CurrentMeetingId));
            expect(fixture.next(meetingId).done).toBeTruthy();
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

    describe('UpdateCurrentStory', () => {
        const meetingId = '123';
        const storyId = 'story12342';

        beforeEach(() => {
            fixture = updateCurrentStoryAsync({payload: {meetingId, storyId}});
        });

        it('should dispatch action', () => {
            expect(fixture.next(meetingId).value).toEqual(call(MeetingAPI.updateCurrentStory, meetingId, {storyId: storyId}));
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

    describe('watchCurrentMeetingAsync', () => {
        const watcher = watchCurrentMeetingAsync();

        expect(watcher.next().value).toEqual(takeLatest(CURRENT_MEETING_GET_REQUESTED, getCurrentMeetingAsync));
        expect(watcher.next().value).toEqual(takeLatest(UPDATE_CURRENT_STORY_REQUESTED, updateCurrentStoryAsync));
    });

    describe('Public Functions', () => {
        let expectedResponse, actualResponse;

        it('should return correct JSON resonse for UpdateCurrentStory', () => {
            const meetingId = '123';
            const storyId = 'story12342';

            expectedResponse = {type: UPDATE_CURRENT_STORY_REQUESTED, payload: {meetingId, storyId}};
            actualResponse = UpdateCurrentStory(meetingId, storyId);
            expect(expectedResponse).toEqual(actualResponse);
        });
    });
});