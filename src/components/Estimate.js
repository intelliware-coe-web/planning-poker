import React from 'react';

export default function Estimate({ estimates }) {
  return estimates.map((estimate, index) =>
    <div className="uk-margin" key={index}>
      <button className="uk-button uk-button-default uk-width-1-1">
        {estimate}
      </button>
    </div>
  );
}
