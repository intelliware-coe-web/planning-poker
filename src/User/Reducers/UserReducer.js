import { USER_SUCCESS } from '../Actions/UserActions';

const initialState = {
    "_id": "5ceed54ad81884001f9df980",
    "name": "CigaretteDaydreams",
    "__v": 0,
    "created_date": "2019-06-04T20:19:29.491Z"
};

export default function UserReducer(state = initialState, action) {
    if (action.type === USER_SUCCESS) {
        return action.payload.user;
    } else {
        return state;
    }
}
