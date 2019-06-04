import {API_URL, getData, postData} from '../../Fetch.api';

export const StoriesAPI = {
  all: (meetingId) => getData(`${API_URL}/meetings/${meetingId}/stories`),
  add: (meetingId, body) => postData(`${API_URL}/meetings/${meetingId}/stories`, body),
};