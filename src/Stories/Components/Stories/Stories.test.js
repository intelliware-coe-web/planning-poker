import { Stories } from './Stories';

it('Stories renders correctly', () => {
  const props = {
    currentMeeting: jest.fn().mockReturnValue({
        host: 'user blah',
        name: 'Mock Meeting Name'
      }),
    stories: [{
      id: 'id',
      name: 'Mock Story Name'
    }],
    error: null,
    createStory: jest.fn(),  
    goToEstimate: jest.fn()
  }
  expect(Stories(props)).toMatchSnapshot();
});
