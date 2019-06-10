import React from 'react';
import { Link } from 'react-router-dom';
import { viewCreateStory, viewMeeting } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Page';
import { connect } from 'react-redux';

export function Stories({ currentMeeting, stories = [], createStory, goToEstimate }) {

  return (
    <Page title={currentMeeting.name}>
      <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
              onClick={ () => goToEstimate(currentMeeting._id) }>
        Estimate
      </button>

      { stories.map((story, i) =>
        <div key={ i } className="uk-card uk-card-secondary uk-card-body uk-margin pp-button">
          <Link to={ { pathname: '/story/summary/' + story._id, query: { storyId: story._id } } }>
            <div className="uk-card-badge uk-label">Points: 3</div>
            <h3 className="uk-card-title">{story.name}</h3>
          </Link>
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
    createStory: () => dispatch(viewCreateStory()),
    goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
