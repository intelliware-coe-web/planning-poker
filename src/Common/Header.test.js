import { noop } from 'lodash';
import { withHeader } from './Header';
import React from 'react';

describe('Higher Order Component: withHeader', () => {
  function FakeComponent() {
    return <div/>
  }

  it('should render a Header on a component correctly', () => {
    expect(withHeader(FakeComponent, 'Fake Component')({ onBack: noop })).toMatchSnapshot();
  });

  it('should not render the back button when onBack is not provided', () => {
    expect(withHeader(FakeComponent, 'Fake Component')({})).toMatchSnapshot();
  });
});
