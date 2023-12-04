import {  SET_SELECTED_BUTTON, MoviesSortState, Action } from '../interfaces/interface';


const initialState: MoviesSortState = {
  selectedButton: "",
};

const moviesSortReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SELECTED_BUTTON:
      console.log('SET_SELECTED_BUTTON dispatched!', action.payload); // Dodaj ten log
      return {
        ...state,
        selectedButton: action.payload,
      };
    default:
      return state;
  }
};

export default moviesSortReducer;