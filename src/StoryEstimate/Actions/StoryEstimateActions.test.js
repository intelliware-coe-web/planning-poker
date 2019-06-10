import {StoryEstimateAPI} from "../API/StoryEstimate.api";
import {call, put} from 'redux-saga/effects';
import {
    STORY_ESTIMATE_ERROR,
    STORY_ESTIMATE_SUCCESS,
    STORY_ESTIMATE_REQUESTED,
    putStoryEstimate,
    putStoryEstimateAsync
} from "./StoryEstimateActions";

describe('Story Estimate Actions', () => {

    let fixture;
    const userId = 'fakeUserId';
    const storyId = 'fakeStoryId';
    const storyEstimate = 8;

    describe('Put action', () => {

        beforeEach(() => {
            fixture = putStoryEstimateAsync({payload: { userId, storyId, storyEstimate } });
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(StoryEstimateAPI.update, storyId, {
                user: userId,
                storyEstimate: storyEstimate
            }));
            expect(fixture.next().value).toEqual(put({
                type: STORY_ESTIMATE_SUCCESS,
                payload: {
                    storyEstimate: storyEstimate
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

    describe('Story Estimate', () => {
        it('should return json with payload', () => {
             const storyEstimateJSON = putStoryEstimate(userId, storyId, storyEstimate);
             expect(storyEstimateJSON).toEqual({
                 type: STORY_ESTIMATE_REQUESTED,
                 payload: {
                    userId: userId,
                    storyId:storyId,
                    storyEstimate: storyEstimate
                 }
             });

        });
    });
});