import { GET_JOBS, APPLY_JOB, JOB_STATUS } from './constants'
import axios from 'axios';


export const fetchJobs = () => {
    return async function (dispatch, getState) {
        axios
            .get("http://localhost:3001/jobs")
            .then(response => {
                return dispatch(getJobs(response.data));

            })
            .catch(error => {
                console.log("ERROR", error)

            })
    };
}

export const getJobs = (payload) => {
    return {
        type: GET_JOBS,
        payload
    }
}

export const applyJob = (payload) => {
    if (payload) {
        return async function (dispatch, getState) {
            await axios.post("http://localhost:3001/jobApplications", payload)
                .then(data => {
                    return dispatch(applyJobStatus(true));
                })
                .catch(error => {
                    return dispatch(applyJobStatus(false));
                })
        };
    }
}

export const applyJobStatus = (payload) => {
    return {
        type: JOB_STATUS,
        payload
    }
}