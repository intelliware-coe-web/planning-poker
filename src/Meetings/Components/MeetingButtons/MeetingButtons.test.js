import {MeetingButtons} from "./MeetingButtons";

it('MeetingButtons renders correctly', () => {
    const props = {
        meetings: [],
        error: null,
        getMeetings: jest.fn(),
        goToMeeting: jest.fn()
    }
    expect(MeetingButtons(props)).toMatchSnapshot();
});