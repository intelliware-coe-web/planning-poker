import {
    CURRENT_STORY_ERROR,
    CURRENT_STORY_SUCCESS,
    GetCurrentStory,
    getCurrentStoryAsync
} from "./CurrentStoryActions";
import {CurrentStoryAPI} from "../API/CurrentStory.api";
import {call, put} from 'redux-saga/effects';

describe('CurrentStory Actions', () => {
    let fixture;

    describe('GetCurrentStory', () => {
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

});