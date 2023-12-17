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
    moviesSort: {
      selectedButton: string;
    }
    moviesSearch: {
      moviesSearchList: MovieData[]
    }
    loggedUser: {
      loggedUser:string
    }
}
export interface MoviesSortState {
  selectedButton: string;
}
export interface Action {
  type: string;
  payload: string;
}
export interface LoggedUser {
  username: string;
}

export interface LoggedUserAction {
  type: string;
  payload: LoggedUser;
}

export interface LoginPageBackgroundProps {
  left: string;
  animationDelay: string; 
  animationDuration: string;
}

export interface SingleMovieProps {
  data: MovieData;
  showSuccessMessage: boolean;
  showRemoveMessage: boolean;
  handleAddMovie: (user: string, movieData: MovieData) => void;
  handleRemoveMovie: (user: string, movieData: MovieData) => void;
  setShowSuccessMessage: (value: boolean) => void;
  setShowRemoveMessage: (value: boolean) => void;
}