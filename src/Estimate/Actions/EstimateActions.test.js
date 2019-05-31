import {ESTIMATE_STORY, estimateStory} from "./EstimateActions";

describe('Estimate Actions', () => {

    it('should return type ESTIMATE STORY', () => {
        expect(estimateStory(8, 'abcd')).toEqual(
            {
                type: ESTIMATE_STORY,
                payload:
                    {
                        estimate: 8,
                        storyId: 'abcd'
                    }
            });
    });
});