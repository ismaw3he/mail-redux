import {FETCH_DRAFTS_FAILURE, FETCH_DRAFTS_REQUEST, FETCH_DRAFTS_SUCCESS} from "./draftsTypes";

const initialState={
    loading: false,
    drafts: [],
    error: ""
};

const reducer= (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_DRAFTS_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_DRAFTS_SUCCESS:
            return {
                loading: false,
                drafts: action.payload,
                error: ''
            };
        case FETCH_DRAFTS_FAILURE:
            return {
                loading: false,
                drafts: [],
                error: action.payload
            };
        default: return state
    }


};

export default reducer