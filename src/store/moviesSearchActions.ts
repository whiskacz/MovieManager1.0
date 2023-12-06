import { MovieData } from "../interfaces/interface";

export const updateMoviesSearchList = (movies: MovieData[]) => {
    return {
        type: 'UPDATE_MOVIES_SEARCH_LIST',
        payload: movies,
    }
};