import {push} from 'connected-react-router';

export const viewHost = () => push('/host/');
export const viewMeetings = () => push('/meetings/');
export const viewMeeting = (meetingId) => push(`/estimate?meetingId=${meetingId}`);
export const viewCreateMeeting = () => push('/meeting/create/');
export const viewAddStory = () => push('/tickets/add');
