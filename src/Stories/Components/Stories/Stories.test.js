import { Stories } from './Stories';

it('Stories renders correctly', () => {
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
    createStory: jest.fn(),  
    goToEstimate: jest.fn()
  }
  expect(Stories(props)).toMatchSnapshot();
});
