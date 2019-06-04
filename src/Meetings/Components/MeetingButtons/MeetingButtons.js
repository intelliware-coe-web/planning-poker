import React from 'react';
import { connect } from 'react-redux';
import { viewMeeting } from '../../../Navigation/route-actions';

export function MeetingButtons({ meetings = [], goToMeeting }) {
  return meetings.map((meeting, index) =>
    <div className="uk-margin-small" key={ index }>
      <div className="uk-card uk-card-secondary uk-card-body pp-button" onClick={ () => goToMeeting(meeting._id) }>
        <h3 className="uk-card-title">{ meeting.name }</h3>
      </div>
    </div>
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
    goToMeeting: (meetingId) => dispatch(viewMeeting(meetingId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingButtons)
