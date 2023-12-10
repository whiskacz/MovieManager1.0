import { createStore, combineReducers } from 'redux';
import moviesSortReducer from './moviesSortReducer';
import moviesSearchReducer from './moviesSearchReducer';
import loggedUserReducer from './loggedUserReducer';

const rootReducer = combineReducers({
    moviesSort: moviesSortReducer,
    moviesSearch: moviesSearchReducer,
    loggedUser:loggedUserReducer
})


const store = createStore(rootReducer);

export default store;