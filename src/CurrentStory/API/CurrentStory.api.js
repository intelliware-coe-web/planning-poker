import {API_URL, getData} from '../../Fetch.api';

export const CurrentStoryAPI = {
    byMeetingId: meetingId => getData(`${API_URL}/meetings/${meetingId}/currentStory`),
    storyEstimates: storyId => getData(`${API_URL}/stories/${storyId}/estimates`)
};