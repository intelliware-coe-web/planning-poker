import React from 'react';
import {connect} from 'react-redux';
import {viewStories} from '../../../Navigation/route-actions';
import {Page} from '../../../Common/Page';
import {PostStory} from '../../Actions/StoriesActions';

export function CreateStory({goToStories, postStory, currentMeeting}) {
    return (
        <Page title='Create Story' onBack={() => goToStories(currentMeeting._id)}>
            <form onSubmit={ (event) => { event.preventDefault(); postStory(event.target.storyInputName.value.trim()); } }>
                <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" data-uk-icon="icon: file-edit"/>
                        <input name="storyInputName" className="uk-input" placeholder="Name" type="text"/>
                    </div>
                    <button className="uk-button uk-button-primary uk-margin-small-top uk-width-1-1">
                        CREATE
                    </button>
                </div>
            </form>
        </Page>
    );
}

function mapStateToProps(state) {
    return {
        currentMeeting: state.currentMeeting
    };
}

function mapDispatchToProps(dispatch) {
    return {
        goToStories: (meetingId) => dispatch(viewStories(meetingId)),
        postStory: (storyName) => dispatch(PostStory(storyName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStory);
