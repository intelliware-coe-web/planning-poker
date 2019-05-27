import Ticket from "./Ticket";

it('Ticket renders correctly', () => {
    expect(Ticket()).toMatchSnapshot();
});