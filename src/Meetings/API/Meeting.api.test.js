import {MeetingAPI} from './Meeting.api';
import * as FetchApi from '../../Fetch.api';

describe('MeetingAPI', () => {

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
});