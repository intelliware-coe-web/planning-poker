import {getData, postData} from '../../../Fetch.api';

export const MeetingAPI = {
  all: () => getData(`https://planning-poker-241613.appspot.com/meetings`),
  byId: meetingId => getData(`https://planning-poker-241613.appspot.com/meetings/${meetingId}`),
  add: (body) => postData(`https://planning-poker-241613.appspot.com/meetings`, body)
};