export const SET_SELECTED_BUTTON = 'SET_SELECTED_BUTTON';

export interface SetSelectedButtonAction {
  type: typeof SET_SELECTED_BUTTON;
  payload: string;
}

export type ActionTypes = SetSelectedButtonAction;

export interface MovieData {
  // Interfejs dla danych filmowych
}

export interface StateMovieSection {
    selectedMovieSection: string | null; // Możesz użyć null lub undefined
}