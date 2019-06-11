import {StorySummary} from "./StorySummary";

it('StorySummary renders correctly', () => {
    const props = {
        currentMeeting: jest.fn().mockReturnValue({
            name: 'Mock Meeting Name'
        }),
        storyEstimates: [], 
        goToStories: jest.fn()
    }
    expect(StorySummary(props)).toMatchSnapshot();
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
        {}
        ], 
        goToStories: jest.fn()
    }
    expect(StorySummary(props)).toMatchSnapshot();
});