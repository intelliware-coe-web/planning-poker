import {AddTicket} from "./AddTicket";

it('AddTicket renders correctly', () => {
    const props = {
        goToHost: jest.fn()
    }
    expect(AddTicket(props)).toMatchSnapshot();
});