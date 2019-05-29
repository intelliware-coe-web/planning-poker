import {getData, postData} from '../../Fetch.api';

export const UserAPI = {
  all: () => getData(`https://planning-poker-241613.appspot.com/users`),
  byId: userId => getData(`https://planning-poker-241613.appspot.com/users/${userId}`),
  create: (body) => postData(`https://planning-poker-241613.appspot.com/users`, body)
};