import {API_URL, getData, postData} from '../../Fetch.api';

export const MeetingAPI = {
  all: () => getData(`${API_URL}/meetings`),
  byId: meetingId => getData(`${API_URL}/meetings/${meetingId}`),
  create: (body) => postData(`${API_URL}/meetings`, body)
};