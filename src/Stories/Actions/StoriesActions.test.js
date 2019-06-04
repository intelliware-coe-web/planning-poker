import { getStoriesAsync, StoriesSuccess, StoriesError, addStoryAsync } from "./StoriesActions";
import { StoriesAPI } from "../API/Stories.api";
import { call, put } from '@redux-saga/core/effects';

describe('Stories Actions', () => {
    let fixture;

    describe('GetStories for given meetingId', () => {
        const meetingId = '123';

        beforeEach(() => { 
            const expectedPayload = {
                id: meetingId
            }
            fixture = getStoriesAsync({payload: expectedPayload});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(StoriesAPI.all, meetingId));
            expect(fixture.next([]).value).toEqual(put(StoriesSuccess([])));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put(StoriesError(e)));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('AddStory for given meetingId', () => {
        const meetingId = '123';
        const storyBody = {
            name: 'Test Story'
        };

        beforeEach(() => { 
            const expectedPayload = {
                id: meetingId,
                body: storyBody
            }
            fixture = addStoryAsync({payload: expectedPayload});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(StoriesAPI.add, meetingId, storyBody));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put(StoriesError(e)));
            expect(fixture.next().done).toBeTruthy();
        });
    });

});