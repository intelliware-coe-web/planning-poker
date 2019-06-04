import {ESTIMATE_SUCCESS} from "../Actions/EstimateActions";

// FIXME: put initial state of storyId to null --- for testing flow
const initialState = {
    storyId: '5cf17bee1c5b5436764c5dbe',
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