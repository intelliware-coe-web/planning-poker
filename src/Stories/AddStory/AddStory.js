import React from 'react';
import {connect} from 'react-redux';
import {viewHost} from '../../Navigation/route-actions';

export function AddStory(props) {

    return (        
        <div className="uk-container uk-text-center@m uk-margin-top uk-margin-bottom">
            <h1 className="uk-heading-small uk-heading-divider">Add Story</h1>
            <a href="#/host">
                <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
            </a>
            <div className="uk-align-center uk-width-1-2@m">      
                <form onSubmit={event => {AddStory(event)}}>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" uk-icon="icon: link"></span>
                            <input name="storyInputName" className="uk-input" placeholder="Name" type="text"/>
                        </div>
                        <button className="uk-button uk-button-primary uk-width-1-4">
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    function AddStory(event) {
        event.preventDefault();
        props.goToHost();
    }
};

function mapStateToProps(state) {
    return {
    }
};
 
 function mapDispatchToProps(dispatch) {
    return {
        goToHost: () => dispatch(viewHost())
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AddStory)