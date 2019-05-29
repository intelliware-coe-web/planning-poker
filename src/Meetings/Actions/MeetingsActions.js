import {MeetingAPI} from '../Middleware/Api/Meeting.api'

export const UPDATE_MEETINGS = 'UPDATE_MEETINGS';
export const MEETINGS_ERROR = 'MEETINGS_ERROR';

export function FindMeetings(){
    return dispatch => {
        return MeetingAPI.all()
            .then(
                response => UpdateMeetings(response),
                error => MeetingsError(error)
            )
            .then(dispatch)
    }
}

export function UpdateMeetings(meetings) {
    return {
        type: UPDATE_MEETINGS,
        payload: {meetings}
    };
}

export function MeetingsError(error) {
    return {
        type: MEETINGS_ERROR,
        payload: {error}
    };
}