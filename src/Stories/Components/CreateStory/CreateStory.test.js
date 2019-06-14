import {CreateStory} from "./CreateStory";

it('CreateStory renders correctly', () => {
    const props = {
        currentMeeting: {
            _id: '123'
        },
        goToStories: jest.fn(),
        postStory: jest.fn()
    }
    expect(CreateStory(props)).toMatchSnapshot();
});