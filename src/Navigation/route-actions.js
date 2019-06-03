import {push} from 'connected-react-router';

export const viewHost = () => push('/host/');
export const viewMeetings = () => push('/meetings/');
export const viewMeeting = () => push('/estimate/');
export const viewCreateMeeting = () => push('/meeting/create/');