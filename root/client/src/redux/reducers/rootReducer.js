import { combineReducers } from 'redux';
import { getUserDataReduser } from './getUserDataReduser';
import { getMarvelDataReduser } from './getMarvelDataReduser';


export const rootReducer = combineReducers({
    auth: getUserDataReduser,
    marvelData: getMarvelDataReduser
});

