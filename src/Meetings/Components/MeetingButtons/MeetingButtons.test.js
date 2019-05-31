import {MeetingButtons} from "./MeetingButtons";

it('MeetingButtons renders correctly', () => {
    const props = {
        meetings: [],
        findMeetings: jest.fn()
    }
    expect(MeetingButtons(props)).toMatchSnapshot();
});