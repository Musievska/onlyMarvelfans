import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/getUserDataConstants';

const initialState = {
    isLogged: false,
    currentUser: {}
};

 export const userDataReduce = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                currentUser: action.payload,
                isLogged: true
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                currentUser: action.payload,
                isLogged: false
            }
        }
        case LOGOUT: {
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

