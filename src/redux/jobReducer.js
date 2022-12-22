const initialState = {
    jobsList: [],
    jobApplicationStatus: false

}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOBS':
            return { ...state, jobsList: action.payload }

        case 'JOB_STATUS':
            return { ...state, jobApplicationStatus: action.payload }

        default:
            return state;
    }
}

export default jobReducer;