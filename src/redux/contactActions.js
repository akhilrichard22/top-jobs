import { CONTACT_STATUS } from './constants'
import axios from 'axios';

export const postContact = (payload) => {
    if (payload) {
        return async function (dispatch, getState) {
            await axios.post("http://localhost:3001/contacts", payload)
                .then(data => {
                    return dispatch(postContactStatus(true));
                })
                .catch(error => {
                    return dispatch(postContactStatus(false));
                })
        };
    }
}

export const postContactStatus = (payload) => {
    return {
        type: CONTACT_STATUS,
        payload
    }
}