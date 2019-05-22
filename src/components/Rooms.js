import React from 'react';

export default function Rooms({ rooms = [] }) {
  return (
    <>
      <h1>Rooms</h1>
      <div className="container">
        {rooms.map((room, index) => (
            <div className="uk-margin" key={index}>
              <button className="uk-button uk-width-1-1 uk-button-default">
                {room}
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}
