import {UserAPI} from './User.api';
import * as FetchApi from '../../Fetch.api';

describe('UserAPI', () => {

    it('all() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        UserAPI.all();
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('byId() should call getData() from FetchApi', () => {
        FetchApi.getData = jest.fn();
        UserAPI.byId('123');
        expect(FetchApi.getData).toHaveBeenCalledTimes(1);
    });

    it('create() should call postData() from FetchApi', () => {
        FetchApi.postData = jest.fn();
        UserAPI.create({});
        expect(FetchApi.postData).toHaveBeenCalledTimes(1);
    });
});