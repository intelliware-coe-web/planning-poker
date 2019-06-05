import {API_URL, getData, postData} from '../../Fetch.api';

export const StoriesAPI = {
  all: (meetingId) => getData(`${API_URL}/meetings/${meetingId}/stories`),
  post: (meetingId, body) => postData(`${API_URL}/meetings/${meetingId}/stories`, body),
};