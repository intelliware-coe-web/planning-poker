import { USER_SUCCESS } from '../Actions/UserActions';

export default function UserReducer(state = null, action) {
    if (action.type === USER_SUCCESS) {
        return action.payload.user;
    } else {
        return state;
    }
}
