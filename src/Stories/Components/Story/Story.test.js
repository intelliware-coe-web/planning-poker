import Story from "./Story";
import React from 'react';
import renderer from 'react-test-renderer';

it('Story renders correctly', () => {
    const defaulttProps = {
        match: { params: {storyId: 1}}
    };
    const story = renderer.create(<Story {...defaulttProps} />).toJSON();
    expect(story).toMatchSnapshot();
});