import ErrorReducer from './ErrorReducer';
import {MEETINGS_ERROR} from './Meetings/Actions/MeetingsActions';
import {USER_ERROR} from './User/Actions/UserActions';
import {CURRENT_MEETING_ERROR} from "./Meetings/Actions/CurrentMeetingActions";
import {ESTIMATE_ERROR} from "./Estimate/Actions/EstimateActions";
import {STORIES_ERROR} from "./Stories/Actions/StoriesActions";

describe('Error Reducer ', () => {

  it('should set error on an meetings error', () => {
    const initialState = null;
    const error = 'Page Not Found';
    const action = { type: MEETINGS_ERROR, payload: { error: error } };

    const actualNextState = ErrorReducer(initialState, action);
    expect(actualNextState).toEqual({error});
  });

  it('should set error on a user error', () => {
    const initialState = null;
    const error = "Page Not Found";
    const action = { type: USER_ERROR, payload: { error: error } };

    const actualNextState = ErrorReducer(initialState, action);
    expect(actualNextState).toEqual({error});
  });

  it('should set error on a current meeting error', () => {
      const initialState = null;
      const error = "Page Not Found";
      const action = { type: CURRENT_MEETING_ERROR, payload: { error: error } };

      const actualNextState = ErrorReducer(initialState, action);
      expect(actualNextState).toEqual({error});
  });

  it('should set error on a estimate error', () => {
      const initialState = null;
      const error = "Page Not Found";
      const action = { type: ESTIMATE_ERROR, payload: { error: error } };

      const actualNextState = ErrorReducer(initialState, action);
      expect(actualNextState).toEqual({error});
  });

  it('should set error on a stories error', () => {
      const initialState = null;
      const error = "Page Not Found";
      const action = { type: STORIES_ERROR, payload: { error: error } };

      const actualNextState = ErrorReducer(initialState, action);
      expect(actualNextState).toEqual({error});
  });

  it('should reset the error to the initial state on non-error messages', () => {
    const initialState = null;
    const error = "Page Not Found";
    const action = { type: 'NOT_AN_ERROR', payload: { error: error } };

    const actualNextState = ErrorReducer(initialState, action);
    expect(actualNextState).toBeNull();
  })

});
