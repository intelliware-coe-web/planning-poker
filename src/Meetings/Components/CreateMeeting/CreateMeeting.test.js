import {CreateMeeting} from "./CreateMeeting";

it('CreateMeeting renders correctly', () => {
    const props = {
        error: null,
        goToMeetings: jest.fn(),
        postMeeting: jest.fn()
    };
    expect(CreateMeeting(props)).toMatchSnapshot();
});
