import {ESTIMATE_SUCCESS} from "../Actions/EstimateActions";

const initialState = {
    storyId: 'Story not selected yet',
    storyDescription: 'Story not selected yet',
    estimate: 0
};

export default function estimateStoryReducer(state = initialState, action) {
    switch (action.type) {
        case ESTIMATE_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}