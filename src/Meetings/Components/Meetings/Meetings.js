import React from 'react';
import { connect } from 'react-redux';
import { viewMeeting, viewCreateMeeting } from '../../../Navigation/route-actions';
import { DeleteMeeting } from '../../Actions/MeetingsActions';
import { Page } from '../../../Common/Page';

export function Meetings({ meetings = [], goToMeeting, deleteMeeting, goToCreateMeeting }) {
  return (
    <Page title='Meetings'>
      { meetings.map((meeting, index) =>
        <div key={ index } className="uk-card uk-card-primary uk-card-body uk-margin-small">
          <button className="pp-button" onClick={ () => goToMeeting(meeting._id) }>
            { meeting.name }
          </button>
          <button
            className="uk-position-center-right uk-margin-small-right" 
            data-uk-icon="icon: trash"
            onClick={ () => RemoveMeeting(meeting._id) }>
          </button>
        </div>
      )}

      <div className="uk-card uk-card-secondary uk-card-body" onClick={ goToCreateMeeting }>
        <h3 className="uk-card-title">+</h3>
      </div>
    </Page>
  );

  function RemoveMeeting(meetingId) {
    deleteMeeting(meetingId);
  }
}

function mapStateToProps(state) {
  return {
    meetings: state.meetings,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToMeeting: (meetingId) => dispatch(viewMeeting(meetingId)),
    deleteMeeting: (meetingId) => dispatch(DeleteMeeting(meetingId)),
    goToCreateMeeting: () => dispatch(viewCreateMeeting())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
