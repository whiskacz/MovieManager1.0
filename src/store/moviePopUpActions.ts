export const SHOW_ADD_MOVIE_POPUP = 'SHOW_ADD_MOVIE_POPUP';
export const HIDE_ADD_MOVIE_POPUP = 'HIDE_ADD_MOVIE_POPUP';
export const SHOW_REMOVE_MOVIE_POPUP = 'SHOW_REMOVE_MOVIE_POPUP';
export const HIDE_REMOVE_MOVIE_POPUP = 'HIDE_REMOVE_MOVIE_POPUP';

export const showAddMoviePopUp = () => ({
  type: SHOW_ADD_MOVIE_POPUP,
});

export const hideAddMoviePopUp = () => ({
  type: HIDE_ADD_MOVIE_POPUP,
});

export const showRemoveMoviePopUp = () => ({
  type: SHOW_REMOVE_MOVIE_POPUP,
});

export const hideRemoveMoviePopUp = () => ({
  type: HIDE_REMOVE_MOVIE_POPUP,
});