import {CurrentMeetingAPI} from './CurrentMeeting.api';
import * as FetchApi from '../../Fetch.api';

describe('CurrenMeetingAPI', () => {

    it('byId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        CurrentMeetingAPI.byId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });
});