import { noop } from 'lodash';
import { Page } from './Header';
import React from 'react';

describe('Higher Order Component: withHeader', () => {
  it('should render a Header on a component correctly', () => {
    expect(Page({ title: 'Foo', onBack: noop, children:[<div key="1"></div>, <div key="2"></div>] })).toMatchSnapshot();
  });

  it('should not render the back button when onBack is not provided', () => {
    expect(Page({ title: 'No back button' })).toMatchSnapshot();
  });
});
