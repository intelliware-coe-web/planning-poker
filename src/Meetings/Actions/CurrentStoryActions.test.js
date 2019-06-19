import {
    CURRENT_STORY_ERROR,
    CURRENT_STORY_SUCCESS,
    CURRENT_STORY_START_POLLING_REQUESTED,
    CURRENT_STORY_STOP_POLLING_REQUESTED,
    POLLING_DELAY,
    StartPollingCurrentStory,
    StopPollingCurrentStory,
    pollCurrentStoryAsync,
    watchCurrentStoryAsync
} from "./CurrentStoryActions";
import {MeetingAPI} from "../API/Meeting.api";
import {call, put, take, race, delay, select} from 'redux-saga/effects';
import {CurrentStory} from "../../Common/selectors";
import {ResetStoryEstimate} from "../../Stories/Actions/StoryEstimateActions";

describe('CurrentStory Actions', () => {
    let fixture;

    describe('GetCurrentStory', () => {
        describe('GetCurrentStoryAsync', () => {
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
                currentStory      = {_id: 'thesameid'};
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
    
        describe('GetCurrentStory', () => {
           it('should return correct JSON', () => {
               const mockMeetingId = 'MockMeetingId';
               const expectedGetCurrentStoryJSON = {
                   type: CURRENT_STORY_START_POLLING_REQUESTED,
                   payload: mockMeetingId
               };
               const actualGetCurrentStoryJSON = StartPollingCurrentStory(mockMeetingId);
               expect(actualGetCurrentStoryJSON).toEqual(expectedGetCurrentStoryJSON);
    
           });
        });
    });

    describe('CurrentStory Polling', () => {
        describe('StopCurrentStoryPolling', () => {
            it('should return correct JSON', () => {
                const expectedStopCurrentStoryPollingJSON = {
                    type: CURRENT_STORY_STOP_POLLING_REQUESTED
                };
                const actualStopCurrentStoryPollingJSON = StopPollingCurrentStory();
                expect(actualStopCurrentStoryPollingJSON).toEqual(expectedStopCurrentStoryPollingJSON);
    
            });
        });
    
        describe('WatchCurrentStoryAsync', () => {
            it('should watch view actions', () => {
                const watcher = watchCurrentStoryAsync();
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