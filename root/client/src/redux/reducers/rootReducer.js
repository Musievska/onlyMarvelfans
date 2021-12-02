import { combineReducers } from 'redux';
import userDataReduce  from './getUserDataReducer';
import getMarvelDataReducer from './getMarvelDataReducer';

const rootReducer = combineReducers({
    userDataReduce: userDataReduce,
    marvelData: getMarvelDataReducer
});

export default rootReducer;
