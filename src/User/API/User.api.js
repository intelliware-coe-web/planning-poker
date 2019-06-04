import {API_URL, getData, postData} from '../../Fetch.api';

export const UserAPI = {
  all: () => getData(`${API_URL}/users`),
  byId: userId => getData(`${API_URL}/users/${userId}`),
  create: (body) => postData(`${API_URL}/users`, body)
};