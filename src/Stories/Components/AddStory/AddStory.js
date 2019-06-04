import React from 'react';
import { connect } from 'react-redux';
import { viewHost}  from '../../../Navigation/route-actions';
import { withHeader } from '../../../Common/Header';

export function AddStory({goToHost}) {

    return (        
        <>
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
        </>
    );

    function AddStory(event) {
        event.preventDefault();
        goToHost();
    }
};

function mapStateToProps(state) {
    return {
    }
};
 
 function mapDispatchToProps(dispatch) {
    return {
        goBack: () => dispatch(viewHost()),
        goToHost: () => dispatch(viewHost())
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(withHeader(AddStory, 'Add Story'));