import ErrorReducer from './ErrorReducer';
import { MEETINGS_ERROR } from './Meetings/Actions/MeetingsActions';
import { USER_ERROR } from './User/Actions/UserActions';

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

});
