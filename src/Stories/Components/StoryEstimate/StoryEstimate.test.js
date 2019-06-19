import React from 'react'
import {StoryEstimate} from './StoryEstimate';
import {cleanup, render} from '@testing-library/react'

describe('Container: Story Estimate', () => {

    afterEach(cleanup);

    it('should render Estimate correctly', () => {
        const props = {
            storyEstimate: 1,
            goToMeetings: jest.fn(),
            goToStories: jest.fn(),
            updateStoryEstimate: jest.fn(),
            resetStoryEstimate: jest.fn(),
            user: jest.fn(),
            currentStory: jest.fn(),
            startPollingCurrentStory: jest.fn(),
            stopPollingCurrentStory: jest.fn(),
            currentMeeting: jest.fn().mockReturnValue({
                name: 'Mock Meeting Name'
            })
        };

        const {container} = render(<StoryEstimate  {...props} match={{'params': {'meetingId': 'Mock meeting id'}}}/>);
        expect(container).toMatchSnapshot();
    });
});