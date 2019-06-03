import React from 'react';
import {connect} from 'react-redux';
import {viewCreateMeeting} from '../../../Navigation/route-actions';

export function CreateMeetingButton(props) {
    return (
        <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={event => GoToCreateMeeting(event)}>
            <h3 className="uk-card-title">+</h3>
        </div>
    );

    function GoToCreateMeeting(event) {
        event.preventDefault();
        props.goToCreateMeeting();
    }
}
  
function mapStateToProps(state) {
    return {}
};

 function mapDispatchToProps(dispatch) {
    return {
        goToCreateMeeting: () => dispatch(viewCreateMeeting())
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingButton)