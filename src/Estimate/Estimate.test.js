import Estimate from './Estimate';
import React from 'react';
import renderer from 'react-test-renderer';

it('should render Estimate correctly', () => {
    const estimate = renderer.create(<Estimate/>).toJSON();
    expect(estimate).toMatchSnapshot();
});
