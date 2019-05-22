import React from 'react';
import { Link } from 'react-router-dom';
import { StackedItems } from './StackedItems';

function RoutedLink({ href, label }) {
  return (
    <Link to={href} className="uk-button uk-button-default uk-width-1-1">
      {label}
    </Link>
  );
}

export function RoomsLink() {
  return <div className="uk-margin">
    <Link to="/rooms/" className="uk-link-muted">
      <span data-uk-icon="home"/>
      <span className="uk-text-middle">Rooms</span>
    </Link>
  </div>
}

export function Rooms({ rooms }) {
  return (
    <>
      <h1>Rooms</h1>
      <StackedItems items={rooms} component={RoutedLink}/>
    </>
  )
}

function withRooms(WrappedComponent, ...rooms) {
  return () => <WrappedComponent rooms={rooms}/>;
}

export default withRooms(Rooms,
  { 'href': '/room/A', 'label': 'A' },
  { 'href': '/room/B', 'label': 'B' },
  { 'href': '/room/C', 'label': 'C' }
);
