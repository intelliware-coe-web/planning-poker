import React from 'react';
import { viewMeetings, viewStory, viewCreateStory, viewMeeting } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Page';
import { connect } from 'react-redux';

export function Stories({ currentMeeting, stories = [], goToMeetings, goToStory, createStory, goToEstimate }) {

  return (
    <Page title={currentMeeting.name} onBack={ goToMeetings }>
      <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
              onClick={ () => goToEstimate(currentMeeting._id) }>
        Estimate
      </button>

      { stories.map((story, index) =>
        <div className="uk-margin-small" key={ index }>
          <div className="uk-card uk-card-secondary uk-card-body pp-button" onClick={ () => goToStory(story._id) }>
            <div className="uk-card-badge uk-label">Points: 3</div>
            <h3 className="uk-card-title">{ story.name }</h3>
          </div>
        </div>
      )}

      <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={ createStory }>
        <h3 className="uk-card-title">+</h3>
      </div>
    </Page>
  );
}

function mapStateToProps(state) {
    return {
        currentMeeting: state.currentMeeting,
        stories: state.stories,
        error: state.error
    };
}

function mapDispatchToProps(dispatch) {
  return {
    goToMeetings: () => dispatch(viewMeetings()),
    goToStory: (storyId) => dispatch(viewStory(storyId)),
    createStory: () => dispatch(viewCreateStory()),
    goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
