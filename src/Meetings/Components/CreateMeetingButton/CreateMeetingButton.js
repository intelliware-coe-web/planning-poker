import React from 'react';
import { connect } from 'react-redux';
import { viewCreateMeeting } from '../../../Navigation/route-actions';

export function CreateMeetingButton({ goToCreateMeeting }) {
  return (
    <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={ goToCreateMeeting }>
      <h3 className="uk-card-title">+</h3>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    goToCreateMeeting: () => dispatch(viewCreateMeeting())
  }
}

export default connect(null, mapDispatchToProps)(CreateMeetingButton)
