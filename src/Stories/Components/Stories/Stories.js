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
                <div key={index}
                     className="uk-flex uk-flex-column uk-card uk-card-primary uk-card-body uk-margin-small uk-padding-small uk-text-center"
                     onClick={() => goToStory(currentMeeting._id, story._id)}>
                    <div className="uk-margin-right uk-margin-left">{story.name}</div>
                    <div className="uk-align-center uk-width-auto uk-label uk-margin-small">
                        {story.estimate_avg ? 'Points: ' + story.estimate_avg : 'Not estimated'}
                    </div>
                    <button
                        className="uk-position-top-right uk-margin-small-right uk-margin-small-top"
                        data-uk-icon="icon: trash"
                        onClick={() => deleteStory(story._id)}
                    >
                    </button>
                </div>
            )}

            <div className="uk-card uk-card-secondary uk-card-body uk-margin-bottom uk-text-center"
                 onClick={createStory}>
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
        deleteStory: (storyId) => dispatch(DeleteStory(storyId)),
        createStory: () => dispatch(viewCreateStory()),
        goToEstimate: (meetingId) => dispatch(viewMeeting(meetingId)),
        getStories: (meetingId) => dispatch(GetStories(meetingId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
