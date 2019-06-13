import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {PutStoryEstimate, ResetStoryEstimate} from '../Actions/StoryEstimateActions';
import {viewMeetings, viewStories} from '../../Navigation/route-actions';
import {Page} from '../../Common/Page';
import {GetCurrentStory, StopCurrentStoryPolling} from "../../CurrentStory/Actions/CurrentStoryActions";

export function StoryEstimate({storyEstimate, currentMeeting, user, currentStory, goToMeetings, goToStories, updateStoryEstimate, resetStoryEstimate, getCurrentStory, stopCurrentStoryPolling, match}) {
    // TODO: Move estimations to store
    const estimation = [1, 2, 3, 5, 8, 13];

    useEffect(
        () => {
            getCurrentStory(match.params.meetingId);
            return () => {
                stopCurrentStoryPolling();
                resetStoryEstimate();
            };
        },
        [getCurrentStory, stopCurrentStoryPolling, resetStoryEstimate, match],
    );

    return (
        <Page title={currentMeeting.name} onBack={goToMeetings}>
            <HostButton onHostClick={() => goToStories(currentMeeting._id)}/>
            <StoryDescription {...currentStory} />
            <div className="uk-align-center uk-width-1-1@m">
                {estimation.map((estimate, i) =>
                    <button key={i} onClick={() => updateStoryEstimate(user._id, currentStory._id, estimate)}
                            className={`uk-button uk-margin-small-top uk-width-1-1 uk-inline pp-button ${ storyEstimate === estimate ? 'selected' : '' }`}>
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

function StoryDescription({name, description}) {
    return (<dl className="uk-description-list">
        <dt># {name} :</dt>
        <dd>{description}</dd>
    </dl>);
}

function HostButton({onHostClick}) {
    return <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
                   onClick={onHostClick}>Host</button>;
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
        getCurrentStory: (meetingId) => dispatch(GetCurrentStory(meetingId)),
        stopCurrentStoryPolling: () => dispatch(StopCurrentStoryPolling()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryEstimate)
