import Meetings from "./Meetings";

it('Meetings renders correctly', () => {
    expect(Meetings()).toMatchSnapshot(); 
});
