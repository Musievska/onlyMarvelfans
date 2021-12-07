import getUserDataConstants from '../constants/getUserDataConstants';
import getMarvelDataConstants from '../constants/getMarvelDataConstants';
import axios from 'axios';
import swal from 'sweetalert';

const API = process.env.REACT_APP_API;

export const signUpUserAction = (data) => {
    return (dispatch) => {
        axios
            .post(`${API}/signup`, data)
            .then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    button: false
                });
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: getUserDataConstants.LOGIN_SUCCESS,
                    payload: response.data.data.user_detail
                });
            }
        });
    }
}

export const logInUserAction = (data) => {
    return (dispatch) => {
        axios
            .post(`${API}/logIn`, data)
            .then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    buttons: false,
                });
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: getUserDataConstants.LOGIN_SUCCESS,
                    payload: response.data.data.user_detail
                });

                dispatch({
                    type: getMarvelDataConstants.FAVORITE_CHARACTERS,
                    payload: response.data.data.favoriteCharacters
                });

                dispatch({
                    type: getMarvelDataConstants.FAVORITE_COMICS,
                    payload: response.data.data.favoriteComics
                });
            }
            })
            .catch(function (err) {
            console.error(err);
        })
    }
}

export const authUserAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: getUserDataConstants.LOGIN_SUCCESS,
            payload: data
        });
    }
}

export const authErrorAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: getUserDataConstants.LOGIN_FAILURE,
            //payload: null
        });
    }
}


export const logOutAction = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: getUserDataConstants.LOGOUT
        });
    }
}