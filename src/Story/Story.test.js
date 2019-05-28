import Story from "./Story";

it('Story renders correctly', () => {
    expect(Story()).toMatchSnapshot();
});