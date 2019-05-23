import React from 'react';
import { Link } from "react-router-dom";

export default function Estimate() {

    var points = "12345678";
    return(
      <div className="uk-container uk-text-center@m uk-margin-top">
          <h1 className="uk-heading-small uk-heading-divider">Estimate</h1>
          <Link to="/host"><button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right">Host</button></Link>
          <dl className="uk-description-list">
              <dt># MBNA-10567: </dt>
              <dd>Add tooltip to my accounts page</dd>
          </dl>
          <div className="uk-align-center uk-width-1-2@m">
              { Array.from(points).map((number,i) =>
                  <button key={i} onClick={estimateButtonClicked} className="uk-button uk-margin-small-top uk-button-primary uk-width-1-1 estimate-button">{number}</button>)
              }
          </div>
      </div>
    );
}

function estimateButtonClicked(event) {
    var estimateButtonsNodeList = getEstimateButtons();
    estimateButtonsNodeList.forEach(button => {
        if(button !== event.target){
            button.classList.remove("uk-button-secondary");
        } else {
            button.classList.toggle("uk-button-secondary");
        }
    });
}

function getEstimateButtons() {
    return document.querySelectorAll('.estimate-button');
}