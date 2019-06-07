import {ESTIMATE_SUCCESS} from "../Actions/EstimateActions";
import estimateStoryReducer from "./EstimateStoryReducer";

describe('Estimate Story Reducer', () => {

    it('should update estimate on success', () => {
        const initialState = {
            estimate: 0
        };
        const action = {type: ESTIMATE_SUCCESS, payload: {estimate: 3}};
        const expectedNextState = {
            estimate: 3
        };
        const actualNextState = estimateStoryReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });
});