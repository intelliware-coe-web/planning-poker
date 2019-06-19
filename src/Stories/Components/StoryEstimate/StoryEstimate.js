import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {PutStoryEstimate, ResetStoryEstimate} from '../../Actions/StoryEstimateActions';
import {viewMeetings, viewStories} from '../../../Navigation/route-actions';
import {Page} from '../../../Common/Page';
import {StartPollingCurrentStory, StopPollingCurrentStory} from "../../../Meetings/Actions/CurrentStoryActions";

export function StoryEstimate({storyEstimate, currentMeeting, user, currentStory, goToMeetings, goToStories, updateStoryEstimate, resetStoryEstimate, startPollingCurrentStory, stopPollingCurrentStory, match}) {
    // TODO: Move estimations to store
    const estimation = [1, 2, 3, 5, 8, 13];

    useEffect(
        () => {
            startPollingCurrentStory(match.params.meetingId);
            return () => {
                stopPollingCurrentStory();
                resetStoryEstimate();
            };
        },
        [startPollingCurrentStory, stopPollingCurrentStory, resetStoryEstimate, match],
    );

    return (
        <Page title={currentMeeting.name} onBack={goToMeetings}>
            <button className="uk-button uk-button-secondary uk-button-small uk-position-small uk-position-top-right"
                    onClick={() => goToStories(currentMeeting._id)}>Host</button>
            <dl className="uk-description-list">
                <dt># {currentStory.name} :</dt>
            </dl>
            <div className="uk-align-center uk-width-1-1@m">
                {estimation.map((estimate, i) =>
                    <button key={i} onClick={() => updateStoryEstimate(user._id, currentStory._id, estimate)}
                            className={`uk-button uk-margin-small-top uk-width-1-1 uk-inline uk-button-primary ${ storyEstimate === estimate ? 'selected' : '' }`} disabled={currentStory._id === null}>
                        {estimate}
                        <span
                            className={'uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right'}
                            hidden={storyEstimate !== estimate}>Selected</span>
                    </button>)
                }
            </div>
        </Page>
    );
}

function mapStateToProps(state) {
    return {
        storyEstimate: state.storyEstimate,
        currentMeeting: state.currentMeeting,
        user: state.user,
        currentStory: state.currentStory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToMeetings: () => dispatch(viewMeetings()),
        goToStories: (meetingId) => dispatch(viewStories(meetingId)),
        updateStoryEstimate: (userId, storyId, estimate) => dispatch(PutStoryEstimate(userId, storyId, estimate)),
        resetStoryEstimate: () => dispatch(ResetStoryEstimate()),
        startPollingCurrentStory: (meetingId) => dispatch(StartPollingCurrentStory(meetingId)),
        stopPollingCurrentStory: () => dispatch(StopPollingCurrentStory()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryEstimate)
