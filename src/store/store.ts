import { createStore, combineReducers } from 'redux';
import moviesSortReducer from './moviesSortReducer';
import moviesSearchReducer from './moviesSearchReducer';
import loggedUserReducer from './loggedUserReducer';
import addMoviePopUpReducer from './addMovieReducer';
import removeMoviePopUpReducer from './removeMovieReducer';

const rootReducer = combineReducers({
    moviesSort: moviesSortReducer,
    moviesSearch: moviesSearchReducer,
    loggedUser:loggedUserReducer,
    addMoviePopUp: addMoviePopUpReducer,
    removeMoviePopUp: removeMoviePopUpReducer,
})


const store = createStore(rootReducer);

export default store;