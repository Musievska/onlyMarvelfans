import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/getUserDataConstants';
import { FAVORITE_CHARACTERS, FAVORITE_COMICS, FAVORITE_EVENTS, FAVORITE_SERIES, FAVORITE_STORIES } from '../constants/getMarvelDataConstants';
import axios from 'axios';
import swal from 'sweetalert';

const API = process.env.REACT_APP_API;

export const signUpUserAction = (data) => {
    return (dispatch) => {
        axios.post(`${API}/signup`, data).then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    button: false
                });
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.data.user_detail
                });
            }
        });
    }
}

export const logInUserAction = (data) => {
    return (dispatch) => {
        axios.post(`${API}/logIn`, data).then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    buttons: false,
                });
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.data.user_detail
                });

                dispatch({
                    type: FAVORITE_CHARACTERS,
                    payload: response.data.data.favoriteCharacters
                });

                dispatch({
                    type: FAVORITE_COMICS,
                    payload: response.data.data.favoriteComics
                });

                dispatch({
                    type: FAVORITE_EVENTS,
                    payload: response.data.data.favoriteEvents
                });

                dispatch({
                    type: FAVORITE_SERIES,
                    payload: response.data.data.favoriteSeries
                });

                dispatch({
                    type: FAVORITE_STORIES,
                    payload: response.data.data.favoriteStories
                });
            }
        }).catch(function (err) {
            console.error(err);
        })
    }
}

export const authUserAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
    }
}

export const authErrorAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_FAILURE,
            //payload: null
        });
    }
}


export const logOutAction = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: LOGOUT
        });
    }
}