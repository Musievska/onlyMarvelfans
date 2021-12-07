import { combineReducers } from 'redux';
import userDataReducer  from './getUserDataReducer';
import marvelDataReducer from './getMarvelDataReducer';

const rootReducer = combineReducers({
    userDataReduce: userDataReducer,
    marvelData: marvelDataReducer
});

export default rootReducer;
