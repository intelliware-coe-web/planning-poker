import {StorySummary} from "./StorySummary";

it('StorySummary renders correctly', () => {
    const props = {
        currentMeeting: jest.fn().mockReturnValue({
            host: 'user blah',
            name: 'Mock Meeting Name'
          }),
          
        goToHost: jest.fn()
    }
    expect(StorySummary(props)).toMatchSnapshot();
});