import React from 'react';

export default function Estimate() {

    var points = "12345678";
    return(
      <div className="uk-container uk-text-center@m uk-margin-top">
          <h1 className="uk-heading-small uk-heading-divider">Estimate</h1>
          <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Host</button>
          <dl className="uk-description-list">
              <dt># MBNA-10567: </dt>
              <dd>Add tooltip to my accounts page</dd>
          </dl>
          <div className="uk-align-center uk-width-1-2@m">
              { Array.from(points).map((number,i) =>
                  <button key={i} onClick={EstimateButtonClicked} className="uk-button uk-margin-small-top uk-button-primary uk-width-1-1 uk-inline estimate-button">
                      {number}
                      <span className="uk-position-center-right uk-background-muted uk-text-emphasis uk-label uk-margin-small-right uk-hidden">Selected</span>
                  </button>)
              }
          </div>
      </div>
    );
}

function EstimateButtonClicked(event) {
    var estimateButtonsNodeList = GetEstimateButtons();
    estimateButtonsNodeList.forEach(button => {
        if(button !== event.target){
            button.classList.remove("uk-button-secondary");
            button.lastElementChild.classList.add("uk-hidden");
        } else {
            button.classList.toggle("uk-button-secondary");
            button.lastElementChild.classList.toggle("uk-hidden");
        }
    });
}

function GetEstimateButtons() {
    return document.querySelectorAll('.estimate-button');
}