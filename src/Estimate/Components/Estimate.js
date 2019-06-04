import React from 'react';
import {connect} from 'react-redux';
import {estimateStory} from '../Actions/EstimateActions';
import {GetCurrentMeeting} from '../../Meetings/Actions/CurrentMeetingActions';
import {viewHost, viewMeetings} from '../../Navigation/route-actions';
import queryString from 'query-string';
import {Page} from '../../Common/Header';

export function Estimate(props) {

  // TODO: Move estimations to store
  const estimation = [1, 2, 3, 5, 8, 13];
  return (
    <Page title='Estimate' onBack={ props.goToMeetings }>
      { GetHostButton(queryString.parse(props.location.search)) }
      <dl className="uk-description-list">
        <dt># { props.storyId } :</dt>
        <dd>{ props.storyDescription }</dd>
      </dl>
      <div className="uk-align-center uk-width-1-1@m">
        { estimation.map((number, i) =>
          <button key={ i } onClick={ () => props.estimateStory(props.userId, props.storyId, number) }
                  className={ `uk-button uk-margin-small-top uk-width-1-1 uk-inline pp-button ${ props.estimate === number ? 'selected' : '' }` }>
            { number }
            <span
              className={ 'uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right' }
              hidden={ props.estimate !== number }>Selected</span>
          </button>)
        }
      </div>
    </Page>
  );

  // TODO: Turn this into a component & preload the currentMeeting using Saga during a route change
  function GetHostButton(meetingId) {
    const meeting = props.currentMeeting(meetingId);
    if (meeting !== undefined && meeting.host !== null) {
      return (
        <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
                onClick={ props.goToHost }>Host</button>
      );
    }
    return (<></>);
  }
}

function mapStateToProps(state) {
    return {
        storyId: state.estimateStory.storyId,
        storyDescription: state.estimateStory.storyDescription,
        estimate: state.estimateStory.estimate,
        userId: state.user._id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToMeetings: () => dispatch(viewMeetings()),
        goToHost: () => dispatch(viewHost()),
        estimateStory: (userId, storyId, estimate) => dispatch(estimateStory(userId, storyId, estimate)),
        currentMeeting: (meetingId) => dispatch(GetCurrentMeeting(meetingId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)
