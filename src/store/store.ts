import { createStore, combineReducers } from 'redux';
import moviesSortReducer from './moviesSortReducer';
import moviesSearchReducer from './moviesSearchReducer';

const rootReducer = combineReducers({
    moviesSort: moviesSortReducer,
    moviesSearch: moviesSearchReducer
})


const store = createStore(rootReducer);

export default store;