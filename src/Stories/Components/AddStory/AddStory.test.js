import {AddStory} from "./AddStory";

it('AddStory renders correctly', () => {
    const props = {
        goBack: jest.fn(),
        goToHost: jest.fn()
    }
    expect(AddStory(props)).toMatchSnapshot();
});