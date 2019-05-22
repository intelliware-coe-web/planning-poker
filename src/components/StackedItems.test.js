import { StackedItems } from './StackedItems';
import React from 'react';

describe('Component: StackedItems', () => {
  test('should render', () => {
    expect(StackedItems({items: [{'label': 'A', 'href': 'href'}], component: props => (<div>{props.label}</div>)})).toMatchSnapshot();
  });
});
