import {CreateStory} from "./CreateStory";

it('CreateStory renders correctly', () => {
    const props = {
        goToStories: jest.fn(),
        postStory: jest.fn()
    }
    expect(CreateStory(props)).toMatchSnapshot();
});