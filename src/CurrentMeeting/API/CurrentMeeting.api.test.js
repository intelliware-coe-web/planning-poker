import {CurrentMeetingAPI} from './CurrentMeeting.api';
import * as FetchApi from '../../Fetch.api';

describe('CurrenMeetingAPI', () => {

    it('byId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        CurrentMeetingAPI.byId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('update() should call putData() from FetchApi', () => {
        FetchApi.putData = jest.fn();
        CurrentMeetingAPI.update('123', {storyId: '321'});
        expect(FetchApi.putData).toHaveBeenCalledWith(`${FetchApi.API_URL}/meetings/123/currentStory`, {storyId: '321'});
        expect(FetchApi.putData).toHaveBeenCalledTimes(1);
    });
});