import { loadStoreState, viewAddStory, viewCreateMeeting, viewHost, viewMeeting, viewMeetings } from './route-actions';
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';

describe('Route Actions', () => {
  it('should route to the host', () => {
    expect(viewHost()).toEqual(push('/host/'))
  });

  it('should route to meetings', () => {
    expect(viewMeetings()).toEqual(push('/meetings/'));
  });

  it('should route to estimations', () => {
    expect(viewMeeting('Foo')).toEqual(push('/estimate?meetingId=Foo'));
  });

  it('should view create meeting', () => {
    expect(viewCreateMeeting()).toEqual(push('/meeting/create/'));
  });

  it('should view add stories', () => {
    expect(viewAddStory()).toEqual(push('/stories/add'));
  });

  it('should fetch the meeting data when navigating to the meetings page', () => {
    const saga = loadStoreState({ payload: { location: { pathname: '/meetings/' } } });
    expect(saga.next().value).toEqual(put(GetMeetings()));
    expect(saga.next().done).toBeTruthy();
  });

  it('should not fetch the data when navigating not to the meetings page', () => {
    const saga = loadStoreState({ payload: { location: { pathname: '/current-meetings/' } } });
    expect(saga.next().done).toBeTruthy();
  });
});
