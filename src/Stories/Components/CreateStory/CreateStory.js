import React from 'react';
import { connect } from 'react-redux';
import { viewHost } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Header';
import { PostStory } from '../../Actions/StoriesActions';

export function CreateStory({goToHost, postStory}) {
  return (
    <Page title='Create Story' onBack={goToHost}>
      <form onSubmit={ event => { postNewStory(event, postStory) } }>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-2">
            <span className="uk-form-icon" data-uk-icon="icon: link"/>
            <input name="storyInputName" className="uk-input" placeholder="Name" type="text"/>
          </div>
          <button className="uk-button uk-button-primary uk-width-1-4">
            CREATE
          </button>
        </div>
      </form>
    </Page>
  );

  function postNewStory(event, onSubmit) {
    event.preventDefault();
    onSubmit(event.target.storyInputName.value.trim());
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    goToHost: () => dispatch(viewHost()),
    postStory: (storyName) => dispatch(PostStory(storyName))
  }
}

export default connect(null, mapDispatchToProps)(CreateStory);