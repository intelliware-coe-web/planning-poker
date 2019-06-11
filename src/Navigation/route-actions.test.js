import {
    routerActions,
    viewCreateStory,
    viewCreateMeeting,

    viewMeeting,
    viewMeetingSaga,
    viewMeetings,
    viewMeetingsSaga,
    viewStories,
    viewStoriesSaga,
    viewStory,
    viewStorySaga,
    watchRouterAsync,
} from './route-actions';
import {takeLatest, put, select, delay} from 'redux-saga/effects';
import {push, LOCATION_CHANGE, replace} from 'connected-react-router';
import {GetMeetings} from '../Meetings/Actions/MeetingsActions';
import {GetCurrentMeeting, UpdateCurrentStory} from '../CurrentMeeting/Actions/CurrentMeetingActions';
import {GetCurrentStory, StopCurrentStoryPolling} from "../CurrentStory/Actions/CurrentStoryActions";
import {getCurrentUserId} from "../Common/selectors";
import {GetStoryEstimates, StopStoryEstimatesPolling} from "../CurrentStory/Actions/StoryEstimatesActions";

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

    it('should create a view story action', () => {
        expect(viewStory('FOO')).toEqual({type: 'VIEW_STORY', payload: {storyId: 'FOO'}});
    });

    it('should route to estimations', () => {
        const saga = viewMeetingSaga({payload: 'Foo'});
        expect(saga.next().value).toEqual(put(GetCurrentMeeting('Foo')));
        expect(saga.next().value).toEqual(put(push('/meeting/Foo/estimate/')));
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

    it('should route to meeting', () => {
        const mockAction = {
            type: 'VIEW_MEETING',
            payload: ''
        };
        const saga = viewMeetingSaga(mockAction);
        expect(saga.next().value).toEqual(put(GetCurrentMeeting(mockAction.payload)));
        expect(saga.next().value).toEqual(put(push(`/meeting/${ mockAction.payload }/estimate/`)));
        expect(saga.next().done).toBeTruthy();
    });

    it('should route to story', () => {
        const mockAction = {
            type: 'VIEW_STORY',
            payload: {
                storyId: 'story13847gf81374gr183o4'
            }
        };
        const saga = viewStorySaga(mockAction);
        expect(saga.next().value).toEqual(put(UpdateCurrentStory(mockAction.payload)));
        expect(saga.next().value).toEqual(put(push(`/story/summary/${ mockAction.payload.storyId }`)));
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

        it('should dispatch GetCurrentStory and GetCurrentMeeting if location is estimate', () => {
            const mockMeetingId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: `/meeting/${mockMeetingId}/estimate/`
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).toEqual(put(GetCurrentMeeting(mockMeetingId)));
            expect(saga.next().value).toEqual(put(GetCurrentStory(mockMeetingId)));
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
        });

        it('should dispatch GetStoryEstimates and StopCurrentStoryPolling if location is story summary', () => {
            const mockStoryId = '13847gf81374gr183o4';
            const mockRouterPayload = {
                location: {
                    pathname: '/story/summary/' + mockStoryId
                }
            };
            const saga = routerActions({payload: mockRouterPayload});
            expect(saga.next().value).toEqual(select(getCurrentUserId));
            expect(saga.next().value).toEqual(put(StopCurrentStoryPolling()));
            expect(saga.next().value).toEqual(put(GetStoryEstimates(mockStoryId)));
            expect(saga.next().done).toBeTruthy();
        });
    });

    it('should watch view actions', () => {
        const watcher = watchRouterAsync();
        expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETINGS', viewMeetingsSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETING', viewMeetingSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_STORIES', viewStoriesSaga));
        expect(watcher.next().value).toEqual(takeLatest('VIEW_STORY', viewStorySaga));
        expect(watcher.next().value).toEqual(takeLatest(LOCATION_CHANGE, routerActions));
        expect(watcher.next().done).toBeTruthy();
    });
});
