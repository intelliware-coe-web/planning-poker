import React from 'react';
import {connect} from 'react-redux';
import {PostMeeting} from '../../Actions/MeetingsActions'
import {viewMeetings} from '../../../Navigation/route-actions';

export function CreateMeeting(props) {
    
    return (
        <div className="uk-container uk-text-center@m uk-margin-top uk-margin-bottom">
            <h1 className="uk-heading-small uk-heading-divider">Add Meeting</h1>
            <a href="#/meetings">
                <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
            </a>
            <div className="uk-align-center uk-width-1-2@m">      
                <form onSubmit={event => {PostNewMeeting(event)}}>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input name="meetingInputName" className="uk-input" placeholder="Name" type="text"/>
                        </div>
                        <button className="uk-button uk-button-primary uk-width-1-4">
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    function PostNewMeeting(event) {
        event.preventDefault();
        props.postMeeting(event.target.meetingInputName.value.trim());
        props.goToMeetings();
    }
}

function mapStateToProps(state) {
    return {
        error: state.meetings.error
    }
 };
 
 function mapDispatchToProps(dispatch) {
     return {
        postMeeting: (meetingName) => dispatch(PostMeeting(meetingName)),
        goToMeetings: () => dispatch(viewMeetings()),
     }
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(CreateMeeting)
