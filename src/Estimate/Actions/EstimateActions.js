export const ESTIMATE_STORY = 'ESTIMATE_STORY';

export function estimateStory(estimate, storyId){
    return {
        type: ESTIMATE_STORY,
        payload: { estimate, storyId }
    }
}
