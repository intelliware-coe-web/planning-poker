import React from 'react';

export function withHeader(WrappedComponent, title) {
  return ({goBack, ...props}) => (
    <div className="default-background">
      <div className="uk-container uk-text-center@m">
        <h1 className="uk-heading-divider uk-margin-top">{title}</h1>
        <div className="uk-align-center uk-width-1-2@m">
          <span data-uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left" onClick={goBack}/>
          <WrappedComponent {...props}/>
        </div>
      </div>
    </div>
  )
}
