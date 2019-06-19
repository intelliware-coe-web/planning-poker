import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Page} from '../../../Common/Page';
import {viewStories} from '../../../Navigation/route-actions';
import {UpdateCurrentStory} from "../../../Meetings/Actions/CurrentMeetingActions";
import {StartPollingStoryEstimates, StopPollingStoryEstimates} from "../../Actions/StoryEstimatesActions";

export function StorySummary({currentMeeting, currentStory, storyEstimates, goToStories, updateCurrentStory, startPollingStoryEstimates, stopPollingStoryEstimates, match}) {

    useEffect(
        () => {
            updateCurrentStory(match.params.meetingId, match.params.storyId);
            startPollingStoryEstimates(match.params.storyId);
            return () => {
                updateCurrentStory(match.params.meetingId, null);
                stopPollingStoryEstimates();
            };
        },
        [updateCurrentStory, startPollingStoryEstimates, stopPollingStoryEstimates, match],
    );

    const sum = (a, b) => a + b;

    function average(numbers) {
        return numbers && sum ? Math.ceil(numbers.reduce(sum, 0) / numbers.length) : 0;
    }

    function hasValidEstimate(estimate) {
        return estimate.user && estimate.user.name && estimate.estimate;
    }

    function showAverage() {
        const estimates = storyEstimates.filter(hasValidEstimate);
        return estimates.length > 0 ? (
            <tr className="uk-text-bold" key={'average'}>
                <td className="uk-text-center">Average</td>
                <td className="uk-text-center">{average(estimates.map(estimate => estimate.estimate)).toString()}</td>
            </tr>
        ) : '';
    }

    return (
        <Page title={currentMeeting.name} onBack={() => goToStories(currentMeeting._id)}>
            <dl className="uk-description-list">
                <dt># {currentStory.name} :</dt>
            </dl>
            <div className="uk-align-center uk-width-1-2@m">
                <table className="uk-table uk-table-divider">
                    <thead>
                    <tr>
                        <th className="uk-text-center">Name</th>
                        <th className="uk-text-center">Estimate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {storyEstimates.filter(hasValidEstimate).map((estimate, index) => {
                        return (
                            <tr key={index}>
                                <td className="uk-text-center">{estimate.user.name}</td>
                                <td className="uk-text-center">{estimate.estimate}</td>
                            </tr>
                        );
                    })}
                    {showAverage()}
                    </tbody>
                </table>
            </div>
        </Page>
    );

}

function mapStateToProps(state) {
    return {
        currentMeeting: state.currentMeeting,
        currentStory: state.currentStory,
        storyEstimates: state.storyEstimates
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToStories: (meetingId) => dispatch(viewStories(meetingId)),
        updateCurrentStory: (meetingId, storyId) => dispatch(UpdateCurrentStory(meetingId, storyId)),
        startPollingStoryEstimates: (storyId) => dispatch(StartPollingStoryEstimates(storyId)),
        stopPollingStoryEstimates: () => dispatch(StopPollingStoryEstimates())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StorySummary)