import React from 'react';
import MeetingButtons from '../MeetingButtons/MeetingButtons';
import CreateMeetingButton from '../CreateMeetingButton/CreateMeetingButton';
import { Page } from '../../../Common/Page';

export default function Meetings() {
  return (
    <Page title='Meetings'>
      <MeetingButtons/>
      <CreateMeetingButton/>
    </Page>
  );
}
