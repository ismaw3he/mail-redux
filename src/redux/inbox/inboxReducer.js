import {FETCH_INBOX_FAILURE, FETCH_INBOX_REQUEST, FETCH_INBOX_SUCCESS} from "./inboxTypes";

const initialState={
    loading: false,
    inbox: [],
    error: ""
};

const reducer= (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_INBOX_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_INBOX_SUCCESS:
            console.log("action");
            console.log(action.payload);
            return {
                loading: false,
                inbox: action.payload,
                error: ''
            };
        case FETCH_INBOX_FAILURE:
            return {
                loading: false,
                inbox: [],
                error: action.payload
            }
        default: return state
    }


};

export default reducer