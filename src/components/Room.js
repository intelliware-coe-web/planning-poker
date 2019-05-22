import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { StackedItems } from './StackedItems';
import { RoomsLink } from './Rooms';

export default withRouter(Room);

export function Room({ match }) {
  const estimates = Array.from({ length: 5 }, (v, i) => ({ 'label': i + 1 }));

  return (
    <>
      <h1>Room {match.params.roomId}</h1>
      <RoomsLink/>
      <Route path={match.path} render={() => <StackedItems items={estimates} component={FullWidthButton}/>}/>
    </>
  )
}

function FullWidthButton({ label }) {
  return (<button className="uk-button uk-button-default uk-width-1-1">{label}</button>)
}
