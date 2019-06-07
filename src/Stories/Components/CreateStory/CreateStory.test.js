import {CreateStory} from "./CreateStory";

it('CreateStory renders correctly', () => {
    const props = {
        goToHost: jest.fn(),
        postStory: jest.fn()
    }
    expect(CreateStory(props)).toMatchSnapshot();
});