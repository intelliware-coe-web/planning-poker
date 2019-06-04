import React from 'react';
import MeetingButtons from '../MeetingButtons/MeetingButtons';
import CreateMeetingButton from '../CreateMeetingButton/CreateMeetingButton';
import { Page } from '../../../Common/Header';

export default function Meetings() {
  return (
    <Page title='Meetings'>
      <MeetingButtons/>
      <CreateMeetingButton/>
    </Page>
  );
}
