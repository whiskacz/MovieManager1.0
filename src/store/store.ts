import { createStore, combineReducers } from 'redux';
import moviesSortReducer from './moviesSortReducer';
import moviesSearchReducer from './moviesSearchReducers';

const rootReducer = combineReducers({
    moviesSort: moviesSortReducer,
    moviesData: moviesSearchReducer
})


const store = createStore(rootReducer);

export default store;