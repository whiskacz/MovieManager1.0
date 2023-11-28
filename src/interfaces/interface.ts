export const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';

export interface SetSelectedButtonAction {
  type: typeof SET_SELECTED_BUTTON;
  payload: string;
}

export type ActionTypes = SetSelectedButtonAction;

export interface MovieData {
    id: number;
    original_title: string;
    popularity: number;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
  
}

export interface StateMovieSection {
    selectedMovieSection: string | null; // Możesz użyć null lub undefined
}