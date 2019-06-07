import { Estimate } from './Estimate';

describe('Container: Estimate', () => {
  it('should render Estimate correctly', () => {
    const props = {
      story: {
        storyId: '123',
        storyDescription: 'blah',
        estimate: 1,
      },
      goToMeetings: jest.fn(),
      goToHost: jest.fn(),
      estimateStory: jest.fn(),
      currentMeeting: jest.fn().mockReturnValue({
        host: 'user blah',
        name: 'Mock Meeting Name'
      })
    };

    expect(Estimate(props)).toMatchSnapshot();
  })
});
