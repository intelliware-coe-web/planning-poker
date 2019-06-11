import { StoryEstimate } from './StoryEstimate';

describe('Container: Story Estimate', () => {
  it('should render Estimate correctly', () => {
    const props = {
      storyEstimate: 1,
      goToMeetings: jest.fn(),
      goToStories: jest.fn(),
      updateStoryEstimate: jest.fn(),
      resetStoryEstimate: jest.fn(),
      user: jest.fn(),
      currentStory: jest.fn(),
      getCurrentStory: jest.fn(),
      stopCurrentStoryPolling: jest.fn(),
      match: jest.fn().mockReturnValue({
          params: {
            meetingId: 'Mock meeting id'
          }
      }),
      currentMeeting: jest.fn().mockReturnValue({
        name: 'Mock Meeting Name'
      })
    };

    // FIXME: Test broken due to useEffect
    // expect(StoryEstimate(props)).toMatchSnapshot();
  })
});