import React from 'react';
import { connect } from 'react-redux';
import { PostMeeting } from '../../Actions/MeetingsActions';
import { viewMeetings } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Page';

export function CreateMeeting({postMeeting, goToMeetings}) {
  return (
    <Page title='Add Meeting' onBack={goToMeetings}>
      <form onSubmit={ (event) => { event.preventDefault(); postMeeting(event.target.meetingInputName.value.trim()); } }>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <span className="uk-form-icon" data-uk-icon="icon: users"/>
            <input name="meetingInputName" className="uk-input" placeholder="Name" type="text"/>
          </div>
          <button className="uk-button uk-button-primary uk-margin-small-top uk-width-1-1">
            CREATE
          </button>
        </div>
      </form>
    </Page>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    postMeeting: (meetingName) => dispatch(PostMeeting(meetingName)),
    goToMeetings: () => dispatch(viewMeetings())
  }
}

export default connect(null, mapDispatchToProps)(CreateMeeting);
