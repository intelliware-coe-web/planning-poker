import {
    POLLING_DELAY,
    pollStoryEstimatesAsync,
    StartPollingStoryEstimates,
    StopPollingStoryEstimates,
    STORY_ESTIMATES_ERROR,
    STORY_ESTIMATES_START_POLLING_REQUESTED,
    STORY_ESTIMATES_STOP_POLLING_REQUESTED,
    STORY_ESTIMATES_SUCCESS,
    watchStoryEstimatesAsync
} from "./StoryEstimatesActions";
import {StoriesAPI} from "../API/Stories.api";
import {call, delay, put, race, take} from 'redux-saga/effects';

describe('StoryEstimates Actions', () => {
    let fixture;
    describe('GetStoryEstimates', () => {
        describe('GetStoryEstimatesAsync', () => {
            const storyId = '2342nioewro2342';

            beforeEach(() => {
                fixture = pollStoryEstimatesAsync({payload: storyId});
            });

            it('should dispatch action', () => {
                const ApiResponse = [];
                expect(fixture.next().value).toEqual(call(StoriesAPI.getStoryEstimates, storyId));
                expect(fixture.next(ApiResponse).value).toEqual(put({
                    type: STORY_ESTIMATES_SUCCESS,
                    payload: {storyEstimates: ApiResponse}
                }));
                expect(fixture.next().value).toEqual(delay(POLLING_DELAY));
                expect(fixture.next().done).toBeFalsy();
            });

            it('should handle errors', () => {
                fixture.next();
                let e = {message: 'Failed!'};
                expect(fixture.throw(e).value).toEqual(put({
                    type: STORY_ESTIMATES_ERROR,
                    payload: {
                        error: e
                    }
                }));
                expect(fixture.next().done).toBeFalsy();
            });
        });

        describe('GetStoryEstimates', () => {
            it('should return correct JSON', () => {
                const mockStoryId = 'MockMeetingId';
                const expectedGetStoryEstimatesJSON = {
                    type: STORY_ESTIMATES_START_POLLING_REQUESTED,
                    payload: mockStoryId
                };
                const actualGetStoryEstimateJSON = StartPollingStoryEstimates(mockStoryId);
                expect(actualGetStoryEstimateJSON).toEqual(expectedGetStoryEstimatesJSON);

            });
        });
    });

    describe('StoryEstimates Polling', () => {
        describe('StopStoryEstimatesPolling', () => {
            it('should return correct JSON', () => {
                const expectedStopStoryEstimatesPollingJSON = {
                    type: STORY_ESTIMATES_STOP_POLLING_REQUESTED
                };
                const actualStopStoryEstimatesPollingJSON = StopPollingStoryEstimates();
                expect(actualStopStoryEstimatesPollingJSON).toEqual(expectedStopStoryEstimatesPollingJSON);

            });
        });

        describe('WatchStoryEstimatesAsync', () => {
            it('should watch view actions', () => {
                const watcher = watchStoryEstimatesAsync();
                expect(watcher.next().value).toEqual(take(STORY_ESTIMATES_START_POLLING_REQUESTED));
                const payload = 'meetingId';
                expect(watcher.next(payload).value).toEqual(race({
                    task: call(pollStoryEstimatesAsync, payload),
                    cancel: take(STORY_ESTIMATES_STOP_POLLING_REQUESTED)
                }));
                expect(watcher.next().done).toBeFalsy();
            });
        });
    });
});