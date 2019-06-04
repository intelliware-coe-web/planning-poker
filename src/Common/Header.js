import React from 'react';

function BackButton({ goBack }) {
  return goBack ?
    (<span data-uk-icon="icon: arrow-left; ratio: 3" className="uk-position-large uk-position-top-left"
           onClick={ goBack }/>) :
    (<></>);
}

export function Page({ title, onBack, children }) {
  return (
    <div className="default-background">
      <div className="uk-container uk-text-center@m">
        <h1 className="uk-heading-divider uk-margin-top">{ title }</h1>
        <div className="uk-align-center uk-width-1-2@m">
          <BackButton goBack={ onBack }/>
          {children}
        </div>
      </div>
    </div>
  );
}
