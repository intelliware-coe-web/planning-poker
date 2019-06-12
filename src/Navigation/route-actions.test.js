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
import { takeLatest, put } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';
import { GetCurrentMeeting, UpdateCurrentStory } from '../CurrentMeeting/Actions/CurrentMeetingActions';
import { GetCurrentStory, StopCurrentStoryPolling } from "../CurrentStory/Actions/CurrentStoryActions";
import { GetStoryEstimates, StopStoryEstimatesPolling } from "../CurrentStory/Actions/StoryEstimatesActions";
import { GetStories } from "../Stories/Actions/StoriesActions";

describe('Route Actions', () => {

  it('should view create meeting', () => {
    expect(viewCreateMeeting()).toEqual(push('/meeting/create/'));
  });

  it('should view create story', () => {
    expect(viewCreateStory()).toEqual(push('/story/create/'));
  });

  it('should create a view meeting action', () => {
    expect(viewMeeting('FOO')).toEqual({ type: 'VIEW_MEETING', payload: 'FOO' });
  });

  it('should create a view story action', () => {
    expect(viewStory('FOO')).toEqual({ type: 'VIEW_STORY', payload: { storyId: 'FOO' } });
  });

  it('should route to estimations', () => {
    const saga = viewMeetingSaga({ payload: 'Foo' });
    expect(saga.next().value).toEqual(put(GetCurrentMeeting('Foo')));
    expect(saga.next().value).toEqual(put(push('/estimate/Foo')));
    expect(saga.next().done).toBeTruthy();
  });

  it('should create a view meetings action', () => {
    expect(viewMeetings()).toEqual({ type: 'VIEW_MEETINGS' });
  });

  it('should create a view stories action', () => {
    expect(viewStories()).toEqual({ type: 'VIEW_STORIES' });
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
    expect(saga.next().value).toEqual(put(push(`/estimate/${ mockAction.payload }`)));
    expect(saga.next().done).toBeTruthy();
  });

  it('should route to stories', () => {
    const mockAction = {
      type: 'VIEW_STORIES',
      payload: ''
    };
    const saga = viewStoriesSaga(mockAction);
    expect(saga.next().value).toEqual(put(GetStories()));
    expect(saga.next().value).toEqual(put(UpdateCurrentStory({})));
    expect(saga.next().value).toEqual(put(push(`/stories/`)));
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
    it('should dispatch GetCurrentStory and StopStoryEstimatesPolling if location is estimate', () => {
        const mockMeetingId = '13847gf81374gr183o4';
        const mockRouterPayload = {
            location: {
              pathname: '/estimate/'+mockMeetingId
            }
        };
        const saga = routerActions({payload: mockRouterPayload});
        expect(saga.next().value).toEqual(put(GetCurrentStory(mockMeetingId)));
        expect(saga.next().value).toEqual(put(StopStoryEstimatesPolling()));
        expect(saga.next().done).toBeTruthy();
    });
    it('should dispatch StopCurrentStoryPolling and StopStoryEstimatesPolling if location is not estimate or story summary', () => {
        const mockRouterPayload = {
            location: {
                pathname: '/neither-path/'
            }
        };
        const saga = routerActions({payload: mockRouterPayload});
        expect(saga.next().value).toEqual(put(StopCurrentStoryPolling()));
        expect(saga.next().value).toEqual(put(StopStoryEstimatesPolling()));
        expect(saga.next().done).toBeTruthy();
    });

    it('should dispatch GetStoryEstimates and StopCurrentStoryPolling if location is story summary', () => {
      const mockStoryId = '13847gf81374gr183o4';
      const mockRouterPayload = {
          location: {
            pathname: '/story/summary/'+mockStoryId
          }
      };
      const saga = routerActions({payload: mockRouterPayload});
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
