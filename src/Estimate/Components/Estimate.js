import React from 'react';
import {connect} from "react-redux";
import {estimateStory} from "../Actions/EstimateActions";
import {viewHost, viewMeetings} from "../../Navigation/route-actions";
import queryString from 'query-string';

export function Estimate(props) {

    const estimation = [1,2,3,5,8,13];
    var parsed = queryString.parse(props.location.search);
    
    return(
        <div>
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Estimate</h1>
                <div className="uk-align-center uk-width-1-2@m">  
                    <span onClick={props.goToMeetings} data-uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                    <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right" onClick={props.goToHost}>Host</button>
                    <dl className="uk-description-list">
                        <dt># {props.storyId} :</dt>
                        <dd>{ props.storyDescription }</dd>
                    </dl>
                    <div className="uk-align-center uk-width-1-1@m">
                        { estimation.map((number,i) =>
                            <button key={i} onClick={() => props.estimateStory(number, props.storyId)} className={`uk-button uk-margin-small-top uk-width-1-1 uk-inline pp-button ${props.estimate === number ? 'selected' : ''}`} >
                                {number}
                                <span className={"uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right"} hidden={props.estimate !== number}>Selected</span>
                            </button>)
                        }
                    </div>
                </div>
            </div>
      </div>
    );

    function HasHost(meetingId) {
    }
}

function mapStateToProps(state) {
    return {
        storyId: state.estimateStory.storyId,
        storyDescription: state.estimateStory.storyDescription,
        estimate: state.estimateStory.estimate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToMeetings: () => dispatch(viewMeetings()),
        goToHost: () => dispatch(viewHost()),
        estimateStory: (estimate, storyId) => dispatch(estimateStory(estimate, storyId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimate)