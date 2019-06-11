import { StoryEstimate } from './StoryEstimate';

describe('Container: Story Estimate', () => {
  it('should render Estimate correctly', () => {
    const props = {
      storyEstimate: 1,
      goToMeetings: jest.fn(),
      goToStories: jest.fn(),
      updateStoryEstimate: jest.fn(),
      currentMeeting: jest.fn().mockReturnValue({
        name: 'Mock Meeting Name'
      })
    };

    expect(StoryEstimate(props)).toMatchSnapshot();
  })
});
