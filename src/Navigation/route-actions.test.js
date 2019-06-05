import {
  viewAddStory,
  viewCreateMeeting,
  viewHost,
  viewMeeting,
  viewMeetings,
  viewMeetingSaga,
  viewMeetingsSaga, watchRouterAsync
} from './route-actions';
import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';
import { GetCurrentMeeting } from '../CurrentMeeting/Actions/CurrentMeetingActions';

describe('Route Actions', () => {
  it('should route to the host', () => {
    expect(viewHost()).toEqual(push('/host/'))
  });

  it('should create a view meetings action', () => {
    expect(viewMeetings()).toEqual({ type: 'VIEW_MEETINGS' });
  });

  it('should route to meetings', () => {
    const saga = viewMeetingsSaga();
    expect(saga.next().value).toEqual(put(GetMeetings()));
    expect(saga.next().value).toEqual(put(push('/meetings/')));
    expect(saga.next().done).toBeTruthy();
  });

  it('should create a view meeting action', () => {
    expect(viewMeeting('FOO')).toEqual({ type: 'VIEW_MEETING', payload: 'FOO' });
  });

  it('should route to estimations', () => {
    const saga = viewMeetingSaga({ payload: 'Foo' });
    expect(saga.next().value).toEqual(put(GetCurrentMeeting('Foo')));
    expect(saga.next().value).toEqual(put(push('/estimate/Foo')));
    expect(saga.next().done).toBeTruthy();
  });

  it('should view create meeting', () => {
    expect(viewCreateMeeting()).toEqual(push('/meeting/create/'));
  });

  it('should view add stories', () => {
    expect(viewAddStory()).toEqual(push('/stories/add'));
  });

  it('should watch view actions', () => {
    const watcher = watchRouterAsync();
    expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETINGS', viewMeetingsSaga));
    expect(watcher.next().value).toEqual(takeLatest('VIEW_MEETING', viewMeetingSaga));
    expect(watcher.next().done).toBeTruthy();
  });
});
