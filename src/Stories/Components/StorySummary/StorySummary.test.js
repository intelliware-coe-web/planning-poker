import {StorySummary} from "./StorySummary";

it('StorySummary renders correctly', () => {
    const props = {
        currentMeeting: jest.fn().mockReturnValue({
            name: 'Mock Meeting Name'
          }),
          
          goToStories: jest.fn()
    }
    expect(StorySummary(props)).toMatchSnapshot();
});