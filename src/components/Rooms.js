import React from 'react';

export default function Rooms({ rooms }) {
  return (
    <div className="container">
      {rooms.map((room, index) => (
          <div className="uk-margin">
            <button className="uk-button uk-width-1-1 uk-button-default" key={index}>
              {room}
            </button>
          </div>
        )
      )}
    </div>
  )
}
