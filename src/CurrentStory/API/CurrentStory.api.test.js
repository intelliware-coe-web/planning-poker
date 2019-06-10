import {CurrentStoryAPI} from './CurrentStory.api';
import * as FetchApi from '../../Fetch.api';

describe('CurrenMeetingAPI', () => {

    it('byMeetingId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        CurrentStoryAPI.byMeetingId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
        expect(FetchApi.getData).toHaveBeenCalledWith(`${FetchApi.API_URL}/meetings/123/currentStory`);
    });

    it('estimateList() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        CurrentStoryAPI.estimateList('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
        expect(FetchApi.getData).toHaveBeenCalledWith(`${FetchApi.API_URL}/stories/123/estimates`);
    });
});