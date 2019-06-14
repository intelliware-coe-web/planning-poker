import {API_URL, getData, postData, putData, deleteData} from '../../Fetch.api';

export const StoriesAPI = {
  all: (meetingId) => {
    var url = new URL(`${API_URL}/stories`);
    var params = { meetingId: meetingId};
    url.search = new URLSearchParams(params);
    return getData(url);
  },
  post: (meetingId, body) => {
    var url = new URL(`${API_URL}/stories`);
    var params = { meetingId: meetingId};
    url.search = new URLSearchParams(params);
    return postData(url, body)
  },
  delete: storyId => deleteData(`${API_URL}/stories/${storyId}`),
  updateStoryEstimate: (storyId, body) => putData(`${API_URL}/stories/${storyId}/estimates`, body)
};