import {MeetingAPI} from '../Meetings/Meeting.api'

export const MEETINGS_FETCH_ALL = 'MEETING_FETCH_ALL';
export const MEETING_FETCH_BY_ID = 'MEETING_FETCH_BY_ID';
export const MEETING_CREATE = 'MEETING_CREATE';

export const TICKETS_FETCH_ALL = 'TICKET_FETCH_ALL';

export function fetchTickets(meetingId){
    return dispatch => {
        return MeetingAPI.tickets(meetingId)
            .then(tickets => {
                dispatch({type: TICKETS_FETCH_ALL, payload: {tickets}});
                console.log('MeetingActions fetchTickets', tickets);
                return tickets;
            })
    }
}
