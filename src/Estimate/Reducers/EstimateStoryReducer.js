import {ESTIMATE_STORY} from "../Actions/EstimateActions";

const initialState = {
    storyId: 'Story - ABC',
    storyDescription: 'Describes the story',
    estimate: 0
};

export default function estimateStoryReducer(state = initialState, action) {
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