import React from 'react';

export default function Estimate() {

    var points = "12345678";
    return(
      <>
          <div className="uk-flex uk-flex-column uk-flex-middle">
              <h1 className="uk-heading-medium uk-margin-top">Estimate</h1>
              { Array.from(points).map((number,i) =>
                  <button key={i} className="uk-margin uk-button-secondary uk-button-large uk-width-1-6 uk-text-large">{number}</button>)
              }
          </div>
      </>
    );
}