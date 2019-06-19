import {
    CURRENT_STORY_ERROR,
    CURRENT_STORY_GET_REQUESTED,
    CURRENT_STORY_START_POLLING_REQUESTED,
    CURRENT_STORY_STOP_POLLING_REQUESTED,
    CURRENT_STORY_SUCCESS,
    POLLING_DELAY,
    getCurrentStoryAsync,
    pollCurrentStoryAsync,
    StartPollingCurrentStory,
    StopPollingCurrentStory,
    watchCurrentStoryAsync, CurrentStorySuccess, GetCurrentStory
} from "./CurrentStoryActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, delay, put, race, select, take, takeLatest} from 'redux-saga/effects';
import {CurrentStory} from "../../Common/selectors";
import {ResetStoryEstimate} from "../../Stories/Actions/StoryEstimateActions";

describe('CurrentStory Actions', () => {
    let fixture;

    describe('GetCurrentStory', () => {

        describe('getCurrentStoryAsync', () => {
            const meetingId = 'mockMeetingId';

            beforeEach(() => {
                fixture = getCurrentStoryAsync({payload: meetingId});
            });

            it('should get current story given a meeting id', () => {
                const ApiResponse = {_id: 'Mock story id'};
                expect(fixture.next().value).toEqual(call(MeetingAPI.getCurrentStory, meetingId));
                expect(fixture.next(ApiResponse).value).toEqual(put(CurrentStorySuccess(ApiResponse)));
                expect(fixture.next().done).toBeTruthy();
            });

            it('should handle errors', () => {
                fixture.next();
                let e = {message: 'Failed!'};
                expect(fixture.throw(e).value).toEqual(put({
                    type: CURRENT_STORY_ERROR,
                    payload: {
                        error: e
                    }
                }));
                expect(fixture.next().done).toBeTruthy();
            });
        });

        describe('public accessor', () => {
            it('should return correct JSON', () => {
                const mockMeetingId = 'MockMeetingId';
                const expectedGetCurrentStoryJSON = {
                    type: CURRENT_STORY_GET_REQUESTED,
                    payload: mockMeetingId
                };
                const actualGetCurrentStoryJSON = GetCurrentStory(mockMeetingId);
                expect(actualGetCurrentStoryJSON).toEqual(expectedGetCurrentStoryJSON);

            });
        });

    });

    describe('PollCurrentStory', () => {
        describe('PollCurrentStoryAsync', () => {
            const meetingId = '2342nioewro2342';
            let currentStory = {_id: '2342nioewro2342'};

            beforeEach(() => {
                fixture = pollCurrentStoryAsync({payload: meetingId});
            });

            it('should dispatch action and reset story estimate when story and currentStory ids are not the same', () => {
                const ApiResponse = {_id: 'sdfkgjhsdkjfh'};
                expect(fixture.next().value).toEqual(select(CurrentStory));
                expect(fixture.next(currentStory).value).toEqual(call(MeetingAPI.getCurrentStory, meetingId));
                expect(fixture.next(ApiResponse).value).toEqual(put(ResetStoryEstimate()));
                expect(fixture.next().value).toEqual(put({
                    type: CURRENT_STORY_SUCCESS,
                    payload: {currentStory: ApiResponse}
                }));
                expect(fixture.next().value).toEqual(delay(POLLING_DELAY));
                expect(fixture.next().done).toBeFalsy();
            });

            it('should dispatch action and not reset story estimate when story and currentStory ids are the same', () => {
                const ApiResponse = {_id: 'thesameid'};
                currentStory = {_id: 'thesameid'};
                expect(fixture.next().value).toEqual(select(CurrentStory));
                expect(fixture.next(currentStory).value).toEqual(call(MeetingAPI.getCurrentStory, meetingId));
                expect(fixture.next(ApiResponse).value).toEqual('');
                expect(fixture.next().value).toEqual(put({
                    type: CURRENT_STORY_SUCCESS,
                    payload: {currentStory: ApiResponse}
                }));
                expect(fixture.next().value).toEqual(delay(POLLING_DELAY));
                expect(fixture.next().done).toBeFalsy();
            });

            it('should dispatch action and reset story estimate when story is null and currentStory is not null', () => {
                const ApiResponse = {_id: 'sdfkgjhsdkjfh'};
                expect(fixture.next().value).toEqual(select(CurrentStory));
                expect(fixture.next(currentStory).value).toEqual(call(MeetingAPI.getCurrentStory, meetingId));
                expect(fixture.next(ApiResponse).value).toEqual(put(ResetStoryEstimate()));
                expect(fixture.next().value).toEqual(put({
                    type: CURRENT_STORY_SUCCESS,
                    payload: {currentStory: ApiResponse}
                }));
                expect(fixture.next().value).toEqual(delay(POLLING_DELAY));
                expect(fixture.next().done).toBeFalsy();
            });

            it('should dispatch action and not reset story estimate when story and currentStory._id are null', () => {
                const ApiResponse = null;
                currentStory = {_id: null};
                expect(fixture.next().value).toEqual(select(CurrentStory));
                expect(fixture.next(currentStory).value).toEqual(call(MeetingAPI.getCurrentStory, meetingId));
                expect(fixture.next(ApiResponse).value).toEqual('');
                expect(fixture.next().value).toEqual(put({
                    type: CURRENT_STORY_SUCCESS,
                    payload: {currentStory: ApiResponse}
                }));
                expect(fixture.next().value).toEqual(delay(POLLING_DELAY));
                expect(fixture.next().done).toBeFalsy();
            });

            it('should handle errors', () => {
                fixture.next();
                let e = {message: 'Failed!'};
                expect(fixture.throw(e).value).toEqual(put({
                    type: CURRENT_STORY_ERROR,
                    payload: {
                        error: e
                    }
                }));
                expect(fixture.next().done).toBeFalsy();
            });
        });
    });

    describe('CurrentStory Polling', () => {
        describe('StopPollingCurrentStory', () => {
            it('should return correct JSON', () => {
                const expectedStopPollingCurrentStoryJSON = {
                    type: CURRENT_STORY_STOP_POLLING_REQUESTED
                };
                const actualStopPollingCurrentStoryJSON = StopPollingCurrentStory();
                expect(actualStopPollingCurrentStoryJSON).toEqual(expectedStopPollingCurrentStoryJSON);

            });
        });

        describe('StartPollingCurrentStory', () => {
            it('should return correct JSON', () => {
                const mockMeetingId = 'MockMeetingId';
                const expectedStartPollingCurrentStoryJSON = {
                    type: CURRENT_STORY_START_POLLING_REQUESTED,
                    payload: mockMeetingId
                };
                const actualStartPollingCurrentStoryJSON = StartPollingCurrentStory(mockMeetingId);
                expect(actualStartPollingCurrentStoryJSON).toEqual(expectedStartPollingCurrentStoryJSON);

            });
        });

        describe('WatchCurrentStoryAsync', () => {
            it('should watch view actions', () => {
                const watcher = watchCurrentStoryAsync();
                expect(watcher.next().value).toEqual(takeLatest(CURRENT_STORY_GET_REQUESTED, getCurrentStoryAsync));
                expect(watcher.next().value).toEqual(take(CURRENT_STORY_START_POLLING_REQUESTED));
                const payload = 'meetingId';
                expect(watcher.next(payload).value).toEqual(race({
                    task: call(pollCurrentStoryAsync, payload),
                    cancel: take(CURRENT_STORY_STOP_POLLING_REQUESTED)
                }));
                expect(watcher.next().done).toBeFalsy();
            });
        });
    });
});