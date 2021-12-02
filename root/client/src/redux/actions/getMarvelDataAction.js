import axios from 'axios';
import { getMarvelDataConstants } from '../constants/getMarvelDataConstants';
import { marvelKey } from '../../api/marvelApi';
const baseUrlCharacters = process.env.BASE_URL_CHARACTERS;
const baseUrlComics = process.env.BASE_URL_COMICS;
const baseUrlEvents = process.env.BASE_URL_EVENTS;
const baseUrlSeries = process.env.BASE_URL_SERIES;
const baseUrlStories = process.env.BASE_URL_STORIES;
const api = process.env.REACT_APP_API;

export const isLoadingAction = () => {
    return (dispatch) => {
        dispatch({
            type: getMarvelDataConstants.LOADING
        });
    }
}

export const setErrorAction = () => {
    return (dispatch) => {
        dispatch({
            type: getMarvelDataConstants.SET_ERROR_ACTION
        });
    }
}

//get all characters from the api in name order
export const getAllCharactersAction = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrlCharacters}?limit=100&${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.GET_ALL_CHARACTERS,
                    payload: response.data.data.results
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

//seraching for characters by name start with ...
export const getSearchForCharactersAction = (query) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlCharacters}?nameStartsWith=${query}&orderBy=name${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.SEARCH_CHARACTER,
                    payload: response.data.data.results
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

//get detail fot single character by ID number 
export const getDetailForCharactersAction = (characterId) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlCharacters}/${characterId}?${marvelKey}`)
            .then((response) => {
                console.log(`${baseUrlCharacters}/${characterId}?${marvelKey}`)
                dispatch({
                    type: getMarvelDataConstants.GET_CHARACTER_DETAIL,
                    payload: response.data.data.results[0]
                });
            })
            .catch((error) => {
                console.err(error.response);
                dispatch({
                    type: getMarvelDataConstants.PAGE_NOT_FOUND
                })
            })
    }
}

//getting user's favorite characters 
export const gerFavoriteUserCharactersAction = (userId) => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const jwttoken = 'Bearer' + token;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: jwttoken
            }
        }
        axios
            .get(`${api}/${userId}/characters/allfavorites`, config)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.FAVORITE_CHARACTERS,
                    payload: response.data.data.favoriteCharacters
                });
            })
            .catch((error) => {
                console.err(error)
            });
    }
}

//remove character from user favorites
export const deleteFromUserFavoriteCharactersAction = (userId, characterId) => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const jwttoken = 'Bearer' + token;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: jwttoken
            }
        }

        const data = {
            characterId: characterId
        }

        axios
            .post(`${api}/${userId}/characters/favorite/delete`, data, config)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.FAVORITE_CHARACTERS,
                    payload: response.data.data.favoriteCharacters
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

//get all comics 
export const getAllComicsAction = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrlComics}?orderBy=title${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.GET_ALL_COMICS,
                    payload: response.data.data.results
                });
            })
            .catch((error) => {
            console.error(error);
        })
    }
}

//searching for comics by name which start with querry 
export const getSearchForComicAction = (query) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlComics}?titleStartsWith=${query}${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.SEARCH_COMIC,
                    payload: response.data.data.results
                })
                    .catch((error) => {
                        console.error(error);
                    });
            });
    }
}