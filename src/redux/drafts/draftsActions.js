import {FETCH_DRAFTS_FAILURE, FETCH_DRAFTS_REQUEST, FETCH_DRAFTS_SUCCESS} from "./draftsTypes";
import axios from 'axios'

export const fetchDraftsRequest = () => {
    return {
        type: FETCH_DRAFTS_REQUEST
    }
};

export const fetchDraftsSuccess = drafts => {
    return {
        type: FETCH_DRAFTS_SUCCESS,
        payload: drafts
    }
};

export const fetchDraftsFailure = error => {
    return {
        type: FETCH_DRAFTS_FAILURE,
        payload: error
    }
};

export const fetchDrafts = () => {
    return (dispatch) => {
        dispatch(fetchDraftsRequest)
        axios.get('drafts.json')
            .then(response => {
                const drafts = response.data;
                dispatch(fetchDraftsSuccess(drafts))
            })
            .catch(error => {
                const errorMsg= error.message;
                dispatch(fetchDraftsFailure(errorMsg))
            })
    }
};