import React, {useEffect} from 'react';
import {viewCreateStory, viewMeeting, viewMeetings, viewStory} from '../../../Navigation/route-actions';
import {Page} from '../../../Common/Page';
import {connect} from 'react-redux';
import {GetStories} from "../../Actions/StoriesActions";

export function Stories({currentMeeting, stories = [], goToMeetings, goToStory, createStory, goToEstimate, getStories, match}) {

    useEffect(
        () => {
            getStories(match.params.meetingId);
        },
        [getStories, match]
    );

    return (
        <Page title={currentMeeting.name} onBack={goToMeetings}>
            <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
                    onClick={() => goToEstimate(currentMeeting._id)}>
                Estimate
            </button>

            {stories.map((story, index) =>
                <div className="uk-margin-small" key={index}>
                    <div className="uk-card uk-card-secondary uk-card-body pp-button"
                         onClick={() => goToStory(currentMeeting._id, story._id)}>
                        <div className="uk-card-badge uk-label">Points: 3</div>
                        <h3 className="uk-card-title">{story.name}</h3>
                    </div>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={createStory}>
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
        goToMeetings: () => dispatch(viewMeetings()),
        goToStory: (meetingId, storyId) => dispatch(viewStory(meetingId, storyId)),
        createStory: () => dispatch(viewCreateStory()),
        goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId)),
        getStories: (meetingId) => dispatch(GetStories(meetingId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
