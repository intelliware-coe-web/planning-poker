import { Meetings } from "./Meetings";

it('Meetings renders correctly', () => {
    const props = {
        meetings: [{_id: 'id', name: 'test'}],
        error: null,
        goToMeeting: jest.fn(),
        deleteMeeting: jest.fn(),
        goToCreateMeeting: jest.fn()
    }
    expect(Meetings(props)).toMatchSnapshot();
});
