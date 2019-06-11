import React from 'react';
import { connect } from 'react-redux';
import { putStoryEstimate } from '../Actions/StoryEstimateActions';
import { viewStories, viewMeetings } from '../../Navigation/route-actions';
import { Page } from '../../Common/Page';

export function StoryEstimate({ storyEstimate, currentMeeting, user, currentStory, goToMeetings, goToStories, updateStoryEstimate }) {
  // TODO: Move estimations to store
  const estimation = [1, 2, 3, 5, 8, 13];
  return (
    <Page title={currentMeeting.name} onBack={ goToMeetings }>
      <HostButton onHostClick={ goToStories }/>
      <StoryDescription { ...currentStory } />
      <div className="uk-align-center uk-width-1-1@m">
        { estimation.map((estimate, i) =>
          <button key={ i } onClick={ () => updateStoryEstimate(user._id, currentStory._id, estimate) }
                  className={ `uk-button uk-margin-small-top uk-width-1-1 uk-inline pp-button ${ storyEstimate === estimate ? 'selected' : '' }` }>
            { estimate }
            <span
              className={ 'uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right' }
              hidden={ storyEstimate !== estimate }>Selected</span>
          </button>)
        }
      </div>
    </Page>
  );
}

function StoryDescription({ name, description }) {
  return (<dl className="uk-description-list">
    <dt># { name } :</dt>
    <dd>{ description }</dd>
  </dl>);
}

function HostButton({ onHostClick }) {
  return <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
                  onClick={ onHostClick }>Host</button>;
}

function mapStateToProps(state) {
  return {
    estimate: state.estimate,
    currentMeeting: state.currentMeeting,
    user: state.user,
    currentStory: state.currentStory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToMeetings: () => dispatch(viewMeetings()),
    goToStories: () => dispatch(viewStories()),
    updateStoryEstimate: (userId, storyId, estimate) => dispatch(putStoryEstimate(userId, storyId, estimate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryEstimate)
