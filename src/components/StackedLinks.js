import React from 'react';
import {Link} from 'react-router-dom';

export default function StackedLinks({links= []}) {
  return links.map((link, index) => (
      <div className="uk-margin" key={index}>
        <Link to={link.href} className="uk-button uk-width-1-1 uk-button-default">
          {link.label}
        </Link>
      </div>
    )
  );
}
