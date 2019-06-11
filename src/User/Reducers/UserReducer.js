import { USER_SUCCESS } from '../Actions/UserActions';

const initialState = {
    "_id": null,
    "name": null
};

export default function UserReducer(state = initialState, action) {
    if (action.type === USER_SUCCESS) {
        return action.payload.user;
    } else {
        return state;
    }
}
