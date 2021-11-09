import axios from 'axios';
import swal from 'sweetalert2';
const API = process.env.REACT_APP_API;

const registerUser = (data) => {
    return (dispatch) => {
        axios.post(`${API}/signup`, data).then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    buttons: false
                });
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response.data.user_detail
                });
            }
        })
    }
}

const loginUser = (data) => {
    return (dispatch) => {
        console.log(API);

        axios.post(`${API}/login`, data).then((response) => {
            if (response.data.status === 404) {
                swal({
                    title: response.data.message,
                    icon: 'error',
                    buttons: false
                })
            } else {
                localStorage.setItem('token', response.data.token);

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response.data.user_detail
                });

                dispatch({
                    type: 'FAVORITE_COMICS',
                    payload: response.data.favoriteComics
                });

                dispatch({
                    type: 'FAVORITE_CHARACTERS',
                    payload: response.data.favoriteCharacters
                });

                dispatch({
                    type: 'FAVORITE_SERIES',
                    payload: response.data.favoriteSeries
                });

                dispatch({
                    type: 'FAVORITES_STORIES',
                    payload: response.data.favoriteStories
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}

const authUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user
        });
    }
}

const logOutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT'
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
    authUser,
    logOutUser,
}