import {
    routerActions,
    viewCreateMeeting,
    viewCreateStory,
    viewMeeting,
    viewMeetings,
    viewMeetingSaga,
    viewMeetingsSaga,
    viewStories,
    viewStoriesSaga,
    viewStory,
    viewStorySaga,
    watchRouterAsync,
} from './route-actions';
import {put, takeLatest, select, delay} from 'redux-saga/effects';
import {LOCATION_CHANGE, push, replace} from 'connected-react-router';
import {GetMeetings} from '../Meetings/Actions/MeetingsActions';
import {GetCurrentMeeting, UpdateCurrentStory} from '../CurrentMeeting/Actions/CurrentMeetingActions';
import {GetStoryEstimates} from "../CurrentStory/Actions/StoryEstimatesActions";
import {getCurrentUserId} from "../Common/selectors";

describe('Route Actions', () => {

    it('should view create meeting', () => {
        expect(viewCreateMeeting()).toEqual(push('/meeting/create/'));
    });

    it('should view create story', () => {
        expect(viewCreateStory()).toEqual(push('/story/create/'));
    });

    it('should create a view meeting action', () => {
        expect(viewMeeting('FOO')).toEqual(push('/meeting/FOO/estimate/'));
    });

    it('should create a view story action', () => {
        expect(viewStory('BAR', 'FOO')).toEqual(push('/meeting/BAR/story/FOO/summary/'));
    });

    it('should create a view meetings action', () => {
        expect(viewMeetings()).toEqual({type: 'VIEW_MEETINGS'});
    });

    it('should create a view stories action', () => {
        expect(viewStories()).toEqual({type: 'VIEW_STORIES'});
    });

    it('should route to meetings', () => {
        const saga = viewMeetingsSaga();
        expect(saga.next().value).toEqual(put(GetMeetings()));
        expect(saga.next().value).toEqual(put(push('/meetings/')));
        expect(saga.next().done).toBeTruthy();
    });

    describe('RouterActions', () => {

        it('should dispatch replace to create page with nextPathName equal to current path name when landing not on create page', () => {
            const mockMeetingId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: `/meeting/${mockMeetingId}/estimate/`
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next(null).value).toEqual(delay(1));
            expect(saga.next().value).toEqual(put(replace({
                pathname: '/',
                state: {'nextPathname': mockRouterPayload.location.pathname}
            })));
        });

        it('should dispatch GetCurrentMeeting if location starts with /meeting/', () => {
            const mockMeetingId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: '/meeting/' + mockMeetingId
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).toEqual(put(GetCurrentMeeting(mockMeetingId)));
        });

        it('should not dispatch GetCurrentMeeting if location does not start with /meeting/', () => {
            const mockMeetingId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: '/notmeeting/' + mockMeetingId
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).not.toEqual(put(GetCurrentMeeting(mockMeetingId)));
        });

    });

    it('should watch view actions', () => {
        const watcher = watchRouterAsync();
        expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETINGS', viewMeetingsSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_STORIES', viewStoriesSaga));
        expect(watcher.next().value).toEqual(takeLatest(LOCATION_CHANGE, routerActions));
        expect(watcher.next().done).toBeTruthy();
    });
});
