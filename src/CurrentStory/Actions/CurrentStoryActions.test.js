import {
    CURRENT_STORY_ERROR,
    CURRENT_STORY_SUCCESS,
    CURRENT_STORY_GET_REQUESTED,
    CURRENT_STORY_STOP_POLLING_REQUESTED,
    CURRENT_STORY_GET_DELAY,
    GetCurrentStory,
    StopCurrentStoryPolling,
    getCurrentStoryAsync,
    watchCurrentStoryAsync
} from "./CurrentStoryActions";
import {CurrentStoryAPI} from "../API/CurrentStory.api";
import {call, put, take, race, delay} from 'redux-saga/effects';

describe('CurrentStory Actions', () => {
    let fixture;

    describe('GetCurrentStoryAsync', () => {
        const meetingId = '2342nioewro2342';

        beforeEach(() => {
            fixture = getCurrentStoryAsync({payload: meetingId});
        });

        it('should dispatch action', () => {
            const ApiResponse = [];
            expect(fixture.next().value).toEqual(call(CurrentStoryAPI.byId, meetingId));
            expect(fixture.next(ApiResponse).value).toEqual(put({
                type: CURRENT_STORY_SUCCESS,
                payload: {currentStory: ApiResponse}
            }));
            expect(fixture.next().value).toEqual(delay(CURRENT_STORY_GET_DELAY));
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
               type: CURRENT_STORY_GET_REQUESTED,
               payload: mockMeetingId
           };
           const actualGetCurrentStoryJSON = GetCurrentStory(mockMeetingId);
           expect(actualGetCurrentStoryJSON).toEqual(expectedGetCurrentStoryJSON);

       });
    });

    describe('StopCurrentStoryPolling', () => {
        it('should return correct JSON', () => {
            const expectedStopCurrentStoryPollingJSON = {
                type: CURRENT_STORY_STOP_POLLING_REQUESTED
            };
            const actualStopCurrentStoryPollingJSON = StopCurrentStoryPolling();
            expect(actualStopCurrentStoryPollingJSON).toEqual(expectedStopCurrentStoryPollingJSON);

        });
    });

    describe('WatchCurrentStoryAsync', () => {
        it('should watch view actions', () => {
            const watcher = watchCurrentStoryAsync();
            expect(watcher.next().value).toEqual(take(CURRENT_STORY_GET_REQUESTED));
            const payload = 'meetingId';
            expect(watcher.next(payload).value).toEqual(race([
                call(getCurrentStoryAsync, payload),
                take(CURRENT_STORY_STOP_POLLING_REQUESTED)
            ]));
            expect(watcher.next().done).toBeFalsy();
        });
    });


});