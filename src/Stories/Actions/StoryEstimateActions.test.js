import {call, put, takeLatest} from 'redux-saga/effects';
import { StoriesAPI } from '../API/Stories.api';
import {
    PutStoryEstimate,
    putStoryEstimateAsync,
    RESET_STORY_ESTIMATE_REQUESTED,
    ResetStoryEstimate,
    resetStoryEstimateAsync,
    STORY_ESTIMATE_ERROR,
    STORY_ESTIMATE_REQUESTED,
    STORY_ESTIMATE_SUCCESS,
    watchStoryEstimateAsync
} from "./StoryEstimateActions";

describe('Story Estimate Actions', () => {

    let fixture;
    const userId = 'fakeUserId';
    const storyId = 'fakeStoryId';
    const estimate = 8;

    describe('Put action', () => {

        beforeEach(() => {
            fixture = putStoryEstimateAsync({payload: { userId, storyId, estimate } });
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(StoriesAPI.updateStoryEstimate, storyId, {
                user: userId,
                estimate: estimate
            }));
            expect(fixture.next().value).toEqual(put({
                type: STORY_ESTIMATE_SUCCESS,
                payload: {
                    estimate: estimate
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Unable to update estimate'};
            expect(fixture.throw(e).value).toEqual(put({
                type: STORY_ESTIMATE_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Watch', () => {
        it('Story Estimates', () => {
            fixture = watchStoryEstimateAsync();

            expect(fixture.next().value).toEqual(takeLatest(STORY_ESTIMATE_REQUESTED, putStoryEstimateAsync));
            expect(fixture.next().value).toEqual(takeLatest(RESET_STORY_ESTIMATE_REQUESTED, resetStoryEstimateAsync));
        });
    });

    describe('Public methods', () => {
        let actualResponse, expectedResponse;

        it('should return proper JSON response for PutStoryEstimate', () => {
            expectedResponse = {
                type: STORY_ESTIMATE_REQUESTED,
                payload: {
                    userId: userId,
                    storyId:storyId,
                    estimate: estimate
                }
            };
            actualResponse = PutStoryEstimate(userId, storyId, estimate);
            expect(expectedResponse).toEqual(actualResponse);
        });

        it('should return proper JSON response for ResetStoryEstimate', () => {
            expectedResponse = {type: RESET_STORY_ESTIMATE_REQUESTED};
            actualResponse = ResetStoryEstimate();
            expect(expectedResponse).toEqual(actualResponse);
        });
    });

    describe('resetStoryEstimateAsync', () => {
        it('', () => {
            fixture = resetStoryEstimateAsync();
            expect(fixture.next().value).toEqual(put({
                type: STORY_ESTIMATE_SUCCESS,
                payload: {
                    estimate: 0
                }
            }));
        });
    });


});