import {ESTIMATE_STORY_REQUESTED, estimateStory} from "./EstimateActions";

describe('Estimate Actions', () => {

    it('should return type ESTIMATE STORY', () => {
        expect(estimateStory(8, 'abcd')).toEqual(
            {
                type: ESTIMATE_STORY_REQUESTED,
                payload:
                    {
                        estimate: 8,
                        storyId: 'abcd'
                    }
            });
    });
});