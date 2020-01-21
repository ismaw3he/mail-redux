import {FETCH_INBOX_FAILURE, FETCH_INBOX_REQUEST, FETCH_INBOX_SUCCESS} from "./inboxTypes";
import axios from 'axios'

export const fetchInboxRequest = () => {
    return {
        type: FETCH_INBOX_REQUEST
    }
};

export const fetchInboxSuccess = inbox => {
    return {
        type: FETCH_INBOX_SUCCESS,
        payload: inbox
    }
};

export const fetchInboxFailure = error => {
    return {
        type: FETCH_INBOX_FAILURE,
        payload: error
    }
};

export const fetchInbox = () => {
    return (dispatch) => {
        dispatch(fetchInboxRequest)
        axios.get('inbox.json')
            .then(response => {
                const inbox = response.data;
                dispatch(fetchInboxSuccess(inbox))
            })
            .catch(error => {
                const errorMsg= error.message;
                dispatch(fetchInboxFailure(errorMsg))
            })
    }
};