import React from 'react';
import StackedLinks from './StackedLinks';

export default function Rooms() {
  const rooms = [
    { 'href': '/room/A', 'label': 'A' },
    { 'href': '/room/B', 'label': 'B' },
    { 'href': '/room/C', 'label': 'C' },
  ];

  return (
    <>
      <h1>Rooms</h1>
      <div className="uk-container">
        <StackedLinks links={rooms} />
      </div>
    </>
  );
}
