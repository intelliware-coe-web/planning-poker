import React from 'react';

export default function Story(props) {


    const storyId = props.match.params.storyId;

    const data = [
        {
            user: 'Anson',
            estimate: 5
        },
        {
            user: 'Nelson',
            estimate: 4
        },
        {
            user: 'Ratul',
            estimate: 3
        },
        {
            user: 'Matt',
            estimate: 2
        },
        {
            user: 'Raman',
            estimate: 1
        },
        {
            user: 'Linna',
            estimate: 3
        }
    ];

    return (
        <div className="uk-container uk-text-center uk-margin-top">
            <h1 className="uk-heading-small uk-heading-divider">Story {storyId}</h1>
            <a href="#/host">
                <span uk-icon="icon: arrow-left; ratio: 2" className="uk-position-small uk-position-top-left"></span>
            </a>

            <div className="uk-align-center uk-width-1-2@m">
                <table className="uk-table">
                    <thead>
                        <tr>
                            <th className="uk-text-center">Name</th>
                            <th className="uk-text-center">Estimate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(data).map((story, index) =>
                        <tr key={index}>
                            <td>{story.user}</td>
                            <td>{story.estimate}</td>
                        </tr>
                        )}
                        <tr className="uk-text-bold" key={'average'}>
                            <td>Average</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}