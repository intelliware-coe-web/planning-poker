import {MeetingAPI} from '../Middleware/Api/Meeting.api'

export const UPDATE_MEETINGS = 'UPDATE_MEETINGS';
export const MEETINGS_ERROR = 'MEETINGS_ERROR';

export function FindMeetingsAction(){
    return dispatch => {
        return MeetingAPI.all()
            .then(
                response => UpdateMeetingsAction(response),
                error => MeetingsErrorAction(error)
            )
            .then(dispatch)
    }
}

export function UpdateMeetingsAction(meetings) {
    return {
        type: UPDATE_MEETINGS,
        payload: {meetings}
    };
}

export function MeetingsErrorAction(error) {
    return {
        type: MEETINGS_ERROR,
        payload: {error}
    };
}