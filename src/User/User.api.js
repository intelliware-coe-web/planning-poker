import {simpleFetch} from '../Fetch.api';

export const UserAPI = {
  all: () => simpleFetch(`http://localhost:9000/users`),
  byId: userId => simpleFetch(`https://planning-poker-241613.appspot.com/users/${userId}`)
  
};