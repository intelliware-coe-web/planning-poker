import {
    routerActions,
    viewCreateStory,
    viewCreateMeeting,
    viewStories,
    viewMeeting,
    viewMeetings,
    viewMeetingSaga,
    viewMeetingsSaga,
    viewStoriesSaga,
    watchRouterAsync
} from './route-actions';
import {takeLatest, put, select, delay} from 'redux-saga/effects';
import {push, LOCATION_CHANGE, replace} from 'connected-react-router';
import {GetMeetings} from '../Meetings/Actions/MeetingsActions';
import {GetCurrentMeeting} from '../CurrentMeeting/Actions/CurrentMeetingActions';
import {GetCurrentStory, StopCurrentStoryPolling} from "../CurrentStory/Actions/CurrentStoryActions";
import {getCurrentUserId} from "../Common/selectors";

describe('Route Actions', () => {

    it('should view create meeting', () => {
        expect(viewCreateMeeting()).toEqual(push('/meeting/create/'));
    });

    it('should view create story', () => {
        expect(viewCreateStory()).toEqual(push('/story/create/'));
    });

    it('should create a view meeting action', () => {
        expect(viewMeeting('FOO')).toEqual({type: 'VIEW_MEETING', payload: 'FOO'});
    });

    it('should route to estimations', () => {
        const saga = viewMeetingSaga({payload: 'Foo'});
        expect(saga.next().value).toEqual(put(GetCurrentMeeting('Foo')));
        expect(saga.next().value).toEqual(put(push('/estimate/Foo')));
        expect(saga.next().done).toBeTruthy();
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
                    pathname: '/estimate/' + mockMeetingId
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next(null).value).toEqual(delay(1));
            expect(saga.next().value).toEqual(put(replace({pathname: '/', state: { 'nextPathname': mockRouterPayload.location.pathname}})));
        });

        it('should dispatch GetCurrentStory and GetCurrentMeeting if location is estimate', () => {
            const mockMeetingId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: '/estimate/' + mockMeetingId
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).toEqual(put(GetCurrentMeeting(mockMeetingId)));
            expect(saga.next().value).toEqual(put(GetCurrentStory(mockMeetingId)));
            expect(saga.next().done).toBeTruthy();
        });

        it('should dispatch StopCurrentStoryPolling if location is not estimate', () => {
            const mockRouterPayload = {
                location: {
                    pathname: '/notEstimate/'
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).toEqual(put(StopCurrentStoryPolling()));
            expect(saga.next().done).toBeTruthy();
        });
    });

    it('should watch view actions', () => {
        const watcher = watchRouterAsync();
        expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETINGS', viewMeetingsSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETING', viewMeetingSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_STORIES', viewStoriesSaga));
        expect(watcher.next().value).toEqual(takeLatest(LOCATION_CHANGE, routerActions));
        expect(watcher.next().done).toBeTruthy();
    });
});
