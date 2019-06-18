import React from 'react';

function BackButton({goBack}) {
    return goBack ?
        (<span data-uk-icon="icon: arrow-left; ratio: 1.25" className="uk-button uk-button-secondary uk-button-small uk-position-small uk-position-top-left pp-back-arrow"
               onClick={goBack}/>) :
        (<></>);
}

export function Page({title, onBack, children}) {
    return (
        <div className="default-background">
            <div className="uk-container uk-text-center@m">
                <div className="uk-section uk-section-xsmall"><BackButton goBack={onBack}/></div>
                <h1 className="uk-heading-divider uk-margin-top">{title}</h1>
                <div className="uk-align-center uk-width-1-2@m">
                    {children}
                </div>
            </div>
        </div>
    );
}
