import { ActionTypes, SET_SELECTED_BUTTON, StateMovieSection } from '../interfaces/interface';


const initialState: StateMovieSection = {
  selectedMovieSection: null, // lub initialState: { selectedButton: null }
};

const reducer = (state: StateMovieSection = initialState, action: ActionTypes): StateMovieSection => {
  switch (action.type) {
    case SET_SELECTED_BUTTON:
      return {
        ...state,
        selectedMovieSection: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;