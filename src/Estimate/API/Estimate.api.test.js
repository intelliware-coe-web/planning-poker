import {EstimateAPI} from './Estimate.api';
import * as FetchApi from '../../Fetch.api';

describe('UserAPI', () => {

    it('update() should call puttData() from FetchApi', () => {
        FetchApi.putData = jest.fn();
        EstimateAPI.update({});
        expect(FetchApi.putData).toHaveBeenCalledTimes(1);
    });
});