import {API_URL, getData, postData} from '../../Fetch.api';

export const StoriesAPI = {
  all: (meetingId) => {
    var url = new URL(`${API_URL}/stories`);
    var params = { meetingId: meetingId};
    url.search = new URLSearchParams(params);
    getData(url);
  },
  post: (meetingId, body) => {
    var url = new URL(`${API_URL}/stories`);
    var params = { meetingId: meetingId};
    url.search = new URLSearchParams(params);
    postData(url, body)
  }
};