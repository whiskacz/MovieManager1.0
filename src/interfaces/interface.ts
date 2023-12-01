export const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';

export interface SetSelectedButtonAction {
  type: typeof SET_SELECTED_BUTTON;
  payload: string;
}

export type ActionTypes = SetSelectedButtonAction;

export interface MovieData {
    id: number;
    title: string;
    popularity: number;
    vote_average: number;
    poster_path: string;
    vote_count: number;
    homepage: string;
    overview: string;
    budget: number;
    status: string;
    release_date: string;
    
}

export interface StateMovieSection {
    selectedMovieSection: string | null; // Możesz użyć null lub undefined
}