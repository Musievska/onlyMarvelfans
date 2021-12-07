import { getMarvelDataConstants } from "../constants/getMarvelDataConstants";

const initialState = {
    characters: [],
    comics: [],
    events: [],
    characterInfo: {},
    comicInfo: {},
    eventInfo: {},
    favoriteCharacters: [],
    favoriteComics: [],
    pageNotFound: false,
    isLoading: false,
}

export default function marvelDataReducer(state = initialState, action) {
    switch (action.type) {
        case getMarvelDataConstants.LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case getMarvelDataConstants.UNLOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case getMarvelDataConstants.PAGE_NOT_FOUND: {
            return {
                ...state,
                pageNotFound: true

            }
        }
        case getMarvelDataConstants.SET_ERROR: {
            return {
                ...state,
                pageNotFound: false
            }
        }
        case getMarvelDataConstants.GET_ALL_CHARACTERS: {
            return {
                ...state,
                characters: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.GET_ALL_COMICS: {
            return {
                ...state,
                comics: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.GET_ALL_EVENTS: {
            return {
                ...state,
                events: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.SEARCH_CHARACTER: {
            return {
                ...state,
                characters: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.SEARCH_COMIC: {
            return {
                ...state,
                comics: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.SEARCH_FOR_SINGLE_EVENT: {
            return {
                ...state,
                events: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.FAVORITE_CHARACTERS: {
            return {
                ...state,
                favorites: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.FAVORITE_COMICS: {
            return {
                ...state,
                favorites: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.GET_CHARACTER_DETAIL: {
            return {
                ...state,
                characterInfo: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.GET_SINGLE_COMIC: {
            return {
                ...state,
                comicInfo: action.payload,
                isLoading: false
            }
        }
        case getMarvelDataConstants.EVENT_DETAILS: {
            return {
                ...state,
                eventInfo: action.payload,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}
