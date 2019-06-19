import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Page} from '../../../Common/Page';
import {viewStories} from '../../../Navigation/route-actions';
import {UpdateCurrentStory} from "../../../Meetings/Actions/CurrentMeetingActions";
import {GetStoryEstimates, StopStoryEstimatesPolling} from "../../Actions/StoryEstimatesActions";

export function StorySummary({currentMeeting, storyEstimates, goToStories, updateCurrentStory, getStoryEstimates, stopStoryEstimatesPolling, match}) {

    useEffect(
        () => {
            updateCurrentStory(match.params.meetingId, match.params.storyId);
            getStoryEstimates(match.params.storyId);
            return () => {
                updateCurrentStory(match.params.meetingId, null);
                stopStoryEstimatesPolling();
            };
        },
        [updateCurrentStory, stopStoryEstimatesPolling, getStoryEstimates, match],
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
};

function mapDispatchToProps(dispatch) {
    return {
        goToStories: (meetingId) => dispatch(viewStories(meetingId)),
        updateCurrentStory: (meetingId, storyId) => dispatch(UpdateCurrentStory(meetingId, storyId)),
        stopStoryEstimatesPolling: () => dispatch(StopStoryEstimatesPolling()),
        getStoryEstimates: (storyId) => dispatch(GetStoryEstimates(storyId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StorySummary)