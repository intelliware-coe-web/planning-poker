import React, {useEffect} from 'react';
import {viewCreateStory, viewMeeting, viewMeetings, viewStory} from '../../../Navigation/route-actions';
import {Page} from '../../../Common/Page';
import {connect} from 'react-redux';
import {DeleteStory, GetStories} from "../../Actions/StoriesActions";

export function Stories({currentMeeting, stories = [], goToMeetings, goToStory, deleteStory, createStory, goToEstimate, getStories, match}) {

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
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-small">
                    <div className="uk-card-badge uk-label">Points: 3</div>
                    <h3 className="uk-card-title" onClick={() => goToStory(currentMeeting._id, story._id)}>
                        <a className="uk-link-heading">{story.name}</a>
                    </h3>
                    <button
                        className="uk-position-center-right uk-margin-small-right"
                        data-uk-icon="icon: trash"
                        onClick={() => RemoveStory(story._id)}>
                    </button>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body" onClick={createStory}>
                <h3 className="uk-card-title">+</h3>
            </div>
        </Page>
    );

    function RemoveStory(storyId) {
        deleteStory(storyId);
    }
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
        deleteStory: (storyId) => dispatch(DeleteStory(storyId)),
        createStory: () => dispatch(viewCreateStory()),
        goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId)),
        getStories: (meetingId) => dispatch(GetStories(meetingId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
