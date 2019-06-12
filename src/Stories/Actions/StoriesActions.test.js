import {StoriesSuccess, StoriesError, getStoriesAsync, postStoryAsync} from './StoriesActions';
import {StoriesAPI} from "../API/Stories.api";
import {call, put, select} from 'redux-saga/effects';
import * as Selectors from '../../Common/selectors';
import {viewStories} from '../../Navigation/route-actions';

describe('Stories Actions', () => {
    let fixture;
    const currentMeetingId = '123';
    jest.spyOn(Selectors, 'getCurrentMeetingId').mockReturnValue(() => jest.fn());

    describe('GetStories for currentMeeting', () => {

        beforeEach(() => {
            fixture = getStoriesAsync({payload: currentMeetingId});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(call(StoriesAPI.all, currentMeetingId));
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

    describe('CreateStory for currentMeeting', () => {
        const storyBody = {
            name: 'Test Story'
        };

        beforeEach(() => {
            const expectedPayload = storyBody;
            fixture = postStoryAsync({payload: expectedPayload});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(select(Selectors.getCurrentMeetingId));
            expect(fixture.next(currentMeetingId).value).toEqual(call(StoriesAPI.post, currentMeetingId, storyBody));
            expect(fixture.next().value).toEqual(put(viewStories()));
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