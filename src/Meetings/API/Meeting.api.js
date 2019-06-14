import {API_URL, getData, postData, putData, deleteData} from '../../Fetch.api';

export const MeetingAPI = {
  all: () => getData(`${API_URL}/meetings`),
  byId: meetingId => getData(`${API_URL}/meetings/${meetingId}`),
  create: (body) => postData(`${API_URL}/meetings`, body),
  delete: meetingId => deleteData(`${API_URL}/meetings/${meetingId}`),
  getCurrentStory: meetingId => getData(`${API_URL}/meetings/${meetingId}/currentStory`),
  updateCurrentStory: (meetingId, body) => putData(`${API_URL}/meetings/${meetingId}/currentStory`, body)
};