import {
    DeleteStory,
    deleteStoryAsync, GetStories,
    getStoriesAsync,
    PostStory,
    postStoryAsync,
    STORIES_GET_REQUESTED,
    STORIES_POST_REQUESTED,
    StoriesError,
    StoriesSuccess,
    STORY_DELETE_REQUESTED,
    watchStoriesAsync
} from './StoriesActions';
import {StoriesAPI} from "../API/Stories.api";
import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as Selectors from '../../Common/selectors';
import {viewStories} from '../../Navigation/route-actions';
import {getCurrentMeetingId} from "../../Common/selectors";

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
            fixture = postStoryAsync({payload: storyBody});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(select(Selectors.getCurrentMeetingId));
            expect(fixture.next(currentMeetingId).value).toEqual(call(StoriesAPI.post, currentMeetingId, storyBody));
            expect(fixture.next().value).toEqual(put(viewStories(currentMeetingId)));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put(StoriesError(e)));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('DeleteStory for currentMeeting', () => {
        const storyId = 'story123';

        beforeEach(() => {
            fixture = deleteStoryAsync({payload: storyId});
        });

        it('should dispatch action', () => {
            expect(fixture.next().value).toEqual(select(getCurrentMeetingId));
            expect(fixture.next(currentMeetingId).value).toEqual(call(StoriesAPI.delete, storyId));
            expect(fixture.next().value).toEqual(put(viewStories(currentMeetingId)));
            expect(fixture.next().done).toBeTruthy();
        });

        it('should handle errors', () => {
            fixture.next();
            let e = {message: 'Failed!'};
            expect(fixture.throw(e).value).toEqual(put(StoriesError(e)));
            expect(fixture.next().done).toBeTruthy();
        });
    });

    describe('Watch ', () => {
        it('Stories', () => {
            fixture = watchStoriesAsync();

            expect(fixture.next().value).toEqual(takeLatest(STORIES_GET_REQUESTED, getStoriesAsync));
            expect(fixture.next().value).toEqual(takeLatest(STORIES_POST_REQUESTED, postStoryAsync));
            expect(fixture.next().value).toEqual(takeLatest(STORY_DELETE_REQUESTED, deleteStoryAsync));
        });
    });

    describe('Public methods', () => {
        let actualResponse, expectedResponse;

        it('should return proper JSON response for GetStories', () => {
            expectedResponse = {type: STORIES_GET_REQUESTED, payload: currentMeetingId};
            actualResponse = GetStories(currentMeetingId);
            expect(expectedResponse).toEqual(actualResponse);
        });

        it('should return proper JSON response for PostStory', () => {
            const storyName = 'mockStoryName';
            expectedResponse = {
                type: STORIES_POST_REQUESTED,
                payload: {
                    name : storyName
                }
            };
            actualResponse = PostStory(storyName);
            expect(expectedResponse).toEqual(actualResponse);
        });

        it('should return proper JSON response for DeleteStory', () => {
            expectedResponse = {type: STORY_DELETE_REQUESTED};
            actualResponse = DeleteStory();
            expect(expectedResponse).toEqual(actualResponse);
        });
    });

});