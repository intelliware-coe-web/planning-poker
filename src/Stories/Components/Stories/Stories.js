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
            <button className="uk-button uk-button-secondary uk-button-small uk-position-small uk-position-top-right"
                    onClick={() => goToEstimate(currentMeeting._id)}>
                Estimate
            </button>

            {stories.map((story, index) =>
                <div key={index} className="uk-card uk-card-primary uk-card-body uk-margin-top uk-padding-small">
                    <div className="uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-flex uk-flex-left uk-width-5-6">
                            <div
                                className="uk-flex uk-flex-column"
                                onClick={() => goToStory(currentMeeting._id, story._id)}>
                                <div className="uk-text-left">{story.name}</div>
                                <div className="uk-align-left uk-text-center uk-width-auto uk-label uk-margin-small uk-margin-remove-bottom">
                                    {story.estimate_avg ? 'Points: ' + story.estimate_avg : 'Not estimated'}
                                </div>
                            </div>
                        </div>
                        <div className="uk-padding-remove-left uk-flex uk-flex-middle uk-flex-right uk-width-1-6">
                            <button
                                className="uk-icon-button"
                                data-uk-icon="icon: trash"
                                uk-tooltip="title: Delete Story"
                                onClick={event => { event.stopPropagation(); deleteStory(story._id); }}>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="uk-align-center uk-flex uk-flex-center">
                <button
                    className="uk-icon-button"
                    data-uk-icon="icon: plus"
                    uk-tooltip="title: Add Story"
                    onClick={createStory}>
                </button>
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
