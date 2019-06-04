import React from 'react';
import MeetingButtons from '../MeetingButtons/MeetingButtons';
import CreateMeetingButton from '../CreateMeetingButton/CreateMeetingButton';
import { withHeader } from '../../../Common/Header';

export function Meetings() {
  return (
    <>
      <MeetingButtons/>
      <CreateMeetingButton/>
    </>
  );
}

export default withHeader(Meetings, 'Meetings')
