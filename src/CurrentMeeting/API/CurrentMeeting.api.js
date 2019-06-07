import {API_URL, getData} from '../../Fetch.api';

export const CurrentMeetingAPI = {
    byId: meetingId => getData(`${API_URL}/meetings/${meetingId}`)
};