import { ActionTypes, SET_SELECTED_BUTTON, StateMovieSection } from '../interfaces/interface';


const initialState: StateMovieSection = {
  selectedMovieSection: null, // lub initialState: { selectedButton: null }
};

const moviesSortReducer = (state: StateMovieSection = initialState, action: ActionTypes): StateMovieSection => {
  switch (action.type) {
    case SET_SELECTED_BUTTON:
      console.log('SET_SELECTED_BUTTON dispatched!', action.payload); // Dodaj ten log
      return {
        ...state,
        selectedMovieSection: action.payload,
      };
    default:
      return state;
  }
};

export default moviesSortReducer;