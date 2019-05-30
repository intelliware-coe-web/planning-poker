const ESTIMATE_STORY = 'ESTIMATE_STORY';

const initialState = {
    storyId: 'Story - ABC',
    storyDescription: 'Describes the story',
    estimate: 0,
    estimations: [1,2,3,5,8,13]
};

export function estimateStory(estimate, storyId){
    return {
        type: ESTIMATE_STORY,
        payload: { estimate, storyId }
    }
}

export default function storyReducer(state = initialState, action) {
    switch (action.type) {
        case ESTIMATE_STORY:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}