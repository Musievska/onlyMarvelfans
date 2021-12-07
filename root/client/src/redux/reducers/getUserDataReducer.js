import { getUserDataConstants } from '../constants/getUserDataConstants';

const initialState = {
    isLogged: false,
    currentUser: {}
};

 export default function userDataReducer (state = initialState, action) {
    switch (action.type) {
        case getUserDataConstants.LOGIN_SUCCESS: {
            return {
                ...state,
                currentUser: action.payload,
                isLogged: true
            }
        }
        case getUserDataConstants.LOGIN_FAILURE: {
            return {
                ...state,
                currentUser: action.payload,
                isLogged: false
            }
        }
        case getUserDataConstants.LOGOUT: {
            return {
                ...state,
                currentUser: {},
                isLogged: false
            }
        }
        default: {
            return state
            }
    }
};

