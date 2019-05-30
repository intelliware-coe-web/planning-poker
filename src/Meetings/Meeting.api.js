import {getData, postData} from '../Fetch.api';

export const MeetingAPI = {
  all: () => getData(`https://planning-poker-241613.appspot.com/meetings`),
  byId: meetingId => getData(`https://planning-poker-241613.appspot.com/meetings/${meetingId}`),
  create: (body) => postData(`https://planning-poker-241613.appspot.com/meetings`, body),
  addAttendee: (meetingId, body) => postData(`https://planning-poker-241613.appspot.com/meetings/${meetingId}/attendees`, body),
  addTicket: (meetingId, body) => postData(`https://planning-poker-241613.appspot.com/meetings/${meetingId}/tickets`, body),
  attendees: (meetingId) => getData(`https://planning-poker-241613.appspot.com/meetings/${meetingId}/attendees`),
  tickets: (meetingId) => getData(`http://localhost:9000/meetings/${meetingId}/tickets`)
};