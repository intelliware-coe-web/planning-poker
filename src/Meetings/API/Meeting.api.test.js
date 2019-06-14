import {MeetingAPI} from './Meeting.api';
import * as FetchApi from '../../Fetch.api';

describe('EstimateAPI', () => {

    it('all() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        MeetingAPI.all();
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('byId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        MeetingAPI.byId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('create() should call postData() from FetchApi', () => {
        FetchApi.postData = jest.fn();
        MeetingAPI.create({});
        expect(FetchApi.postData).toHaveBeenCalledTimes(1);
    });

    it('delete() should call deleteData() from FetchApi', () => {
        FetchApi.deleteData = jest.fn();
        MeetingAPI.delete('123');
        expect(FetchApi.deleteData).toHaveBeenCalledTimes(1);
    });

    it('updateCurrentStory() should call putData() from FetchApi', () => {
        FetchApi.putData = jest.fn();
        MeetingAPI.updateCurrentStory('123', {storyId: '321'});
        expect(FetchApi.putData).toHaveBeenCalledWith(`${FetchApi.API_URL}/meetings/123/currentStory`, {storyId: '321'});
        expect(FetchApi.putData).toHaveBeenCalledTimes(1);
    });
});