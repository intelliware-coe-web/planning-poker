import React from 'react';
import { Link } from 'react-router-dom';
import { viewCreateStory, viewMeeting, viewMeetings } from '../Navigation/route-actions';
import { Page } from '../Common/Header';
import { connect } from 'react-redux';

export function Host({ createStory, goToMeetings, estimate }) {

  let alphabets = 'ABCD';

  return (
    <Page title='Host' onBack={ goToMeetings }>
      <button className="uk-button uk-button-primary uk-button-small uk-position-small uk-position-top-right"
              onClick={ () => estimate('') }>
        Estimate
      </button>

      { Array.from(alphabets).map((letter, i) =>
        <div key={ i } className="uk-card uk-card-secondary uk-card-body uk-margin pp-button">
          <Link to={ { pathname: '/story/' + letter, query: { storyId: letter } } }>
            <div className="uk-card-badge uk-label">Points: 3</div>
            <h3 className="uk-card-title">Story { letter }</h3>
          </Link>
        </div>
      )
      }

      <div className="uk-card uk-card-secondary uk-card-body pp-secondary-button" onClick={ createStory }>
        <h3 className="uk-card-title">+</h3>
      </div>
    </Page>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    goToMeetings: () => dispatch(viewMeetings()),
    createStory: () => dispatch(viewCreateStory()),
    estimate: (meetingId) => dispatch(viewMeeting(meetingId))
  };
}

export default connect(null, mapDispatchToProps)(Host);
