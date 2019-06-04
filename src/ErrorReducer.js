import { MEETINGS_ERROR } from './Meetings/Actions/MeetingsActions';
import { USER_ERROR } from './User/Actions/UserActions';

const errorActions = [
  MEETINGS_ERROR,
  USER_ERROR
];

export default function errorReducer(state = null, action) {
  if (errorActions.some(type => type === action.type)) {
    return action.payload;
  }
  return null;
}
