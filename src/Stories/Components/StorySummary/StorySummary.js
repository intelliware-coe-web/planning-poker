import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../../../Common/Page';
import { viewStories } from '../../../Navigation/route-actions';

export function StorySummary({currentMeeting, storyEstimates, goToStories}) {


    //const storyId = match.params.storyId;

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

    const sum = (a,b) => a + b;

    function average(data) {
        return Math.ceil(data.reduce(sum, 0)/data.length);
    }

    return (

        <Page title={currentMeeting.name} onBack={ goToStories }>
            {storyEstimates}
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
                            <td>{average(data.map( item => item.estimate))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Page>
    );

}

function mapStateToProps(state) {
    return {
        currentMeeting: state.currentMeeting,
        currentStory: state.currentStory,
        storyEstimates: state.storyEstimates
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        goToStories: () => dispatch(viewStories()),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StorySummary)