import {API_URL, getData, putData} from '../../Fetch.api';

export const CurrentMeetingAPI = {
    byId: meetingId => getData(`${API_URL}/meetings/${meetingId}`),
    update: (meetingId, body) => putData(`${API_URL}/meetings/${meetingId}/currentStory`, body)
};