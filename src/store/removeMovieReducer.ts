type RemoveMovieAction =
  | { type: 'SHOW_REMOVE_MOVIE_POPUP' }
  | { type: 'HIDE_REMOVE_MOVIE_POPUP' };

interface RemoveMovieState {
  showRemoveMoviePopUp: boolean;
}

// Stan początkowy
const initialState: RemoveMovieState = {
  showRemoveMoviePopUp: false,
};

// Reducer
const removeMoviePopUpReducer = (
  state: RemoveMovieState = initialState,
  action: RemoveMovieAction
): RemoveMovieState => {
  switch (action.type) {
    case 'SHOW_REMOVE_MOVIE_POPUP':
      return {
        ...state,
        showRemoveMoviePopUp: true,
      };
    case 'HIDE_REMOVE_MOVIE_POPUP':
      return {
        ...state,
        showRemoveMoviePopUp: false,
      };
    default:
      return state;
  }
};

export default removeMoviePopUpReducer;