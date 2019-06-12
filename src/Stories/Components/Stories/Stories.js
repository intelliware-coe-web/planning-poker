import React from 'react';
import { viewMeetings, viewStory, viewCreateStory, viewMeeting } from '../../../Navigation/route-actions';
import { DeleteStory } from '../../Actions/StoriesActions';
import { Page } from '../../../Common/Page';
import { connect } from 'react-redux';

export function Stories({ currentMeeting, stories = [], goToMeetings, goToStory, deleteStory, createStory, goToEstimate }) {

  return (
    <Page title={currentMeeting.name} onBack={ goToMeetings }>
      <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
              onClick={ () => goToEstimate(currentMeeting._id) }>
        Estimate
      </button>

      { stories.map((story, index) =>
        <div key={ index } className="uk-card uk-card-primary uk-card-body uk-margin-small" onClick={ () => goToStory(story._id) }>
          <div className="uk-position-center-left uk-margin-small-left uk-label">Points: 3</div>
          { story.name }
          <button
            className="uk-position-center-right uk-margin-small-right" 
            data-uk-icon="icon: trash"
            onClick={ () => RemoveStory(story._id) }>
          </button>
        </div>
      )}

      <div className="uk-card uk-card-secondary uk-card-body" onClick={ createStory }>
        <h3 className="uk-card-title">+</h3>
      </div>
    </Page>
  );

  function RemoveStory(storyId) {
    deleteStory(storyId);
  }
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
    deleteStory: (storyId) => dispatch(DeleteStory(storyId)),
    createStory: () => dispatch(viewCreateStory()),
    goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
