import { MovieData } from "../interfaces/interface";

export const updateMoviesSearchList = (moviesSearchList: MovieData[]) => ({
    type: 'UPDATE_MOVIES_SEARCH_LIST',
    payload: moviesSearchList,
  });