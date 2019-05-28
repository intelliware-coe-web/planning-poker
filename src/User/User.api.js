import {getData, postData} from '../Fetch.api';

export const UserAPI = {
  all: () => getData(`http://localhost:9000/users`),
  byId: userId => getData(`https://planning-poker-241613.appspot.com/users/${userId}`),
  create: (body) => postData(`http://localhost:9000/users`, body)
};