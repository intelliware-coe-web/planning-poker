import {Stories} from './Stories';
import {cleanup, render} from "@testing-library/react";
import React from "react";
describe('Container: Story', ()=> {

    afterEach(cleanup);

    it('should render correctly', () => {

        const props = {
            currentMeeting: jest.fn().mockReturnValue({
                name: 'Mock Meeting Name'
            }),
            stories: [{
                id: 'id',
                name: 'Mock Story Name'
            }],
            error: null,
            goToMeetings: jest.fn(),
            goToStory: jest.fn(),
            deleteStory: jest.fn(),
            createStory: jest.fn(),
            goToEstimate: jest.fn(),
            getStories: jest.fn()
        };
        const {container} = render(<Stories  {...props} match={{'params': {'meetingId': 'Mock meeting id'}}}/>);
        expect(container).toMatchSnapshot();
    });
});
