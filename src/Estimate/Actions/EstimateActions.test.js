import {EstimateAPI} from "../API/Estimate.api";
import {call, put} from 'redux-saga/effects';
import {
    ESTIMATE_ERROR,
    ESTIMATE_STORY_REQUESTED,
    ESTIMATE_SUCCESS,
    estimateStory,
    putEstimateAsync
} from "./EstimateActions";

describe('Estimate Actions', () => {

    let fixture;
    const userId = 'fakeUserId';
    const storyId = 'fakeStoryId';
    const estimate = 8;

    describe('Put action', () => {

        beforeEach(() => {
            fixture = putEstimateAsync({payload: { userId, storyId, estimate } });
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(EstimateAPI.update, {
                userId: userId,
                storyId: storyId,
                estimate: estimate
            }));
            expect(fixture.next().value).toEqual(put({
                type: ESTIMATE_SUCCESS,
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
                type: ESTIMATE_ERROR,
                payload: {
                    error: e
                }
            }));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Estimate story', () => {
        it('should return json with payload', () => {
             const estimateStoryJSON = estimateStory(userId, storyId, estimate);
             expect(estimateStoryJSON).toEqual({
                 type: ESTIMATE_STORY_REQUESTED,
                 payload: {
                     userId: userId,
                     storyId:storyId,
                     estimate: estimate
                 }
             });

        });
    });
});