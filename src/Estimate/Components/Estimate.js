import React from 'react';
import { connect } from 'react-redux';
import { estimateStory } from '../Actions/EstimateActions';
import { viewStories, viewMeetings } from '../../Navigation/route-actions';
import { Page } from '../../Common/Page';

export function Estimate({ story, currentMeeting, user, currentStory, goToMeetings, goToStories, estimateStory }) {
  // TODO: Move estimations to store
  const estimation = [1, 2, 3, 5, 8, 13];
  return (
    <Page title={currentMeeting.name} onBack={ goToMeetings }>
      <HostButton hasHost={ currentMeeting && !!currentMeeting.host } onHostClick={ goToStories }/>
      <StoryDescription { ...currentStory } />
      <div className="uk-align-center uk-width-1-1@m">
        { estimation.map((estimate, i) =>
          <button key={ i } onClick={ () => estimateStory(user._id, currentStory._id, estimate) }
                  className={ `uk-button uk-margin-small-top uk-width-1-1 uk-inline pp-button ${ story.estimate === estimate ? 'selected' : '' }` }>
            { estimate }
            <span
              className={ 'uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right' }
              hidden={ story.estimate !== estimate }>Selected</span>
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

function HostButton({ hasHost, onHostClick }) {
  if (hasHost) {
    return <></>
  } else {
    return <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
                   onClick={ onHostClick }>Host</button>;
  }
}

function mapStateToProps(state) {
  return {
      story: state.estimateStory,
      currentMeeting: state.currentMeeting,
      user: state.user,
      currentStory: state.currentStory
  }
}

function mapDispatchToProps(dispatch) {
  return {
      goToMeetings: () => dispatch(viewMeetings()),
      goToStories: () => dispatch(viewStories()),
      estimateStory: (userId, storyId, estimate) => dispatch(estimateStory(userId, storyId, estimate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
