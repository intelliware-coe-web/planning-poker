import {StorySummary} from "./StorySummary";
import {cleanup, render} from "@testing-library/react";
import React from "react";

describe('Container: StorySummary', () => {

    afterEach(cleanup);

    it('should render correctly with estimates and names', () => {
        const props = {
            currentMeeting: jest.fn().mockReturnValue({
                name: 'Mock Meeting Name'
            }),
            storyEstimates: [
                {
                    user: {
                        name: 'Bob'
                    },
                    estimate: 1
                },
                {
                    user: {
                        name: 'Andy'
                    },
                    estimate: 5
                },
                {
                    user: {
                        name: 'Joe'
                    },
                    estimate: 3
                },
                {
                    user: {
                        name: null
                    },
                    estimate: 'bad data'
                }
            ],
            currentStory: {
                name: 'Mock Story Name'
            },
            goToStories: jest.fn(),
            updateCurrentStory: jest.fn(),
            startPollingStoryEstimates: jest.fn(),
            stopPollingStoryEstimates: jest.fn()
        };
        const {container} = render(<StorySummary  {...props} match={{'params': {'storyId': 'Mock story id'}}}/>);
        expect(container).toMatchSnapshot();
    });
});