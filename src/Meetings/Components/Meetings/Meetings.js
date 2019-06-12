import React from 'react';
import { connect } from 'react-redux';
import { viewMeeting, viewCreateMeeting } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Page';

export function Meetings({ meetings = [], goToMeeting, goToCreateMeeting }) {
  return (
    <Page title='Meetings'>
      
      { meetings.map((meeting, index) =>
        <div className="uk-margin-small" key={ index }>
          <div className="uk-card uk-card-secondary uk-card-body pp-button" onClick={ () => goToMeeting(meeting._id) }>
            <h3 className="uk-card-title">{ meeting.name }</h3>
          </div>
        </div>
      )}

      <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={ goToCreateMeeting }>
        <h3 className="uk-card-title">+</h3>
      </div>
    </Page>
  );
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
    goToCreateMeeting: () => dispatch(viewCreateMeeting())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
