import React from 'react';
import { connect } from 'react-redux';
import { viewHost } from '../../../Navigation/route-actions';
import { Page } from '../../../Common/Header';

export function AddStory({goToHost}) {
  return (
    <Page title='Add Story' onBack={goToHost}>
      <form>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-2">
            <span className="uk-form-icon" data-uk-icon="icon: link"/>
            <input name="storyInputName" className="uk-input" placeholder="Name" type="text"/>
          </div>
          <button className="uk-button uk-button-primary uk-width-1-4">
            ADD
          </button>
        </div>
      </form>
    </Page>
  );
}
  
function mapDispatchToProps(dispatch) {
  return {
    goToHost: () => dispatch(viewHost())
  }
}

export default connect(null, mapDispatchToProps)(AddStory);
