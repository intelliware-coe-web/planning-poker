import React from 'react';
import { connect } from 'react-redux';
import { estimateStory } from '../Actions/EstimateActions';
import { viewHost, viewMeetings } from '../../Navigation/route-actions';
import { Page } from '../../Common/Header';

export function Estimate({ story, meeting, goToMeetings, goToHost, estimateStory }) {
  // TODO: Move estimations to store
  const estimation = [1, 2, 3, 5, 8, 13];
  return (
    <Page title='Estimate' onBack={ goToMeetings }>
      <HostButton hasHost={ meeting && !meeting.host } onHostClick={ goToHost }/>
      <StoryDescription { ...story } />
      <div className="uk-align-center uk-width-1-1@m">
        { estimation.map((estimate, i) =>
          <button key={ i } onClick={ () => estimateStory(estimate, story.storyId) }
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

function StoryDescription({ storyId, storyDescription }) {
  return (<dl className="uk-description-list">
    <dt># { storyId } :</dt>
    <dd>{ storyDescription }</dd>
  </dl>);
}

function HostButton(hasHost, onHostClick) {
  return !hasHost ?
    (<button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
             onClick={ onHostClick }>Host</button>) :
    (<></>);
}

function mapStateToProps(state) {
  return {
    story: state.estimateStory,
    meeting: state.currentMeeting
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToMeetings: () => dispatch(viewMeetings()),
    goToHost: () => dispatch(viewHost()),
    estimateStory: (estimate, storyId) => dispatch(estimateStory(estimate, storyId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
