import React from 'react';
import './Estimate.css';
import {connect} from "react-redux";
import {viewHost, viewMeetings} from "../Navigation/route-actions";
import {estimateStory} from "./estimate.flux";

export function Estimate({goToMeetings, goToHost, estimateStory, estimate, estimation}) {
    return(
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Estimate</h1>
                <div className="uk-align-center uk-width-1-2@m">  
                    <span onClick={goToMeetings} data-uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                    <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right" onClick={goToHost}>Host</button>
                    <dl className="uk-description-list">
                        <dt># MBNA-10567: </dt>
                        <dd>Add tooltip to my accounts page</dd>
                    </dl>
                    <div className="uk-align-center uk-width-1-1@m">
                        { estimation.map((number,i) =>
                            <button key={i} onClick={() => estimateStory(number, '1234567')} className={`uk-button uk-margin-small-top uk-width-1-1 uk-inline default-button ${estimate === number ? 'selected-button' : 'estimate-button'}`} >
                                {number}
                                <span className={"uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right"} hidden={estimate !== number}>Selected</span>
                            </button>)
                        }
                    </div>
                </div>
            </div>
      </div>
    );
}

function mapStateToProps(state) {
    return {
        estimate: state.story.estimate,
        estimation: state.story.estimations
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