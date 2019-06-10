import {API_URL, putData} from '../../Fetch.api';

export const StoryEstimateAPI = {
    update: (storyId, body) => putData(`${API_URL}/stories/${storyId}/estimates`, body)
};