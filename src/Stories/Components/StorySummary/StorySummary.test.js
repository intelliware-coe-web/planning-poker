import {StorySummary} from "./StorySummary";
import {render} from "@testing-library/react";
import {StoryEstimate} from "../../../StoryEstimate/Components/StoryEstimate";
import React from "react";

it('StorySummary renders correctly', () => {
    const props = {
        currentMeeting: jest.fn().mockReturnValue({
            name: 'Mock Meeting Name'
        }),
        storyEstimates: [],
        goToStories: jest.fn(),
        updateCurrentStory: jest.fn(),
        getStoryEstimates: jest.fn(),
        stopStoryEstimatesPolling: jest.fn()
    };
    const {container} = render(<StorySummary  {...props} match={{'params': {'storyId': 'Mock story id'}}}/>);
    expect(container).toMatchSnapshot();
});

it('StorySummary renders estimates withs names', () => {
    const props = {
        currentMeeting: jest.fn().mockReturnValue({
            name: 'Mock Meeting Name'
        }),
        storyEstimates: [{
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
        goToStories: jest.fn(),
        updateCurrentStory: jest.fn(),
        getStoryEstimates: jest.fn(),
        stopStoryEstimatesPolling: jest.fn()
    };
    const {container} = render(<StorySummary  {...props} match={{'params': {'storyId': 'Mock story id'}}}/>);
    expect(container).toMatchSnapshot();
});