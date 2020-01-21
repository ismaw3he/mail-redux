import {FETCH_SENT_FAILURE, FETCH_SENT_REQUEST, FETCH_SENT_SUCCESS} from "./sentTypes";
import axios from 'axios'

export const fetchSentRequest = () => {
    return {
        type: FETCH_SENT_REQUEST
    }
};

export const fetchSentSuccess = sent => {
    return {
        type: FETCH_SENT_SUCCESS,
        payload: sent
    }
};

export const fetchSentFailure = error => {
    return {
        type: FETCH_SENT_FAILURE,
        payload: error
    }
};

export const fetchSent = () => {
    return (dispatch) => {
        dispatch(fetchSentRequest);
        axios.get('sent.json')
            .then(response => {
                const sent = response.data;
                dispatch(fetchSentSuccess(sent))
            })
            .catch(error => {
                const errorMsg= error.message;
                dispatch(fetchSentFailure(errorMsg))
            })
    }
};