import {Estimate} from './Estimate';
import React from 'react';

describe('Container: Estimate', () => {
    it('should render Estimate correctly', () => {
        const dispatches = {
            goToMeetings: jest.fn(),
            goToHost: jest.fn(),
            estimateStory: jest.fn()
        };

        const state = {
            estimation: [1,2,3,5]
        };

        expect(Estimate({...dispatches, ...state})).toMatchSnapshot();
    })
});
