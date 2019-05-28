import React, {useState} from 'react';
import styles from './Estimate.css';

export default function Estimate() {

    const [activeButton, setActiveButton] = useState(undefined);
    const [previouslyActiveButton, setPreviouslyActiveButton] = useState(undefined);

    var points = "12345678";

    return(
        <>
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">Estimate</h1>
                <div className="uk-align-center uk-width-1-2@m">  
                    <a href="#/meetings/">
                        <span uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"></span>
                    </a>
                    <a href="#/host/"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Host</button></a>
                    <dl className="uk-description-list">
                        <dt># MBNA-10567: </dt>
                        <dd>Add tooltip to my accounts page</dd>
                    </dl>
                    <div className="uk-align-center uk-width-1-1@m">
                        { Array.from(points).map((number,i) =>
                            <button key={i} onClick={() => UpdateActiveButton(number)} className={"uk-button uk-margin-small-top uk-width-1-1 uk-inline default-button " + GenerateButtonClass(number)} >
                                {number}
                                <span className={"uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right"} hidden={IsLabelHidden(number)}>Selected</span>
                            </button>)
                        }
                    </div>
                </div>
            </div>
      </div>
      </>
    );

    function GenerateButtonClass(number) {
        return (activeButton === number && activeButton !== previouslyActiveButton) ? "selected-button" : "estimate-button";
    }

    function IsLabelHidden(number) {
        return !(activeButton === number && activeButton !== previouslyActiveButton);
    }

    function UpdateActiveButton(number) {
        previouslyActiveButton === number ? setPreviouslyActiveButton(undefined) : setPreviouslyActiveButton(activeButton);
        setActiveButton(number);
    }
}
