import React, {useState} from 'react';

export default function Estimate() {

    const [activeButton, setActiveButton] = useState(undefined);
    const [previouslyActiveButton, setPreviouslyActiveButton] = useState(undefined);

    var points = "12345678";

    return(
      <div className="uk-container uk-text-center@m uk-margin-top">
          <h1 className="uk-heading-small uk-heading-divider">Estimate</h1>
          <a href="#/host/"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Host</button></a>
          <dl className="uk-description-list">
              <dt># MBNA-10567: </dt>
              <dd>Add tooltip to my accounts page</dd>
          </dl>
          <div className="uk-align-center uk-width-1-2@m">
              { Array.from(points).map((number,i) =>
                  <button key={i} onClick={() => UpdateActiveButton(number)} className={"uk-button uk-margin-small-top uk-width-1-1 uk-inline estimate-button " + GenerateButtonClass(number)} >
                      {number}
                      <span className={"uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right"} hidden={IsLabelHidden(number)}>Selected</span>
                  </button>)
              }
          </div>
      </div>
    );

    function GenerateButtonClass(number) {
        return (activeButton === number && activeButton !== previouslyActiveButton) ? "uk-button-secondary" : "uk-button-primary";
    }

    function IsLabelHidden(number) {
        return !(activeButton === number && activeButton !== previouslyActiveButton);
    }

    function UpdateActiveButton(number) {
        previouslyActiveButton === number ? setPreviouslyActiveButton(undefined) : setPreviouslyActiveButton(activeButton);
        setActiveButton(number);
    }
}
