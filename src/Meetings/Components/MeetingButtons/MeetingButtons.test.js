import {MeetingButtons} from "./MeetingButtons";

it('MeetingButtons renders correctly', () => {
    const props = {
        meetings: [{_id: 'id', name: 'test'}],
        error: null,
        goToMeeting: jest.fn()
    };

    expect(MeetingButtons(props)).toMatchSnapshot();
});
