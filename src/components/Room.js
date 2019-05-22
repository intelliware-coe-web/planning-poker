import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Estimate from './Estimate';

export function Room({ match }) {
  const estimates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  return (
    <>
      <h1>Room {match.params.roomId}</h1>
      <Link to="/rooms/" className="uk-link-muted">
        <span data-uk-icon="home"/>
        <span className="uk-text-middle">Rooms</span>
      </Link>
      <Route path={match.path} render={() => <Estimate estimates={estimates}/>}/>
    </>
  )
}

export default withRouter(Room);
