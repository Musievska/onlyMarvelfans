import axios from 'axios';
import { getMarvelDataConstants } from '../constants/getMarvelDataConstants';
import { marvelKey } from '../../api/marvelApi';
const baseUrlCharacters = process.env.BASE_URL_CHARACTERS;
const baseUrlComics = process.env.BASE_URL_COMICS;
const baseUrlEvents = process.env.BASE_URL_EVENTS;
// const baseUrlSeries = process.env.BASE_URL_SERIES;
// const baseUrlStories = process.env.BASE_URL_STORIES;
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
            type: getMarvelDataConstants.SET_ERROR
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
                });
                dispatch({
                    type: getMarvelDataConstants.UNLOADING
                });
            })
    }
}

//add character to user's favorites list
export const addCharactertoUserFavoritesAction = (userId, data) => {
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
            .post(`${api}/${userId}/characters/favorite/add`, data, config)
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

//get single comic by comic ID and name
export const getSingleComicAction = (comicId) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlComics}${comicId}?${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.GET_SINGLE_COMIC,
                    payload: response.data.data.results[0]
                })
                    .catch((error) => {
                        console.error(error.response);
                        dispatch({
                            type: getMarvelDataConstants.PAGE_NOT_FOUND
                        });
                        dispatch({
                            type: getMarvelDataConstants.UNLOADING
                        })
                    });
            });
    }
}

//add comic to user's favorites list
export const addComicToUserFavoritesAction = (userId, data) => {
    return (dispatch) => {
        
        const token = localStorage.getItem('token');
        const jwtToken = 'Bearer' + token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: jwtToken
            }
        }

        axios
            .post(`${api}/${userId}/comics/favorite/add`, data, config)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.FAVORITE_COMICS,
                    payload: response.data.data.favoriteComics
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

//remove comic from user's favorites list
export const removeComicFromFavoritesAction = (userId, comicId) => {
    return (dispatch) => {

        const token = localStorage.getItem('token');
        const jwtToken = 'Bearer' + token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: jwtToken
            }
        }
        const data = {
            comicId: comicId
        }

        axios
            .post(`${api}/comics/favorite/delete`, data, config)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.FAVORITE_COMICS,
                    payload: response.data.data.favoriteComics
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

//get all events order by realse date
export const getAllEventsActions = () => {
    return(dispatch) => {
        axios
            .get(`${baseUrlEvents}?orderBy=-startDate${marvelKey}`)
            .then((response) => {
                dispatch({
                type: getMarvelDataConstants.GET_ALL_EVENTS,
                    payload: response.data.data.results
                });
            })
            .catch((error) => {
            console.error(error);
        })

    }
}

//search for events by name starts with ,,,
export const getSearchForEventActions = (query) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlEvents}?nameStartsWith=${query}&orderBy=-startDate${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.SEARCH_FOR_SINGLE_EVENT,
                    payload: response.data.data.results
            })
        })
        
    }
}

export const getEventDetailsAction = (eventId) => {
    return (dispatch) => {
        axios
            .get(`${baseUrlEvents}/${eventId}?${marvelKey}`)
            .then((response) => {
                dispatch({
                    type: getMarvelDataConstants.EVENT_DETAILS,
                    payload: response.data.data.results[0]
                });
            })
            .catch((error) => {
                console.error(error.response);
                dispatch({
                    type: getMarvelDataConstants.PAGE_NOT_FOUND
                });
                dispatch({
                    type: getMarvelDataConstants.UNLOADING
                });
            });
    }
}
