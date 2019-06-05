import {API_URL, getData} from '../../Fetch.api';

export const CurrentStoryAPI = {
    byId: meetingId => getData(`${API_URL}/meetings/${meetingId}/currentStory`)
};