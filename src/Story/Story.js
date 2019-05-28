import React from 'react';

export default function Story(props) {

    const storyId = props.match.params.storyId;
    return (
        <div className="uk-container uk-text-center@m uk-margin-top">
            <h1 className="uk-heading-small uk-heading-divider">Story {storyId}</h1>
            <div className="uk-align-center uk-width-1-2@m">
                <a href="#/host">
                    <span uk-icon="icon: arrow-left; ratio: 2" className="uk-position-small uk-position-top-left"></span>
                </a>
            </div>
        </div>
    );

}