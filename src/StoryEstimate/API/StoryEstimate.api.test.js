import {StoryEstimateAPI} from './StoryEstimate.api';
import * as FetchApi from '../../Fetch.api';

describe('StoryEstimateAPI', () => {

    it('update() should call puttData() from FetchApi', () => {
        FetchApi.putData = jest.fn();
        StoryEstimateAPI.update({});
        expect(FetchApi.putData).toHaveBeenCalledTimes(1);
    });
});