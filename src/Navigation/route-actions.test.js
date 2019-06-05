import { viewAddStory, viewCreateMeeting, viewHost, viewMeetingSaga, viewMeetingsSaga } from './route-actions';
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { GetMeetings } from '../Meetings/Actions/MeetingsActions';
import { GetCurrentMeeting } from '../Meetings/Actions/CurrentMeetingActions';

describe('Route Actions', () => {
  it('should route to the host', () => {
    expect(viewHost()).toEqual(push('/host/'))
  });

  it('should route to meetings', () => {
    const saga = viewMeetingsSaga();
    expect(saga.next().value).toEqual(put(GetMeetings()));
    expect(saga.next().value).toEqual(put(push('/meetings/')));
    expect(saga.next().done).toBeTruthy();
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
});
