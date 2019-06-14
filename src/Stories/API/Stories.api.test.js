import { StoriesAPI } from './Stories.api';
import * as FetchApi from '../../Fetch.api';

describe('StoriesAPI', () => {

    it('all() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        StoriesAPI.all('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('create() should call postData() from FetchApi', () => {
        FetchApi.postData = jest.fn();
        StoriesAPI.post('1234', {});
        expect(FetchApi.postData).toHaveBeenCalledTimes(1);
    });

    it('delete() should call deleteData() from FetchApi', () => {
        FetchApi.deleteData = jest.fn();
        StoriesAPI.delete('123');
        expect(FetchApi.deleteData).toHaveBeenCalledTimes(1);
    });

    it('updateStoryEstimate() should call putData() from FetchApi', () => {
        FetchApi.putData = jest.fn();
        StoriesAPI.updateStoryEstimate('1234', {});
        expect(FetchApi.putData).toHaveBeenCalledTimes(1);
    });
});