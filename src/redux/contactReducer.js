const initialState = {
    contactApplicationStatus: false

}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CONTACT_STATUS':
            return { ...state, contactApplicationStatus: action.payload }

        default:
            return state;
    }
}

export default contactReducer;