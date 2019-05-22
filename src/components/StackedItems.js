import React from 'react';

export function StackedItems({ items = [], component: Component}) {
  return (
    <div className="uk-container">
      {items.map((item, index) =>
        <div className="uk-margin" key={index}>
          <Component {...item} />
        </div>
      )}
    </div>
  )
}
