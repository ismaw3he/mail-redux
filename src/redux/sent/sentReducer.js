import {FETCH_SENT_FAILURE, FETCH_SENT_REQUEST, FETCH_SENT_SUCCESS} from "./sentTypes";

const initialState={
    loading: false,
    sent: [],
    error: ""
};

const reducer= (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_SENT_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_SENT_SUCCESS:
            return {
                loading: false,
                sent: action.payload,
                error: ''
            };
        case FETCH_SENT_FAILURE:
            return {
                loading: false,
                sent: [],
                error: action.payload
            };
        default: return state
    }


};

export default reducer